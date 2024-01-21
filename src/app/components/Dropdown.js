import React, { useState } from 'react'
import { MdOutlineKeyboardDoubleArrowRight, MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Dropdown = () => {
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    {
        label: 'Dashboard',
        subItems: ['Analytics', 'Overview'],
    },
    {
        label: 'Orders',
        subItems: ['Pending Orders', 'Processed Orders'],
    },
    {
        label: 'Manage Country',
        subItems: ['Add Country', 'Edit Country'],
    },
    {
        label: 'Total Earning',
        subItems: ['Revenue Overview', 'Earning Statistics'],
    },
    {
        label: 'Manage Categories',
        subItems: ['Add Category', 'Edit Category'],
    },
    {
        label: 'Products',
        subItems: ['View Products', 'Manage Inventory'],
    },
    {
        label: 'Affiliate Products',
        subItems: ['Affiliate Dashboard', 'Product Promotions'],
    },
    {
        label: 'Bulk Product Upload',
        subItems: ['Upload Products', 'Import/Export'],
    },
    {
        label: 'Product Discussion',
        subItems: ['Customer Reviews', 'Discussion Forum'],
    },
    {
        label: 'Set Coupons',
        subItems: ['Create Coupons', 'Manage Discounts'],
    },
    {
        label: 'Customers',
        subItems: ['Customer List', 'Account Management'],
    },
    {
        label: 'Riders',
        subItems: ['Delivery Status', 'Rider Management'],
    },
    {
        label: 'Customer Deposits',
        subItems: ['Deposit History', 'Refund Requests'],
    },
    {
        label: 'Vendors',
        subItems: ['Vendor List', 'Approval Requests'],
    },
    {
        label: 'Vector Subscriptions',
        subItems: ['Subscription Plans', 'User Subscriptions'],
    },
    {
        label: 'Vector Verifications',
        subItems: ['Verify Users', 'Verification Logs'],
    },
    {
        label: 'Vendor Subscription Plans',
        subItems: ['Subscription Details', 'Plan Management'],
    },
    {
        label: 'Messages',
        subItems: ['Inbox', 'Sent Messages'],
    },
    {
        label: 'Blog',
        subItems: ['Create Post', 'Manage Posts'],
    },
    {
        label: 'General Settings',
        subItems: ['Site Configuration', 'Admin Preferences'],
    },
    {
        label: 'Home Page Settings',
        subItems: ['Layout Options', 'Featured Content'],
    },
    {
        label: 'Menu Page Settings',
        subItems: ['Navigation Setup', 'Custom Menus'],
    },
    {
        label: 'Email Settings',
        subItems: ['Notification Settings', 'Email Templates'],
    },
    {
        label: 'Payment Settings',
        subItems: ['Payment Gateways', 'Transaction History'],
    },
    {
        label: 'Social Settings',
        subItems: ['Social Media Links', 'Integration Options'],
    },
    {
        label: 'Language Settings',
        subItems: ['Language Preferences', 'Translation Management'],
    },
    {
        label: 'Font Option',
        subItems: ['Typography Settings', 'Font Customization'],
    },
    {
        label: 'SEO Tools',
        subItems: ['SEO Analysis', 'Meta Tags'],
    },
    {
        label: 'Manage Staffs',
        subItems: ['Add Staff', 'Staff Permissions'],
    },
    {
        label: 'Subscribers',
        subItems: ['Subscriber List', 'Newsletter Management'],
    },
    {
        label: 'Manage Roles',
        subItems: ['Role Permissions', 'Assign Roles'],
    },
    {
        label: 'Clear Cache',
        subItems: ['Clear Cache', 'Cache Settings'],
    },
    {
        label: 'Addon Manager',
        subItems: ['Install Addons', 'Addon Configuration'],
    },
    {
        label: 'System Activation',
        subItems: ['Activation Status', 'License Management'],
    }
];

  const handleItemClick = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };
  return (
    <ul className="dropdown-menu">
    {menuItems.map((menuItem, index) => {
      return(
      <>
      <li
        key={index}
        className={`p-3 flex cursor-pointer hover:bg-[#374050] justify-between ${activeItem === index ? 'active' : ''}`}
        onClick={() => handleItemClick(index)}
      >
        {menuItem.label}
        {activeItem === index ? (
          <span className="icon"><MdOutlineKeyboardDoubleArrowDown/></span>
        ) : (
          <span className="icon"><MdOutlineKeyboardDoubleArrowRight/></span>
        )}
      </li>
      {activeItem === index && (
          <ul className="sub-menu">
            {menuItem.subItems.map((subItem, subIndex) => (
              <li className='pl-6 py-2' key={subIndex}>{subItem}</li>
            ))}
          </ul>
        )}
        </>
    )})}
  </ul>
  )
}

export default Dropdown