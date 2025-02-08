//  FIX কীছূ Conditions চেক করতে গেলে swith ব্যবহৃত হয়
// যেমন থিমঃ তিনচারটা থিম থাকতে পারে যাদের মধ্যে ১ টা ইউজ করি , সেক্ষেত্রে Switch



var theme = "dark"

switch (theme) {
    case "light":
        console.log("light theme applied");
        break;
    case "dark":
        console.log("dark theme applied");
        break;
    case "blue":
        console.log("blue theme applied");
        break;
    default:
        console.log("default theme applied");
}
