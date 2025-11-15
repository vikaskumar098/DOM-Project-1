
# 🏏 IPL Winner Checker

A fun and interactive DOM-based project that randomly displays **IPL teams**, their **captains**, **origins**, and **number of IPL titles** — with dynamic background images and an intro video overlay.

---

## 🔗 Live Demo

👉 **View Project Online:**
[https://vikaskumar098.github.io/DOM-Project-1/](https://vikaskumar098.github.io/DOM-Project-1/)

## 📦 GitHub Repository

👉 **Source Code:**
[https://github.com/vikaskumar098/DOM-Project-1.git](https://github.com/vikaskumar098/DOM-Project-1.git)

---

## 🌟 Features

* 🎥 Auto-play intro background video
* 🖼️ Dynamic backgrounds based on selected team
* 🔀 Random IPL team generator
* ✨ Clean UI with blur & shadow effects
* 📊 Shows wins, captain & team origin
* 🧊 Fully DOM-based interactivity

---

## 📸 Preview

<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/60a5938b-6efe-4364-a94f-666f81e9ed02" />

---

<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/6b382b0d-1c71-4ba6-a80c-7b2429193701" />



```
![App Screenshot](./screenshot.png)
```

---

## 🛠️ Tech Stack

| Technology           | Used For                 |
| -------------------- | ------------------------ |
| **HTML5**            | Page structure           |
| **CSS3**             | UI, animations & effects |
| **JavaScript (DOM)** | Logic & interactivity    |
| **GitHub Pages**     | Hosting                  |

---

## 📂 Project Structure

```
📦 DOM-Project-1
 ┣ 📜 index.html
 ┣ 📜 style.css
 ┣ 📜 script.js
 ┣ 📁 images/
 ┃ ┣ CSK.png
 ┃ ┣ MI.jpg
 ┃ ┣ RCB.png
 ┃ ┣ KKR.jpg
 ┃ ┣ SRH.jpg
 ┃ ┣ PBKS.png
 ┃ ┗ DC.jpg
 ┗ 📁 videos/
   ┗ introo.mp4
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/vikaskumar098/DOM-Project-1.git
```

### 2️⃣ Run locally

Open in VS Code → **Run with Live Server**

---

## 🧠 Core Logic (JavaScript)

```js
btn.addEventListener("click", function () {
    let winner = arr[Math.floor(Math.random() * arr.length)];

    h1.innerHTML =
        `${winner.team} has won ${winner.wins} times in IPL! 
        ${winner.captain} is the captain from ${winner.origin}.`;

    main.style.backgroundImage = `url(${winner.primary})`;
    main.style.color = winner.secondry;
    video.style.display = "none";
});
```

---

## 👤 Connect With Me

**LinkedIn:** [https://www.linkedin.com/in/vikas0905/](https://www.linkedin.com/in/vikas0905/)

---

## ⭐ Support

If this project helped you or looks cool — please ⭐ the repository!

---


