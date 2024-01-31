const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const ShowMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

const accessKey = "";

const searchImages = async () => {
    keyword = searchBox?.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // On clicking 'Search' button, page becomes 1
        if (page === 1) {
            searchResult.innerHTML = "";
        }

        const results = data.results;
        results?.forEach((result, index) => {
            // Create image using <img src="" alt="">
            const image = document.createElement('img');
            image.src = result?.urls?.small;
            image.alt = `image-${index}`;

            // Create link using <a href="" target=""></a>
            const imageLink = document.createElement('a');
            imageLink.href = result?.links?.html;
            imageLink.target = "_blank";

            // Add link to the image 
            // <a><img></a>
            imageLink.appendChild(image);

            // Append imageLinks to search-result 
            // <div><a></a></div>
            searchResult.appendChild(imageLink);
        });

        ShowMoreBtn.style.display = 'block';
    } catch (error) {
        console.log('Error fetching data:\n', error);
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

ShowMoreBtn.addEventListener('click', (e) => {
    page++;
    searchImages();
})