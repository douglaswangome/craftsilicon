// Ticket Section
const tickets = document.getElementById("tickets");

Array.from({ length: 4 }).forEach((_, i) => {
	const ticket = document.createElement("div");
	ticket.classList.add("ticket", "w-full", "h-full");

	const ticketImg = document.createElement("img");
	ticketImg.classList.add("w-full", "h-full", "object-cover");
	ticketImg.src =
		i === 2
			? "assets/images/womensfootball.jpg"
			: "assets/images/mensfootball.jpg";
	ticketImg.alt = "Ticket";

	ticket.appendChild(ticketImg);
	tickets.appendChild(ticket);
});

// Stores Section
const stores = document.getElementById("stores");
const storesData = [
	{
		imgA: "assets/images/store1a.png",
		imgB: "assets/images/store1b.png",
		title: "New Kit",
		description:
			"We already have it here! Get the new 2024-25 kit and be the first to rock it.",
	},
	{
		imgA: "assets/images/store2a.png",
		imgB: "assets/images/store2b.png",
		title: "Training",
		description:
			"Get the new training collection and dress like your favorite players.",
	},
	{
		imgA: "assets/images/store3a.png",
		imgB: "assets/images/store3b.png",
		title: "BarCity",
		description: "Discover BarCity collection, inspired by the college style.",
	},
	{
		imgA: "assets/images/store4a.png",
		imgB: "assets/images/store4b.png",
		title: "Memorabilia",
		description: "Take a piece of history home. The most exclusive products.",
	},
];

storesData.forEach((store, i) => {
	const storeItem = document.createElement("div");
	storeItem.classList.add(
		"store-item",
		"relative",
		"w-full",
		"flex",
		"flex-col",
		"border",
		"rounded-lg",
		"overflow-hidden",
		"shadow-lg",
		"mb-4"
	);

	const storeImg = document.createElement("img");
	storeImg.classList.add("w-full", "h-1/2", "object-cover");
	storeImg.src = store.imgA;
	storeImg.alt = "Store Image";

	const storeContent = document.createElement("div");
	storeContent.classList.add(
		"store-content",
		"w-full",
		"h-full",
		"px-4",
		"py-2",
		"flex",
		"items-center",
		"text-center",
		"justify-between"
	);

	const storeContentImg = document.createElement("img");
	storeContentImg.classList.add("w-1/2", "h-full", "object-cover", "z-[2]");
	storeContentImg.src = store.imgB;
	storeContentImg.alt = "Store Content Image";

	const storeContentDetails = document.createElement("div");
	storeContentDetails.classList.add(
		"w-1/2",
		"h-full",
		"flex",
		"flex-col",
		"items-center",
		"justify-between"
	);

	const storeTitle = document.createElement("span");
	storeTitle.classList.add(
		"store-title",
		"text-lg",
		"mb-2",
		"text-tertiary",
		"uppercase"
	);
	storeTitle.textContent = store.title;

	const storeDescription = document.createElement("span");
	storeDescription.classList.add(
		"store-description",
		"text-tertiary",
		"text-sm"
	);
	storeDescription.textContent = store.description;

	const storeButton = document.createElement("button");
	storeButton.classList.add(
		"store-button",
		"text-tertiary",
		"uppercase",
		"italic"
	);
	storeButton.textContent = "Shop Now";

	const storeDivider = document.createElement("hr");
	storeDivider.classList.add("absolute", "bottom-[36px]", "left-0", "w-full");

	storeContentDetails.appendChild(storeTitle);
	storeContentDetails.appendChild(storeDescription);
	storeContentDetails.appendChild(storeButton);

	storeItem.appendChild(storeImg);
	storeItem.appendChild(storeContent);

	storeContent.appendChild(storeContentImg);
	storeContent.appendChild(storeContentDetails);
	storeContent.appendChild(storeDivider);

	stores.appendChild(storeItem);
});

// News Section
const news = document.getElementById("news");
const newsTags = ["CLUB", "NATIONAL", "INTERNATIONAL", "WORLD", "BASKETBALL"];

Array.from({ length: 8 }).forEach((_, i) => {
	const newsItem = document.createElement("div");
	newsItem.classList.add(
		"news-item",
		"w-full",
		"h-full",
		"flex",
		"flex-col",
		"border",
		"rounded-lg",
		"overflow-hidden",
		"shadow-lg",
		"mb-4"
	);

	const newsImg = document.createElement("img");
	newsImg.classList.add("w-full", "h-1/2", "object-cover");
	newsImg.src = "assets/images/thumbnail2.jpg";
	newsImg.alt = "News Thumbnail";

	const newsContent = document.createElement("div");
	newsContent.classList.add(
		"news-content",
		"w-full",
		"h-1/2",
		"px-4",
		"py-2",
		"flex",
		"flex-col",
		"items-center",
		"text-center",
		"justify-between"
	);

	const newsTitle = document.createElement("span");
	newsTitle.classList.add("news-title", "text-lg", "mb-2", "text-tertiary");
	newsTitle.textContent = "Spain men in basketball and football actions";

	const newsFooter = document.createElement("div");
	newsFooter.classList.add(
		"news-footer",
		"flex",
		"items-center",
		"w-full",
		"justify-between"
	);

	const newsTag = document.createElement("div");
	newsTag.classList.add(
		"news-tag",
		"border-b",
		"border-primary",
		"flex",
		"items-center",
		"gap-2"
	);

	const newsTagIcon = document.createElement("div");
	newsTagIcon.classList.add("h-2", "w-2", "bg-primary", "rounded-full");

	const randomTag = Math.floor(Math.random() * newsTags.length);
	const newsTagText = document.createElement("span");
	newsTagText.classList.add("text-primary", "uppercase");
	newsTagText.textContent = newsTags[randomTag];

	const newsTime = document.createElement("div");
	newsTime.classList.add("flex", "items-center", "text-tertiary", "gap-2");

	const newsTimeIcon = document.createElement("i");
	newsTimeIcon.classList.add("fa-regular", "fa-clock");

	const newsTimeText = document.createElement("span");
	newsTimeText.textContent = "2 hours ago";

	newsItem.appendChild(newsImg);
	newsItem.appendChild(newsContent);

	newsTag.appendChild(newsTagIcon);
	newsTag.appendChild(newsTagText);

	newsTime.appendChild(newsTimeIcon);
	newsTime.appendChild(newsTimeText);

	newsFooter.appendChild(newsTag);
	newsFooter.appendChild(newsTime);

	newsContent.appendChild(newsTitle);
	newsContent.appendChild(newsFooter);

	news.appendChild(newsItem);
});
