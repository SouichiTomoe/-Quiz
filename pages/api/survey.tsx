const surveyApi = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
        JSON.stringify({
            id: 1,
            title: 'Sample Survey',
            image: 'https://48tools.com/wp-content/uploads/2015/09/shortlink.png',
            questions: [
                {
                    text: 'Which is the best fruit in the world?',
                    image: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
                    lifetimeSeconds: 10,
                    options: [
                        {
                            text: 'Orange',
                        },
                        {
                            text: 'Banana',
                        },
                        {
                            text: 'Mango',
                        },
                    ],
                },
                {
                    text: 'Question2',
                    image:
                        'https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg',
                    lifetimeSeconds: 5,
                    options: [
                        {
                            text: 'Opt1',
                        },
                        {
                            text: 'Opt2',
                        },
                        {
                            text: 'Opt',
                        },
                    ],
                },
                {
                    text: 'Pregunta 2',
                    image:
                        'https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg',
                    lifetimeSeconds: 5,
                    options: [
                        {
                            text: 'Opt1',
                        },
                        {
                            text: 'Opt2',
                        },
                        {
                            text: 'Opt',
                        },
                    ],
                },
            ],
        })
    );
};

export default surveyApi;
