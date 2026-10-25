const root = document.documentElement;
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if(saved === "dark" || (!saved && prefersDark)){
    root.classList.add("dark");
}

document.addEventListener("DOMContentLoaded",() => {
    const button = document.getElementById("theme-toggle");
    if(!button) return;

    button.addEventListener("click", ()=>{
        const isDark = root.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});