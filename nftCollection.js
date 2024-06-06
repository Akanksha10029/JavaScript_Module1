// Step 1: Creation of a variable to hold our NFTs
let nfts = [];
let usedIds = new Set(); // Create a Set to store used IDs

// Step 2: Create a function to generate a random ID
function generateRandomId() {
    let id;
    do {
        id = Math.floor(Math.random() * 1000) + 1; // Generate a random ID between 1 and 1000
    } while (usedIds.has(id)); // Repeat if the ID is already used
    usedIds.add(id); // Add the new unique ID to the Set
    return id;
}

// Step 2: Creating a function to mint NFTs
function mintNFT(title, author, publicationYear, genre) {
   
    let nft = {
        id: generateRandomId(), // Assign a unique random ID
        title: title,
        author: author,
        publicationYear: publicationYear,
        genre: genre
    };
    // Adding NFT object to the array
    nfts.push(nft);
}

// Step 3: Creating a function to list all NFTs in a tabular format
function listNFTs() {
    console.table(nfts);
}

// Step 4: Creating a function to get the total supply of NFTs
function getTotalSupply() {
    return nfts.length;
}

// Minting some NFTs with Indian book details
mintNFT("The God of Small Things", "Arundhati Roy", 1997, "Fiction");
mintNFT("Midnight's Children", "Salman Rushdie", 1981, "Historical Fiction");
mintNFT("The White Tiger", "Aravind Adiga", 2008, "Fiction");

listNFTs();

// Printing the total supply of NFTs
console.log(`Total NFTs minted: ${getTotalSupply()}`);

