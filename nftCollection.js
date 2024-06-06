// Step 1: Creation of a variable to hold our NFTs
let nfts = [];

// Step 2: Creating a function to mint NFTs
function mintNFT(title, author, publicationYear, genre) {
   
    let nft = {
        title: title,
        author: author,
        publicationYear: publicationYear,
        genre: genre
    };
    // Adding NFT object to the array
    nfts.push(nft);
}

// Step 3: Creating a function to list all NFTs
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log(`NFT #${i + 1}`);
        console.log(`Title: ${nfts[i].title}`);
        console.log(`Author: ${nfts[i].author}`);
        console.log(`Publication Year: ${nfts[i].publicationYear}`);
        console.log(`Genre: ${nfts[i].genre}`);
    }
}

// Step 4: Creating a function to get the total supply of NFTs
function getTotalSupply() {
    return nfts.length;
}

// Minting some NFTs with Indian book details
mintNFT("The God of Small Things", "Arundhati Roy", 1997, "Fiction");
mintNFT("Midnight's Children", "Salman Rushdie", 1981, "Historical Fiction");
mintNFT("The White Tiger", "Aravind Adiga", 2008, "Fiction");
mintNFT("Train to Pakistan", "Khushwant Singh", 1956, "Historical Fiction");
mintNFT("A Suitable Boy", "Vikram Seth", 1993, "Fiction");

listNFTs();

// Printing the total supply of NFTs
console.log(`Total NFTs minted: ${getTotalSupply()}`);
