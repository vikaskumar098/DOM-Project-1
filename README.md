

# 🏏 IPL Winner Checker

A fun and interactive DOM-based project that randomly displays **IPL teams**, their **captains**, **origins**, and number of **IPL titles** — with dynamic backgrounds and intro video overlay.

---

## 🔗 Live Demo

👉 **[Click Here to View Live](https://vikaskumar098.github.io/DOM-Project-1/)**

## 📦 GitHub Repository

👉 **[Click Here for Source Code](https://github.com/vikaskumar098/DOM-Project-1)**

---

## 🌟 Features

* 🎥 Auto-play intro video
* 🖼️ Dynamic background images
* 🔀 Random IPL team generator
* 📊 Shows wins, captain & origin
* ✨ Clean glass-effect UI
* 🧊 Fully DOM-based logic

---

## 📸 Preview

<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/47622a51-3c03-4258-99b2-5aec1a8cc546" />


---

<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/3c275005-35a6-414e-b999-1b711b04dcea" />


```md
![App Screenshot](./screenshot.png)
```

---

## 🛠️ Tech Stack

| Technology       | Used For          |
| ---------------- | ----------------- |
| HTML5            | Structure         |
| CSS3             | Styling & effects |
| JavaScript (DOM) | Logic             |
| GitHub Pages     | Hosting           |

---

## 📂 Project Structure

```
📦 DOM-Project-1
 ┣ index.html
 ┣ style.css
 ┣ script.js
 ┣ images/
 ┃ ┣ CSK.png
 ┃ ┣ MI.jpg
 ┃ ┣ RCB.png
 ┃ ┣ KKR.jpg
 ┃ ┣ SRH.jpg
 ┃ ┣ PBKS.png
 ┃ ┗ DC.jpg
 ┗ videos/
   ┗ introo.mp4
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/vikaskumar098/DOM-Project-1.git
```

### 2️⃣ Run the Project

Open in VS Code → **Run with Live Server**

---

## 🧠 Core JavaScript Logic

```js
btn.addEventListener("click", function () {
    let winner = arr[Math.floor(Math.random() * arr.length)];

    h1.innerHTML = `${winner.team} has won ${winner.wins} times in IPL! 
    ${winner.captain} is the captain from ${winner.origin}.`;

    main.style.backgroundImage = `url(${winner.primary})`;
    main.style.color = winner.secondry;
    video.style.display = "none";
});
```

---

## 👤 Connect With Me

**🔗 LinkedIn:** **[Vikas Kumar](https://www.linkedin.com/in/vikas0905/)**

---

## ⭐ Support

If you like this project, consider giving it a **⭐ star** on GitHub!

---


