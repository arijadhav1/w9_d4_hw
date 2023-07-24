let token = '003fc1e33fd13daa3e712c3a6b20bdb0a4202a187902f087' //USING ALEX'S TOKEN UNTIL FLASK ASSIGNMENT IS COMPLETED
import { CarState } from "../redux/slices/rootSlice";



export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://alexsrangerdrones121.glitch.me/api/drones`, { 
            // USING ALEX DRONES LINK UNTIL I FINISH MY FLASK ASSIGNMENT FROM WEEK 6
            // WILL UPDATE LINK ONCE DONE
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (response.ok){
            throw new Error('failed to fetch data'), response.status
        }

        return await response.json()
    },
    create: async(data: CarState) => { 
        const response = await fetch(`https://alexsrangerdrones121.glitch.me/api/drones`, {
            // USING ALEX DRONES LINK UNTIL I FINISH MY FLASK ASSIGNMENT FROM WEEK 6
            // WILL UPDATE LINK ONCE DONE
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('failed to create data on server'), response.status
        }

        return await response.json()
    },
    update: async(id: string, data: CarState) => { 
        const response = await fetch(`https://alexsrangerdrones121.glitch.me/api/drones/${id}`, {
            // USING ALEX DRONES LINK UNTIL I FINISH MY FLASK ASSIGNMENT FROM WEEK 6
            // WILL UPDATE LINK ONCE DONE
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('failed to create data on server'), response.status
        }

        return await response.json()
    },
    delete: async(id:string) => {
        const response = await fetch(`https://alexsrangerdrones121.glitch.me/api/drones/${id}`, {
            // USING ALEX DRONES LINK UNTIL I FINISH MY FLASK ASSIGNMENT FROM WEEK 6
            // WILL UPDATE LINK ONCE DONE
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (response.ok){
            throw new Error('failed to delete data'), response.status
        }
    }
}