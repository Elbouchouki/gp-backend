"use strict";

module.exports = {
  up: async (queryInterface) => {
    const rolesList = [
      {
        role_name: "admin",
      },
      {
        role_name: "financer",
      },
      {
        role_name: "normal",
      },
    ];
    const permissionList = [
      {
        name: "show_recu_normal",
        type: "show",
      },
      {
        name: "show_mouvement",
        type: "show",
      },
      {
        name: "show_annulation",
        type: "show",
      },
      {
        name: "export_excel",
        type: "download",
      },
      {
        name: "add_user",
        type: "host",
      },
      {
        name: "delete_user",
        type: "host",
      },
      {
        name: "update_user",
        type: "host",
      },
      {
        name: "update_self",
        type: "self",
      },
      {
        name: "show_recu_illisible",
        type: "show",
      },
      {
        name: "show_recu_perdu",
        type: "show",
      },
      {
        name: "show_recu_entree_abonne",
        type: "show",
      },
      {
        name: "show_recu_recharge_abonne",
        type: "show",
      },
    ];
    // const [admin, financer, normal] =
    const firstRoleID = await queryInterface.bulkInsert("roles", rolesList, {
      returning: true,
    });
    // const [
    //   show_recu_normal,0
    //   show_mouvement,1
    //   show_annulation,2
    //   export_excel,3
    //   add_user,4
    //   delete_user,5
    //   update_user,6
    //   update_self,7
    //   show_recu_illisible,8
    //   show_recu_perdu,9
    //   show_recu_entree_abonne,10
    //   show_recu_recharge_abonne,11
    // ] =
    const firstPermID = await queryInterface.bulkInsert(
      "permissions",
      permissionList,
      {
        returning: true,
      }
    );
    const rolePermissionList = [
      //admin
      {
        PermissionId: firstPermID,
        RoleID: firstRoleID,
      },
      {
        PermissionId: firstPermID + 1,
        RoleID: firstRoleID,
      },
      {
        PermissionId: firstPermID + 2,
        RoleID: firstRoleID,
      },
      {
        PermissionId: firstPermID + 3,
        RoleID: firstRoleID,
      },
      {
        PermissionId: firstPermID + 4,
        RoleID: firstRoleID,
      },
      {
        PermissionId: firstPermID + 5,
        RoleID: firstRoleID,
      },
      {
        PermissionId: firstPermID + 6,
        RoleID: firstRoleID,
      },
      {
        PermissionId: firstPermID + 7,
        RoleID: firstRoleID,
      },
      {
        PermissionId: firstPermID + 8,
        RoleID: firstRoleID,
      },
      {
        PermissionId: firstPermID + 9,
        RoleID: firstRoleID,
      },
      {
        PermissionId: firstPermID + 10,
        RoleID: firstRoleID,
      },
      {
        PermissionId: firstPermID + 11,
        RoleID: firstRoleID,
      },
      //financer
      {
        PermissionId: firstPermID,
        RoleID: firstRoleID + 1,
      },
      {
        PermissionId: firstPermID + 3,
        RoleID: firstRoleID + 1,
      },
      {
        PermissionId: firstPermID + 7,
        RoleID: firstRoleID + 1,
      },
      {
        PermissionId: firstPermID + 8,
        RoleID: firstRoleID + 1,
      },
      {
        PermissionId: firstPermID + 11,
        RoleID: firstRoleID + 1,
      },

      //normal
      {
        PermissionId: firstPermID,
        RoleID: firstRoleID + 2,
      },
      {
        PermissionId: firstPermID + 1,
        RoleID: firstRoleID + 2,
      },
      {
        PermissionId: firstPermID + 7,
        RoleID: firstRoleID + 2,
      },
      {
        PermissionId: firstPermID + 10,
        RoleID: firstRoleID + 2,
      },
    ];
    await queryInterface.bulkInsert("rolepermissions", rolePermissionList);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("roles", null, {});
    await queryInterface.bulkDelete("permissions", null, {});
    await queryInterface.bulkDelete("rolepermissions", null, {});
  },
};
