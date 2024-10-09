/**
 * Finds the number of connected components in the graph.
 * 
 * @param {number} A - Number of nodes in the graph.
 * @param {number[][]} B - List of undirected edges.
 * @returns {number} - The number of connected components.
 */
function countComponents(A, B) {
    const graph = new Array(A + 1).fill(0).map(() => []);
    for (const [u, v] of B) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const visited = new Array(A + 1).fill(false);
    let components = 0;

    function dfs(node) {
        visited[node] = true;
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }

    for (let i = 1; i <= A; i++) {
        if (!visited[i]) {
            components++;
            dfs(i);
        }
    }

    return components;
}
/**
 * 
 * Time Complexity:
 * Building the adjacency list takes O(A + |B|).
 * Performing DFS/BFS on all vertices takes O(A + |B|).
 * Thus, the overall time complexity is O(A + |B|).

 * Space Complexity:
 * The adjacency list requires O(A + |B|) space.
 * The recursion stack (DFS) or the queue (BFS) uses O(A) space in the worst case.
 */