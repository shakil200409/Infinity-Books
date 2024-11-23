const bookPage= document.getElementById('books-page');
// showBook()
function showBook(){
    bookPage.innerHTML= '';
    const bookDescription = document.createElement('article');
    bookDescription.classList = 'w-11/12 mx-auto mt-24 text-raleway'
    bookDescription.innerHTML = 
    `
        <section class="flex items-center gap-10 text-raleway  ps-10">
            <figure class="w-2/5 h-full py-10">
                <img class="w-full h-full object-cover" src="assets/books/don.svg" alt="Book">
            </figure>
            <div class="w-3/5 lg:p-10">
                <h3 class="text-xl md:text-2xl lg:text-5xl font-bold text-brand">
                    Don Quixote
                </h3>
                <h5 class="text-md md:text-xl lg:text-2xl mt-3 mb-10">Miguel de Cervantes</h5>
                <p
                    class="text-base md:text-lg lg:text-xl mt-5 lg:pr-5 text-justify lg:text-left">
                    Don Quixote,[a][b] the full title being The Ingenious Gentleman Don Quixote of La Mancha,[c] is a Spanish novel by Miguel de Cervantes. It was originally published in two parts, in 1605 and 1615. Considered a founding work of Western literature, it is often labelled as the first modern novel.[2][3] Don Quixote is also one of the most-translated books in the world[4] and one of the best-selling novels of all time.
                </p>
                <button class="text-base md:text-lg lg:text-xl font-bold bg-brand text-white    w-3/4 py-4 rounded-lg my-10 hover:bg-secondary hover:text-black">Download Now</button>
                </div>
        </section>
      <section class="mt-5">
        <h2 class="font-bold text-xl md:text-3xl lg:text-4xl">
          Reviews
        </h2>
        <div class="carousel w-full my-10">
          <div id="slide1" class="carousel-item relative w-full">
            <div
              class="lg:w-10/12 mx-auto flex flex-col md:flex-row gap-5 lg:gap-10 justify-center"
            >
              <div
                class="flex items-center gap-5 ps-6 lg:ps-8 pr-3 lg:pr-5 py-5 lg:py-5 rounded-2xl bg-[#F5F0F0]"
              >
                <figure class="w-3/5 border-2 border-brand rounded-full">
                  <img
                    class="object-cover rounded-full"
                    src="assets/user.png"
                    alt=""
                  />
                </figure>
                <div>
                  <h5
                    class="text-xl md:text-2xl lg:text-3xl font-bold text-brand"
                  >
                    Adnan Adil
                  </h5>
                  <span class="text-xs md:text-sm lg:text-base font-semibold"
                    >Student</span
                  >
                  <p class="text-sm md:text-base lg:text-lg">
                    "This community is amazing! So many helpful discussions and
                    book insights."
                  </p>
                </div>
              </div>
              <div
                class="flex items-center gap-5 ps-6 lg:ps-8 pr-3 lg:pr-5 py-5 lg:py-5 rounded-2xl bg-[#F5F0F0]"
              >
                <figure class="w-3/5 border-2 border-brand rounded-full">
                  <img
                    class="object-cover rounded-full"
                    src="assets/user.png"
                    alt=""
                  />
                </figure>
                <!-- Content -->
                <div>
                  <h5
                    class="text-xl md:text-2xl lg:text-3xl font-bold text-brand"
                  >
                    Adnan Adil
                  </h5>
                  <span class="text-xs md:text-sm lg:text-base font-semibold"
                    >Student</span
                  >
                  <p class="text-sm md:text-base lg:text-lg">
                    "This community is amazing! So many helpful discussions and
                    book insights."
                  </p>
                </div>
              </div>
            </div>
            <div
              class="hidden absolute left-5 right-5 top-1/2 lg:flex -translate-y-1/2 transform justify-between"
            >
              <a href="#slide2" class="btn btn-circle">❮</a>
              <a href="#slide2" class="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2"
            class="hidden md:inline carousel-item relative w-full"
          >
            <div class="w-full md:flex gap-10 justify-center">
              <div
                class="flex items-center gap-5 w-2/5 ps-8 pr-5 py-5 rounded-2xl bg-[#F5F0F0]"
              >
                <figure class="w-3/5 border-2 border-brand rounded-full">
                  <img
                    class="object-cover rounded-full"
                    src="assets/user.png"
                    alt=""
                  />
                </figure>
                <div>
                  <h5 class="text-3xl font-bold text-brand">Adnan Adil</h5>
                  <span class="font-semibold">Student</span>
                  <p class="text-lg">
                    "This community is amazing! So many helpful discussions and
                    book insights."
                  </p>
                </div>
              </div>
              <div
                class="flex items-center gap-5 w-2/5 ps-8 pr-5 py-5 rounded-2xl bg-[#F5F0F0]"
              >
                <figure class="w-3/5 border-2 border-brand rounded-full">
                  <img
                    class="object-cover rounded-full"
                    src="assets/user.png"
                    alt=""
                  />
                </figure>
                <!-- Content -->
                <div>
                  <h5 class="text-3xl font-bold text-brand">Adnan Adil</h5>
                  <span class="font-semibold">Student</span>
                  <p class="text-lg">
                    "This community is amazing! So many helpful discussions and
                    book insights."
                  </p>
                </div>
              </div>
            </div>
            <div
              class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
            >
              <a href="#slide1" class="btn btn-circle">❮</a>
              <a href="#slide1" class="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        <!-- View More button -->
        <div class="lg:hidden text-inter">
          <button
            class="font-bold text-md md:text-lg lg:text-2xl bg-black text-white px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-secondary hover:text-black"
          >
            View More
          </button>
        </div>
      </section> 
    `

    bookPage.append(bookDescription);
}