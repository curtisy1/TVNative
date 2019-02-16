export class Shows {
    name = "Shows";
    prosp = {
        id : "int",
        title: "#Titles",
        stopTime: "string",
        startTime: "string",
        category: "?[]#Categories",
        video: "?#Videos",
        new: "?boolean",
        credits: "?#Credits",
        url: "?[]string",
        country: "?[]#Countries",
        date: "?string",
        subTitle: "?#SubTitles",
        episodeNumber: "?int",
        description: "?#Descriptions"
    };
}