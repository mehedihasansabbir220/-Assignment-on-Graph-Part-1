/**
 * Determines if there is a valid path from source to destination in the graph.
 * 
 * @param {number} n - Number of vertices in the graph.
 * @param {number[][]} edges - List of bi-directional edges.
 * @param {number} source - Starting vertex.
 * @param {number} destination - Target vertex.
 * @returns {boolean} - True if there is a path from source to destination, false otherwise.
 */
function validPath(n, edges, source, destination) {
    // Build the adjacency list
    const graph = new Array(n).fill(0).map(() => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    // Perform BFS to find the path
    const visited = new Array(n).fill(false);
    const queue = [source];
    
    while (queue.length > 0) {
        const node = queue.shift();
        if (node === destination) return true;
        
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
    
    return false;
}
/**
 * 
 * Time Complexity:
 * Building the graph takes O(n + edges.length).
 * DFS/BFS traversal takes O(n + edges.length).
 * Thus, the overall time complexity is O(n + edges.length).
 * 
 * 
 * Space Complexity:
The adjacency list requires O(n + edges.length) space.
The recursion stack (DFS) or the queue (BFS) uses O(n) space in the worst case.
 */