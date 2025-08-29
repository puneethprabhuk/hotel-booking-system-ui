import React, { useState } from 'react'
import { Search as SearchIcon } from 'lucide-react';
import { Button } from './ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"



const Search = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [openCheckInDate, setOpenCheckInDate] = React.useState(false);
    const [openCheckOutDate, setOpenCheckoutDate] = React.useState(false);
    const [checkInDate, setCheckInDate] = React.useState<Date | undefined>(undefined);
    const [checkOutDate, setCheckOutDate] = React.useState<Date | undefined>(undefined);

    return (
        <div className='search-box'>
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

            <Popover open={openCheckInDate} onOpenChange={setOpenCheckInDate}>
                <PopoverTrigger asChild>
                    <div className="search-checkin search-input-container">
                        <label>Check in</label>
                        <input placeholder='Add dates' className="search-input" type="text" />
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={checkInDate}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                            setCheckInDate(date)
                            setOpenCheckInDate(false)
                        }}
                    />
                </PopoverContent>
            </Popover>

            <Popover open={openCheckOutDate} onOpenChange={setOpenCheckoutDate}>
                <PopoverTrigger asChild>
                    <div className="search-checkin search-input-container">
                        <label>Check out</label>
                        <input placeholder='Add dates' className="search-input" type="text" />
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={checkOutDate}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                            setCheckOutDate(date)
                            setOpenCheckoutDate(false)
                        }}
                    />
                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger asChild>
                    <div className="search-guest search-input-container">
                        <label>Who</label>
                        <input placeholder='Add guests' className="search-input" type="text" />
                        <Button size="icon" className="size-12 search-button">
                            <SearchIcon />
                        </Button>
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-110">
                    <div className='search-location-list p-2'>
                        <div className='guest-type'>
                            <div className='guest-type-name'>
                                <p>Adults</p>
                                <span>Age 13 or above</span>
                            </div>
                            <div className='guest-type-buttons'>
                                <Button disabled={adults === 0} onClick={() => setAdults(prev => prev - 1)} variant="secondary" size="icon" className="size-8">-</Button>
                                <span>{adults}</span>
                                <Button onClick={() => setAdults(prev => prev + 1)} variant="secondary" size="icon" className="size-8">+</Button>
                            </div>
                        </div>
                        <hr />
                        <div className='guest-type'>
                            <div className='guest-type-name'>
                                <p>Children</p>
                                <span>Age 0 to 12</span>
                            </div>
                            <div className='guest-type-buttons'>
                                <Button disabled={children === 0} onClick={() => setChildren(prev => prev - 1)} variant="secondary" size="icon" className="size-8">-</Button>
                                <span>{children}</span>
                                <Button onClick={() => setChildren(prev => prev + 1)} variant="secondary" size="icon" className="size-8">+</Button>
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default Search