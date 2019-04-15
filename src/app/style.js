class Style {
    change(curr, next) {
        curr.classList.toggle('active');
        next.classList.toggle('active');
    }
}

export { Style };
