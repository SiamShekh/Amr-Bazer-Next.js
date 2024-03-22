const imageLoader = ({ src, quality }) => {
    return `${src}?q=${quality || 75}`
}

export default imageLoader;