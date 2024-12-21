// GenerateUsername.js
export const generateUsername = (setNewStory) => {
    const wordList1 = [
        "Night", "Dark", "Shadow", "Misty", "Ghost", "Lunar", "Dream", "Eclipse", "Twilight", "Dusk", 
        "Phantom", "Wraith", "Specter", "Fog", "Chill", "Nocturnal", "Midnight", "Obscure", "Haunt", 
        "Moonlight", "Gloom", "Silhouette", "Cloak", "Hollow", "Enigma", "Veil", "Shiver", "Eerie", 
        "Mystery", "Echo", "Whisper", "Pale", "Cryptic", "Nightmare", "Haze", "Starless", "Dread", 
        "Grave", "Crypt", "Raven", "Bone", "Ethereal", "Vanish", "Wailing", "Haze", "Void", "Frost", 
        "Bleak", "Cursed", "Ancient", "Eerie", "Lurking", "Perilous", "Dusky", "Blood", "Creeping", 
        "Horror", "Chilling", "Ominous", "Moonlit", "Whispering", "Foreboding", "Ashen", "Wicked", 
        "Sinister", "Malevolent", "Spectral", "Horrid", "Infernal", "Desolate", "Barren", "Haunting", 
        "Oblivion", "Dreary", "Frozen", "Shadowy", "Macabre", "Horrific", "Twisted", "Dreadful", "Terrifying", 
        "Eclipsed", "Bleeding", "Unseen", "Shrouded", "Vanished", "Frightening", "Wicked", "Creepy", 
        "Gory", "Darkened", "Fearful", "Grim", "Terrorizing", "Harrowing", "Ghostly", "Haunting"
    ];
      
    const connectors = [
        "from", "of", "the", "within", "beneath", "beyond", "between", "under", "above", 
        "into", "across", "against", "alongside", "in", "upon", "through", "near", 
        "behind", "amidst", "over", "by", "toward", "around", "atop", "throughout", 
        "after", "before", "within", "among", "on", "along", "outside", "past", "inside", 
        "about", "below", "beside", "towards", "alongside", "around", "with", "off", 
        "beside", "amid", "toward", "around", "above", "underneath", "without", 
        "alongside", "throughout", "around", "amongst", "nearby", "behind", "atop", 
        "across", "towards", "around", "inside", "beneath", "over", "amid", "amongst"
    ];
      
    const wordList2 = [
        "Slasher", "Haunter", "Screamer", "Reaper", "Specter", "Wraith", "Phantom", "Shiver", 
        "Nightmare", "Tormentor", "Creeper", "Lurker", "Banshee", "Ghoul", "Poltergeist", "Shade", 
        "Shadow", "Dread", "Horror", "Butcher", "Possessor", "Demon", "Fiend", "Spirit", "Apparition", 
        "Hollow", "Ghast", "Watcher", "Guardian", "Husk", "Beast", "Harbinger", "Seeker", "Stalker", 
        "Hunter", "Ravager", "Terror", "Warden", "Crusher", "Mourner", "Devourer", "Lamenter", 
        "Wailer", "Screamer", "Tormentor", "Lurker", "Shadower", "Specter", "Possessor", "Vampire", 
        "Lament", "Beholder", "Spectral", "Haunter", "Ghastly", "Fiendish", "Malevolent", "Phantasmal", 
        "Eerie", "Appalling", "Uncanny", "Dreadful", "Creepy", "Terrifying", "Wicked", "Demonic", 
        "Sinister", "Ravenous", "Macabre", "Horrid", "Infernal", "Perilous", "Ominous", "Vengeful", 
        "Twisted", "Grim", "Cursed", "Obscure", "Chilling", "Bloodcurdling", "Evil", "Gory", "Desolate", 
        "Phantom", "Tormenter", "Desecrator", "Mourner", "Watcher", "Overseer", "Devourer"
    ];
  
    // Lógica para generar el nombre
    const randomWord1 = wordList1[Math.floor(Math.random() * wordList1.length)];
    const randomConnector = connectors[Math.floor(Math.random() * connectors.length)];
    const randomWord2 = wordList2[Math.floor(Math.random() * wordList2.length)];
    const randomNumber = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
  
    const username = `${randomWord1}_${randomConnector}_${randomWord2}_${randomNumber}`;
  
    // Actualiza el estado del formulario
    setNewStory((prevStory) => ({
        ...prevStory,
        name: username,
    }));
};