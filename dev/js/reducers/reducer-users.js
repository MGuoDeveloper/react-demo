/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "You",
            last: "Tube",
            age: 24,
            description: "Bucky is a React developer and YouTuber",
            thumbnail: "https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-youtube.png"
        },
        {
            id: 2,
            first: "Face",
            last: "Book",
            age: 27,
            description: "Joby loves the Packers, cheese, and turtles.",
            thumbnail: "https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook.png"
        },
        {
            id: 3,
            first: "Drop",
            last: "Box",
            age: 24,
            description: "Madi likes her dog but it is really annoying.",
            thumbnail: "https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-dropbox.png"
        }
    ]
}
