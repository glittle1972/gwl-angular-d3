/**
 * Implementing SimulationNodeDatum interface into our custom Node class
 */
export class Node implements d3.SimulationNodeDatum {

    // Optional - defining optional implementation properties - required for relevant typing assistance
    index?: number;
    
    x: number = 0;
    y: number = 0;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;
    
    id: string;
    
    constructor(id : string) {
        this.id = id;
    }
}