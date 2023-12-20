import "@/app/globals.scss";
import "@/styles/pages/_settings.scss";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DeleteModal from "@/components/DeleteModal";
import arrowIcon from "@/assets/icons/arrowSettings.svg";
import editIcon from "@/assets/icons/edit.svg";
import setIcon from "@/assets/icons/set.svg";
import pastIcon from "@/assets/icons/noteSettings.svg";
import deleteIcon from "@/assets/icons/delete.svg";

const settingsList = [
  { id: 1, icon: editIcon, title: "Edit Playlists", action: "editPlaylists" },
  { id: 2, icon: setIcon, title: "Set Preferences", action: "setPreferences" },
  { id: 3, icon: pastIcon, title: "Past Events", action: "getPastEvents" },
  {
    id: 4,
    icon: deleteIcon,
    title: "Delete Account and Wipe Data",
    action: "deleteAccount",
  },
];

export default function Settings() {
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [preferences, setPreferences] = useState({ artist: "", radius: 0 });

  const router = useRouter();

  const handleDeleteAccount = async () => {
    try {
      // Perform deletion logic (replace with your actual logic)
      console.log("Deleting account...");

      // Simulating asynchronous task (replace with actual logic)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Log success
      console.log("Account deleted successfully!");
    } catch (error) {
      // Handle errors during deletion
      console.error("Error deleting account:", error);
    }
  };

  const handleCloseModal = () => {
    setDeleteModalVisible(false);
  };

  const handleItemClick = (action: string) => {
    if (action === "deleteAccount") {
      setDeleteModalVisible(true);
    } else if (action === "editPlaylists") {
      router.push("/select-playlists");
    } else if (action === "setPreferences") {
      setPreferences({ artist: "Your Artist", radius: 10 });
    } else {
      // Handle other actions
    }
  };

  return (
    <section className="settings">
      <div className={`${isDeleteModalVisible ? "opacity-30" : ""}`}>
        <NavBar />
        <h2 className="settings__title">Settings</h2>
        <div className="settings__list">
          {settingsList.map((item) => (
            <div
              className={`settings-item ${
                isDeleteModalVisible ? "pointer-events-none" : ""
              }`}
              key={item.id}
              onClick={() => handleItemClick(item.action)}
            >
              {item.action === "setPreferences" ? (
                <div className="settings-item__wrapper">
                  <Image
                    className="settings-item__icon"
                    src={item.icon}
                    alt={item.title}
                  />
                  <span className="settings-item__title">{item.title}</span>
                  <Image src={arrowIcon} alt="arrow right" />
                </div>
              ) : (
                <div className="settings-item__wrapper">
                  <Image
                    className="settings-item__icon"
                    src={item.icon}
                    alt={item.title}
                  />
                  <span className="settings-item__title">{item.title}</span>
                  <Image src={arrowIcon} alt="arrow right" />
                </div>
              )}
            </div>
          ))}
        </div>
        <Footer />
      </div>

      {isDeleteModalVisible && (
        <DeleteModal
          onDelete={handleDeleteAccount}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
