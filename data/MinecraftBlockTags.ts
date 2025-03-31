import {MinecraftIdRefs} from "../lib/MinecraftIdRefs";

export class MinecraftBlockTags extends MinecraftIdRefs {
  public static Logs = this.get('logs');

  static IsPickaxeItemDestructible = this.get('is_pickaxe_item_destructible');
  static IsHoeItemDestructible = this.get('is_hoe_item_destructible');
  static IsShovelItemDestructible = this.get('is_shovel_item_destructible');
  static IsAxeItemDestructible = this.get('is_axe_item_destructible');
  static IsSwordItemDestructible = this.get('is_sword_item_destructible');
  static IsShearsItemDestructible = this.get('is_shears_item_destructible');

  static StoneTierDestructible = this.get('stone_tier_destructible');
  static IronTierDestructible = this.get('iron_tier_destructible');
  static DiamondTierDestructible = this.get('diamond_tier_destructible');


  static Dirt_Experimental = 'dirt';
}