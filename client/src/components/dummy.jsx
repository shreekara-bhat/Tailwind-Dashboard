{
  /* <Link to="/GridBox">
            <ListItem className="py-2">
              <ListItemPrefix>
                <CircleStackIcon className="h-5 w-5 mr-3 fill-blue-500 " />
              </ListItemPrefix>
              <ListItemSuffix>
                <span className="text-blue-900 font-semibold hover:text-blue-500">
                  Components
                </span>
              </ListItemSuffix>
            </ListItem>
          </Link>

          <Link to="/ValueCalc">
            <ListItem className="py-2">
              <ListItemPrefix>
                <BookmarkSquareIcon className="h-5 w-5 mr-3 fill-blue-500" />
              </ListItemPrefix>
              <ListItemSuffix>
                <span className="text-blue-900 font-semibold hover:text-blue-500">
                  Forms
                </span>
              </ListItemSuffix>
            </ListItem>
          </Link>

          <Link to="/InputBox">
            <ListItem className="py-2">
              <ListItemPrefix>
                <TableCellsIcon className="h-5 w-5 mr-3 fill-blue-500" />
              </ListItemPrefix>
              <ListItemSuffix>
                <span className="text-blue-900 font-semibold hover:text-blue-500">
                  Tables
                </span>
              </ListItemSuffix>
            </ListItem>
          </Link>
          <ListItem className="py-2">
            <ListItemPrefix>
              <ChartBarIcon className="h-5 w-5 mr-3 fill-blue-500" />
            </ListItemPrefix>
            <ListItemSuffix>
              <span className="text-blue-900 font-semibold hover:text-blue-500">
                Charts
              </span>
            </ListItemSuffix>
          </ListItem>
          <ListItem className="py-2">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5 mr-3 fill-blue-500" />
            </ListItemPrefix>
            <ListItemSuffix>
              <span className="text-blue-900 font-semibold hover:text-blue-500">
                Icons
              </span>
            </ListItemSuffix>
          </ListItem>
        </List>
        <span className="px-3 mt-3 mb-1 text-gray-400 font-semibold text-xs">
          PAGES
        </span>
        <List>
          <ListItem className="py-2">
            <ListItemPrefix>
              <UserIcon className="h-5 w-5 mr-3 fill-blue-500" />
            </ListItemPrefix>
            <ListItemSuffix>
              <span className="text-blue-900 font-semibold hover:text-blue-500">
                Profile
              </span>
            </ListItemSuffix>
          </ListItem>
          <ListItem className="py-2">
            <ListItemPrefix>
              <QuestionMarkCircleIcon className="h-5 w-5 mr-3 fill-blue-500 " />
            </ListItemPrefix>
            <ListItemSuffix>
              <span className="text-blue-900 font-semibold hover:text-blue-500">
                F.A.Q
              </span>
            </ListItemSuffix>
          </ListItem>
          <ListItem className="py-2">
            <ListItemPrefix>
              <EnvelopeIcon className="h-5 w-5 mr-3 fill-blue-500" />
            </ListItemPrefix>
            <ListItemSuffix>
              <span className="text-blue-900 font-semibold hover:text-blue-500">
                Contact
              </span>
            </ListItemSuffix>
          </ListItem>
          <ListItem className="py-2">
            <ListItemPrefix>
              <IdentificationIcon className="h-5 w-5 mr-3 fill-blue-500" />
            </ListItemPrefix>
            <ListItemSuffix>
              <span className="text-blue-900 font-semibold hover:text-blue-500">
                Register
              </span>
            </ListItemSuffix>
          </ListItem>
          <ListItem className="py-2">
            <ListItemPrefix>
              <ArrowRightEndOnRectangleIcon className="h-5 w-5 mr-3 fill-blue-500" />
            </ListItemPrefix>
            <ListItemSuffix>
              <span className="text-blue-900 font-semibold hover:text-blue-500">
                Login
              </span>
            </ListItemSuffix>
          </ListItem>
          <ListItem className="py-2">
            <ListItemPrefix>
              <MinusCircleIcon className="h-5 w-5 mr-3 fill-blue-500" />
            </ListItemPrefix>
            <ListItemSuffix>
              <span className="text-blue-900 font-semibold hover:text-blue-500">
                Error 404
              </span>
            </ListItemSuffix>
          </ListItem>
          <ListItem className="py-2">
            <ListItemPrefix>
              <DocumentIcon className="h-5 w-5 mr-3 fill-blue-500" />
            </ListItemPrefix>
            <ListItemSuffix>
              <span className="text-blue-900 font-semibold hover:text-blue-500">
                Blank
              </span>
            </ListItemSuffix>
          </ListItem> */
}

// Sidebar

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Drawer,
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
//   List,
//   ListItem,
//   ListItemPrefix,
//   ListItemSuffix,
//   Typography,
// } from "@material-tailwind/react";
// import {
//   PresentationChartBarIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
//   Squares2X2Icon,
//   CircleStackIcon,
//   BookmarkSquareIcon,
//   TableCellsIcon,
//   ChartBarIcon,
//   Cog6ToothIcon,
//   UserIcon,
//   QuestionMarkCircleIcon,
//   EnvelopeIcon,
//   IdentificationIcon,
//   ArrowRightEndOnRectangleIcon,
//   MinusCircleIcon,
//   DocumentIcon,
// } from "@heroicons/react/24/solid";

// export default function Sidebar({ open }) {
//   const drawerWidth = "35em";
//   const [isAccordionOpen, setIsAccordionOpen] = useState(0);

//   const handleAccordionOpen = (value) => {
//     setIsAccordionOpen(isAccordionOpen === value ? 0 : value);
//   };
//   return (
//     <Drawer
//       open={open}
//       onClose={() => {}}
//       className=" top-[4rem] py-2 pl-1 h-[calc(100vh-4em)]  border-r bg-white border-gray-300 shadow-lg font-saira"
//     >
//       {/*  */}
//       <aside>
//         <List>
//           <Link to="/">
//             <ListItem className="py-2">
//               <ListItemPrefix>
//                 <Squares2X2Icon className="h-5 w-5 mr-3 fill-blue-500" />
//               </ListItemPrefix>
//               <ListItemSuffix>
//                 <span className="text-blue-900 font-semibold hover:text-blue-500">
//                   Dashboard
//                 </span>
//               </ListItemSuffix>
//             </ListItem>
//           </Link>

//           <Link to="/GridBox">
//             <List>
//               <Accordion
//                 open={isAccordionOpen === 1}
//                 icon={
//                   <ChevronDownIcon
//                     strokeWidth={2.5}
//                     className={`mx-auto h-4 w-4 transition-transform ${
//                       isAccordionOpen === 1 ? "rotate-180" : ""
//                     }`}
//                   />
//                 }
//               >
//                 <ListItem className="p-0" selected={isAccordionOpen === 1}>
//                   <AccordionHeader
//                     onClick={() => handleAccordionOpen(1)}
//                     className="border-b-0 p-3"
//                   >
//                     <ListItemPrefix>
//                       <PresentationChartBarIcon className="h-5 w-5" />
//                     </ListItemPrefix>
//                     <Typography
//                       color="blue-gray"
//                       className="mr-auto font-normal"
//                     >
//                       Dashboard
//                     </Typography>
//                   </AccordionHeader>
//                 </ListItem>
//                 <AccordionBody className="py-1">
//                   <List className="p-0">
//                     <ListItem>
//                       <ListItemPrefix>
//                         <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
//                       </ListItemPrefix>
//                       Analytics
//                     </ListItem>
//                     <ListItem>
//                       <ListItemPrefix>
//                         <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
//                       </ListItemPrefix>
//                       Reporting
//                     </ListItem>
//                     <ListItem>
//                       <ListItemPrefix>
//                         <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
//                       </ListItemPrefix>
//                       Projects
//                     </ListItem>
//                   </List>
//                 </AccordionBody>
//               </Accordion>
//             </List>
//           </Link>
//         </List>
//       </aside>
//     </Drawer>
//   );
// }
