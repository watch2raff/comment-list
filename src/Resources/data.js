export default [
    {
        id: "1",
        author: "Connor Leech",
        text: "comment from the array",
        children: [
            {
                id: "11",
                author: "Lorem ipsum",
                text:
                    "Curabitur id posuere nisi. Aliquam malesuada nibh quis velit facilisis, vel auctor lectus blandit. Quisque mi ipsum, tincidunt quis lorem quis, tristique consectetur purus.",
                children: [
                    {
                        id: "111",
                        author: "Lorem ipsum",
                        text:
                            "Curabitur id posuere nisi. Aliquam malesuada nibh quis velit facilisis, vel auctor lectus blandit. Quisque mi ipsum, tincidunt quis lorem quis, tristique consectetur purus."
                    }
                ]
            }
        ]
    },
    { id: "2", author: "Long John Silver", text: "arrrrrrr" },
    { id: "3", author: "Golf Father", text: "Unexpected token" },
    {
        id: "4",
        author: "Long John Silver",
        text: "Parsing error: ",
        children: [
            {
                id: "41",
                author: "Quisque ",
                text:
                    "Curabitur id posuere nisi. Aliquam malesuada nibh quis velit facilisis, vel auctor lectus blandit. Quisque mi ipsum, tincidunt quis lorem quis, tristique consectetur purus."
            }
        ]
    }
];
