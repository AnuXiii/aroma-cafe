function showError(msg) {
	return `<div class="empty-box fade-up mb-10">
                <figure data-figure="true">
			        <img src="/images/icons/empty.png" alt="empty" loading="lazy"/>
		        </figure>
		        <h3>${msg}</h3>
            </div>`;
}

export { showError };

// this function return a custom error message when data is not loading from appwrite
