addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

const status = 200;
const headers = { 'Content-Type': 'text/html; charset=utf-8' };
const js = { 'Content-Type': 'text/javascript' }

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
    const path = new URL(request.url).pathname.substr(1)
    let content = "";

    if (path === "calculate.js") {
        return new Response(calculate, {
            status,
            js,
        })
    } else {
        return new Response(index, {
            status,
            headers,
        })
    }
}

const index = __INDEX__;
const calculate = __CALCULATE__;