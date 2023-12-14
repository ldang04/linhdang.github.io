const tags = {
    entrepreneurship: {
        name: "Entrepreneurship", 
        color: "#DEDAF4", 
        textColor: "#5222ab"
    }, 
    code: {
        name: "Code", 
        color: "#a8f0de", 
        textColor: "#0f7a21"
    }, 
    uiux: {
        name: "UI/UX", 
        color: "#FFD6A5", 
        textColor: "#ba6600"
    }, 
    business: {
        name: "Business", 
        color: "#FFADAD", 
        textColor: "#9e1e1e"
    }, 
    ongoing: {
        name: "Ongoing", 
        color: "#9ADCFF", 
        textColor: "#13549e"
    }
}

export const projectList = [
    {
        title: "Seed to Success", 
        description: "Annual conference hosted by the Columbia Women's Business Society, in which I serve as an organizing committee member.", 
        tags: [tags.business, tags.ongoing], 
        link: "https://www.columbiawomensbusinesssociety.org/"
    }, 
    {
        title: "Stealth Startup", 
        description: "In progress.", 
        tags: [tags.ongoing], 
        link: "#"
    }, 
    {
        title: "Personal website", 
        description: "This website! Made from scratch with React :)", 
        tags: [tags.code, tags.uiux], 
        link: "/"
    }, 
    {
        title: "Elavo - automated, self-cleaning toilet seat", 
        description: "Created at M&TSI - an entrepreneurship intensive run by Penn Engineering and the Wharton School. Elavo cleans dirty public toilets and helps establishments cut down on public facility maintenance costs.", 
        tags: [tags.entrepreneurship], 
        link: "https://devpost.com/software/elavo?ref_content=user-portfolio&ref_feature=in_progress"
    },
    {
        title: "ASK-a-Peer - peer tutoring platform", 
        description: "Platform aiming to increase accessibility to peer tutoring opportunities at Phillips Academy. Made possible by the Abbot Academy grant. Pitched and prototyped.", 
        tags: [tags.entrepreneurship, tags.code, tags.uiux], 
        link: "/askapeer"
    }, 
    {
        title: "Swift MVPs", 
        description: "App concepts I scaffolded in high school, made entirely in Swift.", 
        tags: [tags.code], 
        link: "/mvps"
    }
]

export default projectList;