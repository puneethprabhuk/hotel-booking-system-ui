import React from 'react'
import { Search as SearchIcon } from 'lucide-react';
import { Button } from './ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const Search = () => {
    return (
        <div className='search-box shadow-2xl'>
            <Popover>
                <PopoverTrigger asChild>
                    <div className="search-location search-input-container">
                        <label>Where</label>
                        <input placeholder='Search destination' className="search-input" type="text" />
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-110">
                    <div className='search-location-list p-2'>
                        <span className='search-location-title'>Suggested destinations</span>
                    </div>
                </PopoverContent>
            </Popover>
            <div className="search-checkin search-input-container">
                <label>Check in</label>
                <input placeholder='Add dates' className="search-input" type="text" />
            </div>
            <div className="search-checkout search-input-container">
                <label>Check out</label>
                <input placeholder='Add dates' className="search-input" type="text" />

            </div>
            <div className="search-guest search-input-container">
                <label>Who</label>
                <input placeholder='Add guests' className="search-input" type="text" />
                <Button size="icon" className="size-12 search-button">
                    <SearchIcon />
                </Button>
            </div>
        </div>
    )
}

export default Search