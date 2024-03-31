export const hotelChains = [
  {
    chainName: 'North Star Lodgings',
    headquartersAddress: '100 Mountain Rd, Denver, CO',
    numberOfHotels: 3,
    contactEmail: 'contact@northstarlodgings.com',
    contactPhone: '1800500500',
    hotels: [
      {
        hotelName: 'North Star Seaside Resort',
        address: '2500 Boardwalk, Atlantic City, NJ',
        contactEmail: 'seaside@northstarlodgings.com',
        contactPhone: '1800500501',
        rating: 5,
        rooms: [
          {
            roomType: 'Suite',
            price: 450,
            amenities: ['King Bed', 'Ocean View', 'Hot Tub', 'Complimentary Breakfast'],
            capacity: 'Double',
            hasSeaView: true,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-10/hotel%20room%20with%20beachfront%20view.jpg?h=662a4f7c&itok=7Laa3LkQ'
          },
          {
            roomType: 'Standard',
            price: 250,
            amenities: ['Two Queen Beds', 'City View', 'Free WiFi'],
            capacity: 'Quad',
            hasSeaView: false,
            isExtendable: false,
            issues: null,
            imageUrl: 'https://www.travelandleisure.com/thmb/DrKk89lVBFueSGokviOcCFPYyc8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-empty-hotel-room-BEDBUGHTL1023-93cb047ba72f48d4bc70505073ee8d10.jpg'
          },
        ],
      },
      {
        hotelName: 'North Star Mountain Escape',
        address: '750 Peakview Blvd, Boulder, CO',
        contactEmail: 'mountainescape@northstarlodgings.com',
        contactPhone: '1800500502',
        rating: 4,
        rooms: [
          {
            roomType: 'Executive Suite',
            price: 380,
            amenities: ['King Bed', 'Mountain View', 'Private Lounge', 'Complimentary Breakfast'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg'
          },
          {
            roomType: 'Deluxe Room',
            price: 220,
            amenities: ['Queen Bed', 'Courtyard View', 'Free WiFi'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: false,
            issues: null,
            imageUrl: 'https://media.istockphoto.com/id/1677784097/photo/modern-hotel-apartment-with-bathroom.webp?b=1&s=170667a&w=0&k=20&c=rKzi2VKY7EAq_Ggx7AoYtRetG_aNze-L6nk4n4uwLLg='
          },
        ],
      },
      {
        hotelName: 'North Star City Center',
        address: '400 Downtown Rd, Denver, CO',
        contactEmail: 'citycenter@northstarlodgings.com',
        contactPhone: '1800500503',
        rating: 4,
        rooms: [
          {
            roomType: 'Urban Suite',
            price: 350,
            amenities: ['Queen Beds', 'City Skyline View', 'Exclusive Lounge Access'],
            capacity: 'Quad',
            hasSeaView: false,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://www.zinus.com.sg/cdn/shop/articles/5-bedroom-design-ideas-to-transform-it-into-a-luxury-hotel-suite_980x.jpg?v=1669103710'
          },
          {
            roomType: 'Classic Room',
            price: 180,
            amenities: ['Double Bed', 'Street View', 'Complimentary Coffee'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: false,
            issues: null,
            imageUrl: 'https://images.trvl-media.com/lodging/66000000/65990000/65989800/65989792/4183572a.jpg?impolicy=fcrop&w=575&h=323&p=0.5&q=mediumHigh'
          },
        ],
      },
    ],
  },
  {
    chainName: 'Maple Leaf Resorts',
    headquartersAddress: '2020 Maple Rd, Vancouver, BC',
    numberOfHotels: 3,
    contactEmail: 'info@mapleleafresorts.com',
    contactPhone: '1800600600',
    hotels: [
      {
        hotelName: 'Maple Leaf Mountain Lodge',
        address: '303 Forest Parkway, Banff, AB',
        contactEmail: 'lodge@mapleleafresorts.com',
        contactPhone: '1800600601',
        rating: 4,
        rooms: [
          {
            roomType: 'Chalet',
            price: 500,
            amenities: ['Mountain View', 'Fireplace', 'Ski-in/Ski-out', 'Hot Tub'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://i.insider.com/5b980445672e1645d97594cb?width=700'
          },
          {
            roomType: 'Standard',
            price: 300,
            amenities: ['Two Double Beds', 'Mountain View', 'Balcony'],
            capacity: 'Quad',
            hasSeaView: false,
            isExtendable: false,
            issues: null,
            imageUrl: 'https://image-tc.galaxy.tf/wijpeg-6cmwjxzlipoftclhpzlyf2lu2/dsc04980-hdr-edit-opt_wide.jpg?crop=0%2C101%2C1920%2C1080'
          },
        ],
      },

  {
        hotelName: 'Maple Leaf Lakeside Inn',
        address: '120 Lakeview Drive, Whistler, BC',
        contactEmail: 'lakesideinn@mapleleafresorts.com',
        contactPhone: '1800600602',
        rating: 3,
        rooms: [
          {
            roomType: 'Lakeview Suite',
            price: 320,
            amenities: ['King Bed', 'Panoramic Lake View', 'Balcony'],
            capacity: 'Double',
            hasSeaView: true, // Assuming lake view is categorized as sea view
            isExtendable: true,
            issues: null,
            imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/140127103354-peninsula-shanghai-actual-river-room.jpg?q=w_3320,h_2041,x_0,y_0,c_fill/h_618'
          },
          {
            roomType: 'Cozy Cottage',
            price: 280,
            amenities: ['Fireplace', 'Lake Access', 'Kitchenette'],
            capacity: 'Quad',
            hasSeaView: true, // Assuming lake view is categorized as sea view
            isExtendable: true,
            issues: null,
            imageUrl: 'https://i.pinimg.com/550x/d7/1f/79/d71f79e1e76221f35f5911488aeb8f0c.jpg'
          },
        ],
      },
      {
        hotelName: 'Maple Leaf Urban Hotel',
        address: '101 City Road, Vancouver, BC',
        contactEmail: 'urban@mapleleafresorts.com',
        contactPhone: '1800600603',
        rating: 4,
        rooms: [
          {
            roomType: 'City Suite',
            price: 400,
            amenities: ['King Bed', 'High-rise View', 'Minibar'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://st3.depositphotos.com/33288918/35458/i/450/depositphotos_354585158-stock-photo-interior-modern-luxury-bedroom-marble.jpg'
          },
          {
            roomType: 'Economy Room',
            price: 150,
            amenities: ['Twin Beds', 'Compact Size', 'Free WiFi'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: false,
            issues: null,
            imageUrl: 'https://media.nomadicmatt.com/2023/cheaphotelrooms.jpg'
          },
        ],
      },
      // Two more hotels can be added here following the pattern...
    ],
  },
  {
    chainName: 'Urban Getaway Hotels',
    headquartersAddress: '400 City Center Blvd, New York, NY',
    numberOfHotels: 2,
    contactEmail: 'stay@urbangetawayhotels.com',
    contactPhone: '1800700700',
    hotels: [
      {
        hotelName: 'Urban Getaway Downtown',
        address: '500 Urban St, Chicago, IL',
        contactEmail: 'downtown@urbangetawayhotels.com',
        contactPhone: '1800700701',
        rating: 4,
        rooms: [
          {
            roomType: 'Penthouse Suite',
            price: 700,
            amenities: ['City View', 'King Bed', 'Private Balcony', 'Butler Service'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://www.ca.kayak.com/rimg/kimg/a3/dd/d1773a9ca91e9374.jpg?width=1366&height=768&crop=true'
          },
          {
            roomType: 'Deluxe',
            price: 400,
            amenities: ['City View', 'Queen Bed', 'Work Desk', 'Free WiFi'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: false,
            issues: null,
            imageUrl: 'https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/C/2/%7BAC2EB672-380C-4D28-85DE-146B6BB047E5%7DKHHK_RM_Club_City_View_1920x940.jpg'
          },
        ],
      },
      {
        hotelName: 'Urban Getaway Capitol Vista',
        address: '250 Capitol Avenue, Washington, D.C.',
        contactEmail: 'capitol@urbangetawayhotels.com',
        contactPhone: '1800700702',
        rating: 5,
        rooms: [
          {
            roomType: 'Executive Suite',
            price: 800,
            amenities: ['Capitol View', 'King Bed', 'Executive Lounge Access', 'Complimentary Limousine Service'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://img.freepik.com/premium-photo/random-best-photo_865967-74897.jpg'
          },
          {
            roomType: 'Diplomat Deluxe',
            price: 600,
            amenities: ['City View', 'Queen Bed', 'Diplomatic Concierge', 'Priority Booking for Events'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://img.freepik.com/premium-photo/random-best-photo_865967-74468.jpg'
          },
          {
            roomType: 'Ambassador Pod',
            price: 300,
            amenities: ['High-Speed Internet', 'Workspace', 'Access to Business Center', 'Complimentary Printing Services'],
            capacity: 'Single',
            hasSeaView: false,
            isExtendable: false,
            issues: null,
            imageUrl: 'https://images.trvl-media.com/lodging/79000000/78280000/78270400/78270336/233e389d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium'
          },
        ],
      },

    ],
  },
  // Please add more chains following the same pattern...

// Adding to the existing hotelChains array
{
  chainName: 'Cascadia Boutique Retreats',
  headquartersAddress: '870 Pine St, Seattle, WA',
  numberOfHotels: 3,
  contactEmail: 'hello@cascadiaretreats.com',
  contactPhone: '1800800800',
  hotels: [
    {
      hotelName: 'Cascadia Mountain Villa',
      address: '789 Peak Rd, Aspen, CO',
      contactEmail: 'mountain@cascadiaretreats.com',
      contactPhone: '1800800801',
      rating: 5,
      rooms: [
        {
          roomType: 'Deluxe Suite',
          price: 600,
          amenities: ['Mountain View', 'King Bed', 'Private Jacuzzi', 'Fireplace', 'Complimentary Ski Passes'],
          capacity: 'Double',
          hasSeaView: false,
          isExtendable: true,
          issues: null,
          imageUrl: 'https://altitudecontrol.com/wp-content/uploads/2022/02/7132_hotel.jpg'
        },
        {
          roomType: 'Cozy Cabin',
          price: 400,
          amenities: ['Forest View', 'Queen Bed', 'Wood Stove'],
          capacity: 'Double',
          hasSeaView: false,
          isExtendable: false,
          issues: null,
          imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/19/c3/a1/c1/forest-view-suite.jpg'
        },
      ],
    },
    
    {
      hotelName: 'Cascadia Riverside Cottage',
      address: '60 River Rd, Portland, OR',
      contactEmail: 'riverside@cascadiaretreats.com',
      contactPhone: '1800800802',
      rating: 5,
      rooms: [
        {
          roomType: 'Riverside Bungalow',
          price: 500,
          amenities: ['River View', 'Private Dock', 'Gourmet Kitchen'],
          capacity: 'Family',
          hasSeaView: false,
          isExtendable: true,
          issues: null,
          imageUrl: 'https://www.themanual.com/wp-content/uploads/sites/9/2023/07/the-phoenician-luxury-collection-hotel-scottsdale-bedroom-suite.jpg?fit=800%2C800&p=1'
        },
        {
          roomType: 'Garden Room',
          price: 250,
          amenities: ['Garden Access', 'Queen Bed', 'Patio'],
          capacity: 'Double',
          hasSeaView: false,
          isExtendable: false,
          issues: null,
          imageUrl: 'https://img2.chinadaily.com.cn/images/201811/16/5bee5c66a310eff36906b2f7.jpeg'
        },
      ],
    },
    {
      hotelName: 'Cascadia Riverside Escape',
      address: '1020 River Run, Spokane, WA',
      contactEmail: 'escape@cascadiaretreats.com',
      contactPhone: '1800800802',
      rating: 4,
      rooms: [
        {
          roomType: 'Riverside Suite',
          price: 550,
          amenities: ['Riverfront View', 'Private Balcony', 'Spa Tub', 'Room Service', 'Exclusive Fishing Tours'],
          capacity: 'Double',
          hasSeaView: false, // Since it's a river view
          isExtendable: true,
          issues: null,
          imageUrl: 'https://t3.ftcdn.net/jpg/04/16/48/08/360_F_416480811_HmtgLEq1GLmqy0WpKuAfuaYFn7u08IyF.jpg'
        },
        {
          roomType: 'Explorer Room',
          price: 350,
          amenities: ['Nature View', 'Queen Bed', 'Hiking Guide', 'Complimentary Park Pass'],
          capacity: 'Double',
          hasSeaView: false,
          isExtendable: false,
          issues: null,
          imageUrl: 'https://media.istockphoto.com/id/1299710067/photo/double-bedroom-with-sea-view.jpg?s=612x612&w=0&k=20&c=LPNC-aqrsOsgxU8eqPcR38ACIOIjqAmh0VSKclIa2gs='
        },
        {
          roomType: 'Adventurer Bunk',
          price: 200,
          amenities: ['Shared Room', 'Bunk Beds', 'Personal Lockers', 'Guided Nature Walks'],
          capacity: '4 People',
          hasSeaView: false,
          isExtendable: false,
          issues: null,
          imageUrl: 'https://media.istockphoto.com/id/1756553862/photo/modern-luxury-hotel-room.webp?b=1&s=170667a&w=0&k=20&c=kA4TyQjo7S_oVJna96QKMzrPeCQvYBweLG72FLVoXaU='
        },
      ],
    },
  ],
},
{
  chainName: 'Lakeside Leisure Resorts',
  headquartersAddress: '55 Waterfront Ave, Orlando, FL',
  numberOfHotels: 4,
  contactEmail: 'contact@lakesideleisure.com',
  contactPhone: '1800900900',
  hotels: [
    {
      hotelName: 'Lakeside Leisure Orlando',
      address: '101 Lakeview St, Orlando, FL',
      contactEmail: 'orlando@lakesideleisure.com',
      contactPhone: '1800900901',
      rating: 4,
      rooms: [
        {
          roomType: 'Family Suite',
          price: 350,
          amenities: ['Lake View', 'Two Queen Beds', 'Balcony', 'Complimentary Breakfast', 'Shuttle Service to Theme Parks'],
          capacity: 'Quad',
          hasSeaView: false,
          isExtendable: true,
          issues: null,
          imageUrl: 'https://image-tc.galaxy.tf/wijpeg-ajeblqc7dsfyn6lwqmdso6vo9/west-tower-lakeview-two-queen-beds_wide.jpg?crop=29%2C0%2C1742%2C980'
        },
        {
          roomType: 'Standard Room',
          price: 200,
          amenities: ['Garden View', 'King Bed', 'Free WiFi'],
          capacity: 'Double',
          hasSeaView: false,
          isExtendable: false,
          issues: null,
          imageUrl: 'https://www.bahiahotel.com/sites/default/files/2020-07/gallery_garden-room-king.jpg'
        },
      ],
    },
    {
      hotelName: 'Lakeside Leisure Vista',
      address: '88 Horizon Line, Orlando, FL',
      contactEmail: 'vista@lakesideleisure.com',
      contactPhone: '1800900902',
      rating: 3,
      rooms: [
        {
          roomType: 'Vista Suite',
          price: 300,
          amenities: ['Lake View', 'Balcony', 'Mini Bar', 'Complimentary Bike Rental'],
          capacity: 'Double',
          hasSeaView: false, // Assuming this refers to a lake view
          isExtendable: false,
          issues: null,
          imageUrl: 'https://i.insider.com/5b98043f672e1645d97594a1?width=750&format=jpeg&auto=webp'
        },
        {
          roomType: 'Vista Double',
          price: 200,
          amenities: ['Garden View', 'Two Double Beds', 'Access to Boat Rentals'],
          capacity: 'Quad',
          hasSeaView: false,
          isExtendable: true,
          issues: null,
          imageUrl: 'https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl9jrj1iu2758uqooalqmj7ga/public'
        },
      ],
    },
    {
      hotelName: 'Lakeside Leisure Gardens',
      address: '11 Garden Path, Orlando, FL',
      contactEmail: 'gardens@lakesideleisure.com',
      contactPhone: '1800900903',
      rating: 4,
      rooms: [
        {
          roomType: 'Garden Suite',
          price: 320,
          amenities: ['Private Garden', 'King Bed', 'Hot Tub', 'Complimentary Evening Snacks'],
          capacity: 'Double',
          hasSeaView: false,
          isExtendable: true,
          issues: null,
          imageUrl: 'https://png.pngtree.com/background/20230823/original/pngtree-natural-ambience-infused-modern-hotel-room-with-indoor-garden-3d-rendering-picture-image_4789808.jpg'
        },
        {
          roomType: 'Standard Garden Room',
          price: 210,
          amenities: ['Garden View', 'Queen Bed', 'Free WiFi', 'Breakfast Included'],
          capacity: 'Double',
          hasSeaView: false,
          isExtendable: false,
          issues: null,
          imageUrl: 'https://media.istockphoto.com/id/1050564510/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.webp?b=1&s=170667a&w=0&k=20&c=GMmTKXJGXpNLRuDPInhn_1Ll_HIdR10axKKcbOSCfYo='
        },
      ],
    },
    {
      hotelName: 'Lakeside Leisure Bayfront',
      address: '330 Bayshore Blvd, Orlando, FL',
      contactEmail: 'bayfront@lakesideleisure.com',
      contactPhone: '1800900904',
      rating: 5,
      rooms: [
        {
          roomType: 'Bayfront Exclusive',
          price: 400,
          amenities: ['Bay View', 'Private Balcony', 'Personal Concierge', 'Limo Service'],
          capacity: 'Double',
          hasSeaView: true, // Assuming this refers to a bay view
          isExtendable: true,
          issues: null,
          imageUrl: 'https://danaberez.com/wp-content/uploads/2021/02/hotels-with-a-view-nyc-99.jpg'
        },
        {
          roomType: 'Bayfront Deluxe',
          price: 280,
          amenities: ['Bay View', 'King Bed', 'Access to Exclusive Lounge', 'Priority Reservations for Water Activities'],
          capacity: 'Double',
          hasSeaView: true,
          isExtendable: false,
          issues: null,
          imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/6522927d5394bc2b7f10c8ee/one/960x0.jpg?height=474&width=711&fit=bounds'
        },
      ],
    },
  ],
},
];

export default hotelChains;
