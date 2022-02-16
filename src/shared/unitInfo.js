/**
 * FORMAT, do not forget COMMAS
 * 
 * TODO: TW Images
 * TODO: Add Evo Mat 1 to 5, and Amount for each 
 * 
 * {
        id: ,
        name: ,
        attribute: ,
        type: ,
        image: 
            {
                detail5: ,
                detailawk: "/db/Units/Detail/unit_detail_.png",
                thumb5: ,
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    }

    /db/Mines/thumbnail/physLB.png
    /db/Mines/thumbnail/magLB.png
    /db/Mines/thumbnail/defLB.png
    /db/Mines/thumbnail/healLB.png
    /db/Mines/thumbnail/suppLB.png

 */

const UnitInformation = [
    { //Clyde - Complete
        id: 100016111,
        name: "Clyde",
        attribute: "Fire",
        type: "Human",
        image: 
            {
                detailawk: "/db/Units/Detail/unit_detail_100016111.png",
                thumb2: "/db/Units/Thumbnail/unit_thumbnail_100012111.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100013111.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100014111.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100015111.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100016111.png",
                detail2: "/db/Units/Detail/unit_detail_100012111.png",
                detail3: "/db/Units/Detail/unit_detail_100013111.png",
                detail4: "/db/Units/Detail/unit_detail_100014111.png",
                detail5: "/db/Units/Detail/unit_detail_100015111.png"
            },
        skillset: 
            {
                skill: "7s CT - 2000% Fire DMG (PHY).",
                skillbreak: 1500,
                arts: "10000% Fire DMG (PHY). Chance to inflict Burn.",
                artsbreak: 2200,
                truearts: "22000% Fire DMG (PHY). Chance to inflict Burn. Increase Allies' Arts by 20. ",
                trueartsbreak: 4800
            },
        passive: 
            {
                ability1: "Increase Fire Allies' BE generation by 20%.",
                ability2: "Increase Fire Allies' DMG by 30%."
            },
        stats: 
            {
                hp: 6960,
                hpplus: 999,
                atk: 2772,
                atkplus: 425,
                def: 2138,
                defplus: 330
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 3,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire1.png",
                    mat2amt: 2
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat3amt: 1,
                    hover3: "Degilmagna"
                }
            },
        trueweapon: 
            {
                name: "Gradion",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "/db/Equipment/Detail/item_detail_103371.png",
                skill: "60s CT - 7000% Fire DMG (PHY). For 8s, increase own Critical Rate by 100% against Burned Enemies.",
                skillbreak: 1600,
                passive: 
                    {
                        ability1: "When equipped by Clyde, increase DMG by 75% and increase Arts Gauge by 3/s.",
                        ability2: "Increase DMG to Earth Enemies by 25%."
                    }
            },
        lore: 
            {
                evo2: "One of the 3 Blade Masters who fought in the Ancient War. Trained in the sword from a young age, and was as strong as a knight by 16. Only nobles could become knights in his birthplace of Isliid, however, and so he set off on a journey to perfect himself as a swordsman. Though he emerged victorious from countless battles, his teacher would later say his greatest talent waas his penchant for meeting power foes." ,
                evo3: "An Isliidan swordsman, and one of the 3 Blade Masters who fought in the Ancient War. After setting out on a journey to become the greatest swordsman, he fought countless battles against those who would later become heroes in the war. His fight against Mashreed, emperor of Isliiid, is particularly notable. It is said the future emperor was so impressed by the swordsman's proud stature that he invited him to join the knights. ",
                evo4: "An Isliidan swordsman later counted among the 3 Blade Masters. During his journey of self-improvement, a Great War between the Gods and Demons began. Clyde sought to fight as a mercenary, but a request from Isliid's emperor sent him to the capital. There the new emperor Mashreed, who Clyde had once battled against, chose Clyde to serve as eader of the imperial knights. ",
                evo5: "One of the 3 Blade Masters who fought in the Ancient War. After becoming head of Isliid's kngihts, he deferred command, assembled a group of young knights and headed to the battlefield. With his trusted Flameblade Gladion in hand, he quickly laid waste to the Giant and Demon hordes opposing him. Those who were initially critical of him later came to revere him - a point of pride.",
                evoawk: "Although being one of the 3 Blade Masters, he suddenly disappeared from history. It is not clear of this life after the Ancient War. There are several rumors about him such as, helping others during the harsh times after war, death and life battle with his master, or being killed by the emperor of Isliid due to his riot against him. However, one thing is common, he had enormous power even after the war and bright fire in his eyes."
            }
    },
    { //Corsair - Complete
        id: 100026211,
        name: "Corsair",
        attribute: "Water",
        type: "Human",
        image: 
            {
                detailawk: "/db/Units/Detail/unit_detail_100026211.png",
                thumb2: "/db/Units/Thumbnail/unit_thumbnail_100022211.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100023211.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100024211.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100025211.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100026211.png",
                detail2: "/db/Units/Detail/unit_detail_100022211.png",
                detail3: "/db/Units/Detail/unit_detail_100023211.png",
                detail4: "/db/Units/Detail/unit_detail_100024211.png",
                detail5: "/db/Units/Detail/unit_detail_100025211.png"
            },
        stats: 
            {
                hp: 6708,
                hpplus: 999,
                atk: 2074,
                atkplus: 321,
                def: 2203,
                defplus: 340
            },
        slots: {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 3,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        skillset: 
            {
                skill: "8s CT - 1800% Water DMG (PHYS).",
                skillbreak: 1300,
                arts: "10340% Water DMG (MAG).",
                artsbreak: 2400,
                truearts: "23200% Water DMG (MAG). High chance to inflict Freeze. Increase all Ally Arts Gauge by 20.",
                trueartsbreak: 4800
            },
        passive: 
            {
                ability1: "Increase Water Allies' BE generation by 20%.",
                ability2: "Increase Water Allies' DMG by 30%."
            },
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water1.png",
                    mat2amt: 2
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat3amt: 1,
                    hover3: "Freydal"
                }
            },
        trueweapon: 
            {
                name: "Froid Rosier",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "/db/Equipment/Detail/item_detail_103381.png",
                skill: "40s CT - 5500% Water DMG (MAG). Chance to inflict Freeze.",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Corsair, increase DMG by 75% and increase Arts Gauge by 3/s",
                        ability2: "Increase DMG to Fire Enemies by 25%"
                    }
                
            },
        lore: 
            {
                evo2: "One of the 3 Blade Masters who fought in the Ancient War. A highborn member of Bamint nobility, she received special eduction from birth. Though she excelled in every field, what she preferred most was sword training, and at the age of 16 was regarded as having skills equal to that of one of the country's knights." ,
                evo3: "A Bamint noble later counted among the 3 Blade Masters. On her 18th birthday, she discarded her favorite sword, a moment of joy for her faather, who hoped she would settle down. She rebelled instead, leaving a journey in pursuit of freedom. Using her sword skills to help those in need, this passionate swordswoman's ice magic-ensconced blade shines cold and beautiful.",
                evo4: "A Bamint swordswoman later counted amount the 3 Blade Masters. Countless foes marked her days of travel, all sent by her father in an attempt to bring her home. Ironically, her victorious battles against them only honed her skills with the blade further. One day, an unusually vicious foe appeared before her. After defeating it, she voewed to return home, praying for her father's safety all the while. ",
                evo5: "After returning to Bamint, Corsair found her father chatting happily with the assassin she thought she had defeated. Furious, her father smiled and informed her that, by defeating the strongest fighter in the land, she had earned herself a spot as a member of the knights. She would go on to fight in the Great War, becoming known as one of the 3 Blade Masters, but the look on her face was always a sour one.",
                evoawk: "Although being one of the 3 Blade Masters, it is said that she created the reason for the royal family to fall. After the Ancient War, she was ordered to guard the prince of Bamint who was going to attend the 5 Kings Conference and even proposed. However, she declined the offer, and left the country. Her father did not criticize her for this. She is said to have fought with the other Blade Masters or have lived to bring up her adopted child. Her sword skills were the best during her last years."
            }
    },
    { //Arth - Complete
        id: 100036311,
        name: "Arth",
        attribute: "Earth",
        type: "Human",
        image: 
            {
                detailawk: "/db/Units/Detail/unit_detail_100036311.png",
                thumb2: "/db/Units/Thumbnail/unit_thumbnail_100032311.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100033311.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100034311.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100035311.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100036311.png",
                detail2: "/db/Units/Detail/unit_detail_100032311.png",
                detail3: "/db/Units/Detail/unit_detail_100033311.png",
                detail4: "/db/Units/Detail/unit_detail_100034311.png",
                detail5: "/db/Units/Detail/unit_detail_100035311.png"
            },
        skillset: 
            {
                skill: "7s CT - 1900% Earth DMG (PHYS).",
                skillbreak: 2100,
                arts: "9900% Earth DMG (PHYS)",
                artsbreak: 3000,
                truearts: "21500% Earth DMG (PHYS). Increase all Ally Arts Gauge by 20",
                trueartsbreak: 9300
            },
        passive: 
            {
                ability1: "Increase Earth Allies' BE generation by 20%",
                ability2: "Increase Earth Allies' DMG by 30%"
            },
        stats: 
            {
                hp: 6546,
                hpplus: 991,
                atk: 2268,
                atkplus: 350,
                def: 2074,
                defplus: 321
            },
        slots: {
            slot1: 5,
            slot1type: "/db/Mines/thumbnail/physLB.png",
            slot2: 5,
            slot2type: "/db/Mines/thumbnail/magLB.png",
            slot3: 3,
            slot3type: "/db/Mines/thumbnail/defLB.png"
        },
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth1.png",
                    mat2amt: 2
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat3amt: 1,
                    hover3: "Elpneumas"
                }
            },
        trueweapon: 
            {
                name: "Arth Lumina",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "/db/Equipment/Detail/item_detail_103391.png",
                skill: "50s CT - 6000% Earth DMG (PHYS)",
                skillbreak: 3000,
                passive: 
                    {
                        ability1: "When equipped by Arth, increase DMG by 75% and increase Arts Gauge by 3/s" ,
                        ability2: "Increase own DMG to Water Enemies by 25%"
                    }
            },
        lore: 
            {
                evo2: "One of the 3 Blade Masters who fought in the Ancient War. Son of one of Gramenia's great swordmasters, Arth was renowned as a genius swordsman from youth. To improve his abilities even further, he began developing techniques that broke from tradition. It's said that his teacher - who was also his father - observed his training quietly at first, only to reprimand him severely when he took up two swords.",
                evo3: "A Gramenian swordsman later counted among the 3 Blade Masters. After taking up a twin- bladed style not seen in any school, Arth dueled his father and won. While this lead to his expulsion, his father advised that he open a new school of his own to impart his style to a new generation. Arth rejected this and continued improving his skills, speaking to others only about swords.",
                evo4: "A Gramenian swordsman later counted among the 3 Blade Masters. The story goes that when he heard of the massive war between Gods and Demons during his sword training, he immediately headed to the battlefield. Aligned with the Gods, Arth achieved many military victories, he once turned and bore witness to the unspeakable devastation that had been wrought. Shocked senseless, his blades dropped to the ground.",
                evo5: "In the midst of the Great War between Gods and Demons, Arth dropped his blades and returned to his wartorn hometown, but took them up again upon seeing the devastation. This time, his blades would be used not to destroy, but to rebuild, with a pair of blades from his father. Armed with these new earth magic-infused swords, Arth fought to help others, coming to be known as the holy sword.",
                evoawk: "After he became a teacher of sword skills for Gramenia Republic, other than leaving the leaving the country once, he remained, and people greatly thanked him for his selfless devotion. On the other hand, he sometimes had a look of sorrow on his face. He hated to meet high officials on an extreme degree. He stayed single for his whole life. On his 80th birthday, surrounded by his disciples, he passed away with last words of "Was I forgiven?" His sword skills are still passed won to the next generation."
            }
    },
    { //Feena - Complete
        id: 100046411,
        name: "Feena",
        attribute: "Light",
        type: "God",
        image: 
            {
                detailawk: "/db/Units/Detail/unit_detail_100046411.png",
                thumb2: "/db/Units/Thumbnail/unit_thumbnail_100042411.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100043411.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100044411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100045411.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100046411.png",
                detail2: "/db/Units/Detail/unit_detail_100042411.png",
                detail3: "/db/Units/Detail/unit_detail_100043411.png",
                detail4: "/db/Units/Detail/unit_detail_100044411.png",
                detail5: "/db/Units/Detail/unit_detail_100045411.png"
            },
        skillset: 
            {
                skill: "9s CT - 2600% Light DMG (MAG). For 5s, heal own HP by 100/s.",
                skillbreak: 1000,
                arts: "11500% Light DMG (MAG). Cure all Ally Status Ailments (except Faint). For 10s, increase all Ally Status RES (except Faint) by 100%",
                artsbreak: 2600,
                truearts: "22500% DMG (MAG). Cure all Ally Status Ailments (except Faint). For 20s, increase all Ally Status RES (except Faint) by 100% and heal all Ally HP by 300/s",
                trueartsbreak: 4500
            },
        passive: 
            {
                ability1: "Increase own DMG to Demon Enemy by 80%",
                ability2: "When an other Ally dies, revive that Ally with 33% HP. Can be activated once per quest",
                ability3: "When own HP is 80%, or more, increase own Status RES (except Faint) by 100%"
            },
        stats: 
            {
                hp: 6059,
                hpplus: 918,
                atk: 2423,
                atkplus: 373,
                def: 2280,
                defplus: 352
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "Centurion",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "/db/Equipment/Detail/item_detail_103941.png",
                skill: "60s CT - 6200% Light DMG (MAG). For 10s, heal all Ally by 30% of DMG taken",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Feena, increase DMG by 20% and increase Arts Gauge by 3/s" ,
                        ability2: "Increase own Dark RES by 20%"
                    }
            },
        lore: 
            {
                evo2: "A holy knight who rose to prominence in Famelle shortly before the start of the Ancient War. Her furious sword moves belied her appearance and she was regarded as the best in the kingdom. She was tasked with a certain duty because of her unerring faith towards the Gods, and departed on a journey to fulfill it. Feena and a knight of La Riiz would later be known as the Twin Knights of the Morning Star, but little is known about her.",
                evo3: "A member of the Twin Knights of the Morning Star, duo famous after the Ancient War. Entrusted with a secret duty by the Kingdom of Famelle, she visited every land under Human rule, and saved members of other races from oppression in more than one occasion. To this day, many know her from bard songs, championing her as the Luminous Knight. There are also stories of her meeting with key figures from every country during her journey.",
                evo4: "A member of the Twin Knights of the Morning Star, duo famous after the Ancient War. After visiting all the lands ruled by Humans, she headed to the lands ruled by Gods. When war between Gods and Demons broke out, she was allowed to join the Gods Army despite not being a God herself. It is said even Demons feared her on the battlefield. Toward the end of the war, she heard of a crisis befalling Famelle, and recieved permission to return home.",
                evo5: "After returning home, the war reached its end. With the Gods and Demons sealing themselves, and the other races on the verge of destruction, she chose to ignore boundaries of race to aid those in need. Her holy light inspired those in the throes of despair, and led them to call her Knight of the Morning star. Despite the legends, her absence from Famellian historical records remains a mystery to this day.",
                evoawk: "One of the Twin Knights of the Morning Star, who, like the Holy Mother, brought healing and charity to the people. Tales of her generosity have been handed down through every land, and though there is no trace in the history, they tell of how she brought soothing to those in need weeping as she did. The reason of her tears remains a mystery even now, but there are those who say she used to mutter words of apology, as well as the name of a vanished God."
            }
    },
    { //Regulus - Complete
        id: 100056511,
        name: "Regulus",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detailawk: "/db/Units/Detail/unit_detail_100056511.png",
                thumb2: "/db/Units/Thumbnail/unit_thumbnail_100052511.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100053511.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100054511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100055511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100056511.png",
                detail2: "/db/Units/Detail/unit_detail_100052511.png",
                detail3: "/db/Units/Detail/unit_detail_100053511.png",
                detail4: "/db/Units/Detail/unit_detail_100054511.png",
                detail5: "/db/Units/Detail/unit_detail_100055511.png"
            },
        skillset: 
            {
                skill: "9s CT - 2200% Dark DMG (PHYS). Heal own HP by 5% of DMG dealt by own Skill",
                skillbreak: 1250,
                arts: "10850% Dark DMG (PHYS). For 5s, increase all Ally Critical Rate by 50%.",
                artsbreak: 2000,
                truearts: "25550% Dark DMG (PHYS). For 8s, increase all Ally Critical Rate by 100% and DMG to Light Enemy by 50%",
                trueartsbreak: 3800
            },
        passive: 
            {
                ability1: "Increase own Light RES by 30%",
                ability2: "Increase all Ally Dark DMG by 30% (Non-stack)"
            },
        stats: 
            {
                hp: 6970,
                hpplus: 999,
                atk: 2693,
                atkplus: 413,
                def: 2423,
                defplus: 373
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragValzandeth.png",
                    mat3amt: 4,
                    hover3: "Valzandeth",
                    mat4: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat4amt: 4,
                    hover4: "Ifrit",
                    mat5: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat5amt: 5,
                    hover5: "Oldeus"
                }
            },
        trueweapon: 
            {
                name: "Nemesis Crow",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "/db/Equipment/Detail/item_detail_103501.png",
                skill: "50s CT - 7000% Dark DMG (MAG). For 10s, reduce Enemy Dark RES by 50%",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Regulus, increase own Critical DMG by 50% and increase own Arts Gauge by 3/s" ,
                        ability2: "Increase own DMG to Dragon Enemy by 50%"
                    }
            },
        lore: 
            {
                evo2: "A knight of the Raven's Aegis, a troop of La Riiz dedicated to protecting sorcerers. While the troop emphasized defense, Regulus opted not to carry a shield, focusing on offense instead. Nonetheless, he remained in the troop, both because his sword skills saved more sorcerers than any shield, and because he lacked the capacity for magic himself. He would later achieve renown as one of the Twin Knights of the Morning Star.",
                evo3: "A member of the Twin Knights of the Morning Star, duo famous after the Ancient War. Just before the start of the Ancient War, when tensions between Gods and Demons were at their peak, Regulus spent time away from his fellow knights. Records of his battles with knights across the land suggest this was a training pilgrimage, but it's also rumored that he recieved a secret mission from La Riiz' High Council to visit Human-controlled lands.",
                evo4: "A member of the Twin Knights of the Morning Star, duo famous after the Ancient War. Regulus challenged not just Humans during his travels, but countless other races as well. One of his famous achievement was the battle against the Flamewyrm Dargeon, which lasted three days and three nights before the final draw, that made his name renowned even among Dragons. This only incremented his opponents, who, regardless of race, challenged him, increasing his skills to the apex.",
                evo5: "When the Ancient War broke out, Regulus returned to La Riiz to rejoin his troop. A veteran of battles agaisnt all the races, Regulus inspired bravery in his companions and countrymen. After Gods and Demons vanished from the world at the end of the war, he traveled with a lady knight to help those in need: a duo that came to be known as the Twin Knights of the Morning Star. Strangely, no records of his deeds after this point remains...",
                evoawk: "After the end of the Ancient War, he was known as one of the Twin Knights of the Morning Star, but before that, he was already famous for saving the Magus Empire of La Riiz from great peril. He stood agaisnt the God Eater Mavroskia, which brings calamity wherever it appears, and turned its rampage. This is the only time in history a God Eater's destruction has been limited so far. They say he had the protection of a certain Witch, but his merit in the story is undeniable."
            }
    },
    { //Dargeon - Missing Lore
        id: 100566112,
        name: "Dargeon",
        attribute: "Fire",
        type: "Dragon",
        image: 
            {
                detailawk: "/db/Units/Detail/unit_detail_100566112.png",
                detail3: "/db/Units/Detail/unit_detail_100563112.png",
                detail4: "/db/Units/Detail/unit_detail_100564112.png",
                detail5: "/db/Units/Detail/unit_detail_100565112.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100563112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100564112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100565112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100566112.png"
            },
        skillset: 
            {
                skill: "3000% Fire DMG (PHYS). Chance of inflicting Burn.",
                skillbreak: 900,
                arts: "30000% Fire DMG (MAG)",
                artsbreak: 1700,
                truearts: "38000% Fire DMG (MAG). For 35s, increase all Fire Ally DMG by 35%",
                trueartsbreak: 2400
            },
        passive: 
            {
                ability1: "Increase own DMG to Dragon Enemy by 50%",
                ability2: "Increase own Dark RES by 35%",
                ability3: "Increase own Freeze and Paralysis RES by 100%"
            },
        stats: 
            {
                hp: 7350,
                hpplus: 999,
                atk: 2500,
                atkplus: 390,
                def: 2456,
                defplus: 377
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        evolution: 
            {
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat3amt: 2,
                    hover3: "Degilmagna",
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Herck - Missing Lore
        id: 100576212,
        name: "Herck",
        attribute: "Water",
        type: "Giant",
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100573212.png",
                detail4: "/db/Units/Detail/unit_detail_100574212.png",
                detail5: "/db/Units/Detail/unit_detail_100575212.png",
                detailawk: "/db/Units/Detail/unit_detail_100576212.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100573212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100574212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100575212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100576212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7128,
                hpplus: 999,
                atk: 2376,
                atkplus: 366,
                def: 2609,
                defplus: 401
            },
        skillset: 
            {
                skill: "8s CT - 1800% Water DMG (PHYS). Chance to inflict Freeze.",
                skillbreak: 2050,
                arts: "12600% Water DMG (MAG). For 15s, increase all Water Ally DMG RES by 10%",
                artsbreak: 3100,
                truearts: "28000% Water DMG (MAG). For 15s, all Allies' attacks have chance to inflict Freeze",
                trueartsbreak: 7000
            },
        passive: 
            {
                ability1: "Increase own DMG to Spirit Enemy by 80%",
                ability2: "Increase own DMG to Human Enemy by 80%",
                ability3: "Increase own DMG by 30% when own HP is over 50%. (Does not stack)"
            },
        evolution: 
            {
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water2.png",
                    mat1amt: 5,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth2.png",
                    mat2amt: 1
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_water3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 4,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragValzendeth.png",
                    mat4amt: 4,
                    hover4: "Valzendeth",
                    mat5: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat5amt: 3,
                    hover5: "Freydal"
                }
            },
        lore: 
            {   
                evo3: "A flame Dragon that reigned over Famelle Rock. Boasting overwhelming strength, Dargeon lived impulsively, trampling others without a thought. One day, a lone swordsman appeared to challenge Dargeon, who dismissed the challenger out of hand as a feeble Human. But something unexpected happened. The swordsman - Clyde - gave the dragon his first taste of defeat, and kindling vengeful flames within his heart.",
                evo4: "The king of rare water-dwelling Giants, Herck shared dominion with the Sea Dragons prior to the start of the Great War. The two had a relationship that surpassed race, and even Herck's grandfather was a Sea Dragon. His body had dragon features, which were seen as natural and respected at the time, and a source of great power for Herck, but the war pit the two races against each other.",
                evo5: "The king of the rarely seen Sea Giants, Herck followed the request to fight alongside the other Giants, and joined the Demon forces. The Sea Giants, always friends to his people, joined the Gods, but he turned his spear against them without hesitation. Though this drew the hatred of the Sea Dragons, the fear they felt towards him proved tactically useful. Damage to both sides was minimal, but scars remained...",
                evoawk: "There exists a legend in Famelle of an unlikely saviour: a flame-wrapped Dragon with the majesty of a war god. He who once ravaged land and sky attained true enlightenment after his second duel with a master swordsman. Later, when the swordsman faced peril in the Ancient War, the Dragon appeared to fight alongside him out of respect for his strength as well as his own pride. Once the vast army was repelled, it was said he promised to duel the swordsman once again before soaring back into the endless blue."
            }
    },
    { //Valhalla - Missing Lore
        id: 100586312,
        name: "Valhalla",
        attribute: "Earth",
        type: "Spirit",
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100583312.png",
                detail4: "/db/Units/Detail/unit_detail_100584312.png",
                detail5: "/db/Units/Detail/unit_detail_100585312.png",
                detailawk: "/db/Units/Detail/unit_detail_100586312.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100583312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100584312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100585312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100586312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7068,
                hpplus: 999,
                atk: 2016,
                atkplus: 312,
                def: 2772,
                defplus: 425
            },
        skillset: 
            {
                skill: "8s CT - 1200% Earth DMG (MAG). For 5s, increase own Normal Attack DMG by 20.",
                skillbreak: 600,
                arts: "For 20s, Heal all Ally HP by 200s and increase all Ally Skill CT REC by 60%",
                artsbreak: 0,
                truearts: "21000% Earht DMG (MAG). For 15s, Heal all Ally HP by 4%/s and increase all Ally DMG RES by 10%. If Ally is Earth, increase DMG RES by 20% instead",
                trueartsbreak: 1900
            },
        passive: 
            {
                ability1: "Increase own Earth RES by 35%",
                ability2: "Increase all Ally Poison RES by 50%",
                ability3: "Increase all Ally DMG RES by 10% when near death"
            },
        evolution: 
            {
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat3amt: 2,
                    hover3: "Elpneumas",
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "A divine tree with the powers of creation and rebirth. The Great War's battles rended the continents of Raktehelm in two, leading to a natural increase in prayers toward Valhalla. However, few firsthand accounts of such behavior remain. Some despaired, thinking Valhalla had abandoned the eight races after their countless mistakes, but current theories suggest that is was merely preparing its true power for the devastation to come.",
                evo5: "A divine tree representing the world's will. Toward the end of the Great War, with the once-beautiful world of Raktehelm a mere shadow of its former self, Valhalla appeared at last in the skies over a raging battle and released the totality of its power. The world was suffused in a radiant light. the light eventually faded, the war eventually ended. And the survivors still had the earth, whose verdant glory returned, slowly but surely.",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Eden - Missing Lore
        id: 100596412,
        name: "Eden",
        attribute: "Light",
        type: "Machine",
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100593412.png",
                detail4: "/db/Units/Detail/unit_detail_100594412.png",
                detail5: "/db/Units/Detail/unit_detail_100595412.png",
                detailawk: "/db/Units/Detail/unit_detail_100596412.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100593412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100594412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100595412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100596412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6930,
                hpplus: 999,
                atk: 2304,
                atkplus: 335,
                def: 2138,
                defplus: 330
            },
        skillset: 
            {
                skill: "10s CT - 1400% Light DMG (MAG). Chance to inflict Seal",
                skillbreak: 900,
                arts: "7000% Light DMG (PHYS). For 25s, all allies gain a DMG Barrier that negates 3000 DMG",
                artsbreak: 1400,
                truearts: "For 30s, all allies gain a DMG barrier that negates 4000 DMG. Additionally, increase Barrier strength by [1000 x Lvl of Wave Armor]. If Wave Armor is at Max Level: 35000% Light DMG (PHYS). For 30s, all allies gain a DMG barrier that negates 4000 DMG. Additionally, increase Barrier strength by [1000 x Lvl of Wave Armor]",
                trueartsbreak: 1800
            },
        passive: 
            {
                ability1: "Increase own Paralysis RES by 60%",
                ability2: "Increase own Poison RES by 60%",
                ability3: "After using True Arts, increase Wave Armor level by 1 (Max 3)"
            },
        evolution: 
            {
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire2.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_water2.png",
                    mat3amt: 2,
                    mat4: "/db/Icons/dungeon_drops/material_thumbnail_earth2.png",
                    mat4amt: 2,
                    mat5: "/db/Icons/dungeon_drops/material_thumbnail_dark2.png",
                    mat5amt: 2
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_water3.png",
                    mat3amt: 2,
                    mat4: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat4amt: 2,
                    mat5: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat5amt: 2
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 2,
                    hover3: "Fosradius"
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Abaddon - Missing Lore
        id: 100606512,
        name: "Abaddon",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100603512.png",
                detail4: "/db/Units/Detail/unit_detail_100604512.png",
                detail5: "/db/Units/Detail/unit_detail_100605512.png",
                detailawk: "/db/Units/Detail/unit_detail_100606512.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100603512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100604512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100605512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100606512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 7140,
                hpplus: 999,
                atk: 2852,
                atkplus: 437,
                def: 2008,
                defplus: 311
            },
        skillset: 
            {
                skill: "8s CT - 1800% Dark DMG (MAG). Chance to inflict Blind.",
                skillbreak: 650,
                arts: "11000% Dark DMG (MAG). For 15s, reduce all Enemy ATK by 30%",
                artsbreak: 1600,
                truearts: "35000% Dark DMG (MAG). For 15s, if Enemy is God or Demon, increase own DMG by 100%",
                trueartsbreak: 2300
            },
        passive: 
            {
                ability1: "Increase own DMG to Demon Enemy by 100%",
                ability2: "Increase own DMG to God Enemy by 100%"
            },
        evolution: 
            {
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_2",
                    mat3amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat3amt: 2,
                    hover3: "Oldeus"
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "A mechanical lifeform from another world. EDEN worked with the fairies he met to find some was to save his world, but unfortunately stumbled into Demon territory. To protect the fairies, he disabled the limiters on his functions, unleashing his original power in the process. Though the demons were defeated, he had exhausted his energy far faster than expected. His time remaining grew shorter by the moment.",
                evo5: "With his functions close to ceasing, the worried fairies gave EDEN some of their secret medicine, which also happened to be the substance he was searching for to save his world. Thanking him for being their friend, the fairies gave him all of their medicine. With the last of his power, he transformed for the long-distance jump back to his world. Even now, the legend of these fairies who saved the metal traveler from another world persists.",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ragna - Missing Evolution, TW Image
        id: 100616112,
        name: "Ragna",
        attribute: "Fire",
        type: "God",
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100613112.png",
                detail4: "/db/Units/Detail/unit_detail_100614112.png",
                detail5: "/db/Units/Detail/unit_detail_100615112.png",
                detailawk: "/db/Units/Detail/unit_detail_100616112.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100613112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100614112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100615112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100616112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "8s CT - 1800% Fire DMG (PHY). Chance to inflict Burn.",
                skillbreak: 2500,
                arts: "12000% Fire DMG (PHY). For 10s, increase Allies' DMG by 20%, Fire Allies' DMG by 30%.",
                artsbreak: 3000,
                truearts: "24950% Fire DMG (PHY). For 10s, increase Allies' DMG and Break PWR by 20%, Fire Allies' DMG and Break PWR by 30%.",
                trueartsbreak: 5500
            },
        passive: 
            {
                ability1: "Increase Paralysis RES by 80%.",
                ability2: "Increase Blind RES by 80%.",
                ability3: "Increase DMG to Dark Enemies by 20%. Increase Dark RES by 10%.",
                ability4: "After using both True Arts and Arts, activate Transcendental Enhancement for 30s. Faint self for 12s after Transcendental Enhancement is deactivated. Transcendental Enhancement: Increase own Movement Speed, Skill CT REC, Equipment CT REC, DMG and Break PWR by 100%."
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "Day Break",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "55s CT - 6500% Fire DMG (PHY). Increase own Arts by 80 if user is near-death.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Ragna, increase DMG by 20% and increase Status RES (except Faint) by 100%.",
                        ability2: "Increase DMG to Demon Enemies by 50%."
                    }
            },
        lore: 
            {   
                evo3: "A God knight who threw his lot in with Humans. Originally a high-ranking knight among the Gods, he began a journey in search of strong foes to improve himself further. As he witnessed Humans dueling each other, he grew intrigued, the passion of people living to their truest potential coming through in the fights between heroes who would one day be known as Blade Masters. He realized what he lacked. And this only made him stronger.",
                evo4: "A knight, born among the Gods, who chose to fight for Humans. Though Ragna observed many duels between Humans, he never participated. People only grew aware of his existence and power sometime after the beginning of the great war. Supposedly, he took up the sword to protect innocent children and the elderly who came under attack, telling those responsible not to 'spoil his fun' - words remembered even now.",
                evo5: "A knight, born among the Gods, who threw his lot in with Humans. During the Great War, Ragna aligned himself with no country, and continued travelling the world to help those in need. He turned his blade not just against Demons, but anyone who dared to harm the weak, inspiring fear in the strong and courage in the oppressed. Always a wellspring of hope, he never offered his name, leaving it blank from the pages of history.",
                evoawk: "A knight of the Gods whose name lives on only as a word of hope. Hailed as a savior in the Ancient War, he was in truth a brave protector of the weak and warrior for justice. And yet, for non-Humans, he was a figure of fear whose name is spoken even today in hushed tones. Today in Raktehelm, none alive know that the mantra of Ragna, spoken in times of deepest distress, is his true name."
            }
    },
    { //Yomi - Missing Lore, Evolution
        id: 100626212,
        name: "Yomi",
        attribute: "Water",
        type: "Human",
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100623212.png",
                detail4: "/db/Units/Detail/unit_detail_100624212.png",
                detail5: "/db/Units/Detail/unit_detail_100625212.png",
                detailawk: "/db/Units/Detail/unit_detail_100626212.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100623212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100624212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100625212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100626212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6708,
                hpplus: 999,
                atk: 2449,
                atkplus: 377,
                def: 2074,
                defplus: 321 
            },
        skillset: 
            {
                skill: "8s CT - 2000% Water DMG (PHY).",
                skillbreak: 1700,
                arts: "15000% Water DMG (PHY). For 15s, increase Allies' ATK by 20%.",
                artsbreak: 2000,
                truearts: "28000% Water DMG (PHY). If this True Arts hits a Broken Enemy, increase own Arts by 100 (only once per True Arts activation) + For 10s, increase own Critical Rate by 100%.",
                trueartsbreak: 3600 
            },
        passive: 
            {
                ability1: "Increase DMG to Dragon Enemies by 100%.",
                ability2: "Increase evasion by 35% when near-death.",
                ability3: "Increase DMG to Enemies in Break by 30%."
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "A swordswoman summoned to Raktehelm from another world. Prior to her summoning, it is said that while she was always an expert with the sword, she never had any special powers. In Raktehelm, however, she overflowed with magical energies, and water surrounded her always. protecting her from harm and forming into blades to attack her Demonic foes. And they're still telling stories of how she cut Afradohl's wings...",
                evo5: "A swordswoman summoned to Raktehelm from another world. Though she followed orders to fight against the Demons, a fight she had against a certain scythe-wielding Demoness changed her when she realized that her opponent had once been Human, and that the Demons altered people, turning them into weapons. This only made her magic power stronger, and steeled her resolved to defeat the enemies of Humans.",
                evoawk: "A mysterious swordswoman summoned from another world. She once valued loyalty above all, but eventually, she came to doubt her God masters as much as the Demons. Ironically, the more she doubted, the sharper her blade cut. But soon, she will find that this power she sought to defend her home will bring even greater tragedy and hatred. And so she sets out on a journey to discover how to destroy forever her true enemy; War."
            }
    },
    { //Vaid - Missing Lore, Evolution
        id: 100636312,
        name: "Vaid",
        attribute: "Earth",
        type: "Machine",
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100633312.png",
                detail4: "/db/Units/Detail/unit_detail_100634312.png",
                detail5: "/db/Units/Detail/unit_detail_100635312.png",
                detailawk: "/db/Units/Detail/unit_detail_100636312.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100633312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100634312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100635312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100636312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 8409,
                hpplus: 999,
                atk: 2521,
                atkplus: 388,
                def: 1945,
                defplus: 301
            },
        skillset: 
            {
                skill: "9s CT - 1600% Earth DMG (PHY). For 9s, reduce Enemies' PHY RES by 10%, chance of reducing Enemies' Break RES by 3%.",
                skillbreak: 1600,
                arts: "12000% Earth DMG (PHY). For 20s, increase Earth Allies' Break PWR by 25%.",
                artsbreak: 2500,
                truearts: "18000% Earth DMG (PHY). Increase own Arts by 80. When used against Enemies in BREAK, increase Earth Allies' Arts by 20 + For 12s, increase Allies' DMG by 80%.",
                trueartsbreak: 6000
            },
        passive: 
            {
                ability1: "Increase Arts by 1/s.",
                ability2: "Increase DMG to Beast Enemies by 80%."
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "A machine weapon that fought during the great war. The small module's will won many battles, during which the large module rarely objected. Only once did the modules differ in opinion. After discovering an enemy Beast commander, the small module released all weapons and unleashed a devastating barrage. The commander survived, but the large module refused to attack. "That is your foe. Not mine," it said.",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Elfalla - Missing Lore
        id: 100646412,
        name: "Elfalla",
        attribute: "Light",
        type: "Beast",
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100643412.png",
                detail4: "/db/Units/Detail/unit_detail_100644412.png",
                detail5: "/db/Units/Detail/unit_detail_100645412.png",
                detailawk: "/db/Units/Detail/unit_detail_100646412.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_100643412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100644412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100645412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100646412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6708,
                hpplus: 915,
                atk: 2376,
                atkplus: 439,
                def: 2614,
                defplus: 411
            },
        skillset: 
            {
                skill: "9s CT - 1600% Light DMG (PHY). Chance to inflict Paralysis.",
                skillbreak: 1100,
                arts: "12000% Light DMG (PHY). High chance to inflict Paralysis + For 15s, increase Light Allies' Break PWR by 30%.",
                artsbreak: 1600,
                truearts: "27000% Light DMG (PHY). Increase own Arts by 60 + For 20s, reduce Enemies' Paralysis RES by 50%.",
                trueartsbreak: 2900
            },
        passive: 
            {
                ability1: "Increase Paralysis RES by 60%.",
                ability2: "Increase Dark RES by 15%."
            }, 
        evolution: 
            {
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 2,
                    hover3: "Fosradius",
                }
            },
        lore: 
            {   
                evo3: "A hero of the Beasts later known as the Azure Saint. Much hope was placed in him from an early age... perhaps because he defeated a lion with his bare hands at age 10. Belying his fierce appearance was a surprising warmth, and his gentle smile provided inspiration for many. One day, word arrived of a Machine attack on a settlement in a nearby region. Unbeknownst to him, one of these machines would influence the rest of his life...",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "A Beast hero renowned as the Azure Saint, Elfalla attempted to put a stop to a machine weapon of mass destruction, only for the weapon to inform him of a great sin he had committed during an earlier mission. Barely managing to escape, Elfalla found his actions clouded, but was stirred to act once more upon seeing his fellow soldiers doing their best to repay him. He would stop at nothing to stop the rampaging weapon.",
                evoawk: "A hero praised as the Empyreal Beast. After realising his mistake in fleeing from the Machine weapon, he rushed back to the battlefield. Though afraid he was too late to stop the inevitable slaughter, he arrived to see his brothers-in-arms fighting against the menace, empowered by the belief that he would return. That was the inspiration he needed to shed his past regrets and face his destined foe."
            }
    },
    { //Lily - Missing Lore, Evolution
        id: 100656512,
        name: "Lily",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detail3: "/db/Units/Detail/unit_detail_100653512.png",
                detail4: "/db/Units/Detail/unit_detail_100654512.png",
                detail5: "/db/Units/Detail/unit_detail_100655512.png",
                detailawk: "/db/Units/Detail/unit_detail_100656512.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_10063512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_100654512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_100655512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_100656512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6708,
                hpplus: 999,
                atk: 2976,
                atkplus: 456,
                def: 1944,
                defplus: 307
            },
        skillset: 
            {
                skill: "7s CT - 2500% Dark DMG (PHY). DMG and Critical Rate of this Skill increases the lower the Enemies' HP becomes.",
                skillbreak: 1150,
                arts: "11800% Dark DMG (PHY). DMG and Break PWR of this Arts increases the higher the attacked Enemy's HP is.",
                artsbreak: 2800,
                truearts: "23800% Dark DMG (PHY). For 12s, increase own Critical Rate by 100% and reduce Enemies' Movement Speed by 30%.",
                trueartsbreak: 4500
            },
        passive: 
            {
                ability1: "When near-death, heal own HP by 4% of DMG dealt.",
                ability2: "Increase Curse RES by 100%.",
                ability3: "Increase Dark RES by 25%.",
                ability4: "Increase DMG by 10% and increase Arts by 2/s."
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "A murderous weapon that fought for the Demons during the Great War. Lily used her enormous scythe to cut down countless Gods. One day, a swordswoman from another world appeared before her, fighting for the Gods. During the fight, the swordswoman tried to speak to Lily again and again, but to no avail. The swordswoman unleashed hidden magical energy shatter Lily's scythe, promising to save her, someday, somehow.",
                evo5: "A murderous weapon that fought for the Demons during the Great War. After losing to the otherworldly swordswoman, Lily sought even greater power, and used forbidden Demonic arts to form a pact with the reaper. With unimaginable strength and a new scythe, Lily returned to the battlefield... but her mind was slowly being consumed by the reaper. Those who survived described Lily as the reaper incarnate, desperately searching for her mark.",
                evoawk: "An opponent of the Gods in the Ancient War who was called the Deathbringer of Corpse Mountain. In truth, she was a Human girl who turned her hatred into a continual search for power. Once the Deathdealer had her target, she would pursue it without cease, even to death. Once, when she came again against a swordswoman who had ducked her demonic sickle once before, she took on the demeanor of a death-dealing force of nature to kill her foe. For some reason, the swordswoman merely complained under her breath and readied her sword. History does not record what happened next."
            }
    },
    { //Rayas - Missing Evolution, TW Image
        id: 101016411,
        name: "Rayas",
        attribute: "Light",
        type: "Human",
        image: 
            {
                detail2: "/db/Units/Detail/unit_detail_101012411.png",
                detail3: "/db/Units/Detail/unit_detail_101013411.png",
                detail4: "/db/Units/Detail/unit_detail_101014411.png",
                detail5: "/db/Units/Detail/unit_detail_101015411.png",
                detailawk: "/db/Units/Detail/unit_detail_101016411.png",
                thumb2: "/db/Units/Thumbnail/unit_thumbnail_101012411.png",
                thumb3: "/db/Units/Thumbnail/unit_thumbnail_101013411.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101014411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101015411.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101016411.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 7213,
                hpplus: 999,
                atk: 2851,
                atkplus: 437,
                def: 2319,
                defplus: 357
            },
        skillset: 
            {
                skill: "8s CT - 1550% Light DMG (PHY).",
                skillbreak: 1450,
                arts: "7200% Light DMG (PHY). For 20s, increase Allies' ATK by 30%.",
                artsbreak: 1800
            },
        passive: 
            {
                ability1: "Increase Dark RES by 25%.",
                ability2: "Increase DMG to God Enemies by 30%.",
                ability3: "Increase DMG to Demon Enemies by 30%."
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 2
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45: //reym how do crystal thing
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRayas.png",
                    mat3amt: 1,
                    hover3: "Rayas",
                }
            },
        trueweapon: 
            {
                true1: 
                {
                    name: "Regracia",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "50s CT - 6600% Light DMG (PHY).",
                    skillbreak: 1600,
                    passive: 
                        {
                            ability1: "When equipped by Rayas, increase DMG by 20%. Does not stack with similar Abilities.",
                            ability2: "Increase Allies' ATK by 15%."
                        }
                },
                true2: 
                {
                    name: "Grand Scale",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "55s CT - 10000% Light DMG (PHY). For 12s, increase own DMG by 60%. If user is Light, increase own ATK by 60%.",
                    skillbreak: 800,
                    passive: 
                        {
                            ability1: "When equipped by Rayas, increase the duration of X-PHOSE mode by 30s. Increase Arts by 100 when entering X-PHOSE mode.",
                            ability2: "Increase ATK by 10%."
                        }
                }
                
            },
        lore: 
            {   
                evo2: "A new recruit at the Isliid Adventurer's Guild. An orphan from the surrounding area, Rayas has been friends with imperial knight Roy for as long as he can remember. His interest in history and ancient ruins inspired him to become an adventurer, and he dreams of making a never-before-seen historical discovery. His skills with a sword are above average, but Roy often chastises him for a lack of effort.",
                evo3: "An adventurer from the Isliid Adventurer's Guild, Rayas became involved in the battle against the Demons after encountering the amnesiac Iris during a training exercise with Ganan, his guildmaster. While protecting Iris, the power to summon the spirits of ancient heroes awoke within him, allowing him to successfully summon one of the legendary Blade Masters. His abilities with sword and summon will only grow stronger.",
                evo4: "During his travels to defeat the Demons, Rayas encountered the Demon Suppression Corps composed of members from the Great Nations. His old friend Roy, is there as well, and the group's strength proves inspiring enough to further draw out his latent abilities (not that he noticed). Now a part of the Corps, Rayas returns to his journey with expectations of further growth.",
                evo5: "An adventurer journeying with friends to end the Demon menace. Contrary to his great strength, few know of his name and exploits, but even the handpicked warriors he journeys with have their eyes on him. Real experience has sharpened his talent with a sword and he’s managed to summon just Blade Masters, but incredible heroes from all of the eight races. Rayas still wants more, however, and so his journey continues.",
                evoawk: "Currently unreleased in Global."
            }
    },
    { //Iris - Missing Lore, Evolution, TW Image
        id: 101025411,
        name: "Iris",
        attribute: "Light",
        type: "God",
        image: 
            {
                detail4: "/db/Units/Thumbnail/unit_thumbnail_101024411.png",
                detail5: "/db/Units/Thumbnail/unit_thumbnail_101025411.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101024411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101025411.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 5000,
                hpplus: 400,
                atk: 2000,
                atkplus: 400,
                def: 2000,
                defplus: 400
            },
        skillset: 
            {
                skill: "8s CT - 1650% Light DMG (MAG).",
                skillbreak: 1250,
                arts: "6500% Light DMG (MAG). For 10s, increase Allies' stats by 20%.",
                artsbreak: 2100,
            },
        passive: 
            {
                ability1: "When an Ally dies (except self), revive that Ally with 33% HP. Ability can only be activated once per Quest."
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                }
            },
        trueweapon: 
            {
                name: "Raaz",
                slot: "/db/Mines/thumbnail/defLB.png",
                detail: "",
                skill: "50s CT - For 15s, Allies gain a DMG barrier that negates 1000 DMG, increase Allies' DMG RES by 20% and Status RES (except Faint) by 100%.",
                skillbreak: 0,
                passive: 
                    {
                        ability1: "When equipped by Iris, increase Evasion by 50%. Does not stack with Abilities of the same name.",
                        ability2: "Increase Status RES (except Faint) by 30%."
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "A divine girl who has the power to break down the barriers surrounding Gods. Though Iris was unaware she possessed such a rare power, she was discovered by a Demon and held as a research subject for anti-God weaponry. Profound in their cruelty, Iris lost her memories as a result of the experiments, but eventually managed to escape. Her encounter with a young man awakened her true power further.",
            }
    },
    { //Roy (WateR) - Missing Lore, Evolution, TW Image
        id: 101036211,
        name: "Roy (Water)",
        attribute: "Water",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101034211.png",
                detail5: "/db/Units/Detail/unit_detail_101035211.png",
                detailawk: "/db/Units/Detail/unit_detail_101036211.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101034211.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101035211.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101036211.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 7296,
                hpplus: 999,
                atk: 2722,
                atkplus: 418,
                def: 2266,
                defplus: 349
            },
        skillset: 
            {
                skill: "8s CT - 2150% Water DMG (PHY). During Enemy Arts, increase Critical Rate of this Skill by 50% and Break PWR of this Skill by 70%.",
                skillbreak: 2000,
                arts: "15500% Water DMG (PHY). During Enemy Arts, increase Critical Rate of this Arts by 100% and Break PWR of this Arts by 150%.",
                artsbreak: 3200,
                truearts: "30800% Water DMG (PHY). High chance to inflict Ultimate Freeze.",
                trueartsbreak: 5600
            },
        passive: 
            {
                ability1: "Increase Rayas' DMG by 30%.",
                ability2: "Increase Allies' DMG RES by 15%.",
                ability3: "When near-death, heal 60 HP/s."
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "Gaimalse",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "60s CT - 6000% Water DMG (PHY). For 10s, increase Allies' ATK by 30%.",
                skillbreak: 2200,
                passive: 
                    {
                        ability1: "When equipped by Roy, increase DMG by 20%.",
                        ability2: "Increase DMG by 10% when near-death."
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "An old friend of Rayas chosen by the Great Nations for its Demon Suppression Corps, Roy is the commander of Fenrir, the thrid unit of the imperial knights. many were opposed to Roy becoming commander, due to his youth and lowborn status, but he attained the position with the support of the Emperor and Empress. He was supposedly tasked with such a dangerous mission by the nobility, who despise him.",
                evo5: "A knight of Isliid traveling with his allies to eliminate the Demon menace, Roy knows the secret concealed in Raktehelm's history, and seeks a world in which all races can live as equals. Though he once attempted to force a way forward, his way of thinking gradually became more flexible as he fought against the Demons with his friends. When light reached his stubborn heart, he was freed in the truest sense of the word, unleashing his true potential.",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mira (Fire) - Missing Lore, Evolution, TW Image
        id: 101046111,
        name: "Mira (Fire)",
        attribute: "Fire",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Thumbnail/unit_thumbnail_101044111.png",
                detail5: "/db/Units/Thumbnail/unit_thumbnail_101045111.png",
                detailawk: "/db/Units/Detail/unit_detail_101046111.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101044111.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101045111.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101046111.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6660,
                hpplus: 999,
                atk: 2904,
                atkplus: 445,
                def: 2292,
                defplus: 353
            },
        skillset: 
            {
                skill: "7s CT - 2100% Fire DMG (PHY). Increase this Skill's Break PWR by 50% against Burned Enemies + For 8s, reduce Enemies' Burn RES by 30%.",
                skillbreak: 1750,
                arts: "15500% Fire DMG (PHY). 100% chance to inflict Burn + Increase this Arts' Break PWR and Critical Rate by 50% against Burned Enemies.",
                artsbreak: 3000,
                truearts: "25500% Fire DMG (PHY). Increase this True Arts' DMG and Break PWR and Critical Rate by 100% against Burned Enemies.",
                trueartsbreak: 5000
            },
        passive: 
            {
                ability1: "Increase DMG to Demon Enemies by 70%.",
                ability2: "When this unit dies, revive with 1 HP + For 5s, HP cannot drop below 1, heal HP by 16%/s (80% max HP). Can only be activated once per Quest. If revived by another unit or equipment, Ability is reset.",
                ability3: "When near-death, increase ATK and Break PWR by 30%."
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "Noble Bamint",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "70s CT - 8400% Fire DMG (MAG). 70% chance to inflict Burn.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Mira, increase DMG by 20%.",
                        ability2: "Increase DMG to Earth Enemies by 5%."
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Vice-commander of the Bamint knight order 'Rose Garden' and member of the Demon extermination squad. Though a princess, she chose the life of a knight instead. Mira refuses to mince words and has a strong sense of justice, resulting in her often acting impulsively and ignoring the actions of others. This has made her some enemies, but her willingness to defend the weak has made her friends to spare.",
                evo5: "Third princess of Bamint, who travels with her allies to defeat the Demon menace. She ignored the opinions of Bamint's upper echelons, who didn't want to oppose the Demons, and joined the Demon Suppression Squad on her own. She seems aware of the rumor that they let her join just to get rid of her. She finds it difficult to live true to herself while traveling with others, and will continue forcing her way forward to find a place she can call home.",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Fen (Earth) - Missing Lore, TW Image
        id: 101056311,
        name: "Fen (Earth)",
        attribute: "Earth",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101054311.png",
                detail5: "/db/Units/Detail/unit_detail_101055311.png",
                detailawk: "/db/Units/Detail/unit_detail_101056311.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101054311.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101055311.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101056311.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 5820,
                hpplus: 883,
                atk: 2642,
                atkplus: 406,
                def: 2257,
                defplus: 348
            },
        skillset: 
            {
                skill: "7s CT - 1850% Earth DMG (PHY). Increase Allies' Arts by 4, heal the Ally with the lowest current HP by 3%.",
                skillbreak: 1150,
                arts: "13000% Earth DMG (PHY). For 20s, increase Allies' Equipment CT REC by 25%.",
                artsbreak: 2200,
                truearts: "21500% Earth DMG (PHY). For 20s, increase Allies' Arts by 3/s, increase Allies' Equipment DMG by 50%.",
                trueartsbreak: 4600
            },
        passive: 
            {
                ability1: "Increase Allies' evasion by 15%. Does not stack with Abilities of the same name.",
                ability2: "Increase DMG to Enemies with 50% or less HP by 20%. Does not stack with Abilities of the same name.",
                ability3: "Increase DMG to Human Enemies by 80%.",
                ability4: "When near-death, increase ATK by 50%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 3,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat4amt: 4,
                    hover4: "Elpneumas",
                    mat5: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat5amt: 5,
                    hover5: "Goldola"
                }
            },
        trueweapon: 
            {
                name: "Efkeria",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "35s CT - 5000% Earth DMG (PHY). Heal own HP by 260 and increase own Arts by 20 each time this attack hits an Enemy (only once per enemy, per usage).",
                skillbreak: 1500,
                passive: 
                    {
                        ability1: "When equipped by Fen, increase DMG by 20%. When near-death, increase evasion by 15%. Does not stack with Abilities of the same name.",
                        ability2: "Increase DMG to Enemies with 50% or less HP by 15%. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo4: "Mising Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zeorg (Light) - MIssing Stats, Lore, Slots, Evolution, True Weapon, TW Image
        id: 101066411,
        name: "Zeorg (Light)",
        attribute: "Light",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101064411.png",
                detail5: "/db/Units/Detail/unit_detail_101065411.png",
                detailawk: "/db/Units/Detail/unit_detail_101066411.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101064411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101065411.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101066411.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7212,
                hpplus: 999,
                atk: 3072,
                atkplus: 470,
                def: 1992,
                defplus: 308
            },
        skillset: 
            {
                skill: "9s CT - 2500% Light DMG (PHY). Heal own HP by 100.",
                skillbreak: 1000,
                arts: "13800% Light DMG (PHY). Chance to inflict Faint.",
                artsbreak: 1990,
                truearts: "24900% Light DMG (PHY). High chance to inflict Faint. Increase own Arts by 50.",
                trueartsbreak: 2850
            },
        passive: 
            {
                ability1: "Increase Allies' Critical Rate by 30% against Enemies in Break.",
                ability2: "Increase DMG to Demon Enemies by 50%.",
                ability3: "Increase DMG to God Enemies by 50%."
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "Ryude Magus",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "50s CT - 8500% Light DMG (PHY). For 8s, increase Allies' Critical Rate by 60% against Enemies in Break.",
                skillbreak: 1400,
                passive: 
                    {
                        ability1: "When equipped by Zeorg, increase DEF by 50% and DMG by 20%. Does not stack with Abilities of the same name.",
                        ability2: "Increase Allies' Critical DMG against Enemies in Break by 20%. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Melia (Dark) - Missing TW Image
        id: 101076511,
        name: "Melia (Dark)",
        attribute: "Dark",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101074511.png",
                detail5: "/db/Units/Detail/unit_detail_101075511.png",
                detailawk: "/db/Units/Detail/unit_detail_101076511.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101074511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101075511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101076511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6420,
                hpplus: 973,
                atk: 2808,
                atkplus: 431,
                def: 2274,
                defplus: 351
            },
        skillset: 
            {
                skill: "9s CT - 2200% Dark DMG (MAG). Heal self by 2% of own max HP.",
                skillbreak: 1000,
                arts: "13800% Dark DMG (MAG). Chance to inflict Blind. During Arts, stop Enemy actions. Refresh Skill CT for Allies + For 4s, increase Allies' BE generation by 50%.",
                artsbreak: 2000,
                truearts: "28400% Dark DMG (MAG). During True Arts, stop Enemy actions. Steals 20 of Enemies' Arts + For 10s, increase Allies' MAG DMG by 50%.",
                trueartsbreak: 3500
            },
        passive: 
            {
                ability1: "Heal Allies' HP by 10/s.",
                ability2: "When damaged while near-death, for 10s, gain a DMG barrier that negates 2000 DMG. Ability can only be activated once every 60s.",
                ability3: "Increase DMG to God Enemies by 90%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat3amt: 4,
                    hover3: "Radachne",
                    mat4: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat4amt: 3,
                    hover4: "Mavroskia",
                    mat5: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat5amt: 2,
                    hover5: "Ifrit"
                }
            },
        trueweapon: 
            {
                name: "Maleficium",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "90s CT - 13000% Dark DMG (MAG).",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Melia, increase DMG by 20% and heal HP by 10/s. Does not stack with Abilities of the same name.",
                        ability2: "Increase DMG against Blinded Enemies by 20%. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo4: "Vice-commander of the La Riiz 3rd Magus Division and member of the Demon Suppression Corps. Known as Blue-eyed Black Fox, she's an expert at data collection operations with many successful infiltrations under her belt. Though her voluptuous appearance has engendered many rumours, she acknowledges none of them. The only thing certain about her is that anyone who brings up the subject of marriage to her will never mention the word ever again.",
                evo5: "A mage from La Riiz who fought to end the Demonic menace. She has an upbringing she'd prefer not to bring up, and had a tendency to distance herlfrom from others. After journeying with the destined young heroes of the Demon Suppression Corps, her repressed kindness slowly began to reveal itself. It's not just her powerful magic, but her long-buried ability to feel for others that is her source of strength.",
                evoawk: "A sorcerer who chose to embrace the darkest parts of the Magus Empire of La Riiz. Her particular abilities and tendency toward rash, independent action invited dangerous misunderstandings. She fell into a trap, straining the faith of her friends, yet the unwavering trust of the adventurer broke through to her, and she resolved to face up to her past. Her sorcery thus broke away from her shadowy past to become something brilliant, something greater, something to protect those she held dear."
            }
    },
    { //Ragsherum - Missing TW Image
        id: 101086511,
        name: "Ragsherum",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101084511.png",
                detail5: "/db/Units/Detail/unit_detail_101085511.png",
                detailawk: "/db/Units/Detail/unit_detail_101086511.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101084511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101085511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101086511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 5,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6743,
                hpplus: 999,
                atk: 2739,
                atkplus: 420,
                def: 2420,
                defplus: 373
            },
        skillset: 
            {
                skill: "9s CT - 3000% Dark DMG (PHY). Increase own Arts by 9.",
                skillbreak: 1200,
                arts: "18500% Dark DMG (PHY). Consumes 20% of own HP. Chance to inflict Faint.",
                artsbreak: 1900,
                truearts: "30050% Dark DMG (PHY). High chance to inflict Faint. Consumes 30% of own HP + For 25s, gain a DMG barrier that negates 3000 DMG to self.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase Dark RES by 10%. Increase own ATK and DEF based on how low HP is (up to 100%).",
                ability2: "When near-death, heal own HP by 4% of DMG dealt.",
                ability3: "Increase Status RES by 60%."
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "Geshpenst",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "50s CT - 7200% Dark DMG (PHY).",
                skillbreak: 1600,
                passive: 
                    {
                        ability1: "When equipped by Ragsherum, increase DMG by 20% and Skill CT REC by 50%. Does not stack with Abilities of the same name.",
                        ability2: "Increase Allies' ATK by 15%. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo4: "A demon once sealed in Gormarey, until a break in the seal led to his resurrection. Ragsherum served as divisional commander under Auge, one of the six great Demon Generals that ruled the Demons during the Great War. The strongest and most prominent of the revived Demons, he assumed command over Grad and Nier as subordinates. He sought to fully resurrect the Demons, but was defeated by Rayas and his allies.",
                evo5: "After falling to Rayas and company, Ragsherum dedicates his life to the resurrection of the Demon Generals. Though a Demon, he possesses something resembling a chivalric dedication to his cause, and a high degree of devotion to the Generals. Though he doesn't destroy or kill for sport, he will pursue mass slaughter if it would achieve his goals. He's wary of Humans, who now rule Raktehelm despite being the weakest race during the Great War.",
                evoawk: "The divisional commander of the six great Demon Generals that revived at the Sealed Fortress Gormarey. At first, Demons were reviving sparsely. However, since they considered power the most, they never worked as groups and fought against themselves. One day Ragsherum had suppressed all the others and started his plan to revive Auge at Gormarey. Not only that, he desired to get the heart of Humans, the winner of the Ancient War, and to put them in fear and despair."
            }
    },
    { //Grad - Missing Lore, Evolution, TW Image
        id: 101096511,
        name: "Grad",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101094511.png",
                detail5: "/db/Units/Detail/unit_detail_101095511.png",
                detailawk: "/db/Units/Detail/unit_detail_101096511.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101094511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101095511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101096511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7999,
                hpplus: 999,
                atk: 2369,
                atkplus: 369,
                def: 2636,
                defplus: 405
            },
        skillset: 
            {
                skill: "9s CT - 2666% Dark DMG (PHY).",
                skillbreak: 666,
                arts: "16666% Dark DMG (PHY). For 5s, increase Allies' Critical Rate by 100%, Fire, Water and Earth RES by 50%.",
                artsbreak: 1666,
                truearts: "44444% Dark DMG (PHY). Consume 50% of own HP + For 30s, reduce own DMG RES by 40%, increase own DMG by 50%, increase own Crit Rate by 100% and heal own HP for 1% of DMG dealt.",
                trueartsbreak: 2666,
                //tentative??? reym help do i just write crossarts for the ca 
                crossarts: "66666% Dark DMG (PHY). For 99s, increase Grad and Nier's DMG by 66%, Critical DMG by 99%.",
                crossartsbreak: 2666
            },
        passive: 
            {
                ability1: "Increase Blind RES by 50%.",
                ability2: "Increase Demon Allies' DMG against God Enemies by 20%. Does not stack with Abilities of the same name.",
                ability3: "When at MAX HP, increase ATK by 100%."
            }, 
        evolution: 
            {
                evo45: //reym how do the funky 20 stone thing
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 1
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGrad.png",
                    mat3amt: 20,
                    hover3: "Grad",
                }
            },
        trueweapon: 
            {
                name: "Berserk",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "70s CT - 6666% Dark DMG (PHY). For 10s, decrease Enemies' Dark RES and PHY RES by 20%.",
                skillbreak: 1666,
                passive: 
                    {
                        ability1: "When equipped by Grad, after using True Arts, increase DMG by 50% for 30s. Does not stack with Abilities of the same name.",
                        ability2: "Increase Critical DMG by 20%."
                    }
            },
        lore: 
            {   
                evo4: "A Demon once sealed in Gormarey, until a break in the seal led to his resurrection. Grad was a member of the squad dedicated to protecting Giaveil, one of The Six Great Demons. After his resurrection, he follows Ragsherum, renowned as one of the great Demon heroes, serving as one of his subordinated alongside Nier. A brutal lover of destruction and combat, Grad obsessively chases Rayas and his friends.",
                evo5: "After continuously suffering defeat at the hands of Rayas and his friends, Grad will do anything to win. ",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Nier - Missing Lore, Evolution, TW Image
        id: 101106511,
        name: "Nier",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101104511.png",
                detail5: "/db/Units/Detail/unit_detail_101105511.png",
                detailawk: "/db/Units/Detail/unit_detail_101106511.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101104511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101105511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101106511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 7666,
                hpplus: 937,
                atk: 2666,
                atkplus: 388,
                def: 2499,
                defplus: 348
            },
        skillset: 
            {
                skill: "8s CT - 1600% Dark DMG (PHY). High chance to inflict Disease.",
                skillbreak: 900,
                arts: "9999% Dark DMG (MAG). If attack hits, recover Allies' HP by 2000 (only once per Arts activation) + For 7s, increase Dark Allies' DMG by 44%.",
                artsbreak: 1666,
                truearts: "36666% Dark DMG (MAG). During this True Arts, ignore 50% of Enemies' DEF. For 20s, reduce Enemies' Disease RES by 50%.",
                trueartsbreak: 1666,
                crossarts: "66666% Dark DMG (PHY). For 99s, increase Grad and Nier's DMG by 66%, Critical DMG by 99%.",
                crossartsbreak: 2666
            },
        passive: 
            {
                ability1: "Increase Demon Allies' Light RES by 15%. Does not stack with Abilities of the same name.",
                ability2: "Allies ignore 50% of Diseased and/or Poisoned Enemies' DEF. Does not stack with Abilities of the same name.",
                ability3: "Increase lifesteal RES by 30%."
            }, 
        evolution: 
            {
                evo45:　//reym how do orb evo mats
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 1
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragNier.png",
                    mat3amt: 20,
                    hover3: "Nier",
                }
            },
        trueweapon: 
            {
                name: "Basilisk",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "70s CT - 6666% Dark DMG (PHY). For 10s, increase own Dark DMG by 44%.",
                skillbreak: 1666,
                passive: 
                    {
                        ability1: "When equipped by Nier, increase Healing Taken and accuracy by 30%. Does not stack with Abilities of the same name.",
                        ability2: "Increase DMG to Poisoned/Diseased Enemies by 15%."
                    }
            },
        lore: 
            {   
                evo4: "The Demon that revived when the seal was partly destroyed at the sealed area Gormarey. She was a member under Ze-Lemma, one of The Great Six Demons, who created the Special Magic Lab. She gets obsessed with results, but even if she fails if that is what makes her closer to her goal, she will accept it. However, her decisions are unique, so people around her think she moves depending on her feelings.",
                evo5: "Being defeated several times by Rayas and the others, she calmly reviewed her cause of it, and planned to fight with grad who she was at odds. She felt humiliated, but she only pretended to feel like so in order to make him agree with her. For her, this was a matter of course for what her goal. Primarily, she was better at researching than fighting and she was doing research on anti-God magic during the Ancient War. After reviving, she was head of creating Iris's copies.",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ganan - Missing Evolution, TW Image
        id: 101116111,
        name: "Ganan",
        attribute: "Fire",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101114111.png",
                detail5: "/db/Units/Detail/unit_detail_101115111.png",
                detailawk: "/db/Units/Detail/unit_detail_101116111.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101114111.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101115111.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101116111.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 7100,
                hpplus: 999,
                atk: 2448,
                atkplus: 377,
                def: 2050,
                defplus: 317
            },
        skillset: 
            {
                skill: "9s CT - 2000% Fire DMG (PHY). Increase own Arts by 5.",
                skillbreak: 2200,
                arts: "15000% Fire DMG (PHY). For 15s, increase own ATK by 200%, increase Freeze and Paralysis RES by 100%. During Berserk Mode: 15000% Fire DMG (PHY). Consume 40% of own HP, increase this Arts' DMG by 200% + For 15s, increase own ATK by 200%, increase Freeze and Paralysis RES by 100%.",
                artsbreak: 3100,
                truearts: "40000% Fire DMG (PHY). Enter Berserk Mode for 55s + For 10s, reduce enemies PHY RES and Evasion by 30%.",
                trueartsbreak: 5000
            },
        passive: 
            {
                ability1: "During Berserk Mode, increase Arts by 1 per hit taken, reduce DMG RES by 35% and increase Critical Rate by 100%. When reduced to 1 HP, Exit Berserk Mode.",
                ability2: "Increase Break PWR by 10%.",
                ability3: "Increase DMG to Enemies in BREAK by 20%."
            }, 
        evolution: 
            {
                evo45: //reym how do i do the funky crystal thing for evo mats
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 3,
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGanan.png",
                    mat3amt: 20,
                    hover3: "Ganan",
                }
            },
        trueweapon: 
            {
                name: "Shurahalt",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "50s CT - 8000% Fire DMG (PHY). If user is Fire, for 6s, increase own DMG by 50% and Break PWR by 100%.",
                skillbreak: 2100,
                passive: 
                    {
                        ability1: "When equipped by Ganan, increase DMG by 80% during Berserk Mode.",
                        ability2: "Increase Allies' Break PWR by 15%."
                    }
            },
        lore: 
            {   
                evo4: "The guild master at the Reigard branch of the Adventurer's Guild. Once a commander of Isliid's self-defense knight corps, a failed operation led to his demotion. Since then, he focused on raising the next generation, and became part of the Adventurer's Guild, saying that the laid back work suits his personality better. He suffered from a terrible injury during his failed operation with the knights, making it impossible for him to unleash his full power.",
                evo5: "Everyone thought he was unable to use his full power because of his unhealed injuries. However, he had actually fully recovered from it long ago. Not being able to let go of the sins of the past limited his true powers. When he finally overcame his past, his power surged beyond its peak, unleashing a strike capable of rending the earth. However strong his enemies, his allies will always be able to depend on his smiling courage.",
                evoawk: "The most powerful warrior of the Adventurer's Guild and guild master of Reigard branch. Theroughout the days at Reigard, Ganan interacted with many young adventurers. Being touched by their passion, he reconsidered his own path, together with the unforgettable mistake of his past and the meaning of being a guild master now... Embracing the failure of his past, he takes a step forward to protect the heroes of tomorrow."
            }
    },
    { //Gilliam - Missing Lore, Evolution, TW Image
        id: 101126311,
        name: "Gilliam",
        attribute: "Earth",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101124311.png",
                detail5: "/db/Units/Detail/unit_detail_101125311.png",
                detailawk: "/db/Units/Detail/unit_detail_101126311.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101124311.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101125311.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101126311.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 7320,
                hpplus: 999,
                atk: 2543,
                atkplus: 391,
                def: 2418,
                defplus: 372
            },
        skillset: 
            {
                skill: "9s CT - 1600% Earth DMG (PHY). For 6s, increase Allies' DEF by 10%.",
                skillbreak: 900,
                arts: "15000% Earth DMG (PHY). For 10s, increase Allies' Equipment DMG by 30%.",
                artsbreak: 1600,
                truearts: "37000% Earth DMG (PHY). For 20s, increase own DMG by 70% and ignore 100% of Enemy DEF.",
                trueartsbreak: 2000
            },
        passive: 
            {
                ability1: "Increase PHY RES by 10%.",
                ability2: "Increase Equipment CT REC by 20%."
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "Hepaistos",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "45s CT - 10000% Earth DMG (PHY). For 8s, increase own Earth DMG by 30%.",
                skillbreak: 300,
                passive: 
                    {
                        ability1: "When equipped by Gilliam, increase Allies' Equipment DMG by 20%. Does not stack with Abilities of the same name.",
                        ability2: "Increase DEF by 10%."
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Liese (Light) - Missing TW Image
        id: 101136411,
        name: "Liese (Light)",
        attribute: "Light",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101134411.png",
                detail5: "/db/Units/Detail/unit_detail_101135411.png",
                detailawk: "/db/Units/Detail/unit_detail_101136411.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101134411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101135411.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101136411.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 7510,
                hpplus: 999,
                atk: 2550,
                atkplus: 392,
                def: 2550,
                defplus: 392
            },
        skillset: 
            {
                skill: "Recover Mode: 5s CT - Heal Allies' HP by 300. Attack Mode: 5s CT - 1800% Light DMG (MAG).",
                skillbreak: 1700, //how do i write this??? cause liese skill has two modes, one has 0 break the other has 1700
                arts: "Recover Mode: Heal Allies' HP by 2000, cure Allies' Status Ailments (except Faint). Attack Mode: 15500% Light DMG (MAG). High chance to inflict Paralysis.",
                artsbreak: 3450, //same comment for skill
                truearts: "28800% Light DMG (MAG). High chance to inflict Paralysis. Recover Allies' HP by 5000, revive fallen Allies with 30% HP (only able to revive fallen Allies once every 60s).",
                trueartsbreak: 4450
            },
        passive: 
            {
                ability1: "Switch between Attack Mode and Recover Mode when using Skill.",
                ability2: "Increase Equipment CT REC 15%.", 
                ability3: "Increase Status RES (except Faint) by 50%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat3amt: 3,
                    hover3: "Ifrit",
                    mat4: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat4amt: 2,
                    hover4: "Radachne",
                    mat5: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat5amt: 4,
                    hover5: "CodeXTF"
                }
            },
        trueweapon: 
            {
                name: "Rig Arcela",
                slot: "/db/Mines/thumbnail/healLB.png",
                detail: "",
                skill: "50s CT - Cure Allies' status ailments (except Faint), heal Allies' HP by 1200.",
                skillbreak: 0,
                passive: 
                    {
                        ability1: "When equipped by Liese, increase DMG by 20%.",
                        ability2: "Increase Healing Output by 10%."
                    }
            },
        lore: 
            {   
                evo4: "High priestess of the shrine in Reigard, Liese's parents emigrated to Isliid from Famelle in order to spread the teachings of the Guiding Light. At age 4, Liese began training at Famelle's great shrine. Her talents saw her becoming a priestess at age 10, and was assigned to Reigard's shrine at 11. Though she's currently only 13, she's far more dignified and regal in presence than Rayas.",
                evo5: "Called a genius, her light magic are powerful enough to be termed "miracles", but she still has moments that reveal that yes, she is in fact a teenager. Like when she goes out for ice cream with the other girls in town. her eyes then were not those of a high priestess, but of a regular girl. The moments where Liese acknowledges her own youth are moments that cause her heart to soar, unleashing ever greater power and potential.",
                evoawk: "Although she had pride in being a priestess, she acknowledged that living in a shrine meant living in a closed world. Since some time or another, an adventurer and his friends started visiting her and telling stories of their journeys. The stories sometimes exciting and at other times terrifying. What kind of judgment should she make as a follower of the Light God? This question and responsibilities led her to a higher dignity and more power as a priestess."
            }
    },
    { //Est - Missing Lore, Evolution, TW Image
        id: 101146211,
        name: "Est",
        attribute: "Water",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101144211.png",
                detail5: "/db/Units/Detail/unit_detail_101145211.png",
                detailawk: "/db/Units/Detail/unit_detail_101146211.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101144211.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101145211.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101146211.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 7188,
                hpplus: 999,
                atk: 2784,
                atkplus: 427,
                def: 2138,
                defplus: 330
            },
        skillset: 
            {
                skill: "10s CT - 2800% Water DMG (PHY). Chance to inflict Freeze.",
                skillbreak: 1800,
                arts: "14000% Water DMG (PHY). For 10s, increase Allies' Water DMG to Enemies in Break by 70%.",
                artsbreak: 2750,
                truearts: "23500% Water DMG (PHY). For 10s, increase Allies' DMG to Enemies in Break by 100%.",
                trueartsbreak: 4550
            },
        passive: 
            {
                ability1: "When Ganan is in party, increase Allies' DMG by 5%.",
                ability2: "Giant Boss' Break Bar is halved at the beginning of battle. Raid Bosses' Break Bars take 20000 Break DMG instead. Ability can only be activated once per Quest.",
                ability3: "Increase DMG to Giant Bosses by 50%."
            }, 
        evolution: 
            {
                evo23: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light1.png",
                    mat2amt: 5
                },
                evo34: 
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light2.png",
                    mat2amt: 5
                },
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: 
            {
                name: "Wahrheit",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "90s CT - 10800% Water DMG (PHY). If user is Human, increase Arts DMG by 50%. For 10s, reduce own Arts by 2/s.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Est, increase DMG and Break PWR by 20%. Does not stack with Abilities of the same name.",
                        ability2: "Increase PHY DMG by 15%. Does not stack with Abilities of the same name."
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sophie - Missing Lore, Evolution, TW Image
        id: 101156111,
        name: "Sophie",
        attribute: "Fire",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101154111.png",
                detail5: "/db/Units/Detail/unit_detail_101155111.png",
                detailawk: "/db/Units/Detail/unit_detail_101156111.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101154111.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101155111.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101156111.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6731,
                hpplus: 999,
                atk: 2310,
                atkplus: 356,
                def: 2238,
                defplus: 345
            },
        skillset: 
            {
                skill: "8s CT - 1200% Fire DMG (PHY). For 6s, reduce Enemies' Break RES by 15%.",
                skillbreak: 2500,
                arts: "10000% Fire DMG (PHY). For 10s, increase Allies' Skill CT REC by 50%. Fire Allies' Skill CT REC is increased by 100% instead.",
                artsbreak: 2900,
                truearts: "27000% Fire DMG (PHY). High chance to inflict Burn. If Enemy was Burned by own True Arts or was already Burned when own True Arts was activated, for 10s, reduce Enemies' Fire RES by 50%.",
                trueartsbreak: 3000
            },
        passive: 
            {
                ability1: "Increase Fire Allies' ATK by 30%.",
                ability2: "Increase Burn RES by 80%."
            }, 
        evolution: 
            {
                evo45: //rEYm how to rocc
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 10,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragSophie.png",
                    mat3amt: 20,
                    hover3: "Sophie",
                }
            },
        trueweapon: 
            {
                name: "Wild Cat",
                slot: "/db/Mines/thumbnail/suppLB.png",
                detail: "",
                skill: "60s CT - 1000% Fire DMG (PHY). For 20s, increase Allies' Break PWR by 25%, and Fire Allies' DMG by 15%.",
                skillbreak: 1000,
                passive: 
                    {
                        ability1: "When equipped by Sophie, increase accuracy by 30% and increase own Arts by 2/s.",
                        ability2: "Increase DMG dealt against Enemies in BREAK by 10%."
                    }
            },
        lore: 
            {   
                evo4: "Proprietress and head chef of the Firecat's Den in Reigrad, which boasts flavours and prices that make it popular among the common people. Her father, who is also her teacher, is currently retured due to injury, but hailed from a family of high-class Bamantian restauranteurs. Displeased with the idea that his food would only be enjoyed by the rich, he left on a journey in search of freedom.",
                evo5: "Sophie was taught not only how to cook, but also how to acquire important ingredients on her own. How to lay traps for animals, how to traverse dangerous environs and live to talk about it, and how to fight. This training has made her an extremely capable adventurer recognised by even Ganan. Because of her upbringing, she's eye for men is extremely demanding, and she has yet to find someone who sets her heart aflutter.",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rem (Grand Summoners) - Missing Lore, TW Image
        id: 101166511,
        name: "Rem (Grand Summoners)",
        attribute: "Dark",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101164511.png",
                detail5: "/db/Units/Detail/unit_detail_101165511.png",
                detailawk: "/db/Units/Detail/unit_detail_101166511.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101164511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101165511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101166511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6944,
                hpplus: 999,
                atk: 2455,
                atkplus: 378,
                def: 2560,
                defplus: 394
            },
        skillset: 
            {
                skill: "10s CT - 2000% Dark DMG (MAG). During Skill, increase own BE generation by 50%.",
                skillbreak: 800,
                arts: "13000% Dark DMG (MAG). For 15s, reduce Enemies' ATK and DEF by 35%, reduce Enemies' RES to the element they have an Elemental Weakness against by 40%.",
                artsbreak: 1300,
                truearts: "25000% Dark DMG (MAG). Increase own True Arts' DMG by 100% against Light Enemies.",
                trueartsbreak: 3000
            },
        passive: 
            {
                ability1: "When using Equipment, heal Allies' HP by 2%.",
                ability2: "Increase Allies' DMG to Enemies of a certain Element (depends on day of the week: Monday - Dark, Tuesday - Fire, Wednesday - Water, Thursday - Earth, Friday - Light, Saturday & Sunday - Random Element) and DMG RES of the same Element by a random percentage between 20% and 40% (changed daily).",
                ability3: "Increase Allies' MAG DMG by 15%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat3amt: 2,
                    hover3: "Mavroskia",
                    mat4: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat4amt: 1,
                    hover4: "Tonetaurus",
                }
            },
        trueweapon: 
            {
                name: "Alchemia",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "40s CT - 7200% Dark DMG (MAG). For 5s, increase own BE generation by 50%, reduce Enemies' ATK and DEF by 20%.",
                skillbreak: 700,
                passive: 
                    {
                        ability1: "When equipped by Rem, increase DMG by 20% and healing when using Equipment to 3% HP.",
                        ability2: "Increase MAG DMG by 10%. When near-death, increase Arts by 2/s."
                    }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Arosdea - Missing Lore
        id: 101176112,
        name: "Arosdea",
        attribute: "Fire",
        type: "Dragon",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101174112.png",
                detail5: "/db/Units/Detail/unit_detail_101175112.png",
                detailawk: "/db/Units/Detail/unit_detail_101176112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101174112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101175112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101176112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 7536,
                hpplus: 999,
                atk: 3017,
                atkplus: 462,
                def: 2030,
                defplus: 375
            },
        skillset: 
            {
                skill: "8s CT - 2200% Fire DMG (PHY). Chance to inflict Burn.",
                skillbreak: 1800,
                arts: "16000% Fire DMG (PHY). Increase Arts by 30 + For 10s, increase Allies' DMG to Enemies in BREAK by 100%.",
                artsbreak: 2600,
                truearts: "30000% Fire DMG (PHY). For 15s, reduce Enemies' DMG RES by 30%. For 30s, gain a DMG barrier that negates 3500 DMG to self.",
                trueartsbreak: 3000
            },
        passive: 
            {
                ability1: "Increase DMG to Dragon Enemies by 100%.",
                ability2: "Increase Earth RES by 15%.",
                ability3: "When near-death, increase own Arts by 6/s."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat3amt: 2,
                    hover3: "Degilmagna",
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Selia (Regular) - Missing Lore
        id: 101186212,
        name: "Selia",
        attribute: "Water",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101184212.png",
                detail5: "/db/Units/Detail/unit_detail_101185212.png",
                detailawk: "/db/Units/Detail/unit_detail_101186212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101184212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101185212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101186212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6499,
                hpplus: 984,
                atk: 2549,
                atkplus: 392,
                def: 2574,
                defplus: 396
            },
        skillset: 
            {
                skill: "9s CT - 1700% Water DMG (MAG). Chance to reduce Enemies' DMG by 20% + For 8s, reduce Enemies' Freeze RES by 15%.",
                skillbreak: 1350,
                arts: "12800% Water DMG (MAG). High chance to inflict Freeze. Cleanse Allies' and Enemies' Burn.",
                artsbreak: 2100,
                truearts: "25000% Water DMG (MAG). High chance to inflict Freeze. Cleanse Allies' and Enemies' Burn + For 8s, reduce Enemies' Water RES by 20%.",
                trueartsbreak: 3800
            },
        passive: 
            {
                ability1: "Increase Fire RES by 35%.",
                ability2: "Increase DMG to Fire Enemies by 35%.",
                ability3: "Increase Allies' Burn and Freeze RES by 30%. Increase all Allies' Critical Rate by 50% against Frozen Enemies. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_water3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat3amt: 1,
                    hover3: "Geo Zagnus",
                    mat4: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat4amt: 3,
                    hover4: "Aerugraxes",
                    mat5: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat5amt: 1,
                    hover5: "Oldeus"
                }
            },
        lore: 
            {   
                evo3: "Missing Lore Information, please contact site owner",
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ashe Toto - Complete
        id: 101196312,
        name: "Ashe Toto",
        attribute: "Earth",
        type: "Spirit",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101194312.png",
                detail5: "/db/Units/Detail/unit_detail_101195312.png",
                detailawk: "/db/Units/Detail/unit_detail_101196312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101194312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101195312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101196312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6185,
                hpplus: 939,
                atk: 2432,
                atkplus: 411,
                def: 1955,
                defplus: 350
            },
        skillset: 
            {
                skill: "9s CT - 1900% Earth DMG (PHY).",
                skillbreak: 1600,
                arts: "12000% Earth DMG (PHY). For 15s, increase Allies’ evasion by 30%.",
                artsbreak: 2000,
                truearts: "20000% Earth DMG (PHY). Cure Allies’ Status Ailments (Except Faint) + For 20s, increase Earth Allies’ Arts by 2/s.",
                trueartsbreak: 3400
            },
        passive: 
            {
                ability1: "Heal 10 HP/s.",
                ability2: "Increase own Equipment CT REC by 5%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat3amt: 2,
                    hover3: "Tonetaurus",
                }
            },
        lore: 
            {   
                evo4: "A spirit archer who fought prior to the Great War. A fox child, Toto was taken in by Eleanor, one of the six Great Witches, and spent his days training his archery skills in the depths of the forest. One day, he was ordered by Eleanor to chase down a troublesome witch who was disrupting nature's providence. After leaving the forest and travelling the world, he finally found Selia at Thaumazein Plain. Suddenly, a new, draconic challenger attacked...",
                evo5: "An archer who chased after the witch Selia, Ashe Toto was forced into a fierce fight against a newfound assailant. Dodging a furious flurry of slashes and moving in for a counterattack, Toto's skills with the bow were at their sharpest. As the swordsman attacked with all his might, Toto loosed an arrow to end it all... and realised he was going to lose. The explosion from their strikes engulfed him, and everything in his vision suddenly turned pure white...",
                evoawk: "The fiery Thaumazein Plain was once transformed into a frigid wasteland by the Witch of Disaster. The disgrace at being saved by his target and the anger at his own weakness that allowed it awakened the power sleeping within him. He fired an arrow with the whole of that strength, intending to bring the chase to an end. However, all that accomplished was ridding the Plain of her cold magic, making him its unwitting saviour."
            }
    },
    { //Duran - Complete
        id: 101206412,
        name: "Duran",
        attribute: "Light",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101204412.png",
                detail5: "/db/Units/Detail/unit_detail_101205412.png",
                detailawk: "/db/Units/Detail/unit_detail_101206412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101204412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101205412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101206412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6792,
                hpplus: 999,
                atk: 2382,
                atkplus: 337,
                def: 2792,
                defplus: 428
            },
        skillset: 
            {
                skill: "10s CT - 3300% Light DMG (PHY). During this Skill, increase own DMG RES by 30%.",
                skillbreak: 2400,
                arts: "For 10s, Enemies take [??? × DMG they inflict on this unit] Light DMG (PHY) + For 15s, heal Allies' HP by 300/s & Allies gain a DMG barrier that negates 1200 DMG.",
                artsbreak: 0,
                truearts: "For 10s, take all DMG dealt to Allies instead, Enemies take [??? × DMG they inflict on this unit] Light DMG (PHY), and gain a DMG barrier that negates 9000 DMG to self. During True Arts, increase Paralysis and Freeze RES by 100%.",
                trueartsbreak: 0
            },
        passive: 
            {
                ability1: "When an Ally dies (except self), revive that Ally with 50% HP. Ability can only be activated once per Quest.",
                ability2: "Increase PHY RES by 20%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat3amt: 4,
                    hover3: "Code-XTF",
                }
            },
        lore: 
            {   
                evo4: "A Human soldier who fought prior to the Great War, Duran was known as a true and dependable knight. His hometown suffered a great fire. Though countless innocents fled for their lives in front of him, he could do nothing against the roaring flames. At that moment, a girl suddenly appeared in front of him, summoning a great blizzard to extinguish the fire. From that day forward, Duran abandoned his post as a knight to embark on a journey.",
                evo5: "Once a knight, Duran left his post to embark on a journey. As he travelled the world, Duran fought for the powerless in every land, eventually leading to him being renowed as a wandering hero. Needless to say, Duran himself never claimed to be any such thing. One day, he heard rumours of a dread swordsman running rampant across the land. Without delay, he began heading to the area where this murderous monster was rumoured to be...",
                evoawk: "Duran encountered the crazed swordsman who was terrorizing the northern towns. From how the warrior wielded his sword with abandon, he knew the weapon had possessed him. After a heated confrontation, the knight suffered near-fatal injuries but not a single innocent was harmed. Ever since, the legend of Duran and his shield spread across the land."
            }
    },
    { //Zenon - Missing Lore, TW Image
        id: 101216512,
        name: "Zenon",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101214512.png",
                detail5: "/db/Units/Detail/unit_detail_101215512.png",
                detailawk: "/db/Units/Detail/unit_detail_101216512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101214512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101215512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101216512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6169,
                hpplus: 935,
                atk: 2848,
                atkplus: 437,
                def: 2495,
                defplus: 384
            },
        skillset: 
            {
                skill: "10s CT - 1550% Dark DMG (MAG). During this Skill, increase own BE generation by 50%.",
                skillbreak: 1350,
                arts: "8800% Dark DMG (MAG). Heal own HP by 3% of DMG dealt by this Arts + For 10s, increase Allies' Arts by 3/s.",
                artsbreak: 2100,
                truearts: "25500% Dark DMG (MAG). Consume 25% of own HP, increase Allies' Arts by 40 + For 10s, increase Allies' MAG DMG by 30%.",
                trueartsbreak: 4400
            },
        passive: 
            {
                ability1: "Increase DMG to Human Enemies by 80%.",
                ability2: "Ignore 50% of Enemies' DEF."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 1,
                    hover3: "Ragsherum Phantom",
                    mat4: "/db/Icons/dungeon_drops/fragOldeus.png",
                    mat4amt: 2,
                    hover4: "Oldeus",
                    mat5: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat5amt: 2,
                    hover5: "CodeXTF"
                }
            },
        trueweapon: 
            {
                name: "Fe'Ode",
                slot: "/db/Mines/thumbnail/magLB.png",
                detail: "",
                skill: "50s CT - 6800% Dark DMG (MAG). For 10s, increase own Arts by 2/s.",
                skillbreak: 1200,
                passive: 
                    {
                        ability1: "When equipped by Zenon, increase DMG to Human Enemies by 100%. Does not stack with Abilities of the same name.",
                        ability2: "Increase BE generation by 20%."
                    }
            },
        lore: 
            {   
                evo4: "A spellblade who served as bodyguard to Auge, one of the six Demon Generals. Zenon was dedicated to Auge in heart and soul, and would perform any job requested of him, no matter how low, until the day he was imprisoned for a crim he didn't commit. This was all a plot by a Demon commander who was anxious about Zenon's growing power. Furious at this betrayal, he howled revenge, and his magic sword Fah Ode came to him as if in answer.",
                evo5: "A demonic spellblade betrayed by his own people, Zenon used his sword Fah Ode to dismiss the officer who conspired against him... permanently. As the life drained from his body, the officer revealed Auge was partially responsible for carrying out the betrayal. As hatred welled up within him, his sword unleashed even greater power, reducing his surroundings to a mountain of corpses and debris. And he had no idea this was all part of Auge's plan...",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Soleil - Missing Lore
        id: 101226112,
        name: "Soleil",
        attribute: "Fire",
        type: "Machine",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101224112.png",
                detail5: "/db/Units/Detail/unit_detail_101225112.png",
                detailawk: "/db/Units/Detail/unit_detail_101226112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101224112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101225112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101226112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6424,
                hpplus: 999,
                atk: 2952,
                atkplus: 454,
                def: 2304,
                defplus: 355
            },
        skillset: 
            {
                skill: "10s CT - 2000% Fire DMG (MAG). If a Burning enemy is present, deal 3000% Fire DMG (MAG) instead.",
                skillbreak: 1000,
                arts: "14000% Fire DMG (MAG). Chance to inflict Burn, Burn self + For 20s, increase own Critical Rate by 100% while Burned.",
                artsbreak: 1800,
                truearts: "33000% Fire DMG (MAG). For 15s, reduce Burned Enemies' DMG RES by 25% and increase own DMG by 100% while Burned.",
                trueartsbreak: 2000
            },
        passive: 
            {
                ability1: "Increase DMG to Beast Enemies by 30%.",
                ability2: "Overheat: Every 3rd Skill used, apply Burn to self. While Burned, increase Skill CT REC by 100% and Freeze RES by 100%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat3amt: 1,
                    hover3: "Code-XTF",
                    mat4: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat4amt: 1,
                    hover4: "Flogassa"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Saar - Missing Lore
        id: 101236212,
        name: "Saar",
        attribute: "Water",
        type: "Beast",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101234212.png",
                detail5: "/db/Units/Detail/unit_detail_101235212.png",
                detailawk: "/db/Units/Detail/unit_detail_101236212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101234212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101235212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101236212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6504,
                hpplus: 965,
                atk: 2712,
                atkplus: 416,
                def: 2480,
                defplus: 382
            },
        skillset: 
            {
                skill: "6s CT - 1750% Water DMG (PHY). Increase own Arts by 10. If this Skill crits, reduce Enemies' accuracy by 30% for 5s.",
                skillbreak: 900,
                arts: "12000% Water DMG (PHY). Permanently increase DMG and Critical Rate by 20% (Up to 100%).",
                artsbreak: 1950,
                truearts: "28000% Water DMG (PHY). For 15s, increase own Skill CT REC and Critical DMG by 100%.",
                trueartsbreak: 3500
            },
        passive: 
            {
                ability1: "Increase MAG RES by 20%.",
                ability2: "Increase PHY evasion by 30%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_water3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat3amt: 2,
                    hover3: "Freydal",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Pola - Complete
        id: 101246312,
        name: "Pola",
        attribute: "Earth",
        type: "Demon",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101244312.png",
                detail5: "/db/Units/Detail/unit_detail_101245312.png",
                detailawk: "/db/Units/Detail/unit_detail_101246312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101244312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101245312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101246312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 7212,
                hpplus: 999,
                atk: 2545,
                atkplus: 391,
                def: 2580,
                defplus: 397
            },
        skillset: 
            {
                skill: "9s CT - 2280% Earth DMG (PHY). Chance to inflict Paralysis. Increase own Arts by 3.",
                skillbreak: 1250,
                arts: "16000% Earth DMG (PHY). High chance to inflict Poison. Increase DMG of Poison based on Enemies' HP (up to 2000 DMG).",
                artsbreak: 2100,
                truearts: "20200% Earth DMG (PHY). Heal own HP by 3% of DMG dealt by own True Arts + For 20s, reduce Enemies' Paralysis and Poison RES by 35%.",
                trueartsbreak: 3750
            },
        passive: 
            {
                ability1: "Increase Water RES by 50%.",
                ability2: "Increase Freeze RES by 100%.",
                ability3: "Heal own HP by 10/s.",
                ability4: "Increase accuracy by 30% against Paralyzed or Poisoned Enemies. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat3amt: 4,
                    hover3: "Goldola",
                    mat4: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat4amt: 2,
                    hover4: "Mavroskia",
                    mat5: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat5amt: 3,
                    hover5: "Tonetaurus"
                }
            },
        lore: 
            {   
                evo4: "One of the six witches in "Grim Stella", Pola possesses incredible power and is feared as the "Funereal Bloom". With a unique set of values, Pola believed the singing voice of a young Spirit boy she knew was the definition of beauty. However, a bandit she was chasing unleashed a curse on this boy, stealing his voice and vanishing without warning. Having been deprived of that which she loved most, she began an indiscriminate rampage on the world.",
                evo5: "A witch feared as the "Funereal Bloom". As her rampage continued, a female Machine appeared before Pola and commenced a furious assault against her. In response, Pola unleashed her previously sealed true power. To her surprise, she realised that she preceived this automaton fighting heedlessly for its life as beautiful. Her lips curled into a smile. As the flames drew closer, Pola slowly closed her eyes.",
                evoawk: "Her protector is a half-Beast half-Demon youth who saved her on a whim. She was completely dumbfounded by this, but she used her special plant based defensive magic to protect an overwhelmed automaton that had changed its target to the Demons. Until then, their only choice had been to fight alongside their enemy. And for some reason, this helped her power grow far beyong her previous limits. No one knows how the battle ended or what happened to her later, but the name Witch of Funeral Flowers never appeared in the histories again."
            }
    },
    { //Leon - Missing Lore
        id: 101256512,
        name: "Leon",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101254512.png",
                detail5: "/db/Units/Detail/unit_detail_101255512.png",
                detailawk: "/db/Units/Detail/unit_detail_101256512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101254512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101255512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101256512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6797,
                hpplus: 999,
                atk: 2453,
                atkplus: 378,
                def: 1926,
                defplus: 298
            },
        skillset: 
            {
                skill: "9s CT - 1800% Dark DMG (MAG). Chance to inflict Blind.",
                skillbreak: 2000,
                arts: "13000% Dark DMG (MAG). High chance to inflict Blind + For 20s, reduce Enemies' ATK and DEF by 30%.",
                artsbreak: 2600,
                truearts: "30000% Dark DMG (MAG). For 13s, increase Dark Allies' Arts by 2/s, and Demon Allies' DMG by 30%.",
                trueartsbreak: 2800
            },
        passive: 
            {
                ability1: "Increase Curse RES by 30%.",
                ability2: "Increase Disease RES by 30%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragValzandeth.png",
                    mat3amt: 2,
                    hover3: "Valzandeth",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zoroas - Missing Lore
        id: 101266512,
        name: "Zoroas",
        attribute: "Dark",
        type: "Dragon",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101264512.png",
                detail5: "/db/Units/Detail/unit_detail_101265512.png",
                detailawk: "/db/Units/Detail/unit_detail_101266512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101264512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101265512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101266512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 7110,
                hpplus: 999,
                atk: 2600,
                atkplus: 388,
                def: 2450,
                defplus: 373
            },
        skillset: 
            {
                skill: "10s CT - 1900% Dark DMG (PHY). Increase Arts by 20 if own Skill crits.",
                skillbreak: 1200,
                arts: "13000% Dark DMG (PHY). For 15s, increase Allies' DMG by 30%.",
                artsbreak: 1800,
                truearts: "34000% Dark DMG (PHY). For 15s, increase own Critical Rate by 100%, own DMG to Demon Enemies by 150%.",
                trueartsbreak: 2500
            },
        passive: 
            {
                ability1: "Increase DMG to Demon Enemies by 100%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat3amt: 2,
                    hover3: "Mavroskia",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zechsia - Complete
        id: 101316412,
        name: "Zechsia",
        attribute: "Light",
        type: "God",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101314412.png",
                detail5: "/db/Units/Detail/unit_detail_101315412.png",
                detailawk: "/db/Units/Detail/unit_detail_101316412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101314412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101315412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101316412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6660,
                hpplus: 999,
                atk: 2664,
                atkplus: 411,
                def: 2256,
                defplus: 350
            },
        skillset: 
            {
                skill: "6s CT - 1900% Light DMG (PHY). Increase own Arts by 5.",
                skillbreak: 2300,
                arts: "10000% Light DMG (PHY). Increase own Arts by 50.",
                artsbreak: 3700,
                truearts: "26000% Light DMG (PHY). For 25s, increase own Arts by 5/s and increase Break PWR by 100%.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase evasion by 15%.",
                ability2: "Increase Allies' Break PWR by 15%. Does not stack with Abilities of the same name.",
                ability3: "Increase DMG to Human Enemies by 60%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat3amt: 2,
                    hover3: "Radachne",
                }
            },
        lore: 
            {   
                evo4: "A knight who was part of a company of God knights in ancient times. She despised being underestimated and was always seen wearing a full suit of armour. As a knight in service to the higher Gods of order, she saw the commands of the higher Gods and order itself as absolute. Her sternness was so great that she would cut down any knight who expressed a lack of faith where they stood. Zechsia, ever loyal, was given a divine mission: to slay a mercenary whose intervention in battles caused chaos and confusion.",
                evo5: "As a God knight dedicated to preserving order, Zechsia's rage was directed at a Dragon mercenary who fought and created chaos for his own enjoyment. Unleashing the power of the jewelled sword given to her by the high Gods, she began a furious assault in the name of her divine mission. The battle soon reached a fever pitch. Right as two Giants entered the fray, a tearful young girl appeared and unleashed tremendous magical power, swallowing up all in the vicinity.",
                evoawk: "Zechsia pursued the Dragon mercenary, but grew skeptical of the justness of her orders upon seeing a kind young girl travelling happily with him. Her doubts about slaying the supposedly wicked Dragon were comfirmed when she witnessed him fearlessly protect the girl from a beast. Zechsia drew her sword against the beast to save the wounded mercenary, marking the first time in her entire life that she disobeyed a divine order."
            }
    },
    { //Zecht - Missing Lore
        id: 101286512,
        name: "Zecht",
        attribute: "Dark",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101284512.png",
                detail5: "/db/Units/Detail/unit_detail_101285512.png",
                detailawk: "/db/Units/Detail/unit_detail_101286512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101284512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101285512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101286512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6384,
                hpplus: 808,
                atk: 2640,
                atkplus: 340,
                def: 2124,
                defplus: 275
            },
        skillset: 
            {
                skill: "8s CT - 2200% Dark DMG (MAG). Chance to inflict Blind. Increase own Arts by 10.",
                skillbreak: 850,
                arts: "13500% Dark DMG (MAG). For 8s, increase Dark Allies' Evasion and DMG by 30%.",
                artsbreak: 1900,
                truearts: "30000% Dark DMG (MAG). High chance to inflict Blind. If Enemy was Blinded by this True Arts, for 15s, reduce DMG RES of that Enemy by 40%.",
                trueartsbreak: 3700
            },
        passive: 
            {
                ability1: "Increase DMG to Beast Enemies by 60%.",
                ability2: "Increase Paralysis RES by 100%.",
                ability3: "Increase BE generation by 20%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragValzandeth.png",
                    mat3amt: 4,
                    hover3: "Valzandeth",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Aristela - Missing Lore
        id: 101296212,
        name: "Aristela",
        attribute: "Water",
        type: "Spirit",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101294212.png",
                detail5: "/db/Units/Detail/unit_detail_101295212.png",
                detailawk: "/db/Units/Detail/unit_detail_101296212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101294212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101295212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101296212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 6074,
                hpplus: 921,
                atk: 2407,
                atkplus: 371,
                def: 2294,
                defplus: 354
            },
        skillset: 
            {
                skill: "9s CT - 800% Water DMG (MAG). Heal Allies' HP by 120.",
                skillbreak: 400,
                arts: "Heal Allies' by 35% of their max HP, cure Allies' status ailments (except Faint and Disease).",
                artsbreak: 0,
                truearts: "17800% Water DMG (MAG). Heal Allies' by 50% of their max HP + For 20s, heal Allies' HP by 200/s.",
                trueartsbreak: 2500
            },
        passive: 
            {
                ability1: "Increase MAG RES by 25%.",
                ability2: "Increase Allies' max HP and MAG DMG by 15%. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_water3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragGeoZagnus.png",
                    mat3amt: 5,
                    hover3: "Geo Zagnus",
                    mat4: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat4amt: 4,
                    hover4: "Aerugraxes",
                    mat5: "/db/Icons/dungeon_drops/fragElpneumas.png",
                    mat5amt: 1,
                    hover5: "Elpneumas"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zoldes - Missing Lore
        id: 101316412,
        name: "Zoldes",
        attribute: "Fire",
        type: "Giant",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101314412.png",
                detail5: "/db/Units/Detail/unit_detail_101315412.png",
                detailawk: "/db/Units/Detail/unit_detail_101316412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101314412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101315412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101316412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: 6151,
                hpplus: 999,
                atk: 2120,
                atkplus: 391,
                def: 2136,
                defplus: 330
            },
        skillset: 
            {
                skill: "10s CT - 2400% Fire DMG (PHY). Increase DMG RES by 10% during Skill.",
                skillbreak: 2400,
                arts: "8000% Fire DMG (PHY). For 5s, increase Allies' (except self) DMG RES by 100%.",
                artsbreak: 3000,
                truearts: "[27000% + 3% per DEF of this unit]  Fire DMG (PHY). For 20s, gain a 3000 Barrier to self.",
                trueartsbreak: 3000
            },
        passive: 
            {
                ability1: "Increase MAG RES by 20%.",
                ability2: "Increase Burn RES by 60%.",
                ability3: "When near-death, increase DEF by 30%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat3amt: 2,
                    hover3: "Degilmagna",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rhodia - Complete
        id: 101316412,
        name: "Rhodia",
        attribute: "Light",
        type: "Dragon",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101314412.png",
                detail5: "/db/Units/Detail/unit_detail_101315412.png",
                detailawk: "/db/Units/Detail/unit_detail_101316412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101314412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101315412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101316412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6600,
                hpplus: 999,
                atk: 2760,
                atkplus: 424,
                def: 2700,
                defplus: 415
            },
        skillset: 
            {
                skill: "8s CT - 2300% Light DMG (PHY). Chance to inflict Paralysis.",
                skillbreak: 2100,
                arts: "12000% Light DMG (PHY). For 20s, increase Allies' DMG by 30%, increase Light Allies' DMG by 20%.",
                artsbreak: 3400,
                truearts: "29800% Light DMG (PHY). For 20s, reduce enemies' Light RES by 30%, increase Allies' DMG to Dragon Enemies by 30%.",
                trueartsbreak: 4000
            },
        passive: 
            {
                ability1: "Increase Paralysis RES by 100%.",
                ability2: "Increase DMG to Dragon Enemies by 80%.",
                ability3: "Increase Allies' Skill CT REC and DMG to Dark Enemies by 25%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 2,
                    hover3: "Fosradius",
                }
            },
        lore: 
            {   
                evo4: "A legendary Dragon blacksmith. Single-mindedly obsessed with creating powerful equipment, Rhodia cared little about who used the tools she created. One day, a young man appeared, asking about the whereabouts of a Machine she had done upgrades to. She sensed a powerful will behind his words and decided to teach him Dragon martial arts so that he might realise his mission. From that day forward, Rhodia supposedly acted more warmly to others.",
                evo5: "A Dragon blacksmith spoken of in legend. She taught a half-Beast and half-Demon fighter Dragon martial arts so that he might save a witch. Rhodia began acting on her own and discovered a dark plot involving the witch. While she went after the young man to make sure he knew the truth, she ended up finding the Demon who was responsible for the plot in the first place. To put an end to things for good, she unleashed the power of her transforming scythe and challenged Leon to a duel.",
                evoawk: "The Dragon blacksmith Rhodia and her former student Saar, a young half-Beast half-Demon man, fought a desperate battle against Demon warrior Leon. When Leon struck down with his great axe, Rhodia rushed in to take the blow for Saar, but she suffered a fatal injury. Rhodia knew that her end was nigh, so she confirmed that her student was safe and gave him the armour that she had spent half her life to create. Afterwards, she smiled contentedly and closed her eyes."
    }
    },
    { //Olgeth - Missing Lore
        id: 101326312,
        name: "Olgeth",
        attribute: "Earth",
        type: "Giant",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101324312.png",
                detail5: "/db/Units/Detail/unit_detail_101325312.png",
                detailawk: "/db/Units/Detail/unit_detail_101326312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101324312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101325312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101326312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 7704,
                hpplus: 973,
                atk: 2808,
                atkplus: 361,
                def: 2592,
                defplus: 334
            },
        skillset: 
            {
                skill: "10s CT - 1900% Earth DMG (PHY). Increase own Arts by 10.",
                skillbreak: 1200,
                arts: "16000% Earth DMG (PHY). Increase Allies' (except self) Arts by 20.",
                artsbreak: 1800,
                truearts: "28000% Earth DMG (PHY). For 20s, increase Earth Allies' DMG by 100%.",
                trueartsbreak: 2000
            },
        passive: 
            {
                ability1: "Increase PHY RES by 30%.",
                ability2: "Increase DMG to Machine Enemies by 100%.",
                ability3: "Increase Allies' max HP by 500 and DMG to Water Enemies by 25%. Does not stack with Abilities of the same name."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFElpneumas.png",
                    mat3amt: 4,
                    hover3: "Elpneumas",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Riffili - Missing Lore
        id: 101336512,
        name: "Riffili",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101334512.png",
                detail5: "/db/Units/Detail/unit_detail_101335512.png",
                detailawk: "/db/Units/Detail/unit_detail_101336512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101334512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101335512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101336512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7620,
                hpplus: 999,
                atk: 2892,
                atkplus: 443,
                def: 2532,
                defplus: 389
            },
        skillset: 
            {
                skill: "7s CT - 1900% Dark DMG (PHY). Heal own HP by 3% of DMG dealt with this Skill.",
                skillbreak: 2300,
                arts: "12800% Dark DMG (PHY). For 15s, increase Allies' Skill CT REC by 30%, Dark Allies' Break PWR by 30%.",
                artsbreak: 4800,
                truearts: "42000% Dark DMG (PHY). For 15s, increase own DMG by [100% - Enemy Break Bar %].",
                trueartsbreak: 6000
            },
        passive: 
            {
                ability1: "Increase Allies' Break PWR by 15%.",
                ability2: "Increase DMG to God Enemies by 100%.",
                ability3: "When near-death, increase Skill CT REC by 70%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragMavroskia.png",
                    mat3amt: 2,
                    hover3: "Mavroskia",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Shadie - Missing Lore
        id: 101346212,
        name: "Shadie",
        attribute: "Water",
        type: "God",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101344212.png",
                detail5: "/db/Units/Detail/unit_detail_101345212.png",
                detailawk: "/db/Units/Detail/unit_detail_101346212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101344212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101345212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101346212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 7079,
                hpplus: 999,
                atk: 2406,
                atkplus: 370,
                def: 2531,
                defplus: 389
            },
        skillset: 
            {
                skill: "7s CT - Increase own Arts by 10. For 8s, gain a DMG barrier that negates 300 DMG.",
                skillbreak: 0,
                arts: "12800% Water DMG (MAG). For 10s, increase Allies' DMG by 20%. Water Allies' DMG by 20%.",
                artsbreak: 3400,
                truearts: "27000% Water DMG (MAG). For 20s, reduce Enemies' evasion, Status Ailment RES and ATK by 30%.",
                trueartsbreak: 3700
            },
        passive: 
            {
                ability1: "Increase own Equipment CT REC by 15%.",
                ability2: "Increase Poison RES by 60%.",
                ability3: "Increase Burn RES by 80%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_water3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat3amt: 2,
                    hover3: "Freydal",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rhiotis - Missing Lore
        id: 101356412,
        name: "Rhiotis",
        attribute: "Light",
        type: "God",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101354412.png",
                detail5: "/db/Units/Detail/unit_detail_101355412.png",
                detailawk: "/db/Units/Detail/unit_detail_101356412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101354412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101355412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101356412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6201,
                hpplus: 999,
                atk: 2827,
                atkplus: 434,
                def: 2250,
                defplus: 347
            },
        skillset: 
            {
                skill: "10s CT - Heal Allies' HP by 5% of own ATK. During Emperor of Thunder Mode: Heal Allies' HP by 10% of own ATK.",
                skillbreak: 0,
                arts: "15000% Light DMG (MAG). Cure Allies' Blind + For 6s, reduce Enemies' DEF by 100%. During Emperor of Thunder Mode: 20000% Light DMG (MAG). Cure Allies' Blind + For 6s, reduce Enemies' DEF by 100%.",
                artsbreak: 1900,
                truearts: "For 60s, enter Emperor of Thunder Mode. During Emperor of Thunder Mode: 40000% Light DMG (MAG). Exit Emperor of Thunder Mode + For 30s, increase Allies' Light and MAG DMG by 50%.",
                trueartsbreak: 2000
            },
        passive: 
            {
                ability1: "Increase Allies' DMG RES by 8%.",
                ability2: "Increase Equipment CT REC by 15%.",
                ability3: "Increase Arts by 50 when entering Emperor of Thunder Mode."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 2,
                    hover3: "Fosradius",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Teriodos - Missing Lore
        id: 101366112,
        name: "Teriodos",
        attribute: "Fire",
        type: "Dragon",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101364112.png",
                detail5: "/db/Units/Detail/unit_detail_101365112.png",
                detailawk: "/db/Units/Detail/unit_detail_101366112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101364112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101365112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101366112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 7464,
                hpplus: 999,
                atk: 2639,
                atkplus: 405,
                def: 2460,
                defplus: 379
            },
        skillset: 
            {
                skill: "9s CT - 1800% Fire DMG (MAG). For 5s, reduce Enemies' Fire RES by 10%.",
                skillbreak: 1700,
                arts: "14000% Fire DMG (MAG). For 10s, increase Fire Allies' DMG by 30%, Dragon Allies' DMG by 30%.",
                artsbreak: 2600,
                truearts: "36000% Fire DMG (MAG). For 40s, increase own DMG by 50% (stackable), increase own ATK by [25% × # of Dragon Allies in the party].",
                trueartsbreak: 2600
            },
        passive: 
            {
                ability1: "Increase DMG to Human Enemies by 70%.",
                ability2: "Increase Earth RES by 15%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat3amt: 2,
                    hover3: "Flogassa",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Keiones - Missing Lore
        id: 101376512,
        name: "Keiones",
        attribute: "Dark",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101374512.png",
                detail5: "/db/Units/Detail/unit_detail_101375512.png",
                detailawk: "/db/Units/Detail/unit_detail_101376512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101374512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101375512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101376512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/defLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6067,
                hpplus: 999,
                atk: 2402,
                atkplus: 469,
                def: 2296,
                defplus: 405
            },
        skillset: 
            {
                skill: "8s CT - 1850% Dark DMG (MAG). For 7s, increase own ATK by 10%.",
                skillbreak: 1300,
                arts: "10000% Dark DMG (MAG). Reduce Enemies' Arts by 20 + For 40s, increase own accuracy by 15% (stackable).",
                artsbreak: 800,
                truearts: "31000% Dark DMG (MAG). For 10s, increase own Critical Rate by 100% and Critical DMG by magnitude of accuracy buffs on self.",
                trueartsbreak: 1800
            },
        passive: 
            {
                ability1: "Increase DMG to Demon Enemies by 50%.",
                ability2: "Increase DMG to Giant Bosses by 40%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_dark3.png",
                    mat3amt; 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragValzandeth.png",
                    mat3amt: 2,
                    hover3: "Valzandeth",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Elmessio - Missing Lore
        id: 101386212,
        name: "Elmessio",
        attribute: "Water",
        type: "Spirit",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101384212.png",
                detail5: "/db/Units/Detail/unit_detail_101385212.png",
                detailawk: "/db/Units/Detail/unit_detail_101386212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101384212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101385212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101386212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6797,
                hpplus: 999,
                atk: 2354,
                atkplus: 363,
                def: 2506,
                defplus: 385
            },
        skillset: 
            {
                skill: "10s CT - 2300% Water DMG (MAG). Reduce Water Enemies' Earth RES by 20% for 6s.",
                skillbreak: 1700,
                arts: "13000% Water and Earth DMG (MAG). Increase DMG of this Arts to Fire and Water Enemies by 60%, and swap Blessing of Midori Modes.",
                artsbreak: 2300,
                truearts: "When in Water Mode: 35000% Water DMG (MAG). For 12s, increase own Critical Rate by 100%, increase Water Allies' DMG by 50%. When in Earth Mode: 28000% Earth DMG (MAG). Chance to inflict Disease.",
                trueartsbreak: 2300, 3000 //reym help 
            },
        passive: 
            {
                ability1: "Increase DMG to Dragon Enemies by 60%.",
                ability2: "Increase Freeze RES by 100%.",
                ability3: "Blessing of Midori: This unit has two modes, Water Mode and Earth Mode. While in Water Mode, heal own HP by 100/s. While in Earth Mode, increase Arts by 1/s, and increase DMG to Diseased Enemies by 30%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_water3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFreydal.png",
                    mat3amt: 2,
                    hover3: "Freydal",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Lione - Missing Lore
        id: 101396112,
        name: "Lione",
        attribute: "Fire",
        type: "Beast",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101394112.png",
                detail5: "/db/Units/Detail/unit_detail_101395112.png",
                detailawk: "/db/Units/Detail/unit_detail_101396112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101394112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101395112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101396112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/suppLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 6971,
                hpplus: 999,
                atk: 2327,
                atkplus: 359,
                def: 2587,
                defplus: 398
            },
        skillset: 
            {
                skill: "7s CT - 2000% Fire DMG (PHY). When this attack hits an enemy, heal own HP by 40.",
                skillbreak: 1900,
                arts: "16000% Fire DMG (PHY). For 12s, increase Allies' DMG and evasion by 20%.",
                artsbreak: 2400,
                truearts: "30000% Fire DMG (PHY). For 15s, increase Fire Allies' ATK by 80%, increase Human and Beast Allies' Arts by 2/s.",
                trueartsbreak: 4800
            },
        passive: 
            {
                ability1: "When near-death, increase evasion by 25%.",
                ability2: "When near-death, increase Skill CT REC by 60%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_fire4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_fire3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFlogassa.png",
                    mat3amt: 2,
                    hover3: "Flogassa",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Reyon - Missing Lore
        id: 101406412,
        name: "Reyon",
        attribute: "Light",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101404412.png",
                detail5: "/db/Units/Detail/unit_detail_101405412.png",
                detailawk: "/db/Units/Detail/unit_detail_101406412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101404412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101405412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101406412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/physLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/suppLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/physLB.png"
            },
        stats: 
            {
                hp: 7332,
                hpplus: 999,
                atk: 2839,
                atkplus: 435,
                def: 2405,
                defplus: 370
            },
        skillset: 
            {
                skill: "7s CT - 1900% Light DMG (PHY). Increase own ATK and Break PWR each time own Skill is activated.",
                skillbreak: 1900,
                arts: "16500% Light DMG (PHY). For 10s, increase Allies' Skill CT REC by 30%, Light Allies' Skill CT REC by 30%.",
                artsbreak: 2500,
                truearts: "26500% Light DMG (PHY). Increase this True Arts' DMG by 100% against Dark Enemies.",
                trueartsbreak: 4600
            },
        passive: 
            {
                ability1: "Increase BE generation against Enemies in Break by 100%.",
                ability2: "Increase Freeze and Paralysis RES by 100%.",
                ability3: "Increase DMG to Dragon Enemies by 80%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 3,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragIfrit.png",
                    mat4amt: 2,
                    hover4: "Ifrit",
                    mat5: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat5amt: 2,
                    hover5: "Degilmagna"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Nerim - Complete
        id: 101416312,
        name: "Nerim",
        attribute: "Earth",
        type: "God",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101414312.png",
                detail5: "/db/Units/Detail/unit_detail_101415312.png",
                detailawk: "/db/Units/Detail/unit_detail_101416312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101414312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101415312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101416312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/healLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 5702,
                hpplus: 865,
                atk: 2652,
                atkplus: 407,
                def: 2347,
                defplus: 362
            },
        skillset: 
            {
                skill: "8s CT - 1550% Earth DMG (PHY). Chance to inflict Poison.",
                skillbreak: 1200,
                arts: "13800% Earth DMG (PHY). For 9s, reduce Enemies' Poison, Blind and Paralysis RES by 30%.",
                artsbreak: 2800,
                truearts: "22900% Earth DMG (PHY). For 15s, increase own DMG to Enemies with Status Ailments by 70%, increase Earth Allies' DMG by 30%.",
                trueartsbreak: 4200
            },
        passive: 
            {
                ability1: "Increase Curse RES by 90%.",
                ability2: "Increase DMG to Demon Enemies by 90%.",
                ability3: "When this unit takes lethal DMG, revive all Allies with 50% HP, increase own Arts by 200 and increase all Allies' DMG by 100% for 10s."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat1amt: 3,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat2amt: 2,
                    mat3: "/db/Icons/dungeon_drops/material_thumbnail_earth3.png",
                    mat3amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragPalamicia.png",
                    mat3amt: 5,
                    hover3: "Palamicia",
                    mat4: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat4amt: 3,
                    hover4: "Goldola",
                    mat5: "/db/Icons/dungeon_drops/fragTonetaurus.png",
                    mat5amt: 3,
                    hover5: "Tonetaurus"
                }
            },
        lore: 
            {   
                evo4: "A God who protected a certain village after the end of the Great War. To realise their sword dream, she remained in the village even after her friends had left on their own journeys. Though she was willing to unleash her slumbering power to defend the village, she was fundamentally very calm. and despised conflict. So calm and kind, in fact, that she was willing to shelter her friends when they became implicated in the grave crime of assassinating one of Bamint's VIPs.",
                evo5: "A God who did everything in her power to protect her precious village and childhood friends. She was requested to keep the presence of her old friend, now criminals, a secret. After much soul-searching, she agreed... They were her childhood friends, after all, and they promised not to harm anyone. But in the end, she couldn't avoid a confrontation. Regretting the decision, she threw herself into the fray, ending the conflict at the expense of her life.",
                evoawk: "Regretting all she'd done, she shared tears with the knight who hunted her down. Gasping, she murmured kindly to him. "I brought all this down on myself, you musn't regret ending me. Be proud of all you've done as a knight to defend your village. And I am truly glad to die in your arms... You, who have cared more for me than any other." With her sacrifice, childhood friends long scattered were able to come together to revisit their younger days."
            }
    },
    { //Quon - Missing Lore, Evolution
        id: 101556212,
        name: "Quon",
        attribute: "Water",
        type: "Human",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101554212.png",
                detail5: "/db/Units/Detail/unit_detail_101555212.png",
                detailawk: "/db/Units/Detail/unit_detail_101556212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101554212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101555212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101556212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/healLB.png"
            },
        stats: 
            {
                hp: 6072,
                hpplus: 920,
                atk: 2154,
                atkplus: 333,
                def: 2326,
                defplus: 358
            },
        skillset: 
            {
                skill: "7s CT - 2300% Water DMG (MAG). Increase own Arts by 5.",
                skillbreak: 1200,
                arts: "For 14s, reduce Enemies' DMG RES and Movement Speed by 30%.",
                artsbreak: 0,
                truearts: "16800% Water DMG (MAG). For 20s, reduce Enemies' DMG RES and Movement Speed by 35%.",
                trueartsbreak: 2400
            },
        passive: 
            {
                ability1: "Increase MAG RES by 20%.",
                ability2: "Increase Allies' Fire RES by 10%."
            }, 
        evolution: 
            {
                evo45: //reym how do crystals
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_water4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_earth4.png",
                    mat2amt: 1
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragQuon.png",
                    mat3amt: 20,
                    hover3: "Quon",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Feld - Missing Lore, Evolution
        id: 101566112,
        name: "Feld",
        attribute: "Fire",
        type: "Spirit",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101564112.png",
                detail5: "/db/Units/Detail/unit_detail_101565112.png",
                detailawk: "/db/Units/Detail/unit_detail_101566112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101564112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101565112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101566112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/healLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/magLB.png"
            },
        stats: 
            {
                hp: 6180,
                hpplus: 937,
                atk: 2522,
                atkplus: 388,
                def: 2256,
                defplus: 348
            },
        skillset: 
            {
                skill: "9s CT - 1600% Fire DMG (MAG). Chance to inflict Burn.",
                skillbreak: 1000,
                arts: "9000% Fire DMG (MAG). For 10s, increase Allies' Status RES (except Faint) by 100%.",
                artsbreak: 2600,
                truearts: "40000% Fire DMG (MAG). Consume 30% of own max HP. For 10s, increase own Critical Rate by 100%, reduce Enemies' Fire RES by 30%.",
                trueartsbreak: 2800
            },
        passive: 
            {
                ability1: "Increase DMG to Dragon Enemies by 70%.",
                ability2: "Increase Allies' Critical DMG by 20%."
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragDegilmagna.png",
                    mat3amt: 2,
                    hover3: "Degilmagna",
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Edram - Missing Lore, Evolution
        id: 101575412,
        name: "Edram",
        attribute: "Light",
        type: "Machine",
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101575412.png",
                detail5: "/db/Units/Detail/unit_detail_101575412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101575412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101575412.png",
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/defLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/suppLB.png"
            },
        stats: 
            {
                hp: 5366,
                hpplus: 814,
                atk: 2300,
                atkplus: 355,
                def: 1956,
                defplus: 303
            },
        skillset: 
            {
                skill: "12s CT - 2500% Light DMG (MAG). For 5s, reduce Enemies' DEF by 30%.",
                skillbreak: 1300,
                arts: "14000% Light DMG (MAG). 60% chance to inflict Paralysis.",
                artsbreak: 1500,
                truearts: "N/A",
                trueartsbreak: 0
            },
        passive: 
            {
                ability1: "Each normal attack will increase own Arts by 10.",
                ability2: "Increase Light Allies' Arts by 1/s.",
                ability3: "Reduce Water RES by 50%."
            }, 
        evolution: 
            {
                evo45: //crystal????
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_dark4.png",
                    mat2amt: 1
                },
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
            }
    },
    { //Favelle - Missing Lore, Stats, Slots, Evolution
        id: 101586312,
        name: "Favelle",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101584312.png",
                detail5: "/db/Units/Detail/unit_detail_101585312.png",
                detailawk: "/db/Units/Detail/unit_detail_101586312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101584312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101585312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101586312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Catilou - Missing Lore, Stats, Slots, Evolution
        id: 101596312,
        name: "Catilou",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101594312.png",
                detail5: "/db/Units/Detail/unit_detail_101595312.png",
                detailawk: "/db/Units/Detail/unit_detail_101596312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101594312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101595312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101596312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rasaou - Missing Lore, Stats, Slots, Evolution
        id: 101606112,
        name: "Rasaou",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101604112.png",
                detail5: "/db/Units/Detail/unit_detail_101605112.png",
                detailawk: "/db/Units/Detail/unit_detail_101606112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101604112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101605112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101606112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Yumi - Missing Lore, Stats, Slots, Evolution
        id: 101616212,
        name: "Yumi",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101614212.png",
                detail5: "/db/Units/Detail/unit_detail_101615212.png",
                detailawk: "/db/Units/Detail/unit_detail_101616212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101614212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101615212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101616212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Keit - Missing Lore, Stats, Slots, Evolution
        id: 101626312,
        name: "Keit",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101624312.png",
                detail5: "/db/Units/Detail/unit_detail_101625312.png",
                detailawk: "/db/Units/Detail/unit_detail_101626312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101624312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101625312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101626312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Cathemilla - Missing Lore, Stats, Slots, Evolution
        id: 101646412,
        name: "Cathemilla",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101644412.png",
                detail5: "/db/Units/Detail/unit_detail_101645412.png",
                detailawk: "/db/Units/Detail/unit_detail_101646412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101644412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101645412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101646412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mizyna - Missing Lore, Stats, Slots, Evolution
        id: 101656512,
        name: "Mizyna",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101654512.png",
                detail5: "/db/Units/Detail/unit_detail_101655512.png",
                detailawk: "/db/Units/Detail/unit_detail_101656512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101654512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101655512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101656512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            }
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Nies - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101666212,
        name: "Nies",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101664212.png",
                detail5: "/db/Units/Detail/unit_detail_101665212.png",
                detailawk: "/db/Units/Detail/unit_detail_101666212.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101664212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101665212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101666212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sanstone - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101676112,
        name: "Sanstone",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101674112.png",
                detail5: "/db/Units/Detail/unit_detail_101675112.png",
                detailawk: "/db/Units/Detail/unit_detail_101676112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101674112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101675112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101676112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Platina - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101686412,
        name: "Platina",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101684412.png",
                detail5: "/db/Units/Detail/unit_detail_101685412.png",
                detailawk: "/db/Units/Detail/unit_detail_101686412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101684412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101685412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101686412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Parlot - Missing Lore, Stats, Slots Evolution
        id: 101696312,
        name: "Parlot",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101694312.png",
                detail5: "/db/Units/Detail/unit_detail_101695312.png",
                detailawk: "/db/Units/Detail/unit_detail_101696312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101694312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101695312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101696312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Dahlia - Missing Lore, Stats, Slots, Evolution
        id: 101706512,
        name: "Dahlia",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101704512.png",
                detail5: "/db/Units/Detail/unit_detail_101705512.png",
                detailawk: "/db/Units/Detail/unit_detail_101706512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101704512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101705512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101706512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Gaia - Missing Lore, Stats, Slots, Evolution
        id: 101716211,
        name: "Gaia",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101714211.png",
                detail5: "/db/Units/Detail/unit_detail_101715211.png",
                detailawk: "/db/Units/Detail/unit_detail_101716211.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101714211.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101715211.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101716211.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Millenia - Missing Lore, Stats, Slots, Evolution
        id: 101726112,
        name: "Millenia",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101724112.png",
                detail5: "/db/Units/Detail/unit_detail_101725112.png",
                detailawk: "/db/Units/Detail/unit_detail_101726112.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101724112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101725112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101726112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Alche - Missing Lore, Stats, Slots, Evolution
        id: 101736412,
        name: "Alche",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101734412.png",
                detail5: "/db/Units/Detail/unit_detail_101735412.png",
                detailawk: "/db/Units/Detail/unit_detail_101736412.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101734412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101735412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101736412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Louvet - Missing Lore, Stats, Slots, Evolution
        id: 101746312,
        name: "Louvet",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101745312.png",
                detailawk: "/db/Units/Detail/unit_detail_101746312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101745312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101746312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Gran Brave - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Img
        id: 101756111,
        name: "Gran Brave",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101754111.png",
                detail5: "/db/Units/Detail/unit_detail_101755111.png",
                detailawk: "/db/Units/Detail/unit_detail_101756111.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101754111.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101755111.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101756111.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kazlaser - Missing Lore, Stats, Slots
        id: 101765411,
        name: "Kazlaser",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101765411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101765411.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
            }
    },
    { //Marzex (Light) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101776412,
        name: "Marzex",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101775412.png",
                detailawk: "/db/Units/Detail/unit_detail_101776412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101775412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101776412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Number 2 - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101786512,
        name: "Number 2",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101785512.png",
                detailawk: "/db/Units/Detail/unit_detail_101786512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101785512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101786512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Lian - Missing Lore, Stats, Slots, Evolution
        id: 101796112,
        name: "Lian",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101795112.png",
                detailawk: "/db/Units/Detail/unit_detail_101796112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101795112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101796112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Daisy - Missing Lore, Stats, Slots, Evolution
        id: 101806212,
        name: "Daisy",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101806212.png",
                detailawk: "/db/Units/Detail/unit_detail_101806212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101806212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101806212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Muse - Missing Lore, Stats, Slots, Evolution
        id: 101816312,
        name: "Muse",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101814312.png",
                detail5: "/db/Units/Detail/unit_detail_101815312.png",
                detailawk: "/db/Units/Detail/unit_detail_101816312.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101814312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101815312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101816312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Freed - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101826412,
        name: "Freed",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101825412.png",
                detailawk: "/db/Units/Detail/unit_detail_101826412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101825412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101826412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Grohl - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101836512,
        name: "Grohl",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101835512.png",
                detailawk: "/db/Units/Detail/unit_detail_101836512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101835512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101836512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rishley - Missing Lore, Stats, Slots, Evolution
        id: 101846112,
        name: "Rishley",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101845112.png",
                detailawk: "/db/Units/Detail/unit_detail_101846112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101845112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101846112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Lapleh - Missing Lore, Stats, Slots, Evolution
        id: 101856212,
        name: "Lapleh",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101855212.png",
                detailawk: "/db/Units/Detail/unit_detail_101856212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101855212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101856212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Alma - Missing Lore, Stats, Slots, Evolution
        id: 101866312,
        name: "Alma",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101865312.png",
                detailawk: "/db/Units/Detail/unit_detail_101866312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101865312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101866312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sonije - Missing Lore, Stats, Slots, Evolution
        id: 101876412,
        name: "Sonije",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101875412.png",
                detailawk: "/db/Units/Detail/unit_detail_101876412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101875412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101876412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Onfuan - Missing Lore, Stats, Slots, Evolution
        id: 101886512,
        name: "Onfuan",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101885512.png",
                detailawk: "/db/Units/Detail/unit_detail_101886512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101885512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101886512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kayas - Missing Lore, Stats, Slots, Evolution
        id: 101896512,
        name: "Kayas",
        attribute: ,
        type: ,
        image: 
            {
                detail4: "/db/Units/Detail/unit_detail_101894512.png",
                detail5: "/db/Units/Detail/unit_detail_101895512.png",
                detailawk: "/db/Units/Detail/unit_detail_101896512.png",
                thumb4: "/db/Units/Thumbnail/unit_thumbnail_101894512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101895512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101896512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo45:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_light4.png",
                    mat1amt: 2,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_light3.png",
                    mat2amt: 5
                },
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo4: "Missing Lore Information, please contact site owner",
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //End - Missing Lore, Stats, Slots, Evolution
        id: 101906412,
        name: "End",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101905412.png",
                detailawk: "/db/Units/Detail/unit_detail_101906412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101905412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101906412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Coco - Missing Lore, Stats, Slots, Evolution
        id: 101916512,
        name: "Coco",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101915512.png",
                detailawk: "/db/Units/Detail/unit_detail_101916512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101915512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101916512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Anna - Missing Lore, Stats, Slots, Evolution
        id: 101926112,
        name: "Anna",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101925112.png",
                detailawk: "/db/Units/Detail/unit_detail_101926112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101925112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101926112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sly - Missing Lore, Stats, Slots, Evolution
        id: 101936212,
        name: "Sly",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101935212.png",
                detailawk: "/db/Units/Detail/unit_detail_101936212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101935212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101936212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Vogue - Missing Lore, Stats, Slots, Evolution
        id: 101946312,
        name: "Vogue",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101945312.png",
                detailawk: "/db/Units/Detail/unit_detail_101946312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101945312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101946312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Voghan - Missing Lore, Stats, Slots, Evolution
        id: 101956112,
        name: "Voghan",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101955112.png",
                detailawk: "/db/Units/Detail/unit_detail_101956112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101955112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101956112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Diaz - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101966212,
        name: "Diaz",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101965212.png",
                detailawk: "/db/Units/Detail/unit_detail_101966212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101965212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101966212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mamori - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 101976312,
        name: "Mamori",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101975312.png",
                detailawk: "/db/Units/Detail/unit_detail_101976312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101975312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101976312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Melody - Missing Lore, Stats, Slots, Evolution
        id: 101986412,
        name: "Melody",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101985412.png",
                detailawk: "/db/Units/Detail/unit_detail_101986412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101985412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101986412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rohst - Missing Lore, Stats, Slots, Evolution
        id: 101996511,
        name: "Rohst",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_101995511.png",
                detailawk: "/db/Units/Detail/unit_detail_101996511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_101995511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_101996511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Gerald - Missing Lore, Stats, Slots, Evolution
        id: 102006112,
        name: "Gerald",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102005112.png",
                detailawk: "/db/Units/Detail/unit_detail_102006112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102005112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102006112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zeela - Missing Lore, Stats, Slots, Evolution
        id: 102016212,
        name: "Zeela",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102015212.png",
                detailawk: "/db/Units/Detail/unit_detail_102016212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102015212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102016212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Fosly - Missing Lore, Stats, Slots, Evolution
        id: 102026312,
        name: "Fosly",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102025312.png",
                detailawk: "/db/Units/Detail/unit_detail_102026312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102025312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102026312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Jack - Missing Lore, Stats, Slots, Evolution
        id: 102036412,
        name: "Jack",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102035412.png",
                detailawk: "/db/Units/Detail/unit_detail_102036412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102035412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102036412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Celia (Light) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102046412,
        name: "Celia (Light)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102045412.png",
                detailawk: "/db/Units/Detail/unit_detail_102046412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102045412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102046412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ashe - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102056512,
        name: "Ashe",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102055512.png",
                detailawk: "/db/Units/Detail/unit_detail_102056512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102055512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102056512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Norn - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102066312,
        name: "Norn",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102065312.png",
                detailawk: "/db/Units/Detail/unit_detail_102066312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102065312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102066312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Riana - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102166212,
        name: "Riana",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102165212.png",
                detailawk: "/db/Units/Detail/unit_detail_102166212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102165212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102166212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kane (Earth) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102176312,
        name: "Kane (Earth)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102175312.png",
                detailawk: "/db/Units/Detail/unit_detail_102176312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102175312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102176312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Courtney - Missing Lore, Stats, Slots, Evolution
        id: 102186512,
        name: "Courtney",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102185512.png",
                detailawk: "/db/Units/Detail/unit_detail_102186512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102185512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102186512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Marzex (Dark) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102196512,
        name: "Marzex (Dark)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102195512.png",
                detailawk: "/db/Units/Detail/unit_detail_102196512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102195512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102196512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mako - Missing Lore, Stats, Slots, Evolution
        id: 102206412,
        name: "Mako",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102205412.png",
                detailawk: "/db/Units/Detail/unit_detail_102206412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102205412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102206412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Satsuki - Missing Lore, Stats, Slots, Evolution
        id: 102216212,
        name: "Satsuki",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102215212.png",
                detailawk: "/db/Units/Detail/unit_detail_102216212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102215212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102216212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ryuko - Missing Lore, Stats, Slots, Evolution
        id: 102226112,
        name: "Ryuko",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102225112.png",
                detailawk: "/db/Units/Detail/unit_detail_102226112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102225112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102226112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Pientz - Missing Lore, Stats, Slots, Evolution
        id: 102236111,
        name: "Pientz",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102235111.png",
                detailawk: "/db/Units/Detail/unit_detail_102236111.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102235111.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102236111.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mixie - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102246412,
        name: "Mixie",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102245412.png",
                detailawk: "/db/Units/Detail/unit_detail_102246412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102245412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102246412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Pheles - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102256212,
        name: "Pheles",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102255212.png",
                detailawk: "/db/Units/Detail/unit_detail_102256212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102255212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102256212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Vicious - Missing Lore, Stats, Slots, Evolution
        id: 102266311,
        name: "Vicious",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102265311.png",
                detailawk: "/db/Units/Detail/unit_detail_102266311.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102265311.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102266311.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Tallis - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102276112,
        name: "Tallis",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102275112.png",
                detailawk: "/db/Units/Detail/unit_detail_102276112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102275112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102276112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Lozze - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102286212,
        name: "Lozze",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102285212.png",
                detailawk: "/db/Units/Detail/unit_detail_102286212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102285212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102286212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Jill - Misisng Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102296312,
        name: "Jill",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102295312.png",
                detailawk: "/db/Units/Detail/unit_detail_102296312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102295312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102296312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Alvina - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102306212,
        name: "Alvina",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102305212.png",
                detailawk: "/db/Units/Detail/unit_detail_102306212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102305212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102306212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Palamicia - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102316212,
        name: "Palamicia",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102315212.png",
                detailawk: "/db/Units/Detail/unit_detail_102316212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102315212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102316212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ifrit - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102326112,
        name: "Ifrit",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102325112.png",
                detailawk: "/db/Units/Detail/unit_detail_102326112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102325112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102326112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Logia - Missing Lore, Stats, Slots, Evolution
        id: 102336411,
        name: "Logia",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102335411.png",
                detailawk: "/db/Units/Detail/unit_detail_102336411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102335411.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102336411.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Daki - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102346412,
        name: "Daki",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102345412.png",
                detailawk: "/db/Units/Detail/unit_detail_102346412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102345412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102346412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Raki - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102356512,
        name: "Raki",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102355512.png",
                detailawk: "/db/Units/Detail/unit_detail_102356512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102355512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102356512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zerkalo - Missing Lore, Stats, Slots, Evolution
        id: 102366511,
        name: "Zerkalo",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102365511.png",
                detailawk: "/db/Units/Detail/unit_detail_102366511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102365511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102366511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Valentia - Missing Lore, Stats, Slots, Evolution
        id: 102386411,
        name: "Valentia",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102385411.png",
                detailawk: "/db/Units/Detail/unit_detail_102386411.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102385411.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102386411.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mira (Earth) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102396312,
        name: "Mira (Earth)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102395312.png",
                detailawk: "/db/Units/Detail/unit_detail_102396312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102395312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102396312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Zeorg (Dark) - Missing Lore, Stats, Slots, EVolution, True Weapon, tW Image 
        id: 102406512,
        name: "Zeorg (Dark)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102405512.png",
                detailawk: "/db/Units/Detail/unit_detail_102406512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102405512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102406512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Badoul - Missing Lore, Stats, Slots, Evolution
        id: 102416111,
        name: "Badoul",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102415111.png",
                detailawk: "/db/Units/Detail/unit_detail_102416111.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102415111.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102416111.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Strife - Missing Lore, Stats, Slots, Evolution
        id: 102436511,
        name: "Strife",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102436511.png",
                detailawk: "/db/Units/Detail/unit_detail_102436511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102436511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102436511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Weaver - Missing Lore, Stats, Slots, Evolution
        id: 102446212,
        name: "Weaver",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102445212.png",
                detailawk: "/db/Units/Detail/unit_detail_102446212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102445212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102446212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Wargul - Missing Lore, Stats, Slots, Evolution
        id: 102456512,
        name: "Wargul",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102455512.png",
                detailawk: "/db/Units/Detail/unit_detail_102456512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102455512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102456512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Granith - Missing Lore, Stats, Slots, Evolution
        id: 102466211,
        name: "Granith",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102465211.png",
                detailawk: "/db/Units/Detail/unit_detail_102466211.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102465211.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102466211.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Altie - Complete
        id: 102476511,
        name: "Altie",
        attribute: "Dark",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102475511.png",
                detailawk: "/db/Units/Detail/unit_detail_102476511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102475511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102476511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/magLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/phyLB.png"
            },
        stats: 
            {
                hp: 6300,
                hpplus: 950,
                atk: 2268,
                atkplus: 352,
                def: 1950,
                defplus: 302
            },
        skillset: 
            {
                skill: "10s CT - 1800% Dark DMG (MAG). Increase own Arts by 5.",
                skillbreak: 900,
                arts: "13000% Dark DMG (MAG). Increase Break PWR of this Arts by 8% per Death Count (up to 104%).",
                artsbreak: 2000,
                truearts: "20000% Dark DMG (MAG). If own Death Count is 13, increase this True Arts' DMG by 200%. Consume 15% of Allies' (except self) HP, increase Allies' Arts by 20.",
                trueartsbreak: 3000
            },
        passive: 
            {
                ability1: "Gain a Death Counter that increases its Count by the total number of Enemies and Allies that have died during the current Quest. Increase own Skill CT REC by 8% per Death Count (up to 104%).",
                ability2: "Increase own Arts by 2/s.",
                ability3: "Increase Curse RES by 100%."
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragRagsherumPhantom.png",
                    mat3amt: 4,
                    hover3: "RagsherumPhantom",
                    mat4: "/db/Icons/dungeon_drops/fragGoldola.png",
                    mat4amt: 3,
                    hover4: "Goldola",
                    mat5: "/db/Icons/dungeon_drops/fragRadachne.png",
                    mat5amt: 3,
                    hover5: "Radachne"
                }
            },
        lore: 
            {   
                evo5: "A necromancer who destroyed cities and nations early in the Ancient War. They say that she was capable of undending brutality on the orders of a certain beloved Demoness. Her unusual values system meant she was apt to call the spirits of the dead she used her "friends," and looked down on the living as prisoners in the flesh. Her nature was shaped by the legendary Flame Giant, and this is evidenced by the terrible brutality she showed when dispatched to a certain territory.",
                evoawk: "Her eyes sparkled at the resurrected Flame Giant of legend. She would not balk at turning an entire nation into a realm of the dead to earn the praise and favor of her beloved Demoness. All that remained was the elimination of a certain irritating sorceress, companion to the Giant. However, the needed Giant only obeyed the girl's orders. The only choice is to turn her into a "friend." With that understanding, she gladly went among the teeming spirtis."
            }
    },
    { //Berwick (Magic) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102486112,
        name: "Berwick (Magic)",
        attribute: "Fire",
        type: "Demon",
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102485112.png",
                detailawk: "/db/Units/Detail/unit_detail_102486112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102485112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102486112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Riviera - Missing Lore, Stats, Slots, Evolution, True WEapon, TW Image
        id: 102496312,
        name: "Riviera",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102495312.png",
                detailawk: "/db/Units/Detail/unit_detail_102496312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102495312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102496312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Thetis - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102506212,
        name: "Thetis",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102505212.png",
                detailawk: "/db/Units/Detail/unit_detail_102506212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102505212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102506212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Vox - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102516212,
        name: "Vox",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102515212.png",
                detailawk: "/db/Units/Detail/unit_detail_102516212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102515212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102516212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Duke - Missing Lore, Stats, Slots, Evolution, True Weapon, TW image
        id: 102526512,
        name: "Duke",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102525512.png",
                detailawk: "/db/Units/Detail/unit_detail_102526512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102525512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102526512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Melia (Water) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102536212,
        name: "Melia (Water)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102535212.png",
                detailawk: "/db/Units/Detail/unit_detail_102536212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102535212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102536212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Celia (Dark) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102546512,
        name: "Celia (Dark)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102545512.png",
                detailawk: "/db/Units/Detail/unit_detail_102546512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102545512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102546512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Vitz - Missing Lore, Stats, Slots, Evolution
        id: 102556211,
        name: "Vitz",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102555211.png",
                detailawk: "/db/Units/Detail/unit_detail_102556211.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102555211.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102556211.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Maquiness - Missing Lore, Stats, Slots, Evolution
        id: 102566312,
        name: "Maquiness",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102565312.png",
                detailawk: "/db/Units/Detail/unit_detail_102566312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102565312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102566312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Eternia - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102576412,
        name: "Eternia",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102575412.png",
                detailawk: "/db/Units/Detail/unit_detail_102576412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102575412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102576412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kurt - Missing Lore, Stats, Slots, Evolution
        id: 102586112,
        name: "Kurt",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102585112.png",
                detailawk: "/db/Units/Detail/unit_detail_102586112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102585112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102586112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Aesis - Missing Lore, Stats, Slots, Evolution
        id: 102596312,
        name: "Aesis",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102595312.png",
                detailawk: "/db/Units/Detail/unit_detail_102596312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102595312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102596312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Luda - Missing Lore, Stats, Slots, Evolution
        id: 102606312,
        name: "Luda",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102605312.png",
                detailawk: "/db/Units/Detail/unit_detail_102606312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102605312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102606312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Lygor - Missing Lore, Stats, Slots, Evolution
        id: 102616512,
        name: "Lygor",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102615512.png",
                detailawk: "/db/Units/Detail/unit_detail_102616512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102615512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102616512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Tia - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102626212,
        name: "Tia",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102625212.png",
                detailawk: "/db/Units/Detail/unit_detail_102626212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102625212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102626212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Shasha - Missing Lore, Stats, Slots, Evolution
        id: ,
        name: ,
        attribute: ,
        type: ,
        image: 
            {
                detail5: ,
                detailawk: "/db/Units/Detail/unit_detail_.png",
                thumb5: ,
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kush - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102646412,
        name: "Kush",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102645412.png",
                detailawk: "/db/Units/Detail/unit_detail_102646412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102645412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102646412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rebol - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102656512,
        name: "Rebol",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102655512.png",
                detailawk: "/db/Units/Detail/unit_detail_102656512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102655512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102656512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Berwick (Physical) - Missing Lore, Stats, Slots, Evolution, True WEapon, TW Image
        id: 102666112,
        name: "Berwick (Physical)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102665112.png",
                detailawk: "/db/Units/Detail/unit_detail_102666112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102665112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102666112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rosetta (Water) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102676212,
        name: "Rosetta (Water)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102675212.png",
                detailawk: "/db/Units/Detail/unit_detail_102676212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102675212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102676212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Leone - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102686412,
        name: "Leone",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102685412.png",
                detailawk: "/db/Units/Detail/unit_detail_102686412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102685412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102686412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Belle - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102696312,
        name: "Belle",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102695312.png",
                detailawk: "/db/Units/Detail/unit_detail_102696312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102695312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102696312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Honoka - Missing Lore, Stats, Slots, Evolution
        id: 102706112,
        name: "Honoka",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102705112.png",
                detailawk: "/db/Units/Detail/unit_detail_102706112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102705112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102706112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Io - Missing Lore, Stats, Slots, Evolution
        id: 102716412,
        name: "Io",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102715412.png",
                detailawk: "/db/Units/Detail/unit_detail_102716412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102715412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102716412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Miri-nyan - Missing Lore, Stats, Slots, Evolution
        id: 102736112,
        name: "Miri-nyan",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102735112.png",
                detailawk: "/db/Units/Detail/unit_detail_102736112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102735112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102736112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Tami-nyan - Missing Lore, Stats, Slots, Evolution
        id: 102746212,
        name: "Tami-nyan",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102745212.png",
                detailawk: "/db/Units/Detail/unit_detail_102746212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102745212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102746212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Fen (Dark) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102756512,
        name: "Fen (Dark)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102755512.png",
                detailawk: "/db/Units/Detail/unit_detail_102756512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102755512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102756512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kane (Dark) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102766512,
        name: "Kane (Dark)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102765512.png",
                detailawk: "/db/Units/Detail/unit_detail_102766512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102765512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102766512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sybil - Missing Lore, Stats, Slots, Evolution
        id: 102776512,
        name: "Sybil",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102775512.png",
                detailawk: "/db/Units/Detail/unit_detail_102776512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102775512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102776512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sai - Missing Lore, Stats, Slots, Evolution
        id: 102786212,
        name: "Sai",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102785212.png",
                detailawk: "/db/Units/Detail/unit_detail_102786212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102785212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102786212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Cynthia - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102796212,
        name: "Cynthia",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102795212.png",
                detailawk: "/db/Units/Detail/unit_detail_102796212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102795212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102796212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Melissa - Missing Lore, Stats, Slots, Evolution, True Weapon, tW Image
        id: 102806412,
        name: "Melissa",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102805412.png",
                detailawk: "/db/Units/Detail/unit_detail_102806412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102805412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102806412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Barossa - Missing Lore, Stats, Slots, Evolution, True  Weapon, TW Image
        id: 102816512,
        name: "Barossa",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102815512.png",
                detailawk: "/db/Units/Detail/unit_detail_102816512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102815512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102816512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Mizuki - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102826212,
        name: "Mizuki",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102825212.png",
                detailawk: "/db/Units/Detail/unit_detail_102826212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102825212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102826212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ginzo - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102836512,
        name: "Ginzo",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102835512.png",
                detailawk: "/db/Units/Detail/unit_detail_102836512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102835512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102836512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Shiki - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102846412,
        name: "Shiki",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102845412.png",
                detailawk: "/db/Units/Detail/unit_detail_102846412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102845412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102846412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Shuri - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102856512,
        name: "Shuri",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102855512.png",
                detailawk: "/db/Units/Detail/unit_detail_102856512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102855512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102856512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Amane - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102866412,
        name: "Amane",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102865412.png",
                detailawk: "/db/Units/Detail/unit_detail_102866412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102865412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102866412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Kisaragi - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102876112,
        name: "Kisaragi",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102875112.png",
                detailawk: "/db/Units/Detail/unit_detail_102876112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102875112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102876112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Saku - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102886312,
        name: "Saku",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102885312.png",
                detailawk: "/db/Units/Detail/unit_detail_102886312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102885312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102886312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Tamae - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102896112,
        name: "Tamae",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102895112.png",
                detailawk: "/db/Units/Detail/unit_detail_102896112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102895112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102896112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Orgah - Missing Lore, Stats, slots, Evolution, True Weapon, TW Image
        id: 102906112,
        name: "Orgah",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102905112.png",
                detailawk: "/db/Units/Detail/unit_detail_102906112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102905112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102906112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Adele - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102916212,
        name: "Adele",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102915212.png",
                detailawk: "/db/Units/Detail/unit_detail_102916212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102915212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102916212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Vermilia - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102926112,
        name: "Vermilia",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102925112.png",
                detailawk: "/db/Units/Detail/unit_detail_102926112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102925112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102926112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Firia - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102936212,
        name: "Firia",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102935212.png",
                detailawk: "/db/Units/Detail/unit_detail_102936212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102935212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102936212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Garlan - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102946312,
        name: "Garlan",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102945312.png",
                detailawk: "/db/Units/Detail/unit_detail_102946312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102945312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102946312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Aluze - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102956412,
        name: "Aluze",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102955412.png",
                detailawk: "/db/Units/Detail/unit_detail_102956412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102955412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102956412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Veronica - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102966212,
        name: "Veronica",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102965212.png",
                detailawk: "/db/Units/Detail/unit_detail_102966212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102965212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102966212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Roy (Fire) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 102976112,
        name: "Roy (Fire)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102975112.png",
                detailawk: "/db/Units/Detail/unit_detail_102976112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102975112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102976112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Cestina - Missing Lore, Stats, Slots, EVolution, True WEapon, TW Image
        id: 102986312,
        name: "Cestina",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102985312.png",
                detailawk: "/db/Units/Detail/unit_detail_102986312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102985312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102986312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Radak - Missing Lore, Stats, Slots, Evolution
        id: 102996112,
        name: "Radak",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_102995112.png",
                detailawk: "/db/Units/Detail/unit_detail_102996112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_102995112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_102996112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Liza - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103006412,
        name: "Liza",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103005412.png",
                detailawk: "/db/Units/Detail/unit_detail_103006412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103005412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103006412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak:
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Cygnet - Missing Lore, Stats, Slots, Evolution
        id: 103016512,
        name: "Cygnet",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103015512.png",
                detailawk: "/db/Units/Detail/unit_detail_103016512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103015512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103016512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Orvell - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103026412,
        name: "Orvell",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103025412.png",
                detailawk: "/db/Units/Detail/unit_detail_103026412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103025412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103026412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Virago - Missing Lore, Stats, Slots, Evolution
        id: 103036212,
        name: "Virago",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103035212.png",
                detailawk: "/db/Units/Detail/unit_detail_103036212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103035212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103036212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak:
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Luahn - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103046512,
        name: "Luahn",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103045512.png",
                detailawk: "/db/Units/Detail/unit_detail_103046512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103045512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103046512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Chloe - Missing Lore, Stats, Slots, Evolution
        id: 103056511,
        name: "Chloe",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103055511.png",
                detailawk: "/db/Units/Detail/unit_detail_103056511.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103055511.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103056511.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: ,
                crossarts: "",
                crossartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Angelas - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103066112,
        name: "Angelas",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103065112.png",
                detailawk: "/db/Units/Detail/unit_detail_103066112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103065112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103066112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Eagle - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103076312,
        name: "Eagle",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103075312.png",
                detailawk: "/db/Units/Detail/unit_detail_103076312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103075312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103076312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Bakoo - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103086512,
        name: "Bakoo",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103085512.png",
                detailawk: "/db/Units/Detail/unit_detail_103086512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103085512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103086512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Victoire - Missing Lore, Stats, Slots, Evolution, True WEapon, tW Image
        id: 103096412,
        name: "Victoire",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103095412.png",
                detailawk: "/db/Units/Detail/unit_detail_103096412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103095412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103096412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Forte - Missing Lore, Stats, Slots, Evolution, True WEapon, TW Image
        id: 103106512,
        name: "Forte",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103105512.png",
                detailawk: "/db/Units/Detail/unit_detail_103106512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103105512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103106512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sumire - Missing Lore, Stats, Slots, Evolution
        id: 103116112,
        name: "Sumire",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103115112.png",
                detailawk: "/db/Units/Detail/unit_detail_103116112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103115112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103116112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Arcana - Missing Lore, Stats, Slots, Evolution
        id: 103126512,
        name: "Arcana",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_1031265512.png",
                detailawk: "/db/Units/Detail/unit_detail_103126512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103125512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103126512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Ashleigh - Missing Lore, Stats, Slots, EVolution, True Weapon, TW Image
        id: 103136112,
        name: "Ashleigh",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103135112.png",
                detailawk: "/db/Units/Detail/unit_detail_103136112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103135112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103136112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Salyssa - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103146312,
        name: "Salyssa",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103145312.png",
                detailawk: "/db/Units/Detail/unit_detail_103146312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103145312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103146312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Sharon - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103156412,
        name: "Sharon",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103155412.png",
                detailawk: "/db/Units/Detail/unit_detail_103156412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103155412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103156412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rits - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103166412,
        name: "Rits",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103165412.png",
                detailawk: "/db/Units/Detail/unit_detail_103166412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103165412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103166412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Raine - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103176212,
        name: "Raine",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103175212.png",
                detailawk: "/db/Units/Detail/unit_detail_103176212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103175212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103176212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Alulu - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103186512,
        name: "Alulu",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103185512.png",
                detailawk: "/db/Units/Detail/unit_detail_103186512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103185512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103186512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Marika - Missing Lore, Stats, Slots, Evolution, True WeaponS, TW Images
        id: 103196112,
        name: "Marika",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103195112.png",
                detailawk: "/db/Units/Detail/unit_detail_103196112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103195112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103196112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                true1: 
                {
                    name: "",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "",
                    skillbreak: ,
                    passive: 
                        {
                            ability1: 
                            ability2: 
                        }
                },
                true2: 
                {
                    name: "",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "",
                    skillbreak: ,
                    passive: 
                        {
                            ability1: 
                            ability2: 
                        }
                }
                
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Noel - Missing Lore, Stats, Slots, Evolution, True WeaponS, TW Image
        id: 103206412,
        name: "Noel",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103205412.png",
                detailawk: "/db/Units/Detail/unit_detail_103206412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103205412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103206412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
            trueweapon: //If no TW, may delete this section
            {
                true1: 
                {
                    name: "",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "",
                    skillbreak: ,
                    passive: 
                        {
                            ability1: 
                            ability2: 
                        }
                },
                true2: 
                {
                    name: "",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "",
                    skillbreak: ,
                    passive: 
                        {
                            ability1: 
                            ability2: 
                        }
                }
                
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Batiste - Missing Lore, STats, Slots, Evolution , True WeaponS, TW Images
        id: 103216512,
        name: "Batiste",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103215512.png",
                detailawk: "/db/Units/Detail/unit_detail_103216512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103215512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103216512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
            trueweapon: //If no TW, may delete this section
            {
                true1: 
                {
                    name: "",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "",
                    skillbreak: ,
                    passive: 
                        {
                            ability1: 
                            ability2: 
                        }
                },
                true2: 
                {
                    name: "",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "",
                    skillbreak: ,
                    passive: 
                        {
                            ability1: 
                            ability2: 
                        }
                }
                
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Juno - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103226412,
        name: "Juno",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103225412.png",
                detailawk: "/db/Units/Detail/unit_detail_103226412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103225412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103226412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Liese (Dark) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103236512,
        name: "Liese (Dark)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103235512.png",
                detailawk: "/db/Units/Detail/unit_detail_103236512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103235512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103236512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Emmy - Missing Lore, Stats, Slots, Evolution, True Weapon, TW image
        id: 103246512,
        name: "Emmy",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103245512.png",
                detailawk: "/db/Units/Detail/unit_detail_103246512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103245512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103246512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                true1: 
                {
                    name: "",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "",
                    skillbreak: ,
                    passive: 
                        {
                            ability1: 
                            ability2: 
                        }
                },
                true2: 
                {
                    name: "",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "",
                    skillbreak: ,
                    passive: 
                        {
                            ability1: 
                            ability2: 
                        }
                }
                
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Groytz - Missing Lore, Stats, Slots, Evolution, True WeaponS, TW Images
        id: 103256312,
        name: "Groytz",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103255312.png",
                detailawk: "/db/Units/Detail/unit_detail_103256312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103255312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103256312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
            trueweapon: //If no TW, may delete this section
            {
                true1: 
                {
                    name: "",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "",
                    skillbreak: ,
                    passive: 
                        {
                            ability1: 
                            ability2: 
                        }
                },
                true2: 
                {
                    name: "",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "",
                    skillbreak: ,
                    passive: 
                        {
                            ability1: 
                            ability2: 
                        }
                }
                
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Hart (Earth) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103276312,
        name: "Hart (Earth)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103275312.png",
                detailawk: "/db/Units/Detail/unit_detail_103276312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103275312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103276312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Hart (Dark) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103286512,
        name: "Hart (Dark)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103285512.png",
                detailawk: "/db/Units/Detail/unit_detail_103286512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103285512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103286512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Miranda - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103296412,
        name: "Miranda",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103295412.png",
                detailawk: "/db/Units/Detail/unit_detail_103296412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103295412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103296412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Simon - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103306512,
        name: "Simon",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103305512.png",
                detailawk: "/db/Units/Detail/unit_detail_103306512.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103305512.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103306512.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Vultee (Earth) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103316312,
        name: "Vultee (Earth)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103315312.png",
                detailawk: "/db/Units/Detail/unit_detail_103316312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103315312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103316312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Priscilla (Fire) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103326112,
        name: "Priscilla (Fire)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103325112.png",
                detailawk: "/db/Units/Detail/unit_detail_103326112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103325112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103326112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Serah - Missing Lore, Stats, Slots, Evolution, True Weapon, TWImage
        id: 103346412,
        name: "Serah",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103345412.png",
                detailawk: "/db/Units/Detail/unit_detail_103346412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103345412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103346412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Airi - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103356312,
        name: "Airi",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103355312.png",
                detailawk: "/db/Units/Detail/unit_detail_103356312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103355312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103356312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Lyra - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103366412,
        name: "Lyra",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103365412.png",
                detailawk: "/db/Units/Detail/unit_detail_103366412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103365412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103366412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Summer Juno - Missing Lore, Stats, Slots, Evolution
        id: 103376212,
        name: "Summer Juno",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103375212.png",
                detailawk: "/db/Units/Detail/unit_detail_103376212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103375212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103376212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Summer Leone - Missing Lore, Stats, Slots, Evolution
        id: 103386312,
        name: "Summer Leone",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103385312.png",
                detailawk: "/db/Units/Detail/unit_detail_103386312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103385312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103386312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Elizabeth - Missing Lore, Stats, Slots, Evolution, True Weapon, tW Image
        id: 103396112,
        name: "Elizabeth",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103395112.png",
                detailawk: "/db/Units/Detail/unit_detail_103396112.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103395112.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103396112.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Vultee (Water) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW IMage
        id: 103406212,
        name: "Vultee (Water)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103405212.png",
                detailawk: "/db/Units/Detail/unit_detail_103406212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103405212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103406212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Priscilla (Water) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103416212,
        name: "Priscilla (Water)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103415212.png",
                detailawk: "/db/Units/Detail/unit_detail_103416212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103415212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103416212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Emperor of Isliid - Missing Lore, Stats, Slots, Evolution, True WeaponS, TW Images
        id: 103426412,
        name: "Emperor of Isliid",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103425412.png",
                detailawk: "/db/Units/Detail/unit_detail_103426412.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103425412.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103426412.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                true1: 
                {
                    name: "",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "",
                    skillbreak: ,
                    passive: 
                        {
                            ability1: 
                            ability2: 
                        }
                },
                true2: 
                {
                    name: "",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "",
                    skillbreak: ,
                    passive: 
                        {
                            ability1: 
                            ability2: 
                        }
                },
                true3: 
                {
                    name: "",
                    slot: "/db/Mines/thumbnail/physLB.png",
                    detail: "",
                    skill: "",
                    skillbreak: ,
                    passive: 
                        {
                            ability1: 
                            ability2: 
                        }
                }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Beguiler Selia - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103436212,
        name: "Beguiler Selia",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103435212.png",
                detailawk: "/db/Units/Detail/unit_detail_103436212.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103435212.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103436212.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    },
    { //Rosetta (Earth) - Missing Lore, Stats, Slots, Evolution, True Weapon, TW Image
        id: 103446312,
        name: "Rosetta (Earth)",
        attribute: ,
        type: ,
        image: 
            {
                detail5: "/db/Units/Detail/unit_detail_103445312.png",
                detailawk: "/db/Units/Detail/unit_detail_103446312.png",
                thumb5: "/db/Units/Thumbnail/unit_thumbnail_103445312.png",
                thumbawk: "/db/Units/Thumbnail/unit_thumbnail_103446312.png"
            },
        slots: 
            {
                slot1: 5,
                slot1type: "/db/Mines/thumbnail/magLB.png",
                slot2: 5,
                slot2type: "/db/Mines/thumbnail/physLB.png",
                slot3: 4,
                slot3type: "/db/Mines/thumbnail/defLB.png"
            },
        stats: 
            {
                hp: ,
                hpplus: ,
                atk: ,
                atkplus: ,
                def: ,
                defplus: 
            },
        skillset: 
            {
                skill: "",
                skillbreak: ,
                arts: "",
                artsbreak: ,
                truearts: "",
                trueartsbreak: 
            },
        passive: 
            {
                ability1: "",
                ability2: ""
            }, 
        evolution: 
            {
                evo5awk:
                {
                    mat1: "/db/Icons/dungeon_drops/material_thumbnail_heroSoul.png",
                    mat1amt: 30,
                    mat2: "/db/Icons/dungeon_drops/material_thumbnail_paradisos.png",
                    mat2amt: 1,
                    mat3: "/db/Icons/dungeon_drops/fragFosradius.png",
                    mat3amt: 4,
                    hover3: "Fosradius",
                    mat4: "/db/Icons/dungeon_drops/fragCodeXTF.png",
                    mat4amt: 4,
                    hover4: "Code-XTF",
                    mat5: "/db/Icons/dungeon_drops/fragAerugraxes.png",
                    mat5amt: 5,
                    hover5: "Aerugraxes"
                }
            },
        trueweapon: //If no TW, may delete this section
            {
                name: "",
                slot: "/db/Mines/thumbnail/physLB.png",
                detail: "",
                skill: "",
                skillbreak: ,
                passive: 
                    {
                        ability1: 
                        ability2: 
                    }
            },
        lore: 
            {   
                evo5: "Missing Lore Information, please contact site owner",
                evoawk: "Missing Lore Information, please contact site owner"
            }
    }
    
];

export function getUnits() {
    return UnitInformation;
}

export function getUnitByName(name) {
    return UnitInformation.find(
        units => units.name === name
    );
}

