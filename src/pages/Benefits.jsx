import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Benefit from '../Data/Benefit'
import benefit from '../assets/acc.png'
const Benefits = () => {
    const [show1, setShow1] = useState();
    const [show, setShow] = useState(
        [
            {
                id: 1,
                name1: "Tranding",
                name2: " Algorithms",
                subname: "Automate your trading, maximize your returns",
                description: "Our trading bots leverage Ai-driven algorithms to monitor market movements, spot potential oppurtunities, and execute trades. By automating decision-making process and identifying trading oppurtunities, Our AI bots can help traders save time and focus on other important tasks. Our AI algorithms use multiple sophisticated methods to execute trades while also applying ris management and self-adjusting strategis to mazimize profits profits and minimize losses.",
                image: "images/acc.png"

            },]
    );
    const [show2, setShow2] = useState(false);


    // demo list
    const benifit = [
        {
            id: 1,
            name1: "Tranding",
            name2: " Algorithms",
            subname: "Automate your trading, maximize your returns",
            description: "Our trading bots leverage Ai-driven algorithms to monitor market movements, spot potential oppurtunities, and execute trades. By automating decision-making process and identifying trading oppurtunities, Our AI bots can help traders save time and focus on other important tasks. Our AI algorithms use multiple sophisticated methods to execute trades while also applying ris management and self-adjusting strategis to mazimize profits profits and minimize losses.",
            image: "images/acc.png"

        },
        {
            id: 2,
            name1: "Social",
            name2: "Engagement",
            subname: "Grow your network, with our community ",
            description: "you are not just gaining access to powerful tools and resources, but you are also becoming a part of a community of traders and investors who are all striving for success. Our community of members are able to share their experiences, insights and strategies, which can be incredibly valuable in the journey to success.",
            image: "images/ac2.png"

        },
        {
            id: 3,
            name1: "Advanced",
            name2: "Statistics",
            subname: "Get detailed insights on your investments",
            description: "These statistics provide detailed analysis of their trading performance, including metrics such as profit and loss, trade frequency, and win/loss ratios. Members can use these statistics to identify patterns and trends in their trading. With access to advanced trading statistics, our members can gain a deeper understanding of their trading performance",
            image: "images/ac3.png"

        },
        {
            id: 4,
            name1: "Trading",
            name2: "Education",
            subname: "Upscale Learning resources and tools",
            description: "These statistics provide detailed analysis of their trading performance, including metrics such as profit and loss, trade frequency, and win/loss ratios. Members can use these statistics to identify patterns and trends in their trading. With access to advanced trading statistics, our members can gain a deeper understanding of their trading performance",
            image: "images/ac4.png"

        },
        {
            id: 5,
            name1: "News and media",
            name2: "Organizer",
            subname: "Real News",
            description: "Our news and media coverage includes a wide range of topics such as world news, market trends, economic indicators, trending relative topics and announcements that are relevant to the financial and tech community. We have a dedicated team of experts that constantly monitor the markets and curate the most relevant news and media for our members. Our members can access this information at any time and from anywhere, allowing them to stay informed and make informed decisions. This feature provides members with a competitive edge in the fast-paced world of media and news.",
            image: "images/ac5.png"

        },


    ]

    const handleClick = (option) => {
        if (option == null) {
            option = show1[0];
            console.log(option)
            setShow1(option)
        } else {

            setShow1(option);
        }
    }

    console.log(show[0].name1);

    return (
        <>
            <Navbar />
            <div className="benefit">
                <div className="benefit-text">
                    <h1>Benefits</h1>
                    <h2>Exclussive Access</h2>
                    <p>By becoming a member, you will again access to a wide range of powerful trading tools,
                        wealth management resources, financial education, community and more. Don't miss out on this oppurtunity to improve
                        your skills, again access to powerfull tools and resources, and connect with a community of linke-minded individuals
                    </p>
                </div>

                <div className="benefit-box">
                    <div className="option">
                        <ul>
                            {benifit.map(bene => (
                                <li key={bene.id} onClick={() => { handleClick(bene) }} className="list">{bene.name1} {bene.name2}</li>
                            ))}
                        </ul>
                    </div>
                    {show1 != null ? (
                        <div className="benefit-card">
                            <div className="benefit-card-text">
                                <h1>{show1.name1} <span>{show1.name2}</span></h1>
                                <h3>{show1.subname}</h3>
                                <p>
                                    {show1.description}
                                </p>
                            </div>
                            <div className="benefit-image">
                                <img src={show1.image} alt="" />
                            </div>
                        </div>
                    ) : (
                        <div className="benefit-card">
                            <div className="benefit-card-text">
                                <h1>{show[0].name1} <span>{show[0].name2}</span></h1>
                                <h3>{show[0].subname}</h3>
                                <p>
                                    {show[0].description}
                                </p>
                            </div>
                            <div className="benefit-image">
                                <img src={benefit} alt="" />
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Benefits