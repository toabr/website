class ApiService {
    constructor() {
        this.apiUrl = process.env.API_URL;
        this.delay = (process.env.NODE_ENV === 'development')? process.env.API_DELAY : 0;
    }

    fetchData = (requestUrl) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                fetch(requestUrl)
                    .then(res => res.json())
                    .then(data => resolve(data))
                    .catch(err => reject(new Error(`Could not load ${requestUrl}`, err)));
                }, this.delay);
        });
    }

    getShowcase = ({nid = ''} = {}) => {
        const endpoint = `${this.apiUrl}/api/showcase/`;
        const requestUrl = (nid) ? endpoint + nid : endpoint;
        return this.fetchData(requestUrl);
    }

    getArticles = ({ ids = [], page = 0} = {}) => {
        const endpoint = `${this.apiUrl}/api2/articles/`;
        const reqIds = (ids.length > 0) ? ids.join('+') : '';
        const reqPage = (page > 0) ? `?page=${page}` : '';
        const requestUrl = endpoint + reqIds + reqPage;
        // console.log('getArticles', ids, 'page', page, 'url', requestUrl);
        return this.fetchData(requestUrl);
    }

    getArticlesByTag = (tid) => {
        const endpoint = `${this.apiUrl}/api/tag/`;
        const requestUrl = endpoint + tid;
        return this.fetchData(requestUrl);
    }

    getTags = ({tid = ''} = {}) => {
        const endpoint = `${this.apiUrl}/api/term/`;
        const requestUrl = endpoint + tid;
        return this.fetchData(requestUrl);
    }

    articlesQuery = (q) => {
        const endpoint = `${this.apiUrl}/api/search?_q=`;
        const requestUrl = endpoint + q;
        return this.fetchData(requestUrl);
    }

    /*
     * ### Images
     */

    loadImage = (url) => {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.onload = () => resolve(image);
            image.onerror = () => reject(new Error('Could not load image at ' + url));
            image.src = url;
        })
    }

}

export default new ApiService;