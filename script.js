document.addEventListener('DOMContentLoaded', function () {
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const industry = this.closest('.industry');
            industry.classList.toggle('show-details');
        });
    });
});
