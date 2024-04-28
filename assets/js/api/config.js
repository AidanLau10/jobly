export var uri;
if (location.hostname === "localhost") {
        uri = "http://localhost:4100";
} else if (location.hostname === "127.0.0.1") {
        uri = "http://127.0.0.1:4100";
} else {
        uri = "https://jobly.stu.nighthawkcodingsociety.com/";
}

export const options = {
    method: 'POST', 
    mode: 'cors', 
    cache: 'default', 
    headers: {
        'Content-Type': 'application/json',
    },
};