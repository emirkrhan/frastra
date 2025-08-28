"use client";

import { useState, useEffect, useRef } from "react";
import {
  BellIcon,
  ChevronDownIcon,
  CheckIcon,
  XMarkIcon,
  ClockIcon,
  UserPlusIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "success",
      title: "Payment completed",
      message: "Your subscription has been renewed successfully.",
      time: "2 min ago",
      read: false,
      icon: CheckIcon,
    },
    {
      id: 2,
      type: "info",
      title: "New team member",
      message: "Sarah Johnson joined your workspace.",
      time: "1 hour ago",
      read: false,
      icon: UserPlusIcon,
    },
    {
      id: 3,
      type: "warning",
      title: "Storage limit",
      message: "You are running low on storage space.",
      time: "3 hours ago",
      read: true,
      icon: ExclamationTriangleIcon,
    },
    {
      id: 4,
      type: "info",
      title: "System update",
      message: "New features and improvements are available.",
      time: "1 day ago",
      read: true,
      icon: InformationCircleIcon,
    },
  ]);

  const dropdownRef = useRef(null);
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "success":
        return "text-green-400";
      case "warning":
        return "text-yellow-400";
      case "error":
        return "text-red-400";
      default:
        return "text-blue-400";
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="relative inline-flex items-center justify-center gap-2 w-full rounded-md px-3 py-1.5 bg-tertiary text-paragraph-size font-paragraph text-paragraph transition-colors"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <BellIcon className="size-4" />
          Notifications
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-danger text-tips text-tips-size rounded-full h-5 w-5 flex items-center justify-center">
              {unreadCount}
            </span>
          )}
          <ChevronDownIcon
            className={`-mr-1 ml-1 size-4 transform transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        className={`transition-all duration-200 ease-out origin-top-right absolute right-0 mt-1.5 w-80 rounded-xl shadow-lg bg-tertiary ring-1 ring-border focus:outline-none z-10 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-paragraph-size font-paragraph text-paragraph">
              Notifications
            </h3>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-tips-size text-tips transition-colors"
              >
                Mark all as read
              </button>
            )}
          </div>
        </div>

        {/* Notifications List */}
        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="px-4 py-8 text-center">
              <BellIcon className="mx-auto h-8 w-8 text-descriptive" />
              <p className="mt-2 text-paragraph-size text-paragraph">
                No notifications
              </p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`px-4 py-3 hover:bg-secondary transition-colors border-l-2 ${
                  notification.read
                    ? "border-transparent opacity-70"
                    : "border-border bg-secondary"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex-shrink-0 ${getTypeColor(
                      notification.type
                    )}`}
                  >
                    <notification.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-paragraph-size font-paragraph text-paragraph">
                          {notification.title}
                        </p>
                        <p className="text-paragraph-size text-paragraph mt-1">
                          {notification.message}
                        </p>
                        <div className="flex items-center gap-1 mt-2">
                          <ClockIcon className="h-3 w-3 text-descriptive" />
                          <span className="text-tips-size text-tips">
                            {notification.time}
                          </span>
                        </div>
                      </div>
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="flex-shrink-0 p-1 text-descriptive hover:text-white transition-colors"
                          title="Mark as read"
                        >
                          <XMarkIcon className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="px-4 py-3 border-t border-border">
            <button className="w-full text-center text-tips-size text-tips transition-colors">
              View all notifications
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
