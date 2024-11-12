const book = {
    name: ["the outsider","secrets of the millionaire mind","Breaking the Habit of Being Yourself"],
    release: 2018,
    price: 45000,
    author: ["stephen king","T. Harv Eker","Joe Dispenza"],
    pages: [575,224,360],
    category: ["only_adults","for_everybody"],
    isAvailableForUser: (userAge, name) => {
        if(userAge > 18 && (name === "the outsider" || name === "Breaking the Habit of Being Yourself")){
            console.log("you apply for this category", book.category[0]);
        }else if(userAge < 100 && name === "secrets of the millionaire mind"){
            console.log("this category is for everybody");
        }else{
            console.log("this category is only for adults");
        }
    }
}

let age = book.isAvailableForUser(19, "the outsider");
// console.log(age);
// console.log(book.category.length);
