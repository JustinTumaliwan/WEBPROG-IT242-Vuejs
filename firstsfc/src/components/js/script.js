function openModal(imgSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    
    modal.style.display = "flex";
    modalImg.src = imgSrc; // This uses the path passed in the HTML onclick
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Close modal when pressing 'Esc' key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
});