## Why does page has rendered like this ? even when i game the whole div as a paramenter in the CSS to turn the background black

![alt text](image.png)
![For reference see one.html](../Lec31/one.html)

Great question!

Even though your `<div class="bg-black">` has a black background, **the rest of the page is white because it's part of the `<body>` that’s not covered by your `div`**.

Let’s break it down:

---

### 🔍 What's Happening?

* Your `div.bg-black` only covers **as much vertical space as its content needs**.
* The rest of the `<body>`—which includes the empty space below the div—defaults to a **white background** (since you didn’t set a background for the `body` itself).
* So the **"rest of the page"** appears white because that’s the default background color of the `<body>`.

---

### ✅ How to Fix It (Make Full Page Black):

If you want the **entire page** to have a black background (even the space beyond your div), just set the background on the `<body>` too:

```css
body {
    margin: 0;
    background-color: black;
    color: #e2dede;
}
```

Then you don’t even need `.bg-black` unless you want extra styling on that `div`.

---

### Optional Enhancement:

If you still want to keep `.bg-black` for padding and structure, your final CSS could look like:

```css
body {
    margin: 0;
    background-color: black;
}

.bg-black {
    color: #e2dede;
    padding: 20px;
}
```

---

Let me know if you want to center the content, make it full height, or add a footer—happy to help!
