// Main application logic for Dorkle game
class DorkleGame {
  constructor() {
    this.currentCategory = null;
    this.currentWords = [];
    this.currentWordIndex = 0;
    this.usedWords = new Set(); // Track used words to avoid repeats
    this.score = 0;
    this.correctWords = [];
    this.skippedWords = [];
    this.correctWordsWithCategories = [];
    this.skippedWordsWithCategories = [];
    this.gameTimer = null;
    this.gameDuration = 60; // seconds
    this.timeLeft = 0;
    this.isPaused = false;
    this.isGameActive = false;
    this.touchStartY = null;
    this.gameSession = Date.now(); // Unique session for randomization
    this.randomizationMode = "super";
    this.avoidRepeats = true;
    this.mixCategories = false;

    this.countdownBeepsEnabled = true;
    this.countdownStartTime = 10;
    this.urgentCountdownTime = 3;
    this.lastBeepTime = 0;

    this.initializeElements();
    this.bindEvents();
    this.selectRandomCategory();
  }

  initializeElements() {
    // Screens
    // Welcome screen elements
    this.welcomeScreen = document.getElementById("welcome-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.resultsScreen = document.getElementById("results-screen");
    this.pauseScreen = document.getElementById("pause-screen");
    this.settingsScreen = document.getElementById("settings-screen");

    // Welcome screen elements
    this.categoryButtons = document.querySelectorAll(".category-btn");
    this.timerRadios = document.querySelectorAll('input[name="timer"]');
    this.startButton = document.getElementById("start-game");
    this.viewAllCategoriesBtn = document.getElementById("view-all-categories");

    // All categories screen elements
    this.allCategoriesScreen = document.getElementById("all-categories-screen");
    this.allCategoryButtons = document.querySelectorAll(
      "#all-categories-screen .category-btn",
    );
    this.timerRadiosAll = document.querySelectorAll('input[name="timer-all"]');
    this.startButtonAll = document.getElementById("start-game-all");
    this.openSettingsAllBtn = document.getElementById("open-settings-all");

    // Settings screen elements
    this.settingsScreen = document.getElementById("settings-screen");
    this.randomizationModeSelect =
      document.getElementById("randomization-mode");
    this.avoidRepeatsCheckbox = document.getElementById("avoid-repeats");
    this.mixCategoriesCheckbox = document.getElementById("mix-categories");
    this.randomizationDescription = document.getElementById(
      "randomization-description",
    );
    this.wordCountElement = document.getElementById("word-count");
    this.countdownBeepsCheckbox = document.getElementById("countdown-beeps");
    this.closeSettingsBtn = document.getElementById("close-settings");

    // Game screen elements
    this.timeLeftElement = document.getElementById("time-left");
    this.currentScoreElement = document.getElementById("current-score");
    this.currentWordElement = document.getElementById("current-word");
    this.gameCard = document.getElementById("game-card");
    this.correctBtn = document.getElementById("correct-btn");
    this.skipBtn = document.getElementById("skip-btn");
    this.pauseBtn = document.getElementById("pause-btn");
    this.wordIndexElement = document.getElementById("word-index");
    this.totalWordsElement = document.getElementById("total-words");

    // Results screen elements
    this.finalScoreElement = document.getElementById("final-score");
    this.correctCountElement = document.getElementById("correct-count");
    this.skippedCountElement = document.getElementById("skipped-count");
    this.wordsUsedElement = document.getElementById("words-used");
    this.totalPlayedElement = document.getElementById("total-played");
    this.successRateElement = document.getElementById("success-rate");
    this.wordsPerMinuteElement = document.getElementById("words-per-minute");
    this.timePerWordElement = document.getElementById("time-per-word");
    this.correctWordsList = document.getElementById("correct-words");
    this.skippedWordsList = document.getElementById("skipped-words");
    this.correctCountHeader = document.getElementById("correct-count-header");
    this.skippedCountHeader = document.getElementById("skipped-count-header");
    this.playAgainBtn = document.getElementById("play-again");
    this.changeCategoryBtn = document.getElementById("change-category");

    // Pause screen elements
    this.resumeBtn = document.getElementById("resume-btn");
    this.quitBtn = document.getElementById("quit-btn");
  }

  bindEvents() {
    // Category selection (welcome screen)
    this.categoryButtons.forEach((btn) => {
      btn.addEventListener("click", (e) =>
        this.selectCategory(e.target.dataset.category),
      );
    });

    // Category selection (all categories screen)
    this.allCategoryButtons.forEach((btn) => {
      btn.addEventListener("click", (e) =>
        this.selectCategoryFromAll(e.target.dataset.category),
      );
    });

    // Timer selection (welcome screen)
    this.timerRadios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        this.gameDuration = parseInt(e.target.value);
      });
    });

    // Timer selection (all categories screen)
    this.timerRadiosAll.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        this.gameDuration = parseInt(e.target.value);
      });
    });

    // Randomization settings
    this.randomizationModeSelect.addEventListener("change", (e) => {
      this.randomizationMode = e.target.value;
      this.updateRandomizationDescription();
      // Re-shuffle current category if selected
      if (this.currentCategory) {
        this.shuffleWordsForCategory(this.currentCategory);
        this.updateWordCountDisplay();
      }
    });

    this.avoidRepeatsCheckbox.addEventListener("change", (e) => {
      this.avoidRepeats = e.target.checked;
      if (this.currentCategory) {
        this.shuffleWordsForCategory(this.currentCategory);
      }
    });

    this.mixCategoriesCheckbox.addEventListener("change", (e) => {
      this.mixCategories = e.target.checked;
      if (this.currentCategory) {
        this.shuffleWordsForCategory(this.currentCategory);
        this.updateWordCountDisplay();
      }
    });

    this.countdownBeepsCheckbox.addEventListener("change", (e) => {
      this.countdownBeepsEnabled = e.target.checked;
      console.log(
        `Countdown beeps ${this.countdownBeepsEnabled ? "enabled" : "disabled"}`,
      );
    });

    // Game controls (welcome screen)
    this.startButton.addEventListener("click", () => this.startGame());
    this.viewAllCategoriesBtn.addEventListener("click", () =>
      this.showAllCategories(),
    );

    // Game controls (all categories screen)
    this.startButtonAll.addEventListener("click", () => this.startGame());
    this.openSettingsAllBtn.addEventListener("click", () =>
      this.showSettings(),
    );
    this.closeSettingsBtn.addEventListener("click", () => this.hideSettings());
    this.correctBtn.addEventListener("click", () => this.markCorrect());
    this.skipBtn.addEventListener("click", () => this.skipWord());
    this.pauseBtn.addEventListener("click", () => this.pauseGame());

    // Results controls
    this.playAgainBtn.addEventListener("click", () => this.restartGame());
    this.changeCategoryBtn.addEventListener("click", () =>
      this.showAllCategories(),
    );

    // Pause controls
    this.resumeBtn.addEventListener("click", () => this.resumeGame());
    this.quitBtn.addEventListener("click", () => {
      this.isPaused = false;
      this.pauseScreen.classList.remove("active");
      this.endGame();
    });

    // Keyboard controls
    document.addEventListener("keydown", (e) => this.handleKeypress(e));

    // Touch events for mobile
    this.gameCard.addEventListener("touchstart", (e) =>
      this.handleTouchStart(e),
    );
    this.gameCard.addEventListener("touchmove", (e) => this.handleTouchMove(e));

    // Pause overlay click outside to resume
    this.pauseScreen.addEventListener("click", (e) => {
      if (e.target === this.pauseScreen) {
        this.resumeGame();
      }
    });
  }

  selectRandomCategory() {
    try {
      // Get the 6 main categories shown on welcome screen
      const mainCategories = [
        "movies",
        "celebrities",
        "music",
        "sports-stars",
        "tv-shows",
        "iconic-places",
      ];

      if (mainCategories.length === 0) {
        console.error("No categories available");
        return;
      }

      // Randomly select a category from the main 6
      const randomIndex = Math.floor(Math.random() * mainCategories.length);
      const randomCategory = mainCategories[randomIndex];

      // Select the random category
      this.selectCategory(randomCategory);

      console.log(`Randomly selected category: ${randomCategory}`);
    } catch (error) {
      console.error("Error selecting random category:", error);
    }
  }

  selectCategory(category) {
    try {
      this.currentCategory = category;

      // Update UI
      this.categoryButtons.forEach((btn) => btn.classList.remove("selected"));
      const categoryButton = document.querySelector(
        `[data-category="${category}"]`,
      );
      if (categoryButton) {
        categoryButton.classList.add("selected");
      }

      // Enable start button
      this.startButton.disabled = false;

      // Prepare words for this category with enhanced randomization
      this.shuffleWordsForCategory(category);

      if (this.currentWords.length === 0) {
        console.error(`No words found for category: ${category}`);
        this.startButton.disabled = true;
      } else {
        // Update word count display
        this.updateWordCountDisplay();
      }
    } catch (error) {
      console.error("Error selecting category:", error);
      this.startButton.disabled = true;
    }
  }

  selectCategoryFromAll(category) {
    try {
      this.currentCategory = category;

      // Update UI on all categories screen
      this.allCategoryButtons.forEach((btn) =>
        btn.classList.remove("selected"),
      );
      const categoryButton = document.querySelector(
        `#all-categories-screen [data-category="${category}"]`,
      );
      if (categoryButton) {
        categoryButton.classList.add("selected");
      }

      // Enable start button
      this.startButtonAll.disabled = false;

      // Prepare words for this category with enhanced randomization
      this.shuffleWordsForCategory(category);

      if (this.currentWords.length === 0) {
        console.error(`No words found for category: ${category}`);
        this.startButtonAll.disabled = true;
      } else {
        // Update word count display
        this.updateWordCountDisplay();
      }
    } catch (error) {
      console.error("Error selecting category:", error);
      this.startButtonAll.disabled = true;
    }
  }

  startGame() {
    if (!this.currentCategory) return;

    this.resetGameState();
    this.isGameActive = true;
    this.timeLeft = this.gameDuration;
    this.gameStartTime = Date.now();

    this.showScreen(this.gameScreen);
    this.updateUI();
    this.showNextWord();
    this.startTimer();
  }

  resetGameState() {
    this.score = 0;
    this.correctWords = [];
    this.skippedWords = [];
    this.correctWordsWithCategories = [];
    this.skippedWordsWithCategories = [];
    this.currentWordIndex = 0;
    this.usedWords.clear();
    this.isPaused = false;
    this.gameStartTime = Date.now();

    if (this.gameTimer) {
      clearInterval(this.gameTimer);
    }

    // Re-shuffle words for new game
    if (this.currentCategory) {
      this.shuffleWordsForCategory(this.currentCategory);
    }
  }

  startTimer() {
    this.gameTimer = setInterval(() => {
      if (!this.isPaused) {
        this.timeLeft--;
        this.updateTimer();

        if (this.timeLeft <= 0) {
          this.endGame();
        }
      }
    }, 1000);
  }

  updateTimer() {
    this.timeLeftElement.textContent = this.timeLeft;

    // Add urgency styling for countdown
    if (this.timeLeft <= this.countdownStartTime) {
      this.timeLeftElement.style.color = "#dc3545";
      this.timeLeftElement.style.fontSize = "2rem";

      // Play beep sound for countdown (prevent rapid beeping)
      if (this.countdownBeepsEnabled && this.timeLeft !== this.lastBeepTime) {
        this.playCountdownBeep();
        this.lastBeepTime = this.timeLeft;
      }

      // Add progressive visual warning effects
      if (this.timeLeft <= this.urgentCountdownTime) {
        this.timeLeftElement.classList.add("urgent");
        this.gameCard.classList.add("countdown-urgent");
        this.gameCard.style.boxShadow = "0 0 30px rgba(220, 53, 69, 0.8)";
      } else if (this.timeLeft <= 5) {
        this.gameCard.style.boxShadow = "0 0 20px rgba(220, 53, 69, 0.5)";
      }
    } else {
      this.timeLeftElement.style.color = "white";
      this.timeLeftElement.style.fontSize = "1.5rem";
      this.timeLeftElement.style.animation = "";
      this.timeLeftElement.classList.remove("urgent");
      this.gameCard.classList.remove("countdown-urgent");
      this.gameCard.style.borderColor = "";
      this.gameCard.style.borderWidth = "";
      this.gameCard.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.2)";
    }
  }

  showNextWord() {
    try {
      // Check if we need to reshuffle or get new words
      if (
        this.currentWordIndex >= this.currentWords.length ||
        this.usedWords.size >= this.currentWords.length
      ) {
        this.reshuffleWords();
      }

      // Get next unused word
      let word = this.getNextUnusedWord();

      if (word && this.currentWordElement) {
        this.currentWordElement.textContent = word;
        this.usedWords.add(word);
      } else {
        console.error("No word available or element not found");
        this.currentWordElement.textContent = "Oops! Word went missing";
      }

      // Remove any previous styling
      this.gameCard.classList.remove("correct", "skip", "flipping");

      // Add flip animation
      setTimeout(() => {
        this.gameCard.classList.add("flipping");
      }, 50);
    } catch (error) {
      console.error("Error showing next word:", error);
      this.currentWordElement.textContent = "Word machine broke 🤓";
    }
  }

  markCorrect() {
    if (!this.isGameActive || this.isPaused) return;

    const currentWord = this.currentWords[this.currentWordIndex];
    this.correctWords.push(currentWord);
    this.correctWordsWithCategories.push({
      word: currentWord,
      category: this.getWordCategory(currentWord),
    });
    this.score++;

    // Visual feedback
    this.gameCard.classList.add("correct");
    this.playSound("correct");

    setTimeout(() => {
      this.nextWord();
    }, 500);
  }

  skipWord() {
    if (!this.isGameActive || this.isPaused) return;

    const currentWord = this.currentWords[this.currentWordIndex];
    this.skippedWords.push(currentWord);
    this.skippedWordsWithCategories.push({
      word: currentWord,
      category: this.getWordCategory(currentWord),
    });

    // Visual feedback
    this.gameCard.classList.add("skip");
    this.playSound("skip");

    setTimeout(() => {
      this.nextWord();
    }, 500);
  }

  nextWord() {
    this.currentWordIndex++;
    this.updateUI();
    this.showNextWord();
  }

  pauseGame() {
    if (!this.isGameActive) return;

    this.isPaused = true;
    this.resetCountdownVisuals();
    this.pauseScreen.classList.add("active");

    // Focus on resume button for accessibility
    setTimeout(() => {
      this.resumeBtn.focus();
    }, 100);
  }

  resumeGame() {
    this.isPaused = false;
    this.pauseScreen.classList.remove("active");

    // Return focus to game controls
    setTimeout(() => {
      if (this.correctBtn) {
        this.correctBtn.focus();
      }
    }, 100);
  }

  endGame() {
    this.isGameActive = false;
    this.isPaused = false;

    if (this.gameTimer) {
      clearInterval(this.gameTimer);
    }

    // Add the final displayed word to skipped words if there's a current word
    if (this.currentWordIndex < this.currentWords.length) {
      const currentWord = this.currentWords[this.currentWordIndex];
      if (
        currentWord &&
        !this.correctWords.includes(currentWord) &&
        !this.skippedWords.includes(currentWord)
      ) {
        this.skippedWords.push(currentWord);
        this.skippedWordsWithCategories.push({
          word: currentWord,
          category: this.getWordCategory(currentWord),
        });
      }
    }

    // Play game over sound if time ran out
    if (this.timeLeft <= 0) {
      this.playSound("game-over");
    }

    // Reset visual effects
    this.resetCountdownVisuals();

    this.showResults();
    this.showScreen(this.resultsScreen);
  }

  showResults() {
    // Calculate statistics
    const totalWordsPlayed =
      this.correctWords.length + this.skippedWords.length;
    const successRate =
      totalWordsPlayed > 0
        ? Math.round((this.correctWords.length / totalWordsPlayed) * 100)
        : 0;
    const gameTimeMinutes = (this.gameDuration - this.timeLeft) / 60;
    const wordsPerMinute =
      gameTimeMinutes > 0 ? Math.round(totalWordsPlayed / gameTimeMinutes) : 0;
    const avgTimePerWord =
      totalWordsPlayed > 0
        ? Math.round((this.gameDuration - this.timeLeft) / totalWordsPlayed)
        : 0;

    // Update statistics display
    this.finalScoreElement.textContent = this.score;
    this.correctCountElement.textContent = this.correctWords.length;
    this.skippedCountElement.textContent = this.skippedWords.length;
    this.totalPlayedElement.textContent = totalWordsPlayed;
    this.successRateElement.textContent = `${successRate}%`;
    this.wordsPerMinuteElement.textContent = wordsPerMinute;
    this.timePerWordElement.textContent = `${avgTimePerWord}s`;

    // Update headers with counts
    this.correctCountHeader.textContent = this.correctWords.length;
    this.skippedCountHeader.textContent = this.skippedWords.length;

    // Show correct words
    this.correctWordsList.innerHTML = "";
    this.correctWordsWithCategories.forEach((item, index) => {
      const li = document.createElement("li");
      const categoryBadge =
        this.mixCategories && item.category !== this.currentCategory
          ? `<span class="category-badge">${item.category}</span>`
          : "";
      li.innerHTML = `<span class="word-text">${item.word}</span>${categoryBadge}`;
      li.classList.add("correct-word");
      li.title = `Word #${index + 1} - Correct (${item.category})`;
      this.correctWordsList.appendChild(li);
    });

    if (this.correctWords.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No words guessed correctly";
      li.style.fontStyle = "italic";
      li.style.color = "#666";
      li.style.opacity = "0.7";
      li.classList.add("empty-state");
      this.correctWordsList.appendChild(li);
    }

    // Show skipped words
    this.skippedWordsList.innerHTML = "";
    this.skippedWordsWithCategories.forEach((item, index) => {
      const li = document.createElement("li");
      const categoryBadge =
        this.mixCategories && item.category !== this.currentCategory
          ? `<span class="category-badge">${item.category}</span>`
          : "";
      li.innerHTML = `<span class="word-text">${item.word}</span>${categoryBadge}`;
      li.classList.add("skipped-word");
      li.title = `Word #${index + 1} - Skipped (${item.category})`;
      this.skippedWordsList.appendChild(li);
    });

    if (this.skippedWords.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No words skipped - Great job!";
      li.style.fontStyle = "italic";
      li.style.color = "#28a745";
      li.style.opacity = "0.7";
      li.classList.add("empty-state");
      this.skippedWordsList.appendChild(li);
    }

    // Add category distribution if mix mode is enabled
    if (this.mixCategories) {
      this.showCategoryDistribution();
    }

    // Add detailed game summary to console
    console.log("🎮 Dorkle Game Summary:");
    console.log(`  📊 Score: ${this.score} points`);
    console.log(`  ✅ Correct: ${this.correctWords.length} words`);
    console.log(`  ⏭️ Skipped: ${this.skippedWords.length} words`);
    console.log(`  🎯 Total Played: ${totalWordsPlayed} words`);
    console.log(`  📈 Success Rate: ${successRate}%`);
    console.log(`  ⚡ Words/Minute: ${wordsPerMinute}`);
    console.log(`  ⏱️ Avg Time/Word: ${avgTimePerWord}s`);
    console.log(`  🕐 Game Duration: ${this.gameDuration - this.timeLeft}s`);
  }

  // Get the category of a word
  getWordCategory(word) {
    for (const [category, words] of Object.entries(gameData)) {
      if (words.includes(word)) {
        return GameDataUtils.getCategoryDisplayName(category);
      }
    }
    return GameDataUtils.getCategoryDisplayName(this.currentCategory); // fallback to current category
  }

  // Show category distribution summary for mixed mode
  showCategoryDistribution() {
    const allWords = [
      ...this.correctWordsWithCategories,
      ...this.skippedWordsWithCategories,
    ];
    const categoryStats = {};

    // Count words by category
    allWords.forEach((item) => {
      if (!categoryStats[item.category]) {
        categoryStats[item.category] = { correct: 0, skipped: 0, total: 0 };
      }
      categoryStats[item.category].total++;
    });

    this.correctWordsWithCategories.forEach((item) => {
      categoryStats[item.category].correct++;
    });

    this.skippedWordsWithCategories.forEach((item) => {
      categoryStats[item.category].skipped++;
    });

    // Log category breakdown
    console.log("📊 Category Distribution:");
    Object.entries(categoryStats).forEach(([category, stats]) => {
      const rate =
        stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
      console.log(
        `  📁 ${category}: ${stats.correct}✅ ${stats.skipped}⏭️ (${rate}% success)`,
      );
    });
  }

  restartGame() {
    // Generate new session ID for fresh randomization
    this.gameSession = Date.now();
    GameDataUtils.resetSeed();
    this.startGame();
  }

  goToWelcome() {
    this.resetGameState();
    this.resetCountdownVisuals();
    // Reset randomization for category selection
    this.gameSession = Date.now();
    GameDataUtils.resetSeed();
    this.showScreen(this.welcomeScreen);
  }

  updateUI() {
    this.currentScoreElement.textContent = this.score;
    this.timeLeftElement.textContent = this.timeLeft;

    // Update progress indicators
    // Update progress indicators
    if (this.wordIndexElement && this.totalWordsElement) {
      this.wordIndexElement.textContent = this.currentWordIndex + 1;
      this.totalWordsElement.textContent = this.currentWords.length;
    }
  }

  showScreen(screen) {
    // Hide all screens except overlays
    document
      .querySelectorAll(".screen:not(.overlay)")
      .forEach((s) => s.classList.remove("active"));

    // Show target screen
    screen.classList.add("active");

    // Scroll to top of the screen
    setTimeout(() => {
      screen.scrollTop = 0;
    }, 50);
  }

  handleKeypress(e) {
    // Handle pause/resume with escape key
    if (this.isPaused) {
      if (e.key === "Escape") {
        e.preventDefault();
        this.resumeGame();
      }
      return;
    }

    if (!this.isGameActive) return;

    switch (e.key) {
      case " ":
      case "Enter":
        e.preventDefault();
        this.markCorrect();
        break;
      case "Escape":
      case "s":
      case "S":
        e.preventDefault();
        this.skipWord();
        break;
      case "p":
      case "P":
        e.preventDefault();
        this.pauseGame();
        break;
    }
  }

  handleTouchStart(e) {
    this.touchStartY = e.touches[0].clientY;
  }

  handleTouchMove(e) {
    if (!this.isGameActive || this.isPaused || !this.touchStartY) return;

    e.preventDefault(); // Prevent scrolling
  }

  playSound(type) {
    try {
      // Create audio context for sound effects
      if (
        typeof AudioContext !== "undefined" ||
        typeof webkitAudioContext !== "undefined"
      ) {
        const AudioContextClass = AudioContext || webkitAudioContext;
        const audioContext = new AudioContextClass();

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Different frequencies for different sounds
        if (type === "correct") {
          oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
          oscillator.frequency.setValueAtTime(
            1000,
            audioContext.currentTime + 0.1,
          );
        } else if (type === "skip") {
          oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
          oscillator.frequency.setValueAtTime(
            200,
            audioContext.currentTime + 0.1,
          );
        } else if (type === "countdown") {
          // Pleasant countdown beep - ascending tone
          oscillator.frequency.setValueAtTime(660, audioContext.currentTime);
          oscillator.frequency.setValueAtTime(
            880,
            audioContext.currentTime + 0.08,
          );
        } else if (type === "final-countdown") {
          // More urgent final countdown beep - rapid triple beep
          oscillator.frequency.setValueAtTime(1320, audioContext.currentTime);
          oscillator.frequency.setValueAtTime(
            1100,
            audioContext.currentTime + 0.03,
          );
          oscillator.frequency.setValueAtTime(
            1320,
            audioContext.currentTime + 0.06,
          );
          oscillator.frequency.setValueAtTime(
            1100,
            audioContext.currentTime + 0.09,
          );
          oscillator.frequency.setValueAtTime(
            1540,
            audioContext.currentTime + 0.12,
          );
        } else if (type === "game-over") {
          // Game over sound - descending tone
          oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
          oscillator.frequency.setValueAtTime(
            440,
            audioContext.currentTime + 0.2,
          );
          oscillator.frequency.setValueAtTime(
            220,
            audioContext.currentTime + 0.4,
          );
        }

        // Adjust volume and duration based on sound type
        let volume = 0.3;
        let duration = 0.2;

        if (type === "countdown") {
          volume = 0.2;
          duration = 0.12;
        } else if (type === "final-countdown") {
          volume = 0.35;
          duration = 0.15;
        } else if (type === "game-over") {
          volume = 0.4;
          duration = 0.6;
        }

        gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
          0.01,
          audioContext.currentTime + duration,
        );

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
      }
    } catch (error) {
      console.warn("Audio playback failed:", error);
    }
  }

  playCountdownBeep() {
    if (!this.countdownBeepsEnabled) return;

    // Different beep patterns based on remaining time
    if (this.timeLeft <= this.urgentCountdownTime) {
      // Urgent beep for final seconds
      this.playSound("final-countdown");

      // Add visual urgency effects
      this.timeLeftElement.style.animation = "pulse 0.4s infinite";
      this.gameCard.style.borderColor = "#dc3545";
      this.gameCard.style.borderWidth = "3px";
      this.gameCard.style.borderStyle = "solid";
    } else if (this.timeLeft <= this.countdownStartTime) {
      // Regular countdown beep
      this.playSound("countdown");

      // Add visual countdown effect
      this.timeLeftElement.style.animation = "countdown-pulse 0.8s ease-in-out";
      setTimeout(() => {
        if (this.timeLeftElement) {
          this.timeLeftElement.style.animation = "";
        }
      }, 800);
    }

    // Special handling for final second
    if (this.timeLeft === 1) {
      setTimeout(() => {
        this.playSound("game-over");
      }, 500);
    }
  }

  // Reset countdown visual effects
  resetCountdownVisuals() {
    if (this.timeLeftElement) {
      this.timeLeftElement.style.color = "white";
      this.timeLeftElement.style.fontSize = "1.5rem";
      this.timeLeftElement.style.animation = "";
      this.timeLeftElement.classList.remove("urgent");
    }

    if (this.gameCard) {
      this.gameCard.classList.remove("countdown-urgent");
      this.gameCard.style.borderColor = "";
      this.gameCard.style.borderWidth = "";
      this.gameCard.style.borderStyle = "";
      this.gameCard.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.2)";
    }
  }

  // Configure countdown settings
  setCountdownSettings(beepsEnabled = true, startTime = 10, urgentTime = 3) {
    this.countdownBeepsEnabled = beepsEnabled;
    this.countdownStartTime = startTime;
    this.urgentCountdownTime = urgentTime;

    console.log(
      `Countdown settings: Beeps ${beepsEnabled ? "enabled" : "disabled"}, Start at ${startTime}s, Urgent at ${urgentTime}s`,
    );
  }

  // Enhanced word shuffling for better randomization
  shuffleWordsForCategory(category) {
    // Reset used words tracking if avoiding repeats
    if (this.avoidRepeats) {
      this.usedWords.clear();
    }

    let words = [...gameData[category]];

    // Add bonus words from other categories if mix mode is enabled
    if (this.mixCategories) {
      const otherCategories = Object.keys(gameData).filter(
        (cat) => cat !== category,
      );
      const bonusWords = [];

      otherCategories.forEach((cat) => {
        const randomWords = GameDataUtils.getRandomSubset(cat, 3);
        bonusWords.push(...randomWords);
      });

      // Add 20% bonus words
      const bonusCount = Math.floor(words.length * 0.2);
      const selectedBonus = GameDataUtils.shuffleArray(bonusWords).slice(
        0,
        bonusCount,
      );
      words = words.concat(selectedBonus);
    }

    // Apply different randomization based on mode
    switch (this.randomizationMode) {
      case "super":
        this.currentWords = this.applySuperRandomization(words);
        break;
      case "chaos":
        this.currentWords = this.applyChaosRandomization(words);
        break;
      case "balanced":
        this.currentWords = this.applyBalancedRandomization(words);
        break;
      case "standard":
      default:
        this.currentWords = GameDataUtils.shuffleArray(words, "fisher-yates");
        break;
    }

    this.currentWordIndex = 0;
    console.log(
      `Shuffled ${this.currentWords.length} words for category: ${category} (Mode: ${this.randomizationMode})`,
    );
  }

  // Get next unused word with fallback
  getNextUnusedWord() {
    // If not avoiding repeats, just use current word
    if (!this.avoidRepeats) {
      if (this.currentWordIndex >= this.currentWords.length) {
        this.currentWordIndex = 0;
      }
      return this.currentWords[this.currentWordIndex];
    }

    // Try to find an unused word starting from current index
    for (let i = this.currentWordIndex; i < this.currentWords.length; i++) {
      if (!this.usedWords.has(this.currentWords[i])) {
        this.currentWordIndex = i;
        return this.currentWords[i];
      }
    }

    // If all words from current index are used, start from beginning
    for (let i = 0; i < this.currentWordIndex; i++) {
      if (!this.usedWords.has(this.currentWords[i])) {
        this.currentWordIndex = i;
        return this.currentWords[i];
      }
    }

    // If all words are used, reshuffle and start over
    this.reshuffleWords();
    this.currentWordIndex = 0;
    return this.currentWords[0];
  }

  // Reshuffle words when all are used
  reshuffleWords() {
    if (!this.currentCategory) return;

    console.log("Reshuffling words - all words used or end of list reached");

    // Clear used words if avoiding repeats and reshuffle
    if (this.avoidRepeats) {
      this.usedWords.clear();
    }
    this.shuffleWordsForCategory(this.currentCategory);

    // Start from a random position for variety
    const randomStart = Math.floor(
      Math.random() * Math.min(10, this.currentWords.length),
    );
    this.currentWordIndex = randomStart;
  }

  // Super randomization mode
  applySuperRandomization(words) {
    const shuffle1 = GameDataUtils.getSuperShuffledWords(this.currentCategory);
    const shuffle2 = GameDataUtils.shuffleArray([...words], "modern");
    const shuffle3 = GameDataUtils.shuffleArray([...words], "durstenfeld");

    // Interleave different shuffles
    const result = [];
    const maxLength = Math.max(
      shuffle1.length,
      shuffle2.length,
      shuffle3.length,
    );

    for (let i = 0; i < maxLength; i++) {
      if (i < shuffle1.length) result.push(shuffle1[i]);
      if (i < shuffle2.length && Math.random() > 0.5) result.push(shuffle2[i]);
      if (i < shuffle3.length && Math.random() > 0.7) result.push(shuffle3[i]);
    }

    return GameDataUtils.shuffleArray([...new Set(result)], "fisher-yates");
  }

  // Chaos randomization mode
  applyChaosRandomization(words) {
    let result = [...words];

    // Multiple shuffle passes with different algorithms
    for (let pass = 0; pass < 5; pass++) {
      const algorithms = ["fisher-yates", "durstenfeld", "modern"];
      const randomAlgorithm =
        algorithms[Math.floor(Math.random() * algorithms.length)];
      result = GameDataUtils.shuffleArray(result, randomAlgorithm);

      // Random reversals
      if (Math.random() > 0.5) {
        const start = Math.floor((Math.random() * result.length) / 2);
        const end = start + Math.floor(Math.random() * (result.length - start));
        const section = result.slice(start, end).reverse();
        result = [...result.slice(0, start), ...section, ...result.slice(end)];
      }
    }

    return result;
  }

  // Balanced randomization mode
  applyBalancedRandomization(words) {
    // Ensure even distribution by dividing into chunks and shuffling each
    const chunkSize = Math.ceil(words.length / 4);
    const chunks = [];

    for (let i = 0; i < words.length; i += chunkSize) {
      const chunk = words.slice(i, i + chunkSize);
      chunks.push(GameDataUtils.shuffleArray(chunk, "fisher-yates"));
    }

    // Randomly recombine chunks
    const shuffledChunks = GameDataUtils.shuffleArray(chunks, "fisher-yates");
    return shuffledChunks.flat();
  }

  // Update randomization mode description
  updateRandomizationDescription() {
    const descriptions = {
      super: "Maximum randomization with multiple algorithms",
      standard: "Classic Fisher-Yates shuffle",
      chaos: "Multiple passes with reversals and variations",
      balanced: "Ensures even distribution across game session",
    };

    if (this.randomizationDescription) {
      this.randomizationDescription.textContent =
        descriptions[this.randomizationMode] || descriptions["standard"];
    }

    console.log(
      `Randomization mode: ${this.randomizationMode} - ${descriptions[this.randomizationMode]}`,
    );
  }

  // Update word count display
  updateWordCountDisplay() {
    if (this.wordCountElement && this.currentCategory) {
      const baseCount = GameDataUtils.getCategoryWordCount(
        this.currentCategory,
      );
      let totalCount = baseCount;

      if (this.mixCategories) {
        // Add estimated bonus words
        const bonusCount = Math.floor(baseCount * 0.2);
        totalCount += bonusCount;
      }

      this.wordCountElement.textContent = totalCount;
    }
  }

  // Show all categories screen
  showAllCategories() {
    this.showScreen(this.allCategoriesScreen);
  }

  // Show settings screen
  showSettings() {
    this.showScreen(this.settingsScreen);
  }

  // Hide settings screen and return to welcome
  hideSettings() {
    this.showScreen(this.welcomeScreen);
  }
}

// Initialize the game when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  try {
    const game = new DorkleGame();

    // Initialize randomization description
    game.updateRandomizationDescription();

    // Make game globally accessible for debugging
    window.dorkleGame = game;

    // Add some helpful console messages
    console.log("🎮 Dorkle Game loaded successfully!");
  } catch (error) {
    console.error("Failed to initialize game:", error);
    document.body.innerHTML =
      '<div style="text-align: center; padding: 2rem; font-family: Arial, sans-serif;"><h1>Dorkle Loading Error</h1><p>Oops! Please refresh the page and try again.</p></div>';
  }
});

// Prevent default touch behaviors that might interfere with the game
document.addEventListener(
  "touchmove",
  (e) => {
    if (e.target.closest(".game-screen")) {
      e.preventDefault();
    }
  },
  { passive: false },
);

// Handle visibility change (pause game when tab is not visible)
document.addEventListener("visibilitychange", () => {
  if (window.dorkleGame && window.dorkleGame.isGameActive && document.hidden) {
    window.dorkleGame.pauseGame();
  }
});
