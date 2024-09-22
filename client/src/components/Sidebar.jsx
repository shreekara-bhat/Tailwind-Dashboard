/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  Accordion,
  AccordionHeader,
  AccordionBody,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Squares2X2Icon,
  CircleStackIcon,
  BookmarkSquareIcon,
  TableCellsIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  UserIcon,
  QuestionMarkCircleIcon,
  EnvelopeIcon,
  IdentificationIcon,
  ArrowRightEndOnRectangleIcon,
  MinusCircleIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";

// eslint-disable-next-line react/prop-types
export default function Sidebar({ open }) {
  // const drawerWidth = "35em";
  // const [dashboardOpen, setDashboardOpen] = useState(false);
  const [ecommerceOpen, setEcommerceOpen] = useState(false);
  const [bldgInfo, setBldgInfo] = useState(false);

  // const toggleDashboard = () => setDashboardOpen(!dashboardOpen);
  const toggleEcommerce = () => setEcommerceOpen(!ecommerceOpen);
  const toggleBldgInfo = () => setBldgInfo(!bldgInfo);

  return (
    <Drawer
      open={open}
      onClose={() => {}}
      className=" top-[4rem] py-2 h-[calc(100vh-4em)] border-r bg-white border-gray-300 shadow-lg"
    >
      {/*  */}
      <aside>
        <div>
          <List className="rounded-none py-[0.25rem] -mb-1">
            <ListItem className="py-[0.25rem] mb-1">
              <ListItemPrefix className="">
                <Squares2X2Icon className="h-5 w-5 mr-3 fill-blue-500" />
              </ListItemPrefix>
              <ListItemSuffix>
                <span className=" -ml-2 text-blue-900 text-base hover:text-blue-500">
                  Dashboard
                </span>
              </ListItemSuffix>
            </ListItem>
          </List>
        </div>

        {/* Accordion One */}
        <div className="-mb-2">
          <List className="py-[0.25rem]">
            <Accordion
              open={ecommerceOpen} // Bind open state
              className="transition-all duration-500 ease-in-out"
            >
              <ListItem className="p-0" selected={ecommerceOpen}>
                <AccordionHeader
                  onClick={toggleEcommerce} // Toggle on click
                  className="border-b-0 p-3 flex items-center"
                >
                  <ListItemPrefix className="">
                    <PresentationChartBarIcon className="h-5 w-5 mr-2 fill-blue-500" />
                  </ListItemPrefix>
                  <span className="-ml-8 text-blue-900 text-base hover:text-blue-500">
                    Society&nbsp;Registration
                  </span>
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-4 w-4 transition-transform ${
                      ecommerceOpen ? "rotate-180" : ""
                    }`}
                  />
                </AccordionHeader>
              </ListItem>
              <AccordionBody
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  ecommerceOpen ? "max-h-screen" : "max-h-0"
                }`}
                style={{
                  height: ecommerceOpen ? "auto" : "0",
                }}
              >
                <List className="p-0">
                  <ListItem className="-mb-4">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>

                    <Link to="/GridBox">
                      <span className="text-blue-900 text-base hover:text-blue-500">
                        Dashboard
                      </span>
                    </Link>
                  </ListItem>
                  <ListItem className="-mb-4">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/InputBox">
                      <span className="text-blue-900 text-base hover:text-blue-500">
                        Reporting
                      </span>
                    </Link>{" "}
                  </ListItem>
                  <ListItem className="-mb-4">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/ValueCalc">
                      <span className="text-blue-900 text-base hover:text-blue-500">
                        Projects
                      </span>
                    </Link>
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>{" "}
          </List>
        </div>

        {/* Accordion Two */}
        <div className="">
          <List className=" py-[0.25rem]">
            <Accordion
              open={bldgInfo} // Bind open state
              className="transition-all duration-500"
            >
              <ListItem className="p-0" selected={bldgInfo}>
                <AccordionHeader
                  onClick={toggleBldgInfo} // Toggle on click
                  className="border-b-0 p-3 flex items-center"
                >
                  <ListItemPrefix className="">
                    <PresentationChartBarIcon className="h-5 w-5 mr-2 fill-blue-500" />
                  </ListItemPrefix>
                  <span className=" -ml-8 text-blue-900 text-base hover:text-blue-500">
                    Building&nbsp;Information
                  </span>
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-4 w-4 transition-transform ${
                      bldgInfo ? "rotate-180" : ""
                    }`}
                  />
                </AccordionHeader>
              </ListItem>
              <AccordionBody
                className={`${bldgInfo ? "block" : "hidden"} py-1`}
              >
                <List className="p-0">
                  <ListItem className="-mb-4">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Link to="/EditableTableCells">
                      <span className="text-blue-900 text-base hover:text-blue-500">
                        Dashboard
                      </span>
                    </Link>
                  </ListItem>
                  <ListItem className="-mb-4">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Reporting
                  </ListItem>
                  <ListItem className="-mb-4">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Projects
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>{" "}
          </List>
        </div>
      </aside>
    </Drawer>
  );
}

// Society & nbsp;
// Registration;
