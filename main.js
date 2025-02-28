mixedMessages = () => {
    randomNumber = Math.floor(Math.random() * 10);
    switch (randomNumber) {
        case 0:
            console.log("Just one small positive thought in the morning can change your whole day — Dalai Lama");
            break;
        case 1:
            console.log("If you can dream it, you can do it — Walt Disney");
            break;
        case 2:
            console.log("Do the best you can. No one can do more than that — John Wooden");
            break;
        case 3:
            console.log("Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.- William Faulkner");
            break;
        case 4:
            console.log("Live as if you were to die tomorrow. Learn as if you were to live forever. ― Mahatma Gandhi");
            break;
        case 5:
            console.log("I have not failed. I've just found 10,000 ways that won't work. ― Thomas A. Edison");
            break;
        case 6:
            console.log("Life isn't about finding yourself. Life is about creating yourself. ― George Bernard Shaw");
            break;
        case 7:
            console.log("Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover. – Mark Twain");
            break;
        case 8:
            console.log("Life is 10% what happens to me and 90% of how I react to it. – Charles Swindoll");
            break;
        case 9:
            console.log("Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs");
            break;
        default:
            console.log("try again");
    }
};
mixedMessages();