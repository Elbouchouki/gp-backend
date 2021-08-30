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
        name: "show_recu",
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
    ];
    // const [admin, financer, normal] =
    const firstRoleID = await queryInterface.bulkInsert("roles", rolesList, {
      returning: true,
    });
    // const [
    //   show_recu,
    //   show_mouvement,
    //   show_annulation,
    //   export_excel,
    //   add_user,
    //   delete_user,
    //   update_user,
    //   update_self,
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
    ];
    await queryInterface.bulkInsert("rolepermissions", rolePermissionList);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("roles", null, {});
    await queryInterface.bulkDelete("permissions", null, {});
    await queryInterface.bulkDelete("rolepermissions", null, {});
  },
};
