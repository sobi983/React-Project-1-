export function stylee(theme) {
    let sty = {
        color: theme === "night" ? "#ffffff" : "#292019ff",
        fontWeight: theme === "autumn" ? 500 : 500
    }
    return sty
}