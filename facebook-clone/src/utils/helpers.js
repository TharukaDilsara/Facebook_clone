export function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

export function validatePostContent(content) {
    return content && content.trim().length > 0;
}

export function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}