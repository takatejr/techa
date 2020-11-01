export async function getAllPosts() {
    const response = await fetch('/api/users');
    return await response.json();
}