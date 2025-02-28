Last login: Fri Feb 28 01:26:08 on ttys034
You have mail.
wds@MBAir-989 ~ % ssh -i "pgftGrapeRanktech.pem" ubuntu@ec2-3-227-35-42.compute-1.amazonaws.com

Welcome to Ubuntu 24.04.2 LTS (GNU/Linux 6.8.0-1021-aws x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Fri Feb 28 06:27:43 UTC 2025

  System load:  0.0                Temperature:              -273.1 C
  Usage of /:   27.5% of 18.33GB   Processes:                191
  Memory usage: 6%                 Users logged in:          1
  Swap usage:   0%                 IPv4 address for enp39s0: 172.31.24.99

 * Ubuntu Pro delivers the most comprehensive open source security and
   compliance features.

   https://ubuntu.com/aws/pro

Expanded Security Maintenance for Applications is not enabled.

0 updates can be applied immediately.

Enable ESM Apps to receive additional future security updates.
See https://ubuntu.com/esm or run: sudo pro status


*** System restart required ***
Last login: Fri Feb 28 06:26:38 2025 from 73.135.5.188
ubuntu@ip-172-31-24-99:~$ cd hasenpfeffr/pipeline
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline$ cd stream
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ ls -la
total 24
drwxrwxr-x 3 ubuntu ubuntu 4096 Feb 28 06:25 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rwxr-xr-x 1 ubuntu ubuntu 1685 Feb 28 06:25 addToQueue.mjs
-rwxrwxr-x 1 ubuntu ubuntu 1168 Feb 28 01:53 processQueue.sh
drwxr-xr-x 2 ubuntu ubuntu 4096 Feb 28 04:19 queue
-rwxrwxr-x 1 ubuntu ubuntu 2346 Feb 28 01:53 updateSingleNostrUser.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ cd queue
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -la
total 8
drwxr-xr-x 2 ubuntu ubuntu 4096 Feb 28 04:19 .
drwxrwxr-x 3 ubuntu ubuntu 4096 Feb 28 06:25 ..
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ cd ..
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo nano addToQueue.mjs
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo nano addToQueue.mjs
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo ./addToQueue.mjs
HERE 1
myRelay: wss://relay.hasenpfeffr.com
HERE A
HERE B
HERE C_
^C
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo nano addToQueue.mjs
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo ./addToQueue.mjs
HERE 1
myRelay: wss://relay.hasenpfeffr.com
HERE A
HERE B
HERE C_
HERE D
event received; id: 69520a30419d87d2b9fada14ca0ecc74d375f9ea8fcc55fe6debfb993b869ad1; pubkey: b05ddaa79926f85b23723a8938cfe432d84ec0d7a9b3137d979af6d0877da8a7
{
    "id": "69520a30419d87d2b9fada14ca0ecc74d375f9ea8fcc55fe6debfb993b869ad1",
    "pubkey": "b05ddaa79926f85b23723a8938cfe432d84ec0d7a9b3137d979af6d0877da8a7",
    "created_at": 1740724867,
    "kind": 3
}
HERE D
event received; id: 16b4b1eafddce276db89285e30a766c014963d4715b9eda5146117571d1d38fe; pubkey: 9557955355f5f11d64dc1c2d7d136d5811904fdc592a950cb4091d05417ffba1
{
    "id": "16b4b1eafddce276db89285e30a766c014963d4715b9eda5146117571d1d38fe",
    "pubkey": "9557955355f5f11d64dc1c2d7d136d5811904fdc592a950cb4091d05417ffba1",
    "created_at": 1740724863,
    "kind": 3
}
HERE D
event received; id: c7682813ee0305d3aca2feab11b74177d4193063884ea66fa7f591cf5fb422ef; pubkey: cff1720e77bb068f0ebbd389dcd50822dd1ac8d2ac0b0f5f0800ae9e15c7e2b2
{
    "id": "c7682813ee0305d3aca2feab11b74177d4193063884ea66fa7f591cf5fb422ef",
    "pubkey": "cff1720e77bb068f0ebbd389dcd50822dd1ac8d2ac0b0f5f0800ae9e15c7e2b2",
    "created_at": 1740724831,
    "kind": 3
}
HERE D
event received; id: 6142696ae0b3755ece6b96a54bae44098274906d6326cd7937b49568f1ed68db; pubkey: fbbee9af0f8e95f5e539c46013c7002a1c568f5fb08dde3e5680b451367a87fa
{
    "id": "6142696ae0b3755ece6b96a54bae44098274906d6326cd7937b49568f1ed68db",
    "pubkey": "fbbee9af0f8e95f5e539c46013c7002a1c568f5fb08dde3e5680b451367a87fa",
    "created_at": 1740724831,
    "kind": 3
}
HERE D
event received; id: 1dc49aa8f13ff9a037e85d064dc7ecb0151d3faf4eee167e16b900a2b2510b63; pubkey: e2b8ba3e6f7d63ab44559f25a6863d1d9ba1a2cd751391a69e261ad027400d81
{
    "id": "1dc49aa8f13ff9a037e85d064dc7ecb0151d3faf4eee167e16b900a2b2510b63",
    "pubkey": "e2b8ba3e6f7d63ab44559f25a6863d1d9ba1a2cd751391a69e261ad027400d81",
    "created_at": 1740724802,
    "kind": 3
}
HERE D
event received; id: 263fd14e7a217b1ee483038dd266a54351a03ee71db488a291387edf737f2b59; pubkey: 96d4945b4bdfe52db60875ff7aba6e98aff214a52d1384d866238fdfd9b60e7c
{
    "id": "263fd14e7a217b1ee483038dd266a54351a03ee71db488a291387edf737f2b59",
    "pubkey": "96d4945b4bdfe52db60875ff7aba6e98aff214a52d1384d866238fdfd9b60e7c",
    "created_at": 1740724792,
    "kind": 3
}
HERE D
event received; id: d0813d0809cbcc9ae4741cc22b307cf4b309b00d320c0568b9a919f40924b1e3; pubkey: 8a95ee7c9678b2d3ab32e16623e38594ed4471123d0af38ac6713d708bf9d5c6
{
    "id": "d0813d0809cbcc9ae4741cc22b307cf4b309b00d320c0568b9a919f40924b1e3",
    "pubkey": "8a95ee7c9678b2d3ab32e16623e38594ed4471123d0af38ac6713d708bf9d5c6",
    "created_at": 1740724724,
    "kind": 3
}
HERE D
event received; id: 15a5eb522d43623e9eb5a46c8c1ab0fa652f481cf72c43df53c24055f798815d; pubkey: 5d6e3e63e837860d21a3669ed90bde4c4d0fe267fd6c1dfad8ec9ef0ded29fa3
{
    "id": "15a5eb522d43623e9eb5a46c8c1ab0fa652f481cf72c43df53c24055f798815d",
    "pubkey": "5d6e3e63e837860d21a3669ed90bde4c4d0fe267fd6c1dfad8ec9ef0ded29fa3",
    "created_at": 1740724708,
    "kind": 3
}
HERE D
event received; id: ddfef7972f41560d41c15a0904f177f4af4d2a0e1ed284a47c85d802597eed12; pubkey: a372829d236a92cfe48008845daacf63ab87bd3f09dea86e4f13e9b89275ce5b
{
    "id": "ddfef7972f41560d41c15a0904f177f4af4d2a0e1ed284a47c85d802597eed12",
    "pubkey": "a372829d236a92cfe48008845daacf63ab87bd3f09dea86e4f13e9b89275ce5b",
    "created_at": 1740724695,
    "kind": 10000
}
HERE D
event received; id: 30f8cd159b377691534ce46a6492d3d783e0e24ed704c54433d9a477c37725c3; pubkey: c54320e351de4b83050f63dd6569ccfb325fa8365d2a8a4163c3b4d6dec1c0f0
{
    "id": "30f8cd159b377691534ce46a6492d3d783e0e24ed704c54433d9a477c37725c3",
    "pubkey": "c54320e351de4b83050f63dd6569ccfb325fa8365d2a8a4163c3b4d6dec1c0f0",
    "created_at": 1740724665,
    "kind": 3
}
HERE D
event received; id: 2a40d515881bf235889e467b6e91f3dfcb910c6828e4919ca58d2e219e75bd59; pubkey: c7dadb010bf62c83ea3d49f3d6bfce1f3c41f4e0ff57d9637b37c287692c1c44
{
    "id": "2a40d515881bf235889e467b6e91f3dfcb910c6828e4919ca58d2e219e75bd59",
    "pubkey": "c7dadb010bf62c83ea3d49f3d6bfce1f3c41f4e0ff57d9637b37c287692c1c44",
    "created_at": 1740724595,
    "kind": 10000
}
HERE D
event received; id: e26d1169b314f9caf868353c0a05734accc572ce92be6785d68f39964b76eeff; pubkey: a6e954f91be82164c380982eaccf2499ebacf1fe49cbd849f4c9cde94468610f
{
    "id": "e26d1169b314f9caf868353c0a05734accc572ce92be6785d68f39964b76eeff",
    "pubkey": "a6e954f91be82164c380982eaccf2499ebacf1fe49cbd849f4c9cde94468610f",
    "created_at": 1740724586,
    "kind": 3
}
HERE D
event received; id: 30380cc2f2fb2463b09a67b6233e2db013a97ad684d4924e6f7f919689a825be; pubkey: 753d025936c8c3238b1b2b2f748be6df92743c2201e5198946e9d6a29156793f
{
    "id": "30380cc2f2fb2463b09a67b6233e2db013a97ad684d4924e6f7f919689a825be",
    "pubkey": "753d025936c8c3238b1b2b2f748be6df92743c2201e5198946e9d6a29156793f",
    "created_at": 1740724530,
    "kind": 3
}
HERE D
event received; id: 2dbbac3a4e7ed66edac811b73fd695d380b9c6416a4fac144d855d9fcbc472e5; pubkey: ba667b59d6061b5e318db800a8b8d05b4906ccf467a0b780694f474fbdb9ff0a
{
    "id": "2dbbac3a4e7ed66edac811b73fd695d380b9c6416a4fac144d855d9fcbc472e5",
    "pubkey": "ba667b59d6061b5e318db800a8b8d05b4906ccf467a0b780694f474fbdb9ff0a",
    "created_at": 1740724521,
    "kind": 3
}
HERE D
event received; id: aacc44adf2b397b9cef57deac5058cc9649e4a021ecf91d4cf92349664ea88a8; pubkey: 7c17b40889d132083dee1f1f08ff7c569526d0da46bfa6f77eb51dd1a52f048a
{
    "id": "aacc44adf2b397b9cef57deac5058cc9649e4a021ecf91d4cf92349664ea88a8",
    "pubkey": "7c17b40889d132083dee1f1f08ff7c569526d0da46bfa6f77eb51dd1a52f048a",
    "created_at": 1740724518,
    "kind": 3
}
HERE D
event received; id: 0d87fb0d6145d43f31d08467da6ee9bdacbd80f3302b3c8bac3aa10b3c2165e2; pubkey: f03df3d4134230420cdf7acbb35f96a2542424246ab052ba24c6fec6a4d4f676
{
    "id": "0d87fb0d6145d43f31d08467da6ee9bdacbd80f3302b3c8bac3aa10b3c2165e2",
    "pubkey": "f03df3d4134230420cdf7acbb35f96a2542424246ab052ba24c6fec6a4d4f676",
    "created_at": 1740724512,
    "kind": 1
}
HERE D
event received; id: afceb5d81b3ccfb8e111d0d9778a4539b1907d273557356a783a9c58b306bbf8; pubkey: aac07d95089ce6adf08b9156d43c1a4ab594c6130b7dcb12ec199008c5819a2f
{
    "id": "afceb5d81b3ccfb8e111d0d9778a4539b1907d273557356a783a9c58b306bbf8",
    "pubkey": "aac07d95089ce6adf08b9156d43c1a4ab594c6130b7dcb12ec199008c5819a2f",
    "created_at": 1740724478,
    "kind": 10000
}
HERE D
event received; id: 3d5ef5395c9b7b95fb035cdd97d70562910ba9a61ac07e507513c0a6a597aeb2; pubkey: 62343711e78a30e992d9694af9a8bc3859b0bb81f18b55f66a851fd36ff6ad1f
{
    "id": "3d5ef5395c9b7b95fb035cdd97d70562910ba9a61ac07e507513c0a6a597aeb2",
    "pubkey": "62343711e78a30e992d9694af9a8bc3859b0bb81f18b55f66a851fd36ff6ad1f",
    "created_at": 1740724471,
    "kind": 3
}
HERE D
event received; id: a5585cddd0f251bb051998ff293ef79809ab2b5eb295a113b49d4d3682ee9b88; pubkey: c9bb31e285a27b76d6314788e2de51c01dedd371f8d538dc4da16436a38aa615
{
    "id": "a5585cddd0f251bb051998ff293ef79809ab2b5eb295a113b49d4d3682ee9b88",
    "pubkey": "c9bb31e285a27b76d6314788e2de51c01dedd371f8d538dc4da16436a38aa615",
    "created_at": 1740724469,
    "kind": 3
}
HERE D
event received; id: 887405aed647b2092c59d6fd10e205798a644ab075b6ab714f4c899293a6a817; pubkey: 6b18bbee6003ea4b9143aa34e6bdf937f414ca67667693065e07bec79dbbf0ca
{
    "id": "887405aed647b2092c59d6fd10e205798a644ab075b6ab714f4c899293a6a817",
    "pubkey": "6b18bbee6003ea4b9143aa34e6bdf937f414ca67667693065e07bec79dbbf0ca",
    "created_at": 1740724428,
    "kind": 3
}
HERE D
event received; id: 174faf5474d2e8f15d02409b90981c04ca733202a32a52c0a833bb3e47059f3f; pubkey: 78b512a29311693e5357c4cf2e8a3552ed58af3d8582da439df45ed524df9bfe
{
    "id": "174faf5474d2e8f15d02409b90981c04ca733202a32a52c0a833bb3e47059f3f",
    "pubkey": "78b512a29311693e5357c4cf2e8a3552ed58af3d8582da439df45ed524df9bfe",
    "created_at": 1740724418,
    "kind": 3
}
HERE D
event received; id: cc73d84abae662af2fcb28ba252ef2ad9481b0a335f3d6ef23b40bcd7dfa9608; pubkey: 194c251cd4e3d2296fa92728a1e9c8e8ab93d11554c54f5d376293f4460e06f0
{
    "id": "cc73d84abae662af2fcb28ba252ef2ad9481b0a335f3d6ef23b40bcd7dfa9608",
    "pubkey": "194c251cd4e3d2296fa92728a1e9c8e8ab93d11554c54f5d376293f4460e06f0",
    "created_at": 1740724391,
    "kind": 3
}
HERE D
event received; id: c3121618310c7dc992a2eb1682d2e75b29247e63e8a9d4b7b926e546e775a439; pubkey: e5de992e4d0d9d2819c14e4962a60a8f9e6f4d449e26226c194fce674a95ef85
{
    "id": "c3121618310c7dc992a2eb1682d2e75b29247e63e8a9d4b7b926e546e775a439",
    "pubkey": "e5de992e4d0d9d2819c14e4962a60a8f9e6f4d449e26226c194fce674a95ef85",
    "created_at": 1740724390,
    "kind": 3
}
HERE D
event received; id: ecfc79c5a157e9ba113f938e487fd842fff1f896b1681bca224a513954bf412c; pubkey: 00000001505e7e48927046e9bbaa728b1f3b511227e2200c578d6e6bb0c77eb9
{
    "id": "ecfc79c5a157e9ba113f938e487fd842fff1f896b1681bca224a513954bf412c",
    "pubkey": "00000001505e7e48927046e9bbaa728b1f3b511227e2200c578d6e6bb0c77eb9",
    "created_at": 1740724385,
    "kind": 10000
}
HERE D
event received; id: cbd6f836a7614bd8ad0d248cb95788866b3d2f3f3ad3352c351970121f4d2cd0; pubkey: 00000001505e7e48927046e9bbaa728b1f3b511227e2200c578d6e6bb0c77eb9
{
    "id": "cbd6f836a7614bd8ad0d248cb95788866b3d2f3f3ad3352c351970121f4d2cd0",
    "pubkey": "00000001505e7e48927046e9bbaa728b1f3b511227e2200c578d6e6bb0c77eb9",
    "created_at": 1740724384,
    "kind": 1984
}
HERE D
event received; id: 84a0dfc8d97dc4bc85b2514385226f46c81af5565ed33714ed56c0a6fe355450; pubkey: 7f0e64b52ef56bec2b588d460fc63125f567db2c014d1ecce806d8d5b4209e2e
{
    "id": "84a0dfc8d97dc4bc85b2514385226f46c81af5565ed33714ed56c0a6fe355450",
    "pubkey": "7f0e64b52ef56bec2b588d460fc63125f567db2c014d1ecce806d8d5b4209e2e",
    "created_at": 1740724375,
    "kind": 3
}
HERE D
event received; id: 752dc886b10e93a2b45924f2d1c0074e443fae1326048be31ec87fb2885fabcc; pubkey: bc5757053eff53caf00441de144557f236dffa4547cd2a32c4abcc77dba3ed39
{
    "id": "752dc886b10e93a2b45924f2d1c0074e443fae1326048be31ec87fb2885fabcc",
    "pubkey": "bc5757053eff53caf00441de144557f236dffa4547cd2a32c4abcc77dba3ed39",
    "created_at": 1740724333,
    "kind": 3
}
HERE D
event received; id: afd18f2fd8131e883075617459f1cc4000ca9a6f00938965857462527b5f65b3; pubkey: b819d50fad4201f5f6479f9800c8a1b35b8f7d3ac6e1cc5f71686b61d1502641
{
    "id": "afd18f2fd8131e883075617459f1cc4000ca9a6f00938965857462527b5f65b3",
    "pubkey": "b819d50fad4201f5f6479f9800c8a1b35b8f7d3ac6e1cc5f71686b61d1502641",
    "created_at": 1740724329,
    "kind": 3
}
HERE D
event received; id: c542d8369617854a44b69d4ec70be618b408a4d59a18d10d0a9e01036e7a5a0f; pubkey: 7216e1df98ff551e77a4c0ce2d886a48ef79319d281b507ca3bfdd8118ce74ad
{
    "id": "c542d8369617854a44b69d4ec70be618b408a4d59a18d10d0a9e01036e7a5a0f",
    "pubkey": "7216e1df98ff551e77a4c0ce2d886a48ef79319d281b507ca3bfdd8118ce74ad",
    "created_at": 1740724253,
    "kind": 3
}
HERE D
event received; id: 6c40e885e366b8485c019f973f1adea16f4f3ba15e664bbb822e15872388fba4; pubkey: 8b12bddc423189c660156eab1ea04e1d44cc6621c550c313686705f704dda895
{
    "id": "6c40e885e366b8485c019f973f1adea16f4f3ba15e664bbb822e15872388fba4",
    "pubkey": "8b12bddc423189c660156eab1ea04e1d44cc6621c550c313686705f704dda895",
    "created_at": 1740724247,
    "kind": 3
}
HERE D
event received; id: ed9aecefa52290d010e7da283208e6192d6f0bc4fc2c588600ced5d812ad1871; pubkey: f167930831b2cd2aa65ed69874db70e3ad2c1b8b8312eb6abc7b424f977614d4
{
    "id": "ed9aecefa52290d010e7da283208e6192d6f0bc4fc2c588600ced5d812ad1871",
    "pubkey": "f167930831b2cd2aa65ed69874db70e3ad2c1b8b8312eb6abc7b424f977614d4",
    "created_at": 1740724199,
    "kind": 3
}
HERE D
event received; id: f113f05bbf416aaee46f8234c8fce9d4029c09dedeb4e9ade088f87c16ff0738; pubkey: 69c39eaad9048f5563d2554f97b09a679484b4b7d7f5f5b88cb88c46d7d1f187
{
    "id": "f113f05bbf416aaee46f8234c8fce9d4029c09dedeb4e9ade088f87c16ff0738",
    "pubkey": "69c39eaad9048f5563d2554f97b09a679484b4b7d7f5f5b88cb88c46d7d1f187",
    "created_at": 1740724185,
    "kind": 3
}
HERE D
event received; id: 703d8a5237aa44d0e56c4459d40ed24e02c0b094d6add9bafbbd5dc7160bc3c4; pubkey: d9006e0752348dd0bd20efcb295fdccb62fb8dd02c7d88654db80e5df2b81360
{
    "id": "703d8a5237aa44d0e56c4459d40ed24e02c0b094d6add9bafbbd5dc7160bc3c4",
    "pubkey": "d9006e0752348dd0bd20efcb295fdccb62fb8dd02c7d88654db80e5df2b81360",
    "created_at": 1740724173,
    "kind": 3
}
HERE D
event received; id: 98f7e516d06a2c61b00e1cae12c22459dea1fb353b2ad1bacb4f45fa38726d95; pubkey: 8d04d984fd5f9daf14612578070f132ed69a2cf78a2ac47730710324d03998eb
{
    "id": "98f7e516d06a2c61b00e1cae12c22459dea1fb353b2ad1bacb4f45fa38726d95",
    "pubkey": "8d04d984fd5f9daf14612578070f132ed69a2cf78a2ac47730710324d03998eb",
    "created_at": 1740724154,
    "kind": 3
}
HERE D
event received; id: 5a3053cac49c77360825aced029fc6cc55e06641da501d9c563d5be46abf9739; pubkey: 2f5de0003db84ecd5449128350c66c7fb63e9d02b250d84af84f463e2f9bcef1
{
    "id": "5a3053cac49c77360825aced029fc6cc55e06641da501d9c563d5be46abf9739",
    "pubkey": "2f5de0003db84ecd5449128350c66c7fb63e9d02b250d84af84f463e2f9bcef1",
    "created_at": 1740724125,
    "kind": 3
}
HERE D
event received; id: 1d02021276c7c9ca4da81279f7414ff03ac80742b984a7d1b7040428f1d580a5; pubkey: 4f7bfcc755b99a18a4896a773a727db65be4ea1df3a985e3f330f5141ca95b9e
{
    "id": "1d02021276c7c9ca4da81279f7414ff03ac80742b984a7d1b7040428f1d580a5",
    "pubkey": "4f7bfcc755b99a18a4896a773a727db65be4ea1df3a985e3f330f5141ca95b9e",
    "created_at": 1740724084,
    "kind": 3
}
HERE D
event received; id: 6a61c3c74574ff73bf466cc1d0cde69fb447127d85f9e1290b2962a9d9af9758; pubkey: da0cc82154bdf4ce8bf417eaa2d2fa99aa65c96c77867d6656fccdbf8e781b18
{
    "id": "6a61c3c74574ff73bf466cc1d0cde69fb447127d85f9e1290b2962a9d9af9758",
    "pubkey": "da0cc82154bdf4ce8bf417eaa2d2fa99aa65c96c77867d6656fccdbf8e781b18",
    "created_at": 1740724080,
    "kind": 10000
}
HERE D
event received; id: 9bdbd548eac0c7e35812eb7286a5de9896b98058954443ba053fc3dd82b8bfc0; pubkey: 938550fd1bd8ba418a4c2030e084282d02b8b1e0279d3eecfb80d2bda4bea81e
{
    "id": "9bdbd548eac0c7e35812eb7286a5de9896b98058954443ba053fc3dd82b8bfc0",
    "pubkey": "938550fd1bd8ba418a4c2030e084282d02b8b1e0279d3eecfb80d2bda4bea81e",
    "created_at": 1740724022,
    "kind": 3
}
HERE D
event received; id: 963ffad4d9fbe96a79bed05782e9823402b7eaab0699c93772d48396c2d8bf0e; pubkey: 6f2a40b0be331a2aa81f4445cf4d5c24b4a7de197177e86636c5af5dfee020e8
{
    "id": "963ffad4d9fbe96a79bed05782e9823402b7eaab0699c93772d48396c2d8bf0e",
    "pubkey": "6f2a40b0be331a2aa81f4445cf4d5c24b4a7de197177e86636c5af5dfee020e8",
    "created_at": 1740724015,
    "kind": 3
}
HERE D
event received; id: 82282379a33e804156fa4b05c45d962c5f40af6b4c4cc079dc7cf193b37cb0b9; pubkey: 2de0ffa0ac235ff45fa4ccb944cd3f33f79ff5d21fcf95f01f99516bb6bb72cc
{
    "id": "82282379a33e804156fa4b05c45d962c5f40af6b4c4cc079dc7cf193b37cb0b9",
    "pubkey": "2de0ffa0ac235ff45fa4ccb944cd3f33f79ff5d21fcf95f01f99516bb6bb72cc",
    "created_at": 1740724004,
    "kind": 3
}
HERE D
event received; id: f20058dbd5b487dbd6be66121147dc62d635143f22b0464d9ebaa05debaa1d96; pubkey: 3bf30ed3406875194d74a8d86fb6b47308c440b51fda1fbea2599349545b3c21
{
    "id": "f20058dbd5b487dbd6be66121147dc62d635143f22b0464d9ebaa05debaa1d96",
    "pubkey": "3bf30ed3406875194d74a8d86fb6b47308c440b51fda1fbea2599349545b3c21",
    "created_at": 1740723990,
    "kind": 3
}
HERE D
event received; id: 7063225a51c420ba3fd12563e26a214364d1e3be55d5757135308c94d42e9b2f; pubkey: 7b5471d86de038c28fdc80de91e8b03627171aadde5f40410d0a9450956fa337
{
    "id": "7063225a51c420ba3fd12563e26a214364d1e3be55d5757135308c94d42e9b2f",
    "pubkey": "7b5471d86de038c28fdc80de91e8b03627171aadde5f40410d0a9450956fa337",
    "created_at": 1740723926,
    "kind": 3
}
HERE D
event received; id: ab77166d5bb03d79e4c60ed419f3afcd7d27de29a02474ff6f07d7f1385b9838; pubkey: ebf67dbf1854bcba8b57a3c9b0f058eca175685dc7f63fe50f00efba0af5a2e1
{
    "id": "ab77166d5bb03d79e4c60ed419f3afcd7d27de29a02474ff6f07d7f1385b9838",
    "pubkey": "ebf67dbf1854bcba8b57a3c9b0f058eca175685dc7f63fe50f00efba0af5a2e1",
    "created_at": 1740723902,
    "kind": 3
}
HERE D
event received; id: 15b29baa5696c47a6f8aee80218fee018892ad339c01fd78b869b701adfd265f; pubkey: 946dcf713fff4b44808b0f193e5bb9768b4f78f3cca1fe35d34b80eb3dc87712
{
    "id": "15b29baa5696c47a6f8aee80218fee018892ad339c01fd78b869b701adfd265f",
    "pubkey": "946dcf713fff4b44808b0f193e5bb9768b4f78f3cca1fe35d34b80eb3dc87712",
    "created_at": 1740723868,
    "kind": 3
}
HERE D
event received; id: 70dcb0403df5324c864bfc21a56daed532ac5c5ec86669cccfe972797a08aec7; pubkey: 9922a52935b88f2f8a3484d57712749b298dd26e9dfc7e043a6cf4adf8fa7c9a
{
    "id": "70dcb0403df5324c864bfc21a56daed532ac5c5ec86669cccfe972797a08aec7",
    "pubkey": "9922a52935b88f2f8a3484d57712749b298dd26e9dfc7e043a6cf4adf8fa7c9a",
    "created_at": 1740723853,
    "kind": 3
}
HERE D
event received; id: 13854ab8737a16dd8487d3ae76cbfe118a5afe2684df3c32c937f9b834daad84; pubkey: 4613d320aa8802792a5a2f3349a2207e32f671e8c0400580ddc30eda6fddf62a
{
    "id": "13854ab8737a16dd8487d3ae76cbfe118a5afe2684df3c32c937f9b834daad84",
    "pubkey": "4613d320aa8802792a5a2f3349a2207e32f671e8c0400580ddc30eda6fddf62a",
    "created_at": 1740723812,
    "kind": 10000
}
HERE D
event received; id: 881543740f6c05461275c3ccf8a9ece79fb0ea77a191e8247225f88004a58ab2; pubkey: 9d3a17803858befc7d87d72f8b7ac86c479243e115c35744fd540860e4a020f4
{
    "id": "881543740f6c05461275c3ccf8a9ece79fb0ea77a191e8247225f88004a58ab2",
    "pubkey": "9d3a17803858befc7d87d72f8b7ac86c479243e115c35744fd540860e4a020f4",
    "created_at": 1740723771,
    "kind": 3
}
HERE D
event received; id: b65c91fed1e38676ad094c6a1b21e002095806213f1f3cd8f302fb423a6f2caa; pubkey: 00fc93b517e4fd7d8acd139694d85cc879b25540d6a0e3cb247dceaa26934bf8
{
    "id": "b65c91fed1e38676ad094c6a1b21e002095806213f1f3cd8f302fb423a6f2caa",
    "pubkey": "00fc93b517e4fd7d8acd139694d85cc879b25540d6a0e3cb247dceaa26934bf8",
    "created_at": 1740723747,
    "kind": 3
}
HERE D
event received; id: af0dd8692a697c42de32fd68d759a2ffcb1098d60d8aee4a0d95da65ea989fd1; pubkey: 55ebc6f8ae3b0718f07c06172c026d5684fc89203bd35f0412d07eddfe64b762
{
    "id": "af0dd8692a697c42de32fd68d759a2ffcb1098d60d8aee4a0d95da65ea989fd1",
    "pubkey": "55ebc6f8ae3b0718f07c06172c026d5684fc89203bd35f0412d07eddfe64b762",
    "created_at": 1740723690,
    "kind": 3
}
HERE D
event received; id: cce9f4458b7966798f2dc09353b387fd30c5ec4c7318b5696a31f0f015181279; pubkey: b316688e84f2d215dbcb597f65bedf7a8f1a5eb17cb327af2c8eabd9f8ddfac2
{
    "id": "cce9f4458b7966798f2dc09353b387fd30c5ec4c7318b5696a31f0f015181279",
    "pubkey": "b316688e84f2d215dbcb597f65bedf7a8f1a5eb17cb327af2c8eabd9f8ddfac2",
    "created_at": 1740723673,
    "kind": 3
}
HERE D
event received; id: 88b4bb6ecd979570478111fd39b067492e4d86df6cca2d06a4944273efc8da7e; pubkey: 335d9273156fd83495da779327158676538700ae2eee4c92ed99509b4b0aa3ec
{
    "id": "88b4bb6ecd979570478111fd39b067492e4d86df6cca2d06a4944273efc8da7e",
    "pubkey": "335d9273156fd83495da779327158676538700ae2eee4c92ed99509b4b0aa3ec",
    "created_at": 1740723652,
    "kind": 3
}
HERE D
event received; id: 85affb7e92e8c2dbb65f4bb86a04680f0c7f6de7fe452d51eebdf3e89f87a0e4; pubkey: b2bbcbec8a7f4b8771700879f74988e96b465c6320f90d0de1bfea3bcb14e194
{
    "id": "85affb7e92e8c2dbb65f4bb86a04680f0c7f6de7fe452d51eebdf3e89f87a0e4",
    "pubkey": "b2bbcbec8a7f4b8771700879f74988e96b465c6320f90d0de1bfea3bcb14e194",
    "created_at": 1740723648,
    "kind": 3
}
HERE D
event received; id: 6e236e746c9f576ea5faf98f6fb7b6390fbd03c87fe089b26b85c8ae60e09ef2; pubkey: 02a125efe7cddebadd000efbbdd1c43449e009382618ebf85e931266ea07dbe6
{
    "id": "6e236e746c9f576ea5faf98f6fb7b6390fbd03c87fe089b26b85c8ae60e09ef2",
    "pubkey": "02a125efe7cddebadd000efbbdd1c43449e009382618ebf85e931266ea07dbe6",
    "created_at": 1740723578,
    "kind": 3
}
HERE D
event received; id: e11127bf12f2991e797e96f3fe807a1f7fc47fb16ab05a9f0cbea723ff7ca1af; pubkey: af92154b4fd002924031386f71333b0afd9741a076f5c738bc2603a5b59d671f
{
    "id": "e11127bf12f2991e797e96f3fe807a1f7fc47fb16ab05a9f0cbea723ff7ca1af",
    "pubkey": "af92154b4fd002924031386f71333b0afd9741a076f5c738bc2603a5b59d671f",
    "created_at": 1740723515,
    "kind": 3
}
HERE D
event received; id: 67e0d2663cae9de5222f2b994066cc0ac071751d72ac8e12c1fd179e16698c3f; pubkey: 27445c6cff2144aa2feec31dd590bb663e0d397d13ae02ff77b0eb71b52d689e
{
    "id": "67e0d2663cae9de5222f2b994066cc0ac071751d72ac8e12c1fd179e16698c3f",
    "pubkey": "27445c6cff2144aa2feec31dd590bb663e0d397d13ae02ff77b0eb71b52d689e",
    "created_at": 1740723455,
    "kind": 3
}
HERE D
event received; id: 0f94c6a97a4c75a299878d7b5fa5b3b0f80be0f72a2fd420275ef3b526cc3aa0; pubkey: 47f97d4e0a640c8a963d3fa71d9f0a6aad958afa505fefdedd6d529ef4122ef3
{
    "id": "0f94c6a97a4c75a299878d7b5fa5b3b0f80be0f72a2fd420275ef3b526cc3aa0",
    "pubkey": "47f97d4e0a640c8a963d3fa71d9f0a6aad958afa505fefdedd6d529ef4122ef3",
    "created_at": 1740723451,
    "kind": 3
}
HERE D
event received; id: 7da2552deedd459aa9e3fb22b7a3cbb1fbc3d6a40504385d4d4e6b0fca4eb0e6; pubkey: 6b4ec98f02e647e01440b473bbd92a7fae21e01b6aa6c65e32db94a36092272e
{
    "id": "7da2552deedd459aa9e3fb22b7a3cbb1fbc3d6a40504385d4d4e6b0fca4eb0e6",
    "pubkey": "6b4ec98f02e647e01440b473bbd92a7fae21e01b6aa6c65e32db94a36092272e",
    "created_at": 1740723339,
    "kind": 3
}
HERE D
event received; id: 3ae42074583d6516d66e7edb9ef1b216b2035fe2045035e3d2fb5561d368673e; pubkey: 29ab2a70793af289bcd906df3de0cd31b1d3d686ba2baffb6a3933e4e65ce93f
{
    "id": "3ae42074583d6516d66e7edb9ef1b216b2035fe2045035e3d2fb5561d368673e",
    "pubkey": "29ab2a70793af289bcd906df3de0cd31b1d3d686ba2baffb6a3933e4e65ce93f",
    "created_at": 1740723332,
    "kind": 3
}
HERE D
event received; id: c3df443deb67b27349f040eec2910a1cc456c30244f557d12a7d308127066b2f; pubkey: 2e41cb1b64ad259378aa70b7d6dd8c35ddda552a08c424fab78772a82803aa3e
{
    "id": "c3df443deb67b27349f040eec2910a1cc456c30244f557d12a7d308127066b2f",
    "pubkey": "2e41cb1b64ad259378aa70b7d6dd8c35ddda552a08c424fab78772a82803aa3e",
    "created_at": 1740723313,
    "kind": 3
}
HERE D
event received; id: cf12a5b1f96b4f496cdcc8889998d293eb53e07171beeea9cb4f72edaa3ff59d; pubkey: f941ad2a24f166c1b594039c908db45c408b671f8ff76c5bd7b9d6cd50d5d339
{
    "id": "cf12a5b1f96b4f496cdcc8889998d293eb53e07171beeea9cb4f72edaa3ff59d",
    "pubkey": "f941ad2a24f166c1b594039c908db45c408b671f8ff76c5bd7b9d6cd50d5d339",
    "created_at": 1740723294,
    "kind": 3
}
HERE D
event received; id: 41bba0675b4bdf554771b38af149038785e1aba55405c85dc610f8b20762f3c5; pubkey: 098d581e8152957ffd2939d7c2146ec15b54e5fe782beb4ad8425a99faeb60f7
{
    "id": "41bba0675b4bdf554771b38af149038785e1aba55405c85dc610f8b20762f3c5",
    "pubkey": "098d581e8152957ffd2939d7c2146ec15b54e5fe782beb4ad8425a99faeb60f7",
    "created_at": 1740723259,
    "kind": 3
}
HERE D
event received; id: 4823382a8ae688d0b38a74ea07085a8a31f4739cd0c227b4a6db55a9b6958048; pubkey: 353e1e9782fba614354a6fbc82ace480d35f7cdbb1308bf97a6b4edc25cf265c
{
    "id": "4823382a8ae688d0b38a74ea07085a8a31f4739cd0c227b4a6db55a9b6958048",
    "pubkey": "353e1e9782fba614354a6fbc82ace480d35f7cdbb1308bf97a6b4edc25cf265c",
    "created_at": 1740723258,
    "kind": 3
}
HERE D
event received; id: 8e237ec53185324181dcc21d56fe432e3714b3156a09be67ddb18b7ea2964140; pubkey: 1f830dd875130b134fbf3f27a69eecd8613a499748a71b5a271a719febae14ed
{
    "id": "8e237ec53185324181dcc21d56fe432e3714b3156a09be67ddb18b7ea2964140",
    "pubkey": "1f830dd875130b134fbf3f27a69eecd8613a499748a71b5a271a719febae14ed",
    "created_at": 1740723255,
    "kind": 10000
}
HERE D
event received; id: a223f94263eaf2052cf0e8ff28c4d666ad5da706ba6025ae4de2efa5f219b8b1; pubkey: 1f830dd875130b134fbf3f27a69eecd8613a499748a71b5a271a719febae14ed
{
    "id": "a223f94263eaf2052cf0e8ff28c4d666ad5da706ba6025ae4de2efa5f219b8b1",
    "pubkey": "1f830dd875130b134fbf3f27a69eecd8613a499748a71b5a271a719febae14ed",
    "created_at": 1740723248,
    "kind": 1984
}
HERE D
event received; id: 232511fad9632a9062a984fb7ab2395b25b68154b5024cdeb803b8599bb2cbc2; pubkey: 6638a33320db5e7de27ca9847f71b219ac367bbbf27709068de684062368d9c8
{
    "id": "232511fad9632a9062a984fb7ab2395b25b68154b5024cdeb803b8599bb2cbc2",
    "pubkey": "6638a33320db5e7de27ca9847f71b219ac367bbbf27709068de684062368d9c8",
    "created_at": 1740723245,
    "kind": 3
}
HERE D
event received; id: c4d1ae1a4c03f7bf83786b4aa8a72743085e3912b208e9cab390eac6fc9a7425; pubkey: 0b9de7c5e82d26c285690a13cd164149a5a0ee3131b9912e1c0bb36c66b471ab
{
    "id": "c4d1ae1a4c03f7bf83786b4aa8a72743085e3912b208e9cab390eac6fc9a7425",
    "pubkey": "0b9de7c5e82d26c285690a13cd164149a5a0ee3131b9912e1c0bb36c66b471ab",
    "created_at": 1740723241,
    "kind": 10000
}
HERE D
event received; id: 8ed9f21d78ae4481ad50849ae169908ce649524fe890a9c48d5c6d1158abf9a2; pubkey: 1f830dd875130b134fbf3f27a69eecd8613a499748a71b5a271a719febae14ed
{
    "id": "8ed9f21d78ae4481ad50849ae169908ce649524fe890a9c48d5c6d1158abf9a2",
    "pubkey": "1f830dd875130b134fbf3f27a69eecd8613a499748a71b5a271a719febae14ed",
    "created_at": 1740723236,
    "kind": 1984
}
HERE D
event received; id: e5d03f68a62826720e43b6d60ae47d996dac01b976c3115ab654107e2c477bbe; pubkey: ef184a9c1179993f9127516fa2c740c21634f9c19944786ac58aa33a131fce4d
{
    "id": "e5d03f68a62826720e43b6d60ae47d996dac01b976c3115ab654107e2c477bbe",
    "pubkey": "ef184a9c1179993f9127516fa2c740c21634f9c19944786ac58aa33a131fce4d",
    "created_at": 1740723194,
    "kind": 3
}
HERE D
event received; id: 2060893148fe677c289e18336c73b7419e6502fb80fb1cce4350566b639b07f0; pubkey: 4d0a4d726627e2c411be89cff4c56221eaed1b6fceb17fd881b0e00c0332e6f2
{
    "id": "2060893148fe677c289e18336c73b7419e6502fb80fb1cce4350566b639b07f0",
    "pubkey": "4d0a4d726627e2c411be89cff4c56221eaed1b6fceb17fd881b0e00c0332e6f2",
    "created_at": 1740723189,
    "kind": 3
}
HERE D
event received; id: a1ad386cb3d93178cbf75d9a58a3367f681ba3626d4f98aac72eb1b2d9aaca77; pubkey: 4eb88310d6b4ed95c6d66a395b3d3cf559b85faec8f7691dafd405a92e055d6d
{
    "id": "a1ad386cb3d93178cbf75d9a58a3367f681ba3626d4f98aac72eb1b2d9aaca77",
    "pubkey": "4eb88310d6b4ed95c6d66a395b3d3cf559b85faec8f7691dafd405a92e055d6d",
    "created_at": 1740723189,
    "kind": 10000
}
HERE D
event received; id: 2c8c22600a88cbfd06d1586dc3eae1bd381bc60c18c0367499254baf38853d60; pubkey: 1d7f4f494650b465c1614cbb20c70fc680f6c77d4fca733364ec119960f86652
{
    "id": "2c8c22600a88cbfd06d1586dc3eae1bd381bc60c18c0367499254baf38853d60",
    "pubkey": "1d7f4f494650b465c1614cbb20c70fc680f6c77d4fca733364ec119960f86652",
    "created_at": 1740723137,
    "kind": 3
}
HERE D
event received; id: 94fdcfddc5f4424cf60af0bbeffd5e5c70575ee592435c8b987049e3099e1a0d; pubkey: 5b4a1d20fef8e42e301caea4b77f2283a685065559fd97f9b154118825e0b10f
{
    "id": "94fdcfddc5f4424cf60af0bbeffd5e5c70575ee592435c8b987049e3099e1a0d",
    "pubkey": "5b4a1d20fef8e42e301caea4b77f2283a685065559fd97f9b154118825e0b10f",
    "created_at": 1740723081,
    "kind": 3
}
HERE D
event received; id: e2775474ee37fc4238c297c85b82ba7b7aeb51f581247d4fe5f2fddf76195dda; pubkey: 3b84f4dff765ba081df73c5e930ab7c5870d31a07bdccf1af7dca3a874abbe7e
{
    "id": "e2775474ee37fc4238c297c85b82ba7b7aeb51f581247d4fe5f2fddf76195dda",
    "pubkey": "3b84f4dff765ba081df73c5e930ab7c5870d31a07bdccf1af7dca3a874abbe7e",
    "created_at": 1740723060,
    "kind": 3
}
HERE D
event received; id: e47a76152fa2d53df1c1e4b42eb4c8de9405a8a1d03a3db90cef00c0b7c7e8e0; pubkey: f8419453af6457edf08e7edbad2cd8e4920125b989e214f49fb4dabd8c106905
{
    "id": "e47a76152fa2d53df1c1e4b42eb4c8de9405a8a1d03a3db90cef00c0b7c7e8e0",
    "pubkey": "f8419453af6457edf08e7edbad2cd8e4920125b989e214f49fb4dabd8c106905",
    "created_at": 1740723058,
    "kind": 3
}
HERE D
event received; id: b099e03aff61acd37c6360a623786e6b5c4bb6f12993b88d1a946f1a79698970; pubkey: 800e0fe3d8638ce3f75a56ed865df9d96fc9d9cd2f75550df0d7f5c1d8468b0b
{
    "id": "b099e03aff61acd37c6360a623786e6b5c4bb6f12993b88d1a946f1a79698970",
    "pubkey": "800e0fe3d8638ce3f75a56ed865df9d96fc9d9cd2f75550df0d7f5c1d8468b0b",
    "created_at": 1740723040,
    "kind": 1984
}
HERE D
event received; id: 8c9848389d1ed7d699f67ebc84b4d6345a049a504990ae38dbf95fbe563d71ad; pubkey: 6867d899ce6b677b89052602cfe04a165f26bb6a1a6390355f497f9ee5cb0796
{
    "id": "8c9848389d1ed7d699f67ebc84b4d6345a049a504990ae38dbf95fbe563d71ad",
    "pubkey": "6867d899ce6b677b89052602cfe04a165f26bb6a1a6390355f497f9ee5cb0796",
    "created_at": 1740723033,
    "kind": 10000
}
HERE D
event received; id: 63055ed1106e0364869e87d1bdd4b67c49ede3d6c7d21d30de08fd72e34ef763; pubkey: 7b5471d86de038c28fdc80de91e8b03627171aadde5f40410d0a9450956fa337
{
    "id": "63055ed1106e0364869e87d1bdd4b67c49ede3d6c7d21d30de08fd72e34ef763",
    "pubkey": "7b5471d86de038c28fdc80de91e8b03627171aadde5f40410d0a9450956fa337",
    "created_at": 1740723026,
    "kind": 10000
}
HERE D
event received; id: 810aebc35b088e1f891c0bc581becddee91750fcf783ac6a2e582e9ade236bcb; pubkey: 7b5471d86de038c28fdc80de91e8b03627171aadde5f40410d0a9450956fa337
{
    "id": "810aebc35b088e1f891c0bc581becddee91750fcf783ac6a2e582e9ade236bcb",
    "pubkey": "7b5471d86de038c28fdc80de91e8b03627171aadde5f40410d0a9450956fa337",
    "created_at": 1740723019,
    "kind": 1984
}
HERE D
event received; id: 46ebf44de6a29f40d1fedd4dd05b32bbf022b614feadff07f5cde5c7c591eb2d; pubkey: 6bb0082dfd02be52ba7d532cf29dcf82977df9eb10483ccf71efc6f00146ed0a
{
    "id": "46ebf44de6a29f40d1fedd4dd05b32bbf022b614feadff07f5cde5c7c591eb2d",
    "pubkey": "6bb0082dfd02be52ba7d532cf29dcf82977df9eb10483ccf71efc6f00146ed0a",
    "created_at": 1740722991,
    "kind": 3
}
HERE D
event received; id: 552b4a143fbebdccd046da3ee5df47f500e32dedb54ea6eb1f40a33d2c8734f0; pubkey: ad908d4edf588f573a5d9841fea8ef70546228facfa5c5615e56456650e3408b
{
    "id": "552b4a143fbebdccd046da3ee5df47f500e32dedb54ea6eb1f40a33d2c8734f0",
    "pubkey": "ad908d4edf588f573a5d9841fea8ef70546228facfa5c5615e56456650e3408b",
    "created_at": 1740722979,
    "kind": 3
}
HERE D
event received; id: 1ae8e6babf7fdf680b2c19b7c6282c9eda766d2e042a8b08999eefca7bb10d8c; pubkey: 11644c547cfc1df9e0169b4e300cdab4cd341b89a9bfeb69f6f16bd78fc20949
{
    "id": "1ae8e6babf7fdf680b2c19b7c6282c9eda766d2e042a8b08999eefca7bb10d8c",
    "pubkey": "11644c547cfc1df9e0169b4e300cdab4cd341b89a9bfeb69f6f16bd78fc20949",
    "created_at": 1740722899,
    "kind": 10000
}
HERE D
event received; id: 67f270ad9efd85852a94ba03a44dbc65bb2e0e96cc028be63791b3d78d254520; pubkey: f0f1ca51a0bfee403f6def92744bf4abf630fcfc2d0a7b9b407bfa28a4a808ba
{
    "id": "67f270ad9efd85852a94ba03a44dbc65bb2e0e96cc028be63791b3d78d254520",
    "pubkey": "f0f1ca51a0bfee403f6def92744bf4abf630fcfc2d0a7b9b407bfa28a4a808ba",
    "created_at": 1740722895,
    "kind": 3
}
HERE D
event received; id: b25ee9e7c59890449e5f5196370e34a4f1fbd82089685c08039bfe2a47d35790; pubkey: 11644c547cfc1df9e0169b4e300cdab4cd341b89a9bfeb69f6f16bd78fc20949
{
    "id": "b25ee9e7c59890449e5f5196370e34a4f1fbd82089685c08039bfe2a47d35790",
    "pubkey": "11644c547cfc1df9e0169b4e300cdab4cd341b89a9bfeb69f6f16bd78fc20949",
    "created_at": 1740722876,
    "kind": 3
}
HERE D
event received; id: a2920f7b79ec6b6ec172e581cef53d5c924092abaee379b79893836291e814dd; pubkey: 1fdaf6a7b5ae61695f61035f1f5a001567936a6f1494b7f10f5b71a0679468ab
{
    "id": "a2920f7b79ec6b6ec172e581cef53d5c924092abaee379b79893836291e814dd",
    "pubkey": "1fdaf6a7b5ae61695f61035f1f5a001567936a6f1494b7f10f5b71a0679468ab",
    "created_at": 1740722852,
    "kind": 3
}
HERE D
event received; id: aeb74f280d1c2a927c93d05bb7ed951bc45456fb3e2f9443545c7cf9f73fe34f; pubkey: dd844857fcfbdc12631dcd96efdf3db259df466531f9bbca2fda6fa5a5b13f8a
{
    "id": "aeb74f280d1c2a927c93d05bb7ed951bc45456fb3e2f9443545c7cf9f73fe34f",
    "pubkey": "dd844857fcfbdc12631dcd96efdf3db259df466531f9bbca2fda6fa5a5b13f8a",
    "created_at": 1740722849,
    "kind": 3
}
HERE D
event received; id: fff98cd269d718223f497bfc5fe82feb904f2944177a978bbeedf1cdbb929a17; pubkey: c68e21767f951463ae6be28fa637237e578d8197e07c39101d00d1b74439e6cf
{
    "id": "fff98cd269d718223f497bfc5fe82feb904f2944177a978bbeedf1cdbb929a17",
    "pubkey": "c68e21767f951463ae6be28fa637237e578d8197e07c39101d00d1b74439e6cf",
    "created_at": 1740722840,
    "kind": 3
}
HERE D
event received; id: a0693eb99f542d50cabd447582fc484e1eb4d69b3563debfd3849330e22e2e53; pubkey: d3d0579c02a00dd4a444d34f675317cf7ee8dfb7df6fda7486d93f70914eb63e
{
    "id": "a0693eb99f542d50cabd447582fc484e1eb4d69b3563debfd3849330e22e2e53",
    "pubkey": "d3d0579c02a00dd4a444d34f675317cf7ee8dfb7df6fda7486d93f70914eb63e",
    "created_at": 1740722765,
    "kind": 3
}
HERE D
event received; id: 9875eb63921e26e716f430855bf08dab1f7de970b886cf41622a42dfeb8110fd; pubkey: a77ece743db956b9985f2908dd4d6940b639e64b928a12b2a123f76f18e0a5fa
{
    "id": "9875eb63921e26e716f430855bf08dab1f7de970b886cf41622a42dfeb8110fd",
    "pubkey": "a77ece743db956b9985f2908dd4d6940b639e64b928a12b2a123f76f18e0a5fa",
    "created_at": 1740722737,
    "kind": 3
}
HERE D
event received; id: 79faef7ffb5ee5c1e9a7f5066b5efcd37fa3b48ab35ead4dda235d706f2ec176; pubkey: 658ab960c1cd0f3d141a833cd3c55beadcba045ba17113979392845fdda2ac4d
{
    "id": "79faef7ffb5ee5c1e9a7f5066b5efcd37fa3b48ab35ead4dda235d706f2ec176",
    "pubkey": "658ab960c1cd0f3d141a833cd3c55beadcba045ba17113979392845fdda2ac4d",
    "created_at": 1740722675,
    "kind": 3
}
HERE D
event received; id: 5dce7a834f6ecfa987cc51af64137fba9a238a79fc047f55461b73d3154e5e9b; pubkey: 6483f131b8f10e1ab879031e6dcfeffb83b5c1141eecfa403e8c3d46bf10577c
{
    "id": "5dce7a834f6ecfa987cc51af64137fba9a238a79fc047f55461b73d3154e5e9b",
    "pubkey": "6483f131b8f10e1ab879031e6dcfeffb83b5c1141eecfa403e8c3d46bf10577c",
    "created_at": 1740722593,
    "kind": 3
}
HERE D
event received; id: ab830ffcc640df40c9556c430a3b89e95538b7cbaf8ffe4893a5cb97e3789379; pubkey: 2ec6b656dee82aca76d4d8f525358878efb427fcd0939f133f710af5f044e156
{
    "id": "ab830ffcc640df40c9556c430a3b89e95538b7cbaf8ffe4893a5cb97e3789379",
    "pubkey": "2ec6b656dee82aca76d4d8f525358878efb427fcd0939f133f710af5f044e156",
    "created_at": 1740722571,
    "kind": 3
}
HERE D
event received; id: 0cfc4834d0d2a697eac783b2eda38946e7c719174b5d3e89d039f75f95490e96; pubkey: c891ed24e93b19191dc8865d867a5454d50fcc086c77a715e286c1e8b5250862
{
    "id": "0cfc4834d0d2a697eac783b2eda38946e7c719174b5d3e89d039f75f95490e96",
    "pubkey": "c891ed24e93b19191dc8865d867a5454d50fcc086c77a715e286c1e8b5250862",
    "created_at": 1740722550,
    "kind": 3
}
HERE D
event received; id: ad22c2844e488b658c46f87a19c450af7709648b4f30aa89919581c57f747764; pubkey: 2a5da67267175025bf185b8b70e5522a7a90886bef82b0b6d8ea9d6538ebd01b
{
    "id": "ad22c2844e488b658c46f87a19c450af7709648b4f30aa89919581c57f747764",
    "pubkey": "2a5da67267175025bf185b8b70e5522a7a90886bef82b0b6d8ea9d6538ebd01b",
    "created_at": 1740722549,
    "kind": 3
}
HERE D
event received; id: efe46ef02f829134bf178fdc27bb7034151cc81b7fc656aef30d1039b6ac0c36; pubkey: 0332877b413f0c1b4263d2c2b6a7a4a9a7a73329cdb5bb209ec7a230f8ae700f
{
    "id": "efe46ef02f829134bf178fdc27bb7034151cc81b7fc656aef30d1039b6ac0c36",
    "pubkey": "0332877b413f0c1b4263d2c2b6a7a4a9a7a73329cdb5bb209ec7a230f8ae700f",
    "created_at": 1740722528,
    "kind": 3
}
HERE D
event received; id: 6e0f810e59d25bb497c56cb4c795878b5a27d2a9fe41e6bba85183793739d96d; pubkey: 4d4401ec1241c7b89ee08d74a3246ac4f0845656d735a8a4f8fdadfbb63b9503
{
    "id": "6e0f810e59d25bb497c56cb4c795878b5a27d2a9fe41e6bba85183793739d96d",
    "pubkey": "4d4401ec1241c7b89ee08d74a3246ac4f0845656d735a8a4f8fdadfbb63b9503",
    "created_at": 1740722524,
    "kind": 3
}
HERE D
event received; id: 9382a9361f8027be148f24450451518202fcc2afa5ce0557fa791d054ef2646f; pubkey: 4ad9a2700fedcd04fec7b1d2add3fa61548b798a6875aa9747086040cff86bdc
{
    "id": "9382a9361f8027be148f24450451518202fcc2afa5ce0557fa791d054ef2646f",
    "pubkey": "4ad9a2700fedcd04fec7b1d2add3fa61548b798a6875aa9747086040cff86bdc",
    "created_at": 1740722460,
    "kind": 3
}
HERE D
event received; id: ed664ac54123daee1418edbdc3513eafbb4707b7a53001c2554eebba3626d71e; pubkey: cebfb26d9675a8f24b2202f67d3c62a9287f073128ea8e983ce9daafbd7f4477
{
    "id": "ed664ac54123daee1418edbdc3513eafbb4707b7a53001c2554eebba3626d71e",
    "pubkey": "cebfb26d9675a8f24b2202f67d3c62a9287f073128ea8e983ce9daafbd7f4477",
    "created_at": 1740722349,
    "kind": 3
}
HERE D
event received; id: e278a8e5dea3da86e441da1cfa7eccb085096c65da8cc7e4c49f6b5bee1b7aab; pubkey: 27e9c50380da4e2f1d081e25070b8e069fbdd5e6c63c7c2f6f83bb7b12591812
{
    "id": "e278a8e5dea3da86e441da1cfa7eccb085096c65da8cc7e4c49f6b5bee1b7aab",
    "pubkey": "27e9c50380da4e2f1d081e25070b8e069fbdd5e6c63c7c2f6f83bb7b12591812",
    "created_at": 1740722326,
    "kind": 10000
}
HERE D
event received; id: 3253ab7d2547c6ece49a7f82aaba52afdb0aac6be5e1762fea4c7be1b514f7ea; pubkey: 940da210c22582431063b711f96b92d6dab5700fa163db902c29ded44c295c83
{
    "id": "3253ab7d2547c6ece49a7f82aaba52afdb0aac6be5e1762fea4c7be1b514f7ea",
    "pubkey": "940da210c22582431063b711f96b92d6dab5700fa163db902c29ded44c295c83",
    "created_at": 1740722306,
    "kind": 3
}
HERE D
event received; id: b338bd7c5692051d1c693d6002c2569f44defc62e4d51022e1c32defe342a1a3; pubkey: c1e6505c02da8d1b0a5b3d6db6e19b2eb22dcd54f0e86306ec8a213902b3157e
{
    "id": "b338bd7c5692051d1c693d6002c2569f44defc62e4d51022e1c32defe342a1a3",
    "pubkey": "c1e6505c02da8d1b0a5b3d6db6e19b2eb22dcd54f0e86306ec8a213902b3157e",
    "created_at": 1740722268,
    "kind": 3
}
HERE D
event received; id: 3184e1bd8133b736a8344a92a3b61cec967accbdc7c32a4dd7f7872300fe6e51; pubkey: e005e2f25e20a0f0180b2c69cda34d326a4ec332da059a849223a514a613107b
{
    "id": "3184e1bd8133b736a8344a92a3b61cec967accbdc7c32a4dd7f7872300fe6e51",
    "pubkey": "e005e2f25e20a0f0180b2c69cda34d326a4ec332da059a849223a514a613107b",
    "created_at": 1740722230,
    "kind": 3
}
HERE D
event received; id: 0da3d0427da21ccbc5193c08f70a646874ffb82efa1d79c534455220f146d923; pubkey: ce008ca7b773bdae609b833541f8c738ce1946d345ecc8ad8c3fabe77ad1acbd
{
    "id": "0da3d0427da21ccbc5193c08f70a646874ffb82efa1d79c534455220f146d923",
    "pubkey": "ce008ca7b773bdae609b833541f8c738ce1946d345ecc8ad8c3fabe77ad1acbd",
    "created_at": 1740722135,
    "kind": 3
}
HERE D
event received; id: 53d3a81d35a45e5714eaa4d400fe6ac71fc6884e8ada755e98e51b5767a6e945; pubkey: f2e9f2dc720b46609f26142ec0a86b4e610ad7e5a36f2484bb8ea6876d24618e
{
    "id": "53d3a81d35a45e5714eaa4d400fe6ac71fc6884e8ada755e98e51b5767a6e945",
    "pubkey": "f2e9f2dc720b46609f26142ec0a86b4e610ad7e5a36f2484bb8ea6876d24618e",
    "created_at": 1740722037,
    "kind": 3
}
HERE D
event received; id: 09723c8ae107b453ef2b0786333513223efefd4bd4f1ea0c003847a92f9fccc3; pubkey: 0e52122d1eb95cdd8ba5f65815f7d1c9125a8c14d82989eae52ab369eea6c7e4
{
    "id": "09723c8ae107b453ef2b0786333513223efefd4bd4f1ea0c003847a92f9fccc3",
    "pubkey": "0e52122d1eb95cdd8ba5f65815f7d1c9125a8c14d82989eae52ab369eea6c7e4",
    "created_at": 1740721956,
    "kind": 3
}
HERE D
event received; id: 863c66744b175e4475383efe44a2de80b98a625ce2b79d4478674d359cffaa19; pubkey: 2071e1aac3e21887a3e11b602d30960d504b3883789f79929095e66ec9fb4385
{
    "id": "863c66744b175e4475383efe44a2de80b98a625ce2b79d4478674d359cffaa19",
    "pubkey": "2071e1aac3e21887a3e11b602d30960d504b3883789f79929095e66ec9fb4385",
    "created_at": 1740721924,
    "kind": 3
}
HERE D
event received; id: 41da22ba08aa47e70026461a160561387811bd4e506464b5cf3e2127e9d9799e; pubkey: 76076b9e2eca3c4f25435780f57b1d5649c7d08b784c20f96c384fa0fec5456f
{
    "id": "41da22ba08aa47e70026461a160561387811bd4e506464b5cf3e2127e9d9799e",
    "pubkey": "76076b9e2eca3c4f25435780f57b1d5649c7d08b784c20f96c384fa0fec5456f",
    "created_at": 1740721907,
    "kind": 3
}
HERE D
event received; id: 977671888eb424bcdbbc6f212b514a90352b390a16696db60a5129aa806e33b5; pubkey: adc14fa3ad590856dd8b80815d367f7c1e6735ad00fd98a86d002fbe9fb535e1
{
    "id": "977671888eb424bcdbbc6f212b514a90352b390a16696db60a5129aa806e33b5",
    "pubkey": "adc14fa3ad590856dd8b80815d367f7c1e6735ad00fd98a86d002fbe9fb535e1",
    "created_at": 1740721905,
    "kind": 3
}
HERE D
event received; id: 79e546c9f52f738d21480b0a3e50b817c957b8f77860235a6dec025580a85d0c; pubkey: a0f69816b6e23128ae8edff2861fbbbe540d67b2c0924bb985942e762e5f41a6
{
    "id": "79e546c9f52f738d21480b0a3e50b817c957b8f77860235a6dec025580a85d0c",
    "pubkey": "a0f69816b6e23128ae8edff2861fbbbe540d67b2c0924bb985942e762e5f41a6",
    "created_at": 1740721840,
    "kind": 3
}
HERE D
event received; id: d61aa60b14b769d5db7544c949f1e2f78ccfcbc2fb54f0d3ea9a10a344357716; pubkey: 087c51f1926f8d3cb4ff45f53a8ee2a8511cfe113527ab0e87f9c5821201a61e
{
    "id": "d61aa60b14b769d5db7544c949f1e2f78ccfcbc2fb54f0d3ea9a10a344357716",
    "pubkey": "087c51f1926f8d3cb4ff45f53a8ee2a8511cfe113527ab0e87f9c5821201a61e",
    "created_at": 1740721834,
    "kind": 3
}
HERE D
event received; id: b57e97b06f650f0944b1254359af91d3ac5246524eeffb423b11caf8d79a920f; pubkey: 9349d012686caab46f6bfefd2f4c361c52e14b1cde1cd027476e0ae6d3e98946
{
    "id": "b57e97b06f650f0944b1254359af91d3ac5246524eeffb423b11caf8d79a920f",
    "pubkey": "9349d012686caab46f6bfefd2f4c361c52e14b1cde1cd027476e0ae6d3e98946",
    "created_at": 1740721790,
    "kind": 3
}
HERE D
event received; id: ec9ee1ef72a6ff53f87884001777b9b887ea21ef3644798d1d48ee6b9c75e327; pubkey: 3721cb871a61152858868b42334b9aeaf279b2e2256881ab942c739a81748ade
{
    "id": "ec9ee1ef72a6ff53f87884001777b9b887ea21ef3644798d1d48ee6b9c75e327",
    "pubkey": "3721cb871a61152858868b42334b9aeaf279b2e2256881ab942c739a81748ade",
    "created_at": 1740721750,
    "kind": 3
}
HERE D
event received; id: ac9e692224043881eec2cdf741aa2c5a0288882a82ed5d1f01f06ee65eb3da11; pubkey: 62a1dde77ae9f40ec476841109239f64fa6624d4077ef219479c39031db510b0
{
    "id": "ac9e692224043881eec2cdf741aa2c5a0288882a82ed5d1f01f06ee65eb3da11",
    "pubkey": "62a1dde77ae9f40ec476841109239f64fa6624d4077ef219479c39031db510b0",
    "created_at": 1740721731,
    "kind": 3
}
HERE D
event received; id: d1e9a8d97fe38ca329036d4212585823bd42b5888848d8394f7e9605aa291633; pubkey: 68df662892eb89aa05cc321215cbafb7a8dcfca2271b9936dd544da4aa174253
{
    "id": "d1e9a8d97fe38ca329036d4212585823bd42b5888848d8394f7e9605aa291633",
    "pubkey": "68df662892eb89aa05cc321215cbafb7a8dcfca2271b9936dd544da4aa174253",
    "created_at": 1740721719,
    "kind": 10000
}
HERE D
event received; id: 547936cb797388ac1d0dc724fd991b5854a97286863a377b671ae5dfa6173dad; pubkey: 0828869029e4ce6b108b5195a0db76fd725a0b8987d028b428a10f5e77f58eba
{
    "id": "547936cb797388ac1d0dc724fd991b5854a97286863a377b671ae5dfa6173dad",
    "pubkey": "0828869029e4ce6b108b5195a0db76fd725a0b8987d028b428a10f5e77f58eba",
    "created_at": 1740721702,
    "kind": 3
}
HERE D
event received; id: 4a40835755100a65baa5bd16c88e4b5e1d5bfc7e9d4d4bd21abba9264848944c; pubkey: 7564a27aae32ab0c593e26d134c475405e4034f7e38f61248b57e47fdf77f725
{
    "id": "4a40835755100a65baa5bd16c88e4b5e1d5bfc7e9d4d4bd21abba9264848944c",
    "pubkey": "7564a27aae32ab0c593e26d134c475405e4034f7e38f61248b57e47fdf77f725",
    "created_at": 1740721702,
    "kind": 3
}
HERE D
event received; id: 745c1a673cc6fe94931beec839a7737c9ea40f2fc3fda8339cb98c82d15b6907; pubkey: 480ec1a7516406090dc042ddf67780ef30f26f3a864e83b417c053a5a611c838
{
    "id": "745c1a673cc6fe94931beec839a7737c9ea40f2fc3fda8339cb98c82d15b6907",
    "pubkey": "480ec1a7516406090dc042ddf67780ef30f26f3a864e83b417c053a5a611c838",
    "created_at": 1740721696,
    "kind": 3
}
HERE D
event received; id: 6ca533ce1ad2b0b49027edafa875d15792745ae82fd7ea77bdce084d5f9e117b; pubkey: a4e6c42442cc1ccce8c2da04e5ff7a61368d475925a9712e722aab098cb771df
{
    "id": "6ca533ce1ad2b0b49027edafa875d15792745ae82fd7ea77bdce084d5f9e117b",
    "pubkey": "a4e6c42442cc1ccce8c2da04e5ff7a61368d475925a9712e722aab098cb771df",
    "created_at": 1740721642,
    "kind": 3
}
HERE D
event received; id: c630536066641d3af2443ae68819837da3ff02d3e56f2354c3696605928ebed5; pubkey: 870cfe16acaf55f405a4458b4ba3830f85cc08c42d22f5c4a7a6c23bb993de62
{
    "id": "c630536066641d3af2443ae68819837da3ff02d3e56f2354c3696605928ebed5",
    "pubkey": "870cfe16acaf55f405a4458b4ba3830f85cc08c42d22f5c4a7a6c23bb993de62",
    "created_at": 1740721635,
    "kind": 3
}
HERE D
event received; id: 89ab8cfb95d99168abdfd76374a6e96686fec600182e65e35389c3d9ece49ee5; pubkey: 36141fcd15aaff25436cd53348c131e7409a6b14476565938711a6a0f9f219b0
{
    "id": "89ab8cfb95d99168abdfd76374a6e96686fec600182e65e35389c3d9ece49ee5",
    "pubkey": "36141fcd15aaff25436cd53348c131e7409a6b14476565938711a6a0f9f219b0",
    "created_at": 1740721603,
    "kind": 3
}
HERE D
event received; id: ecfd7ee07211ed897dcd8923ff44d911b64b91a6e1533795919aa1218be73e66; pubkey: c38bf1b09cf29657245b35820ad8e3d4d170f233f3eaa5ef9a9e147e0f4b6aa8
{
    "id": "ecfd7ee07211ed897dcd8923ff44d911b64b91a6e1533795919aa1218be73e66",
    "pubkey": "c38bf1b09cf29657245b35820ad8e3d4d170f233f3eaa5ef9a9e147e0f4b6aa8",
    "created_at": 1740721576,
    "kind": 3
}
HERE D
event received; id: 03f195a6bd5f611f8ab8f740e9f96058c7acea0cabfde8ae3ebee030ec8eac8b; pubkey: a9d7d69f33ab0d528d0e4793bea0377775f6f2d809752ec653a2ecd451be6bfc
{
    "id": "03f195a6bd5f611f8ab8f740e9f96058c7acea0cabfde8ae3ebee030ec8eac8b",
    "pubkey": "a9d7d69f33ab0d528d0e4793bea0377775f6f2d809752ec653a2ecd451be6bfc",
    "created_at": 1740721519,
    "kind": 3
}
HERE D
event received; id: f98ab0727e017c4324311c6eddb190faaf96213d0965d43dcd9570529eec04ee; pubkey: 63c0ae0dfab61833c03642e1265ab52eebff6a440063af5c498aa761c0323ab4
{
    "id": "f98ab0727e017c4324311c6eddb190faaf96213d0965d43dcd9570529eec04ee",
    "pubkey": "63c0ae0dfab61833c03642e1265ab52eebff6a440063af5c498aa761c0323ab4",
    "created_at": 1740721455,
    "kind": 10000
}
HERE D
event received; id: 614ef9a59430b326dc08dc91b4f8db71deb7340fccfb46915babc816b05f47d9; pubkey: 5b30870d76c2ee6b01a6d6c39f2682302fb9378d741e609479d4771d5c811761
{
    "id": "614ef9a59430b326dc08dc91b4f8db71deb7340fccfb46915babc816b05f47d9",
    "pubkey": "5b30870d76c2ee6b01a6d6c39f2682302fb9378d741e609479d4771d5c811761",
    "created_at": 1740721409,
    "kind": 3
}
HERE D
event received; id: 556d4c7600daf8615a6aba4e09cec8395da63e6a41f7d3e968a5187ccdee108d; pubkey: 9c86d77537a6380ce371e3a4860bc7e1fb2adbb2821bf1a8f1cd4e8ce02240c9
{
    "id": "556d4c7600daf8615a6aba4e09cec8395da63e6a41f7d3e968a5187ccdee108d",
    "pubkey": "9c86d77537a6380ce371e3a4860bc7e1fb2adbb2821bf1a8f1cd4e8ce02240c9",
    "created_at": 1740721349,
    "kind": 3
}
HERE D
event received; id: be66513936a704356bfce7d3ede7f0ab2c7c7ec5b70a49329df136a1cca9f48d; pubkey: 8ea88bd9dfe884532d47f77b737274ba23866740612010d081dbdfb513d6c3b9
{
    "id": "be66513936a704356bfce7d3ede7f0ab2c7c7ec5b70a49329df136a1cca9f48d",
    "pubkey": "8ea88bd9dfe884532d47f77b737274ba23866740612010d081dbdfb513d6c3b9",
    "created_at": 1740721282,
    "kind": 3
}
HERE D
event received; id: 214942439f5a6f8ee75e940ca077b82668ae7fa4454ecc498a784054b9c75715; pubkey: 5a0fe5bcb3a975da19dd1bd7ae26157c7252f7fab44192beb2f05246b0c8bbb1
{
    "id": "214942439f5a6f8ee75e940ca077b82668ae7fa4454ecc498a784054b9c75715",
    "pubkey": "5a0fe5bcb3a975da19dd1bd7ae26157c7252f7fab44192beb2f05246b0c8bbb1",
    "created_at": 1740721273,
    "kind": 3
}
HERE D
event received; id: 9439cf5461303637d76189cf15e4b5b18a0687f9e46f5247d9695a82b5e7e17a; pubkey: ed56bc6dfa898640acc8203d6b67c28bdeb6d6d15d2355dd5e2854ddcdf4abbb
{
    "id": "9439cf5461303637d76189cf15e4b5b18a0687f9e46f5247d9695a82b5e7e17a",
    "pubkey": "ed56bc6dfa898640acc8203d6b67c28bdeb6d6d15d2355dd5e2854ddcdf4abbb",
    "created_at": 1740721269,
    "kind": 3
}
HERE D
event received; id: 326bae85cadd6739a93ac4399bcb40e8140859d3208e3ddd325009c800f9e1cd; pubkey: d0f49e7cfd789e7b260196ae70892ba24156854e587a5c22f1318ac0ef79eecc
{
    "id": "326bae85cadd6739a93ac4399bcb40e8140859d3208e3ddd325009c800f9e1cd",
    "pubkey": "d0f49e7cfd789e7b260196ae70892ba24156854e587a5c22f1318ac0ef79eecc",
    "created_at": 1740721244,
    "kind": 3
}
HERE D
event received; id: 2a6e7703079e814c7b14e4ee6ac601b8c5a01c4f7d972d583164bc91400ece97; pubkey: 5f1d434104a2cad55ccee69b106cd4c10977bee01220e63a0bb00e58afd00fed
{
    "id": "2a6e7703079e814c7b14e4ee6ac601b8c5a01c4f7d972d583164bc91400ece97",
    "pubkey": "5f1d434104a2cad55ccee69b106cd4c10977bee01220e63a0bb00e58afd00fed",
    "created_at": 1740721234,
    "kind": 10000
}
HERE D
event received; id: a49bec52883f2001e7d405ed62b8d4597833e05c2264aca6d906ce8dc4e66755; pubkey: f43c2c03f1c9f930cf8b71dae7e4dd6b9e8e38115df9869bd5a2c2402302e77e
{
    "id": "a49bec52883f2001e7d405ed62b8d4597833e05c2264aca6d906ce8dc4e66755",
    "pubkey": "f43c2c03f1c9f930cf8b71dae7e4dd6b9e8e38115df9869bd5a2c2402302e77e",
    "created_at": 1740721202,
    "kind": 3
}
HERE D
event received; id: 58cdbd6435dd2597e0c3bb13b2ea9d9466b7908adeba82c707137867f71c795f; pubkey: 4f6009380da927ea4ed6f5f36c93198bd46c1b22d2ac8b6d1a1306fd2731b015
{
    "id": "58cdbd6435dd2597e0c3bb13b2ea9d9466b7908adeba82c707137867f71c795f",
    "pubkey": "4f6009380da927ea4ed6f5f36c93198bd46c1b22d2ac8b6d1a1306fd2731b015",
    "created_at": 1740721179,
    "kind": 3
}
HERE D
event received; id: 76eae1042afebf20f3d917485366df77a0dd3efe7cf8c1b35a09e7090b39467d; pubkey: cf7ad05f8e99de8eadbbfbd5ca1c0f9b75499bce07074966b277688ca5e1d726
{
    "id": "76eae1042afebf20f3d917485366df77a0dd3efe7cf8c1b35a09e7090b39467d",
    "pubkey": "cf7ad05f8e99de8eadbbfbd5ca1c0f9b75499bce07074966b277688ca5e1d726",
    "created_at": 1740721142,
    "kind": 3
}
HERE D
event received; id: c20d786e2b1d25983f3cb49ac6d746623521e0d355a63f47a1cf307fa661583b; pubkey: 508cdbf6cf797d7eb38e1b54c136935cccf444c614643f18bdf51e508f717552
{
    "id": "c20d786e2b1d25983f3cb49ac6d746623521e0d355a63f47a1cf307fa661583b",
    "pubkey": "508cdbf6cf797d7eb38e1b54c136935cccf444c614643f18bdf51e508f717552",
    "created_at": 1740721141,
    "kind": 6
}
HERE D
event received; id: cd2104d20fd1ebad99bae1b44b868f40aaefcbf9564e97841a0730403af98aba; pubkey: 3ae4a4ee140b0f16bac0c40f4391eda0d40caf1d7616193d8d0bbe415ec7a597
{
    "id": "cd2104d20fd1ebad99bae1b44b868f40aaefcbf9564e97841a0730403af98aba",
    "pubkey": "3ae4a4ee140b0f16bac0c40f4391eda0d40caf1d7616193d8d0bbe415ec7a597",
    "created_at": 1740721037,
    "kind": 3
}
HERE D
event received; id: 338c1440169d70b932bca9dd34fcaf6b9b2c87c24383b1eee0d993c7f2c2e9b3; pubkey: 9e8dd91d21e867dec464868a8d1f4a27c0e113c53e32f2bec0a7c6e25ad2e9d5
{
    "id": "338c1440169d70b932bca9dd34fcaf6b9b2c87c24383b1eee0d993c7f2c2e9b3",
    "pubkey": "9e8dd91d21e867dec464868a8d1f4a27c0e113c53e32f2bec0a7c6e25ad2e9d5",
    "created_at": 1740721015,
    "kind": 10000
}
HERE D
event received; id: daea23d19ac20e945efacc4662d3158dc2a4b7906e108c1db75eccad1e7c089a; pubkey: 90eb20364eea23c320b750476b36772b5348bf2960d0d6ba941239a576ca3150
{
    "id": "daea23d19ac20e945efacc4662d3158dc2a4b7906e108c1db75eccad1e7c089a",
    "pubkey": "90eb20364eea23c320b750476b36772b5348bf2960d0d6ba941239a576ca3150",
    "created_at": 1740720955,
    "kind": 3
}
HERE D
event received; id: 5d7e3485a2661214da656ebbbc1ffc7eb2385d73409c7205df33b9e9c905ebab; pubkey: 66fd9c5c022bbe5b883b86e8a550c7d9c90d28fa244754c4f732e6dfe91fcb58
{
    "id": "5d7e3485a2661214da656ebbbc1ffc7eb2385d73409c7205df33b9e9c905ebab",
    "pubkey": "66fd9c5c022bbe5b883b86e8a550c7d9c90d28fa244754c4f732e6dfe91fcb58",
    "created_at": 1740720949,
    "kind": 3
}
HERE D
event received; id: 8bb24cd3e9fe42bdc6af0eec9c167d6b20d330467b8d446aa2b72340c88385e3; pubkey: e4b67f9f7c0a1cce1c24ca9196f8e1446fcce17fdef5d5eb46a3929433ea4d91
{
    "id": "8bb24cd3e9fe42bdc6af0eec9c167d6b20d330467b8d446aa2b72340c88385e3",
    "pubkey": "e4b67f9f7c0a1cce1c24ca9196f8e1446fcce17fdef5d5eb46a3929433ea4d91",
    "created_at": 1740720925,
    "kind": 3
}
HERE D
event received; id: de47cb5b24e31361e801f4dee0ff166b73035197427faaeb0e3fc44c4268b881; pubkey: 9ffcbe73548aabd7ae74d43caaa9d59e785d3514d3e65804dc56811851d4f8f4
{
    "id": "de47cb5b24e31361e801f4dee0ff166b73035197427faaeb0e3fc44c4268b881",
    "pubkey": "9ffcbe73548aabd7ae74d43caaa9d59e785d3514d3e65804dc56811851d4f8f4",
    "created_at": 1740720922,
    "kind": 3
}
HERE D
event received; id: c832ebec7025719fcb3c71b7301cc2606a1537efa58882009c02f4212cfd08dd; pubkey: 2045369fc115b138d1438f98d3c29916986c9fde6b8203f7ff8699f0faee1c93
{
    "id": "c832ebec7025719fcb3c71b7301cc2606a1537efa58882009c02f4212cfd08dd",
    "pubkey": "2045369fc115b138d1438f98d3c29916986c9fde6b8203f7ff8699f0faee1c93",
    "created_at": 1740720898,
    "kind": 3
}
HERE D
event received; id: bf1bb226425121a745db0d0da1ee47d001b75e360dc6be6307a45b9d70eb72d6; pubkey: 77313c523694bfccaa05034010f6714604098380e77e13deeda40dc91427ef53
{
    "id": "bf1bb226425121a745db0d0da1ee47d001b75e360dc6be6307a45b9d70eb72d6",
    "pubkey": "77313c523694bfccaa05034010f6714604098380e77e13deeda40dc91427ef53",
    "created_at": 1740720892,
    "kind": 3
}
HERE D
event received; id: 492115015b54ec6e857e745d5665cc9a7f06c12facf472512477ac1c3468fb13; pubkey: 332c8ceb5c4a412c0bcb24e3e806bd0659a5b8eb984ada517c77e2bf1d12f599
{
    "id": "492115015b54ec6e857e745d5665cc9a7f06c12facf472512477ac1c3468fb13",
    "pubkey": "332c8ceb5c4a412c0bcb24e3e806bd0659a5b8eb984ada517c77e2bf1d12f599",
    "created_at": 1740720868,
    "kind": 3
}
HERE D
event received; id: ae581cfed3c4678f5b1fee69b67b4fa7cabe3cc9f16d56c9e30336718349b542; pubkey: 13b8e28e661d5ca60a46477a6192bba342583a9fe55bee3595685262d7bc06a1
{
    "id": "ae581cfed3c4678f5b1fee69b67b4fa7cabe3cc9f16d56c9e30336718349b542",
    "pubkey": "13b8e28e661d5ca60a46477a6192bba342583a9fe55bee3595685262d7bc06a1",
    "created_at": 1740720792,
    "kind": 3
}
HERE D
event received; id: ea5c528be43a07ba7d5c1415550369fa0acd4f1f589e256c11e133b6781eed15; pubkey: 068334b2f9cd5e30b43866c4b60bd31234e29be9bc11b06af037ec248df4f7ae
{
    "id": "ea5c528be43a07ba7d5c1415550369fa0acd4f1f589e256c11e133b6781eed15",
    "pubkey": "068334b2f9cd5e30b43866c4b60bd31234e29be9bc11b06af037ec248df4f7ae",
    "created_at": 1740720784,
    "kind": 10000
}
HERE D
event received; id: f159cb0de83c9cefc2ccc63c15285fe676ad0b4f2bf180d1bed9fcf7b843b3d8; pubkey: e3a59924933c9f9f2df83449055eb3858f1480fdd0c5edb95df08bedcd2e6624
{
    "id": "f159cb0de83c9cefc2ccc63c15285fe676ad0b4f2bf180d1bed9fcf7b843b3d8",
    "pubkey": "e3a59924933c9f9f2df83449055eb3858f1480fdd0c5edb95df08bedcd2e6624",
    "created_at": 1740720771,
    "kind": 3
}
HERE D
event received; id: 2d2112f7c84c325b6c86faa3354e1651e16da5ad69902647263d7225a1832577; pubkey: df06d21eca7c19c89d054964b2d9e305a425ebde34403cb0e7966a872b23058f
{
    "id": "2d2112f7c84c325b6c86faa3354e1651e16da5ad69902647263d7225a1832577",
    "pubkey": "df06d21eca7c19c89d054964b2d9e305a425ebde34403cb0e7966a872b23058f",
    "created_at": 1740720766,
    "kind": 3
}
HERE D
event received; id: 3b7063ea893e1c30f270d6f3df1443cd438eacc64d6a04e5b02af6e06d81df00; pubkey: aa23a3a5aac15413ff5834db2066c7568f9ba3b0826588f9855bb3c29c216581
{
    "id": "3b7063ea893e1c30f270d6f3df1443cd438eacc64d6a04e5b02af6e06d81df00",
    "pubkey": "aa23a3a5aac15413ff5834db2066c7568f9ba3b0826588f9855bb3c29c216581",
    "created_at": 1740720727,
    "kind": 3
}
HERE D
event received; id: acff219c28ae4680984e909c49cd524a1f2a87f4d004500da48e0e75561539f3; pubkey: e1b84e248c162b8341d3b54ec43649ba73414be9801166e904b99755fdb96f1e
{
    "id": "acff219c28ae4680984e909c49cd524a1f2a87f4d004500da48e0e75561539f3",
    "pubkey": "e1b84e248c162b8341d3b54ec43649ba73414be9801166e904b99755fdb96f1e",
    "created_at": 1740720714,
    "kind": 3
}
HERE D
event received; id: 909bdba6b77090a58846ddff02afc19eeddea8b8075acc29a47ae7fa924b86f6; pubkey: a2a73b2756a5364f39844e652c3696f5f0dea521d0c5c70eacdc416e7adc75e8
{
    "id": "909bdba6b77090a58846ddff02afc19eeddea8b8075acc29a47ae7fa924b86f6",
    "pubkey": "a2a73b2756a5364f39844e652c3696f5f0dea521d0c5c70eacdc416e7adc75e8",
    "created_at": 1740720702,
    "kind": 10000
}
HERE D
event received; id: e5737d7434b564a633e1e43cd01deafbaccbf2bf3e76bd4ace1745633071499c; pubkey: 1e7c647fffee385f8972634725992c15f7f547fc9b67d52e8d9ae74bc3e0f2c5
{
    "id": "e5737d7434b564a633e1e43cd01deafbaccbf2bf3e76bd4ace1745633071499c",
    "pubkey": "1e7c647fffee385f8972634725992c15f7f547fc9b67d52e8d9ae74bc3e0f2c5",
    "created_at": 1740720659,
    "kind": 3
}
HERE D
event received; id: b2f8870047086c813c918467223d2b4d1a40347dce7e45315510dee99c54b336; pubkey: b747f0bf48d3e8429af372025895d1754afbecf8b937609478209a235f6f6bd7
{
    "id": "b2f8870047086c813c918467223d2b4d1a40347dce7e45315510dee99c54b336",
    "pubkey": "b747f0bf48d3e8429af372025895d1754afbecf8b937609478209a235f6f6bd7",
    "created_at": 1740720651,
    "kind": 3
}
HERE D
event received; id: 53d8d25f1d5c975a23d6ba555fb2f478a2fe3deda7502a48e08a49e0380f1449; pubkey: 20e7c953439e66f3882ab96fe0faa8ba246d6fb12c03b0cb4e2dc4623b8bcb21
{
    "id": "53d8d25f1d5c975a23d6ba555fb2f478a2fe3deda7502a48e08a49e0380f1449",
    "pubkey": "20e7c953439e66f3882ab96fe0faa8ba246d6fb12c03b0cb4e2dc4623b8bcb21",
    "created_at": 1740720643,
    "kind": 3
}
HERE D
event received; id: 6c6cd555cef39bfbb2a07879f2e5376b651ff37e13124b059cf93339f676f406; pubkey: a7e9b36ff24ae730706742553b4a4a2733b01156e7c9e26145f9bc6a14f061a9
{
    "id": "6c6cd555cef39bfbb2a07879f2e5376b651ff37e13124b059cf93339f676f406",
    "pubkey": "a7e9b36ff24ae730706742553b4a4a2733b01156e7c9e26145f9bc6a14f061a9",
    "created_at": 1740720628,
    "kind": 3
}
HERE D
event received; id: c361d43cf4134637d2d4b9320a784d048bae8da6a97c0ed0848418fc4a7be754; pubkey: e7bf8dad360828f0289b7b4bea1a1bd28eb6d4d6522fa17f957e0dfb839ef3db
{
    "id": "c361d43cf4134637d2d4b9320a784d048bae8da6a97c0ed0848418fc4a7be754",
    "pubkey": "e7bf8dad360828f0289b7b4bea1a1bd28eb6d4d6522fa17f957e0dfb839ef3db",
    "created_at": 1740720612,
    "kind": 1
}
HERE D
event received; id: 4077f5b94239e1457b1753f937141ab06823328c57c343c99fa6f2df480ac0eb; pubkey: f03df3d4134230420cdf7acbb35f96a2542424246ab052ba24c6fec6a4d4f676
{
    "id": "4077f5b94239e1457b1753f937141ab06823328c57c343c99fa6f2df480ac0eb",
    "pubkey": "f03df3d4134230420cdf7acbb35f96a2542424246ab052ba24c6fec6a4d4f676",
    "created_at": 1740720612,
    "kind": 1
}
HERE D
event received; id: f17172dda55792a2a37b785edf8b7aac5e85d36d77a65afeb0832574c67123a4; pubkey: 840f9d415fe27e55b98913ac5e3b106d68447c84a86b5b0b91deb8aebaa35bb8
{
    "id": "f17172dda55792a2a37b785edf8b7aac5e85d36d77a65afeb0832574c67123a4",
    "pubkey": "840f9d415fe27e55b98913ac5e3b106d68447c84a86b5b0b91deb8aebaa35bb8",
    "created_at": 1740720606,
    "kind": 3
}
HERE D
event received; id: 8af901aa53df4489e4ae3f54675d538b564d957ca7b4eb86bce29ab058837d92; pubkey: 22050dd3659b568c5cb352b0e81958fb986bd941031a90c74ba7f6d2480c11ea
{
    "id": "8af901aa53df4489e4ae3f54675d538b564d957ca7b4eb86bce29ab058837d92",
    "pubkey": "22050dd3659b568c5cb352b0e81958fb986bd941031a90c74ba7f6d2480c11ea",
    "created_at": 1740720484,
    "kind": 3
}
HERE D
event received; id: 346ad35ef242ec64cfd87d344cc5df2da6f113cd8622bf79cb3fd1175ef2e6a3; pubkey: 5de23b9a4fd02ca6a760af19539a5c6ea8576db98f025233384901f5d83005b3
{
    "id": "346ad35ef242ec64cfd87d344cc5df2da6f113cd8622bf79cb3fd1175ef2e6a3",
    "pubkey": "5de23b9a4fd02ca6a760af19539a5c6ea8576db98f025233384901f5d83005b3",
    "created_at": 1740720475,
    "kind": 3
}
HERE D
event received; id: 53ed092e787ed472ea07a36eedab09ca0fe43f340c65f7a7bab7aae056ada92d; pubkey: a8b2b6e915127ef5b45d4f3d2f0bc2f6aa045e47bf3b65ef22ceb8539a4fc11c
{
    "id": "53ed092e787ed472ea07a36eedab09ca0fe43f340c65f7a7bab7aae056ada92d",
    "pubkey": "a8b2b6e915127ef5b45d4f3d2f0bc2f6aa045e47bf3b65ef22ceb8539a4fc11c",
    "created_at": 1740720372,
    "kind": 10000
}
HERE D
event received; id: a547e728f6e76ad708ece9d5a976f43a26b0d5c4a6a42725df6ff22dd2c29643; pubkey: 1bf9f239dca1636149bc2f3fc334077ae959ea9607cacf945ef8f8bb227dc5e1
{
    "id": "a547e728f6e76ad708ece9d5a976f43a26b0d5c4a6a42725df6ff22dd2c29643",
    "pubkey": "1bf9f239dca1636149bc2f3fc334077ae959ea9607cacf945ef8f8bb227dc5e1",
    "created_at": 1740720340,
    "kind": 3
}
HERE D
event received; id: 09f1a63cd20442d299d962a4b39e3bbe94b7a5aaefad1311ba3137e97739673b; pubkey: 8330db864d294c14c05e78319906d0a005fbb46968fca5b2d00c7d42abe0e31d
{
    "id": "09f1a63cd20442d299d962a4b39e3bbe94b7a5aaefad1311ba3137e97739673b",
    "pubkey": "8330db864d294c14c05e78319906d0a005fbb46968fca5b2d00c7d42abe0e31d",
    "created_at": 1740720330,
    "kind": 3
}
HERE D
event received; id: 080da0198fb6d686369d2d664f26c656d12edd8cd6860abd60d1b510a36b91f1; pubkey: f4c0c85932d26496e6ce4c680aa4fbe8987284805f3c475084b407dbffd29d3b
{
    "id": "080da0198fb6d686369d2d664f26c656d12edd8cd6860abd60d1b510a36b91f1",
    "pubkey": "f4c0c85932d26496e6ce4c680aa4fbe8987284805f3c475084b407dbffd29d3b",
    "created_at": 1740720288,
    "kind": 3
}
HERE D
event received; id: 8d6b6aa4d05edf54dc6adc89f486c7212009dfc71e928f77eda51c80b0ade43f; pubkey: 816509826498efe74904f186f4d09e2b987b39113b2d0b285968c288299380fa
{
    "id": "8d6b6aa4d05edf54dc6adc89f486c7212009dfc71e928f77eda51c80b0ade43f",
    "pubkey": "816509826498efe74904f186f4d09e2b987b39113b2d0b285968c288299380fa",
    "created_at": 1740720169,
    "kind": 3
}
HERE D
event received; id: f1390c9a0c993ea9f3118c49bdbd3a89837ce6a3ae5d8c54c9fbbff4c2e7262e; pubkey: 85c88e108282b27931edc34173baee4b6968c4a5280916098e32740f9f073242
{
    "id": "f1390c9a0c993ea9f3118c49bdbd3a89837ce6a3ae5d8c54c9fbbff4c2e7262e",
    "pubkey": "85c88e108282b27931edc34173baee4b6968c4a5280916098e32740f9f073242",
    "created_at": 1740720156,
    "kind": 3
}
HERE D
event received; id: c83dfcf53e640040b0a9393c8fb969ccd0d3ba5c9e0f24f938a38b0ca28970bb; pubkey: 01d0bbf9537ef1fd0ddf815f41c1896738f6a3a0f600f51c782b7d8891130d4c
{
    "id": "c83dfcf53e640040b0a9393c8fb969ccd0d3ba5c9e0f24f938a38b0ca28970bb",
    "pubkey": "01d0bbf9537ef1fd0ddf815f41c1896738f6a3a0f600f51c782b7d8891130d4c",
    "created_at": 1740720112,
    "kind": 3
}
HERE D
event received; id: a87b2eb94b601d1cf89ae5515a2e8359eac6680d684c0e5f062027b81123fee6; pubkey: 272fc988e582a377bcc3580d784dfd68aaa037a87b476d7aca1d86899f4c5e8e
{
    "id": "a87b2eb94b601d1cf89ae5515a2e8359eac6680d684c0e5f062027b81123fee6",
    "pubkey": "272fc988e582a377bcc3580d784dfd68aaa037a87b476d7aca1d86899f4c5e8e",
    "created_at": 1740720105,
    "kind": 3
}
HERE D
event received; id: 5c0b7edfd7f3cdaf2cb86770ae50ebeeb55258a7f2600368346b0e1c7bf9d04e; pubkey: 841b017d49f8211881a23acbd002bfb07c0d9c0d720c4a99c42669458bf0ee39
{
    "id": "5c0b7edfd7f3cdaf2cb86770ae50ebeeb55258a7f2600368346b0e1c7bf9d04e",
    "pubkey": "841b017d49f8211881a23acbd002bfb07c0d9c0d720c4a99c42669458bf0ee39",
    "created_at": 1740720105,
    "kind": 3
}
HERE D
event received; id: 7da8b130a7b84bf021f51eb7c426d26fc18be4867cb582a251ecf0ea44f35bcd; pubkey: e64dad0e4748cdff0f11d43b4c5552dc98c3555e8113efcca107f6baa971ad8f
{
    "id": "7da8b130a7b84bf021f51eb7c426d26fc18be4867cb582a251ecf0ea44f35bcd",
    "pubkey": "e64dad0e4748cdff0f11d43b4c5552dc98c3555e8113efcca107f6baa971ad8f",
    "created_at": 1740720056,
    "kind": 3
}
HERE D
event received; id: 58cd135e015b1fbaaeb1356cfb196e3201b7b2e18d02d4482bbea767cfcb70bf; pubkey: ea435dbc2a4feaf5844bdfdf234791402d4336efcd9a343507661db4d549d04c
{
    "id": "58cd135e015b1fbaaeb1356cfb196e3201b7b2e18d02d4482bbea767cfcb70bf",
    "pubkey": "ea435dbc2a4feaf5844bdfdf234791402d4336efcd9a343507661db4d549d04c",
    "created_at": 1740720022,
    "kind": 3
}
HERE D
event received; id: 86fd3a110676bf3fcca210195ff7a3bdf32a68caf23a7af8ed584c417bc17a0a; pubkey: 62603b373350d977737beca068ba22ca615f499e6214a813cfbaa299f6bc5c2e
{
    "id": "86fd3a110676bf3fcca210195ff7a3bdf32a68caf23a7af8ed584c417bc17a0a",
    "pubkey": "62603b373350d977737beca068ba22ca615f499e6214a813cfbaa299f6bc5c2e",
    "created_at": 1740719964,
    "kind": 3
}
HERE D
event received; id: 95887ba0e4e05ebd1463b27a33c1b02f1098c4adfdc74cb59b02e0202310586c; pubkey: d2b4168467439f03eb7e0e30be9412d5a29d050aac77dc60de3dcb9f45f91b07
{
    "id": "95887ba0e4e05ebd1463b27a33c1b02f1098c4adfdc74cb59b02e0202310586c",
    "pubkey": "d2b4168467439f03eb7e0e30be9412d5a29d050aac77dc60de3dcb9f45f91b07",
    "created_at": 1740719927,
    "kind": 5
}
HERE D
event received; id: 2e1f434e56215d81973bf41478555cba3056144b044b44fab8b7f47fd9fd76cc; pubkey: d2b4168467439f03eb7e0e30be9412d5a29d050aac77dc60de3dcb9f45f91b07
{
    "id": "2e1f434e56215d81973bf41478555cba3056144b044b44fab8b7f47fd9fd76cc",
    "pubkey": "d2b4168467439f03eb7e0e30be9412d5a29d050aac77dc60de3dcb9f45f91b07",
    "created_at": 1740719926,
    "kind": 31990
}
HERE D
event received; id: 80a6e5ce5ffc0dc253f60fd23837f54dd5828ab3dd2dc3c5d65ec1535ca8bccc; pubkey: dd5b0fd9005f232da99f6d41e6ffb74b8c3a41f688b984dc5c9f37d0eef2f29e
{
    "id": "80a6e5ce5ffc0dc253f60fd23837f54dd5828ab3dd2dc3c5d65ec1535ca8bccc",
    "pubkey": "dd5b0fd9005f232da99f6d41e6ffb74b8c3a41f688b984dc5c9f37d0eef2f29e",
    "created_at": 1740719872,
    "kind": 3
}
HERE D
event received; id: c655c29838ff3be0f024ccaf2f597ebc749884646690f6e896f13675d31e720c; pubkey: 07ffabcd3d17c33e784816e07702830b386373250cacca013cffae55265ca3d3
{
    "id": "c655c29838ff3be0f024ccaf2f597ebc749884646690f6e896f13675d31e720c",
    "pubkey": "07ffabcd3d17c33e784816e07702830b386373250cacca013cffae55265ca3d3",
    "created_at": 1740719870,
    "kind": 3
}
HERE D
event received; id: ddbdff5b13d42816179e0d23da9be87856d65e5353fa4848e66cc16cfdddbbbe; pubkey: 48b81f45ee29cffcca68876118944ab5f571fa4a1aa2e6a1670265ed1396a96e
{
    "id": "ddbdff5b13d42816179e0d23da9be87856d65e5353fa4848e66cc16cfdddbbbe",
    "pubkey": "48b81f45ee29cffcca68876118944ab5f571fa4a1aa2e6a1670265ed1396a96e",
    "created_at": 1740719833,
    "kind": 3
}
HERE D
event received; id: d128adab37c46354042e8a9d868563fb9e2cd7e4e284651617c3eb64b03b7df1; pubkey: a2ddc2e07b48561da61f5e06cb5a172329a8afdc1e5f8059154330be5b30ea24
{
    "id": "d128adab37c46354042e8a9d868563fb9e2cd7e4e284651617c3eb64b03b7df1",
    "pubkey": "a2ddc2e07b48561da61f5e06cb5a172329a8afdc1e5f8059154330be5b30ea24",
    "created_at": 1740719825,
    "kind": 3
}
HERE D
event received; id: 51659a252b8a63a51efa6a88821d7e57870f8d9bc2f855adcac0a5863688e361; pubkey: 686a8c459873abf9a9038ba0170ab3bf21d1954d13b9454f1cc788779ff4627b
{
    "id": "51659a252b8a63a51efa6a88821d7e57870f8d9bc2f855adcac0a5863688e361",
    "pubkey": "686a8c459873abf9a9038ba0170ab3bf21d1954d13b9454f1cc788779ff4627b",
    "created_at": 1740719779,
    "kind": 3
}
HERE D
event received; id: 9c362ca19193c3de9ac575f8c30813c3f0f2996a2382a8dc4a6a05ca423df330; pubkey: cebb434d7bcd40b4fdade7a275bda6102ac2761891bf19466bd584274ce6287b
{
    "id": "9c362ca19193c3de9ac575f8c30813c3f0f2996a2382a8dc4a6a05ca423df330",
    "pubkey": "cebb434d7bcd40b4fdade7a275bda6102ac2761891bf19466bd584274ce6287b",
    "created_at": 1740719771,
    "kind": 3
}
HERE D
event received; id: 75a932435ccc73402bc4803d2dd33b1a24d300fba63e3c8efe7064412c73aa45; pubkey: 77c2969ea4db4ca1859305d7ebabf6053fd132ddcc88e1b178bfd938a33cfa50
{
    "id": "75a932435ccc73402bc4803d2dd33b1a24d300fba63e3c8efe7064412c73aa45",
    "pubkey": "77c2969ea4db4ca1859305d7ebabf6053fd132ddcc88e1b178bfd938a33cfa50",
    "created_at": 1740719760,
    "kind": 3
}
HERE D
event received; id: 5f194d9a01839ea60df2ae7cd1c602333c32d937628f7284302fa988ec7938f5; pubkey: c6f7077f1699d50cf92a9652bfebffac05fc6842b9ee391089d959b8ad5d48fd
{
    "id": "5f194d9a01839ea60df2ae7cd1c602333c32d937628f7284302fa988ec7938f5",
    "pubkey": "c6f7077f1699d50cf92a9652bfebffac05fc6842b9ee391089d959b8ad5d48fd",
    "created_at": 1740719661,
    "kind": 3
}
HERE D
event received; id: 0285441209bda30de882c71b55bb5abecddff30af73a83b5eb8b8d773b151763; pubkey: 8877a11eaa55502789708fa5291acd885d3887727b5eb6768ce7342fbbc69e7b
{
    "id": "0285441209bda30de882c71b55bb5abecddff30af73a83b5eb8b8d773b151763",
    "pubkey": "8877a11eaa55502789708fa5291acd885d3887727b5eb6768ce7342fbbc69e7b",
    "created_at": 1740719592,
    "kind": 3
}
HERE D
event received; id: a64933cd9a2f0952df097a7113714fb9fc8bbb8a13750cd46555d21546e4c35b; pubkey: 9dd1562e77db7963ff9282e33fbb40521a9889c2c32831d0a71bf84eda4d2ad6
{
    "id": "a64933cd9a2f0952df097a7113714fb9fc8bbb8a13750cd46555d21546e4c35b",
    "pubkey": "9dd1562e77db7963ff9282e33fbb40521a9889c2c32831d0a71bf84eda4d2ad6",
    "created_at": 1740719565,
    "kind": 3
}
HERE D
event received; id: 60871db069045f10e6af8eb1428ef5715c9fd2263ddf58644eaa0351031bdc76; pubkey: 21decdbc8c0eab836b2723f395f2bbbb974df0435ad1d91fa539cd335015b4d4
{
    "id": "60871db069045f10e6af8eb1428ef5715c9fd2263ddf58644eaa0351031bdc76",
    "pubkey": "21decdbc8c0eab836b2723f395f2bbbb974df0435ad1d91fa539cd335015b4d4",
    "created_at": 1740719545,
    "kind": 3
}
HERE D
event received; id: d53430b236ed7f3cb95e625da7f0b8204feae99dd4f07223f09c83dcfa035db3; pubkey: c69a0aaf02fa18655c0d47593a1570db3643e487bf43cd2da2a0796de75ced44
{
    "id": "d53430b236ed7f3cb95e625da7f0b8204feae99dd4f07223f09c83dcfa035db3",
    "pubkey": "c69a0aaf02fa18655c0d47593a1570db3643e487bf43cd2da2a0796de75ced44",
    "created_at": 1740719525,
    "kind": 3
}
HERE D
event received; id: 9d69e7162aee1c195985ec95d9720b9d152764dc281e1eadff9a36f57bb20014; pubkey: 6c516eefe1dfc59598eb79162f909abead01062d7f2bb2e89b87fde05d928e2f
{
    "id": "9d69e7162aee1c195985ec95d9720b9d152764dc281e1eadff9a36f57bb20014",
    "pubkey": "6c516eefe1dfc59598eb79162f909abead01062d7f2bb2e89b87fde05d928e2f",
    "created_at": 1740719522,
    "kind": 3
}
HERE D
event received; id: fb79c3b143b0e834598151b103f8549aa6313744dfcc82aa435ea4e64c9e581f; pubkey: 8f78675a0eb4d5d86242dafedf5141edcdc8d4df5e2802ea7f69ba060902dc85
{
    "id": "fb79c3b143b0e834598151b103f8549aa6313744dfcc82aa435ea4e64c9e581f",
    "pubkey": "8f78675a0eb4d5d86242dafedf5141edcdc8d4df5e2802ea7f69ba060902dc85",
    "created_at": 1740719486,
    "kind": 10000
}
HERE D
event received; id: 0c931e7691c9b953a616546363ee9eee4389e9c680b8f876fbf0bdc1b4ad7eb1; pubkey: 9c6d95f794a10b1dbf6125924d95e5576df54b545a9340177430be4691cb3f0a
{
    "id": "0c931e7691c9b953a616546363ee9eee4389e9c680b8f876fbf0bdc1b4ad7eb1",
    "pubkey": "9c6d95f794a10b1dbf6125924d95e5576df54b545a9340177430be4691cb3f0a",
    "created_at": 1740719478,
    "kind": 10000
}
HERE D
event received; id: 853d1561b5ebf93fdf244986a941f4da26657dc3be68f50e7332dfc8521554dc; pubkey: 5f55785440c7b7e7c7cf975ea4b3428f1f2145a0698361f7f6bb03e9a8a6e3c3
{
    "id": "853d1561b5ebf93fdf244986a941f4da26657dc3be68f50e7332dfc8521554dc",
    "pubkey": "5f55785440c7b7e7c7cf975ea4b3428f1f2145a0698361f7f6bb03e9a8a6e3c3",
    "created_at": 1740719424,
    "kind": 3
}
HERE D
event received; id: 6f491bbc115f3ce58c29a361390a8640d933b1c17f28e60beb9c82b40ef5cf1b; pubkey: a619eb76964b870a0edad133db1b92183b6533332de555a033ada4e311d75935
{
    "id": "6f491bbc115f3ce58c29a361390a8640d933b1c17f28e60beb9c82b40ef5cf1b",
    "pubkey": "a619eb76964b870a0edad133db1b92183b6533332de555a033ada4e311d75935",
    "created_at": 1740719292,
    "kind": 3
}
HERE D
event received; id: ac90562c2db61fc24735eee67196fbf258eae0b8ade194253d6470652e751f73; pubkey: 4bf3a313782dc9576f21efb3bd3d61387d0d5913052207e90306a741bf6af7d5
{
    "id": "ac90562c2db61fc24735eee67196fbf258eae0b8ade194253d6470652e751f73",
    "pubkey": "4bf3a313782dc9576f21efb3bd3d61387d0d5913052207e90306a741bf6af7d5",
    "created_at": 1740719239,
    "kind": 3
}
HERE D
event received; id: b8909fdabe65fd22a1ec5b450f111f71e2a6d76066cc2a3a2782dbb71d011695; pubkey: 023b8fa899633ced8beea27eef854faf2ecab412a1dc2e98ee0d96a884314ec3
{
    "id": "b8909fdabe65fd22a1ec5b450f111f71e2a6d76066cc2a3a2782dbb71d011695",
    "pubkey": "023b8fa899633ced8beea27eef854faf2ecab412a1dc2e98ee0d96a884314ec3",
    "created_at": 1740719182,
    "kind": 3
}
HERE D
event received; id: a6f2e8251157f5fac4a72e77a02d82bdccb4104402815bbb60baaf19c64e68c8; pubkey: bd93c5a6c9a85f7af62d297accc4fc9cda936eaafebb7d650b1657e064722d01
{
    "id": "a6f2e8251157f5fac4a72e77a02d82bdccb4104402815bbb60baaf19c64e68c8",
    "pubkey": "bd93c5a6c9a85f7af62d297accc4fc9cda936eaafebb7d650b1657e064722d01",
    "created_at": 1740719156,
    "kind": 3
}
HERE D
event received; id: 5de0de307585adc666c727c36833bd83103b0d00dfebd8b02034fb2c94dfb39e; pubkey: df478568479de26b4a83c1bdc4dbab61b5cc82e1a312e2b28bc815a12a951e67
{
    "id": "5de0de307585adc666c727c36833bd83103b0d00dfebd8b02034fb2c94dfb39e",
    "pubkey": "df478568479de26b4a83c1bdc4dbab61b5cc82e1a312e2b28bc815a12a951e67",
    "created_at": 1740719121,
    "kind": 3
}
HERE D
event received; id: b35dfc63930afe365d17faed27a04bda011c3d71b28e30c271e392c10ad95835; pubkey: f03df3d4134230420cdf7acbb35f96a2542424246ab052ba24c6fec6a4d4f676
{
    "id": "b35dfc63930afe365d17faed27a04bda011c3d71b28e30c271e392c10ad95835",
    "pubkey": "f03df3d4134230420cdf7acbb35f96a2542424246ab052ba24c6fec6a4d4f676",
    "created_at": 1740719111,
    "kind": 1
}
HERE D
event received; id: 5282c52ff0e46a00c7b363ae56af1cec418208fe3a8e4c0e7346fcc85bdcc789; pubkey: 5f0558f396a1152233360aba4fbd7ae7ee591d11fa6232304b8419a3c313d813
{
    "id": "5282c52ff0e46a00c7b363ae56af1cec418208fe3a8e4c0e7346fcc85bdcc789",
    "pubkey": "5f0558f396a1152233360aba4fbd7ae7ee591d11fa6232304b8419a3c313d813",
    "created_at": 1740719106,
    "kind": 3
}
HERE D
event received; id: fff71d97beb5cbaad20a1675a817bcaf9bc2292230029289390ffe85e0ace448; pubkey: 1525d0589d5bcf7c6193e107e230638bf2190c872f9cf464ef073b78718b5894
{
    "id": "fff71d97beb5cbaad20a1675a817bcaf9bc2292230029289390ffe85e0ace448",
    "pubkey": "1525d0589d5bcf7c6193e107e230638bf2190c872f9cf464ef073b78718b5894",
    "created_at": 1740719013,
    "kind": 3
}
HERE D
event received; id: d5858204d897cf065fd5fa368c954aa2e494396999a0dedf39ed51e1bd9452a0; pubkey: a2c580ed966ff13d295aab54f2073e2675e6e2e72d8e0711050eaf243db651c1
{
    "id": "d5858204d897cf065fd5fa368c954aa2e494396999a0dedf39ed51e1bd9452a0",
    "pubkey": "a2c580ed966ff13d295aab54f2073e2675e6e2e72d8e0711050eaf243db651c1",
    "created_at": 1740718989,
    "kind": 3
}
HERE D
event received; id: 85aec22eeee8cdfafc4bf8e53219d6d1c8070b1bfc52f9973091c10a72492bad; pubkey: f4a29f6397c32409a7cd3bcda1acb7ddad76a38e457ea5ddf7a827705b2b1ea3
{
    "id": "85aec22eeee8cdfafc4bf8e53219d6d1c8070b1bfc52f9973091c10a72492bad",
    "pubkey": "f4a29f6397c32409a7cd3bcda1acb7ddad76a38e457ea5ddf7a827705b2b1ea3",
    "created_at": 1740718987,
    "kind": 3
}
HERE D
event received; id: 08204d4e8f78f2c8401042a51af1ce384ff33da038f59ca863cb08485436bf52; pubkey: ad1a216219eb17ef3f6cc28c288d86bd1d414ef1062475db716bb513ee8143a0
{
    "id": "08204d4e8f78f2c8401042a51af1ce384ff33da038f59ca863cb08485436bf52",
    "pubkey": "ad1a216219eb17ef3f6cc28c288d86bd1d414ef1062475db716bb513ee8143a0",
    "created_at": 1740718936,
    "kind": 3
}
HERE D
event received; id: e20c188a4f85e61aba5e0d3c8b58e525dd8dc4814875a095945d7a484c6810c9; pubkey: a02357c2f569329f4b76c2bb5bb5a2a65cb986283142b156e9e8128ec6a00ba5
{
    "id": "e20c188a4f85e61aba5e0d3c8b58e525dd8dc4814875a095945d7a484c6810c9",
    "pubkey": "a02357c2f569329f4b76c2bb5bb5a2a65cb986283142b156e9e8128ec6a00ba5",
    "created_at": 1740718923,
    "kind": 3
}
HERE D
event received; id: d1c24baec5ac808d725ee52bc06fabfd275a1edfcc7b416e5e60f87137efc16d; pubkey: 670874fa6dd544edc5867763ce793552396aedda1a5fda3a97949f66ab0acfb3
{
    "id": "d1c24baec5ac808d725ee52bc06fabfd275a1edfcc7b416e5e60f87137efc16d",
    "pubkey": "670874fa6dd544edc5867763ce793552396aedda1a5fda3a97949f66ab0acfb3",
    "created_at": 1740718910,
    "kind": 3
}
HERE D
event received; id: bb417f1a9338121e74f2d9157a1c2275d6620f29e29ff315bccb27389b8e59ef; pubkey: f88e6629b320c83b559075b084d14c00043e01dc206918782ce40d54e5254dd5
{
    "id": "bb417f1a9338121e74f2d9157a1c2275d6620f29e29ff315bccb27389b8e59ef",
    "pubkey": "f88e6629b320c83b559075b084d14c00043e01dc206918782ce40d54e5254dd5",
    "created_at": 1740718900,
    "kind": 3
}
HERE D
event received; id: 903a85c8c9f4171bda00eb68697cf3356ded7a364fb660270f1ee5e9b1a5534b; pubkey: 41f07bc3191c806ab29af19ce16beca62237fb3339ce25fd9ef3d471dc11a444
{
    "id": "903a85c8c9f4171bda00eb68697cf3356ded7a364fb660270f1ee5e9b1a5534b",
    "pubkey": "41f07bc3191c806ab29af19ce16beca62237fb3339ce25fd9ef3d471dc11a444",
    "created_at": 1740718873,
    "kind": 3
}
HERE D
event received; id: 96d8e74ab4c06ec562054d1a4ef61a297eb1f439e36217ff23f2dedc64b8e81e; pubkey: 9b3334b66d04056213183b2e367c6d7ebc60496f0a5f1e2b8efffa25bda09b9e
{
    "id": "96d8e74ab4c06ec562054d1a4ef61a297eb1f439e36217ff23f2dedc64b8e81e",
    "pubkey": "9b3334b66d04056213183b2e367c6d7ebc60496f0a5f1e2b8efffa25bda09b9e",
    "created_at": 1740718862,
    "kind": 3
}
HERE D
event received; id: a5d8ef5832884cd8d892f72f6cf547c7d18ad32ff7690af05a65bddd58dfa011; pubkey: c1e9ab3a56a2ab6ca4bebf44ea64b2fda40ac6311e886ba86b4652169cb56b43
{
    "id": "a5d8ef5832884cd8d892f72f6cf547c7d18ad32ff7690af05a65bddd58dfa011",
    "pubkey": "c1e9ab3a56a2ab6ca4bebf44ea64b2fda40ac6311e886ba86b4652169cb56b43",
    "created_at": 1740718818,
    "kind": 3
}
HERE D
event received; id: 9e745fa8489cae7f51ca2369b1bd2c2c924a6c3df12096dc313f14aa01292f41; pubkey: e7bf8dad360828f0289b7b4bea1a1bd28eb6d4d6522fa17f957e0dfb839ef3db
{
    "id": "9e745fa8489cae7f51ca2369b1bd2c2c924a6c3df12096dc313f14aa01292f41",
    "pubkey": "e7bf8dad360828f0289b7b4bea1a1bd28eb6d4d6522fa17f957e0dfb839ef3db",
    "created_at": 1740718812,
    "kind": 1
}
HERE D
event received; id: bfc359137f556c55e3c604e96170042de49f79d3a6c3acc0d83458e4021dc4d8; pubkey: ff6e3a950919c361b253acb9b9c35a9636d6b89c52803285f629f4767df9ff06
{
    "id": "bfc359137f556c55e3c604e96170042de49f79d3a6c3acc0d83458e4021dc4d8",
    "pubkey": "ff6e3a950919c361b253acb9b9c35a9636d6b89c52803285f629f4767df9ff06",
    "created_at": 1740718800,
    "kind": 3
}
HERE D
event received; id: 7beb3d937b501613650919175378e5ce402f9421cefacb0f973aee1cf3364cde; pubkey: 8aa142a40116d27af0146c991ebc119c65a84c1f663aef077992e08eac2ff7fe
{
    "id": "7beb3d937b501613650919175378e5ce402f9421cefacb0f973aee1cf3364cde",
    "pubkey": "8aa142a40116d27af0146c991ebc119c65a84c1f663aef077992e08eac2ff7fe",
    "created_at": 1740718797,
    "kind": 3
}
HERE D
event received; id: 5a58edc250a1609bc3914d7d9690122fd61d209856f83b10a35f3061b27779a7; pubkey: 8f465cdbf43abdbd0dbb4e90cee85fb1a821923098bf6b6d466cae8d26eb0520
{
    "id": "5a58edc250a1609bc3914d7d9690122fd61d209856f83b10a35f3061b27779a7",
    "pubkey": "8f465cdbf43abdbd0dbb4e90cee85fb1a821923098bf6b6d466cae8d26eb0520",
    "created_at": 1740718770,
    "kind": 3
}
HERE D
event received; id: 7d2b5cc13d9c30b60230bc3d19b283d48515989321a579bb24ef8dd204dc4831; pubkey: 5bfc4134a36c849614bd4c7e15a5cc07ea46711178421bb00a34df9ee4c93afb
{
    "id": "7d2b5cc13d9c30b60230bc3d19b283d48515989321a579bb24ef8dd204dc4831",
    "pubkey": "5bfc4134a36c849614bd4c7e15a5cc07ea46711178421bb00a34df9ee4c93afb",
    "created_at": 1740718758,
    "kind": 3
}
HERE D
event received; id: deb520e2d46b11c09f069291b48a8175a5a798dcfc890cea704795962c69c6b1; pubkey: fc89f8c988548dd7ce2d43c034b5ae3d82dbeda52199eaecca5c572aea43f826
{
    "id": "deb520e2d46b11c09f069291b48a8175a5a798dcfc890cea704795962c69c6b1",
    "pubkey": "fc89f8c988548dd7ce2d43c034b5ae3d82dbeda52199eaecca5c572aea43f826",
    "created_at": 1740718696,
    "kind": 3
}
HERE D
event received; id: 581a7db845925a301d80a247ea9dd93c2e082281babd154bc50f22423a6de02f; pubkey: f5f669b64f897b6206a4ffd3761816c0a0cbbc8a1796f2d8302c61797d5766c0
{
    "id": "581a7db845925a301d80a247ea9dd93c2e082281babd154bc50f22423a6de02f",
    "pubkey": "f5f669b64f897b6206a4ffd3761816c0a0cbbc8a1796f2d8302c61797d5766c0",
    "created_at": 1740718694,
    "kind": 3
}
HERE D
event received; id: 5bb1179616cf5ad633bbbaa8f06432a5e1e99739c05864e04d7d13962aa81f1c; pubkey: abd277d90caba20aee0f1f05a68d24cd117badc1205d0d1b1a0451357d32b92f
{
    "id": "5bb1179616cf5ad633bbbaa8f06432a5e1e99739c05864e04d7d13962aa81f1c",
    "pubkey": "abd277d90caba20aee0f1f05a68d24cd117badc1205d0d1b1a0451357d32b92f",
    "created_at": 1740718654,
    "kind": 3
}
HERE D
event received; id: 157e0f1573994817cda506a9ab40487a2b413261d2361ecee11994d06e7fb3ed; pubkey: 7d633defc4d820f27094e76048fb87d43dd9e4696025e123a22086e68347bf90
{
    "id": "157e0f1573994817cda506a9ab40487a2b413261d2361ecee11994d06e7fb3ed",
    "pubkey": "7d633defc4d820f27094e76048fb87d43dd9e4696025e123a22086e68347bf90",
    "created_at": 1740718651,
    "kind": 3
}
HERE D
event received; id: 0e2e7aeb2f72dcbbf471fe5447ad4cf6eb41b19ea972cdb4fcfc4cf1189c5ec0; pubkey: 4cf5ff39fd37b61f1fc66365e5ab985f88075eff14644648f790e9b8d334813f
{
    "id": "0e2e7aeb2f72dcbbf471fe5447ad4cf6eb41b19ea972cdb4fcfc4cf1189c5ec0",
    "pubkey": "4cf5ff39fd37b61f1fc66365e5ab985f88075eff14644648f790e9b8d334813f",
    "created_at": 1740718609,
    "kind": 3
}
HERE D
event received; id: e9393cb231468af6638d8572d254334b93697ddc1cf7fb570b81ed2e3cefafd1; pubkey: 2a52dbc35240b2d407743ef53047b5815425dded3798b710a9b7cbb28c2a7175
{
    "id": "e9393cb231468af6638d8572d254334b93697ddc1cf7fb570b81ed2e3cefafd1",
    "pubkey": "2a52dbc35240b2d407743ef53047b5815425dded3798b710a9b7cbb28c2a7175",
    "created_at": 1740718605,
    "kind": 3
}
HERE D
event received; id: 25665fdc756ff634e9d31f9322e24fbe1d324907a0bef7ca3597339b2b39b4c2; pubkey: bea2169db1be756760cc9b711a674d511dc61a8cbd8814eb4029a2c4a6be1505
{
    "id": "25665fdc756ff634e9d31f9322e24fbe1d324907a0bef7ca3597339b2b39b4c2",
    "pubkey": "bea2169db1be756760cc9b711a674d511dc61a8cbd8814eb4029a2c4a6be1505",
    "created_at": 1740718575,
    "kind": 3
}
HERE D
event received; id: dcd2c53160491ecd248c4fbe6ab4a72760ea9bcf53791bbc3758a5ac9413c69d; pubkey: 8476d0dcdb53f1cc67efc8d33f40104394da2d33e61369a8a8ade288036977c6
{
    "id": "dcd2c53160491ecd248c4fbe6ab4a72760ea9bcf53791bbc3758a5ac9413c69d",
    "pubkey": "8476d0dcdb53f1cc67efc8d33f40104394da2d33e61369a8a8ade288036977c6",
    "created_at": 1740718569,
    "kind": 3
}
HERE D
event received; id: 6caa75c986ae5ae6561052dd402c958c6bf276bf4909d40c81c7e9d23b82d22f; pubkey: b5aabce9b530a9adcda916a3d030f2c398cfb720a4fb86eb9ae7dfbfb62cec60
{
    "id": "6caa75c986ae5ae6561052dd402c958c6bf276bf4909d40c81c7e9d23b82d22f",
    "pubkey": "b5aabce9b530a9adcda916a3d030f2c398cfb720a4fb86eb9ae7dfbfb62cec60",
    "created_at": 1740718551,
    "kind": 3
}
HERE D
event received; id: 30607cdc2fd721efcf0951a2c7031909d33a88bc49ac002c60d4929d5a9a7801; pubkey: 8318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed75
{
    "id": "30607cdc2fd721efcf0951a2c7031909d33a88bc49ac002c60d4929d5a9a7801",
    "pubkey": "8318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed75",
    "created_at": 1740718547,
    "kind": 3
}
HERE D
event received; id: 2c76b21833e1949fd6d2f8b7252b7df5c967fd387417d7091c0711802cb5eaa4; pubkey: bbac8936566f8317308f00a027b5965a1edbbd97791437cb0f95c656a96d963a
{
    "id": "2c76b21833e1949fd6d2f8b7252b7df5c967fd387417d7091c0711802cb5eaa4",
    "pubkey": "bbac8936566f8317308f00a027b5965a1edbbd97791437cb0f95c656a96d963a",
    "created_at": 1740718499,
    "kind": 3
}
HERE D
event received; id: ac17e85b3ce50dbae7a05f6ed2edd5189eff4d595d084966d1afe49ec86216a6; pubkey: 023b8fa899633ced8beea27eef854faf2ecab412a1dc2e98ee0d96a884314ec3
{
    "id": "ac17e85b3ce50dbae7a05f6ed2edd5189eff4d595d084966d1afe49ec86216a6",
    "pubkey": "023b8fa899633ced8beea27eef854faf2ecab412a1dc2e98ee0d96a884314ec3",
    "created_at": 1740718495,
    "kind": 10000
}
HERE D
event received; id: 92ce4697e20819d02556ee17b11cec072a708fe71783dcfff868e91ba35014a9; pubkey: 232793ce18826c75e3000926a0fbfb3a6abcb2d1306e5306d5ae7f5d710bacb1
{
    "id": "92ce4697e20819d02556ee17b11cec072a708fe71783dcfff868e91ba35014a9",
    "pubkey": "232793ce18826c75e3000926a0fbfb3a6abcb2d1306e5306d5ae7f5d710bacb1",
    "created_at": 1740718489,
    "kind": 5
}
HERE D
event received; id: d66bcc880817436bfdf8f29532e3677095ef7c37b918cd16e1f2753a85621df7; pubkey: 294fa9e6631bd404d39b3e4d5712e135e6f4d8b4c37e7f9dd7912c7af11e354a
{
    "id": "d66bcc880817436bfdf8f29532e3677095ef7c37b918cd16e1f2753a85621df7",
    "pubkey": "294fa9e6631bd404d39b3e4d5712e135e6f4d8b4c37e7f9dd7912c7af11e354a",
    "created_at": 1740718483,
    "kind": 3
}
HERE D
event received; id: 8ef8efc40488da060ff158cd3533fc5060021da7681eb0c7f8f5deeba7095408; pubkey: e2ccf7cf20403f3f2a4a55b328f0de3be38558a7d5f33632fdaaefc726c1c8eb
{
    "id": "8ef8efc40488da060ff158cd3533fc5060021da7681eb0c7f8f5deeba7095408",
    "pubkey": "e2ccf7cf20403f3f2a4a55b328f0de3be38558a7d5f33632fdaaefc726c1c8eb",
    "created_at": 1740718453,
    "kind": 3
}
HERE D
event received; id: 32c2544e139c7bcaf607e6e807c32bd7a9923f205755df35ff8f02c84bf3289a; pubkey: c4b7c953b769c6299a801fb2d194e8d7c797ceee885a576c50c3bae0cb9c9e1d
{
    "id": "32c2544e139c7bcaf607e6e807c32bd7a9923f205755df35ff8f02c84bf3289a",
    "pubkey": "c4b7c953b769c6299a801fb2d194e8d7c797ceee885a576c50c3bae0cb9c9e1d",
    "created_at": 1740718379,
    "kind": 3
}
HERE D
event received; id: c7d83bc3d28d2b02f1b498c336d553289388f9537478d6d8ce914c8e01c657e5; pubkey: a4f3687ae234d208d0f21d17573c2bb60f46ba4001ecaadd332924c2f3e13cf4
{
    "id": "c7d83bc3d28d2b02f1b498c336d553289388f9537478d6d8ce914c8e01c657e5",
    "pubkey": "a4f3687ae234d208d0f21d17573c2bb60f46ba4001ecaadd332924c2f3e13cf4",
    "created_at": 1740718325,
    "kind": 3
}
HERE D
event received; id: a4f7fae92a97c1180bbe1411b6491b735268c066f3e901dae8fd0fd1fdeb04c1; pubkey: ffbb1c5748f93fe48768b493b4117b6a4776de34a2ae78dfb373fe8794510560
{
    "id": "a4f7fae92a97c1180bbe1411b6491b735268c066f3e901dae8fd0fd1fdeb04c1",
    "pubkey": "ffbb1c5748f93fe48768b493b4117b6a4776de34a2ae78dfb373fe8794510560",
    "created_at": 1740718293,
    "kind": 3
}
HERE D
event received; id: c43e6ad3dbb25d86e69b0d5a395c7d20575af250e25b40c81af91470bc744b47; pubkey: ffa458285374138c8b9faea3444f229228a5f8c73e5236e6fb3de900f87a272a
{
    "id": "c43e6ad3dbb25d86e69b0d5a395c7d20575af250e25b40c81af91470bc744b47",
    "pubkey": "ffa458285374138c8b9faea3444f229228a5f8c73e5236e6fb3de900f87a272a",
    "created_at": 1740718272,
    "kind": 3
}
HERE D
event received; id: 08d72782809a2badafb44c1348eacd0d486eabe8eb8f0cdaf7ae06c8017864e2; pubkey: c465a1051794a507a55adebc0f044dc6e79d9b67a5e05aed4bf684afe088f976
{
    "id": "08d72782809a2badafb44c1348eacd0d486eabe8eb8f0cdaf7ae06c8017864e2",
    "pubkey": "c465a1051794a507a55adebc0f044dc6e79d9b67a5e05aed4bf684afe088f976",
    "created_at": 1740718264,
    "kind": 10000
}
HERE D
event received; id: 38c043f0ffffbc9f839cde52809a45f557202047091a48612d497ce5a7de786c; pubkey: 4613d320aa8802792a5a2f3349a2207e32f671e8c0400580ddc30eda6fddf62a
{
    "id": "38c043f0ffffbc9f839cde52809a45f557202047091a48612d497ce5a7de786c",
    "pubkey": "4613d320aa8802792a5a2f3349a2207e32f671e8c0400580ddc30eda6fddf62a",
    "created_at": 1740718259,
    "kind": 3
}
HERE D
event received; id: 0e1947b1ac9dc90cabc60655f2709502eb683ef168705bb6dfad169971c46693; pubkey: d2b4168467439f03eb7e0e30be9412d5a29d050aac77dc60de3dcb9f45f91b07
{
    "id": "0e1947b1ac9dc90cabc60655f2709502eb683ef168705bb6dfad169971c46693",
    "pubkey": "d2b4168467439f03eb7e0e30be9412d5a29d050aac77dc60de3dcb9f45f91b07",
    "created_at": 1740718252,
    "kind": 3
}
HERE D
event received; id: 4581a476d2245726b050f0496729677ff12a0027e147cac67c610bead18a38a4; pubkey: 71ca930ef0af2e997078b4f46bb473e9a750cd3c3593af1836cd9756ea31e967
{
    "id": "4581a476d2245726b050f0496729677ff12a0027e147cac67c610bead18a38a4",
    "pubkey": "71ca930ef0af2e997078b4f46bb473e9a750cd3c3593af1836cd9756ea31e967",
    "created_at": 1740718232,
    "kind": 3
}
HERE D
event received; id: d0ce8f89ee14938e5bb783984a52a10b3cebcc447e8a04bccbfd67e38c0ed3b2; pubkey: d574e6e65d5478c51263ede37ff05ce086921f9047b51aceddf1e02d13b10082
{
    "id": "d0ce8f89ee14938e5bb783984a52a10b3cebcc447e8a04bccbfd67e38c0ed3b2",
    "pubkey": "d574e6e65d5478c51263ede37ff05ce086921f9047b51aceddf1e02d13b10082",
    "created_at": 1740718209,
    "kind": 3
}
HERE D
event received; id: ec78f8868c40a782e59d700f75a6e3ec79e09aea1a898a7957501c721401e55b; pubkey: 1f3de76f945ccbc2dd9178fb2486fbfd8aaac5aab21c3a0c687a768ec7444c77
{
    "id": "ec78f8868c40a782e59d700f75a6e3ec79e09aea1a898a7957501c721401e55b",
    "pubkey": "1f3de76f945ccbc2dd9178fb2486fbfd8aaac5aab21c3a0c687a768ec7444c77",
    "created_at": 1740718198,
    "kind": 3
}
HERE D
event received; id: 18f8adc652303d12d93fea9fa55c1bd3020688215a1be684a12717ff0878d86a; pubkey: 0e82ab8bffbb4a955ae2eb98a00ee35b7affbb50844f9f569220a2136fad7024
{
    "id": "18f8adc652303d12d93fea9fa55c1bd3020688215a1be684a12717ff0878d86a",
    "pubkey": "0e82ab8bffbb4a955ae2eb98a00ee35b7affbb50844f9f569220a2136fad7024",
    "created_at": 1740718186,
    "kind": 3
}
HERE D
event received; id: 3d8c9142364865ff79099d5cf559abf83f316b98db93e0ad49327fe0ae756643; pubkey: a48a9f159e6a7dcbd24b3d837935765a1fe4040e45611985b34eb6bb35589363
{
    "id": "3d8c9142364865ff79099d5cf559abf83f316b98db93e0ad49327fe0ae756643",
    "pubkey": "a48a9f159e6a7dcbd24b3d837935765a1fe4040e45611985b34eb6bb35589363",
    "created_at": 1740718168,
    "kind": 3
}
HERE D
event received; id: 830def2453639a83801718e52dbbae05840976eb4a4f18f5decc26f70492d5c7; pubkey: b12b52096e9437a5b6cf12cda11c9b5af4a3b37d37c07cdecd6bb1422bf5b3c5
{
    "id": "830def2453639a83801718e52dbbae05840976eb4a4f18f5decc26f70492d5c7",
    "pubkey": "b12b52096e9437a5b6cf12cda11c9b5af4a3b37d37c07cdecd6bb1422bf5b3c5",
    "created_at": 1740718066,
    "kind": 3
}
HERE D
event received; id: 5868fbbb5281dcdca3a8ccb0a7214c984549f7507f0470f9c31d093495cec5c3; pubkey: 841b017d49f8211881a23acbd002bfb07c0d9c0d720c4a99c42669458bf0ee39
{
    "id": "5868fbbb5281dcdca3a8ccb0a7214c984549f7507f0470f9c31d093495cec5c3",
    "pubkey": "841b017d49f8211881a23acbd002bfb07c0d9c0d720c4a99c42669458bf0ee39",
    "created_at": 1740718066,
    "kind": 10000
}
HERE D
event received; id: c6d4741735737b85ed1f2feeb3f30191edb2dda44ff01289f171c423b79c6357; pubkey: 8ef6711ecffecd61f350d95b4e9ccdbe934ef387b3a73243c102e7a7e1d818cb
{
    "id": "c6d4741735737b85ed1f2feeb3f30191edb2dda44ff01289f171c423b79c6357",
    "pubkey": "8ef6711ecffecd61f350d95b4e9ccdbe934ef387b3a73243c102e7a7e1d818cb",
    "created_at": 1740718049,
    "kind": 3
}
HERE D
event received; id: 25f9aaa98255ebc95750a8bf55fdfe3f870239de1d971a38a5573297eafbb47e; pubkey: 16d76f262b689bb1a33faa2df954dbe7ac717937fad4765a05ddfae3dac92856
{
    "id": "25f9aaa98255ebc95750a8bf55fdfe3f870239de1d971a38a5573297eafbb47e",
    "pubkey": "16d76f262b689bb1a33faa2df954dbe7ac717937fad4765a05ddfae3dac92856",
    "created_at": 1740718044,
    "kind": 3
}
HERE D
event received; id: 008841dfaadb23a6f9cf463ffdf8795ff6816b6091443e2959d99cd11c2d64d7; pubkey: 1a276cbcddaca78181323c19c669e3b17dc1ef617faa194c0b925661570dc3ca
{
    "id": "008841dfaadb23a6f9cf463ffdf8795ff6816b6091443e2959d99cd11c2d64d7",
    "pubkey": "1a276cbcddaca78181323c19c669e3b17dc1ef617faa194c0b925661570dc3ca",
    "created_at": 1740718028,
    "kind": 3
}
HERE D
event received; id: 9443e88766d9c1d447d76e302cc683772cca12d67417e79f08aa5004a9d95d85; pubkey: c85e65a173c65f32e7dde10e38aaea00cbb549165920422c04223171e1cc3747
{
    "id": "9443e88766d9c1d447d76e302cc683772cca12d67417e79f08aa5004a9d95d85",
    "pubkey": "c85e65a173c65f32e7dde10e38aaea00cbb549165920422c04223171e1cc3747",
    "created_at": 1740718024,
    "kind": 3
}
HERE D
event received; id: d034e65989452c6edfce38eb43a64b230293197aaa6f2e43c828a41d89d64db8; pubkey: b7274d28e3e983bf720db4b4a12a31f5c7ef262320d05c25ec90489ac99628cb
{
    "id": "d034e65989452c6edfce38eb43a64b230293197aaa6f2e43c828a41d89d64db8",
    "pubkey": "b7274d28e3e983bf720db4b4a12a31f5c7ef262320d05c25ec90489ac99628cb",
    "created_at": 1740717998,
    "kind": 3
}
HERE D
event received; id: 8e8e291edf4bafd868e8c06ec800d63d9e50b1f0f1d5435f7d49be0e94a99e21; pubkey: c19621bcad2c9d502618dfaf25a6be0fde23bd730e51889dc883376c91cca6c4
{
    "id": "8e8e291edf4bafd868e8c06ec800d63d9e50b1f0f1d5435f7d49be0e94a99e21",
    "pubkey": "c19621bcad2c9d502618dfaf25a6be0fde23bd730e51889dc883376c91cca6c4",
    "created_at": 1740717965,
    "kind": 3
}
HERE D
event received; id: e6dcfe5beadc6679002627bcaec07101d63929690e57391d1fa0a5057c5af5a9; pubkey: 0143b2b0de297ed177df0cd3f576ce629e4437773952aa65582a7ca126b5ab13
{
    "id": "e6dcfe5beadc6679002627bcaec07101d63929690e57391d1fa0a5057c5af5a9",
    "pubkey": "0143b2b0de297ed177df0cd3f576ce629e4437773952aa65582a7ca126b5ab13",
    "created_at": 1740717933,
    "kind": 10000
}
HERE D
event received; id: 1541640fcca5b68ba06c96c7b11639051281c84707994e411f971c2097910706; pubkey: 6da8c1b9c6d1ceef78a31dbc7acbb9bd8ef35f319861acec25031b49049c08fb
{
    "id": "1541640fcca5b68ba06c96c7b11639051281c84707994e411f971c2097910706",
    "pubkey": "6da8c1b9c6d1ceef78a31dbc7acbb9bd8ef35f319861acec25031b49049c08fb",
    "created_at": 1740717903,
    "kind": 3
}
HERE D
event received; id: f09628cebbb6527c59af8d7f74327103a0d2c4df0a4f3da4ad908ac0fa45372b; pubkey: 57c99216eb119f4b2682c5820bab272ff302fae89b9e32edb538d0cf6663d1c7
{
    "id": "f09628cebbb6527c59af8d7f74327103a0d2c4df0a4f3da4ad908ac0fa45372b",
    "pubkey": "57c99216eb119f4b2682c5820bab272ff302fae89b9e32edb538d0cf6663d1c7",
    "created_at": 1740717871,
    "kind": 3
}
HERE D
event received; id: f824bc5f34a114fec4fcf09e5457743f41845ba6f9e15dda1c10a6a290245ee1; pubkey: e2260a7af33b3ba30074111c456793cef58d2ab43c5965bdbb655f90f97399ac
{
    "id": "f824bc5f34a114fec4fcf09e5457743f41845ba6f9e15dda1c10a6a290245ee1",
    "pubkey": "e2260a7af33b3ba30074111c456793cef58d2ab43c5965bdbb655f90f97399ac",
    "created_at": 1740717864,
    "kind": 10000
}
HERE D
event received; id: 3d716fcb286c11988f701c38d32a95e8b0c4baaa72111413103cb89d3ab1844f; pubkey: e2260a7af33b3ba30074111c456793cef58d2ab43c5965bdbb655f90f97399ac
{
    "id": "3d716fcb286c11988f701c38d32a95e8b0c4baaa72111413103cb89d3ab1844f",
    "pubkey": "e2260a7af33b3ba30074111c456793cef58d2ab43c5965bdbb655f90f97399ac",
    "created_at": 1740717861,
    "kind": 3
}
HERE D
event received; id: d6d31e11da803f8d906cdba0b41adea42c2c02b7b18b94f1922d867e09a3c375; pubkey: c5bf32be58438d4383592921e4a47ced6ef82f54f9084673caa707c720033216
{
    "id": "d6d31e11da803f8d906cdba0b41adea42c2c02b7b18b94f1922d867e09a3c375",
    "pubkey": "c5bf32be58438d4383592921e4a47ced6ef82f54f9084673caa707c720033216",
    "created_at": 1740717819,
    "kind": 3
}
HERE D
event received; id: c7d51d8be53f44a24639755371cee5cf6580b85822e276295f16e0029afbb967; pubkey: d4cf3423b64bfeb540b3e0ce22946191c033d38b5d32b37a8f0f3a4cf514cd23
{
    "id": "c7d51d8be53f44a24639755371cee5cf6580b85822e276295f16e0029afbb967",
    "pubkey": "d4cf3423b64bfeb540b3e0ce22946191c033d38b5d32b37a8f0f3a4cf514cd23",
    "created_at": 1740717779,
    "kind": 3
}
HERE D
event received; id: 58fa05175d67ab3f9a097d6b802ba69e4af92b69e061be0945a5762693fb52de; pubkey: 3436c6f3e5c10513a959fc7ed7bcfbdf3241788cfa517f892650f4829fe226a4
{
    "id": "58fa05175d67ab3f9a097d6b802ba69e4af92b69e061be0945a5762693fb52de",
    "pubkey": "3436c6f3e5c10513a959fc7ed7bcfbdf3241788cfa517f892650f4829fe226a4",
    "created_at": 1740717747,
    "kind": 3
}
HERE D
event received; id: e63f62d15b038f9bd32eb3330edfc6e6c68df56beec8133074c57a5e1d1581f7; pubkey: bf09a071f5310dae429626c6fb9939424a90381f52bce857a112f4d2baa6969f
{
    "id": "e63f62d15b038f9bd32eb3330edfc6e6c68df56beec8133074c57a5e1d1581f7",
    "pubkey": "bf09a071f5310dae429626c6fb9939424a90381f52bce857a112f4d2baa6969f",
    "created_at": 1740717740,
    "kind": 3
}
HERE D
event received; id: 39ede05de776253bee744a4d16e24261694122ea1cef90f72e30cd23017fecac; pubkey: ab7d91705025289d6149ad9ea1abc4ce4c49555df71904f29136c223785ea6f7
{
    "id": "39ede05de776253bee744a4d16e24261694122ea1cef90f72e30cd23017fecac",
    "pubkey": "ab7d91705025289d6149ad9ea1abc4ce4c49555df71904f29136c223785ea6f7",
    "created_at": 1740717720,
    "kind": 3
}
HERE D
event received; id: cd0f5e012d22d3025fb666dc0f07f48b5a4da873ee06d5a5f44da1ac1e2e1c10; pubkey: 5a61b7f7fb6474708f95cb2e3d8b2a6ae4b5a1aec65e81225777019b5162148f
{
    "id": "cd0f5e012d22d3025fb666dc0f07f48b5a4da873ee06d5a5f44da1ac1e2e1c10",
    "pubkey": "5a61b7f7fb6474708f95cb2e3d8b2a6ae4b5a1aec65e81225777019b5162148f",
    "created_at": 1740717689,
    "kind": 3
}
HERE D
event received; id: d0f0c1728378f4b4994b4076fd5a61fd1263606e90d148f88576549186606e1f; pubkey: a005de34035cc6a8fa62d6ea3f19f94e02a0bc6246064f3efc6485bf2130d592
{
    "id": "d0f0c1728378f4b4994b4076fd5a61fd1263606e90d148f88576549186606e1f",
    "pubkey": "a005de34035cc6a8fa62d6ea3f19f94e02a0bc6246064f3efc6485bf2130d592",
    "created_at": 1740717682,
    "kind": 3
}
HERE D
event received; id: 3c25c00e2e3838c72b9d89acd36639ea338e64ffd78606a8ce895b5edcb7f850; pubkey: be131ee180b6e548422c6004d3ce5fff78aa98b55bfca270a48fe3fdff10af7c
{
    "id": "3c25c00e2e3838c72b9d89acd36639ea338e64ffd78606a8ce895b5edcb7f850",
    "pubkey": "be131ee180b6e548422c6004d3ce5fff78aa98b55bfca270a48fe3fdff10af7c",
    "created_at": 1740717614,
    "kind": 3
}
HERE D
event received; id: f8a0c6f0076072be531eb10d3048053a2b060809f0ab897231544e79c2654479; pubkey: e7bf8dad360828f0289b7b4bea1a1bd28eb6d4d6522fa17f957e0dfb839ef3db
{
    "id": "f8a0c6f0076072be531eb10d3048053a2b060809f0ab897231544e79c2654479",
    "pubkey": "e7bf8dad360828f0289b7b4bea1a1bd28eb6d4d6522fa17f957e0dfb839ef3db",
    "created_at": 1740717611,
    "kind": 1
}
HERE D
event received; id: f9e7bf3da772e9568a677285bb6aeca6761e5b7514eb11adcf9bdf3678e1c4a6; pubkey: 5fb7c7d14a60f3be4b4392d9d13be44969f973f38763af36da4eb008e4ae6b05
{
    "id": "f9e7bf3da772e9568a677285bb6aeca6761e5b7514eb11adcf9bdf3678e1c4a6",
    "pubkey": "5fb7c7d14a60f3be4b4392d9d13be44969f973f38763af36da4eb008e4ae6b05",
    "created_at": 1740717522,
    "kind": 3
}
HERE D
event received; id: ae7d89eb55d3f53d2a28b9968b86170b989c4f4b3250266eb00ed05309c9133f; pubkey: 709bd2be88c1f020b36d0b1414fd92e7306e8b91612bef0b3e3e202189d608e0
{
    "id": "ae7d89eb55d3f53d2a28b9968b86170b989c4f4b3250266eb00ed05309c9133f",
    "pubkey": "709bd2be88c1f020b36d0b1414fd92e7306e8b91612bef0b3e3e202189d608e0",
    "created_at": 1740717501,
    "kind": 3
}
HERE D
event received; id: 362552500a7240eaa3fbc6f60bea4d534bc1760dcc91ad729abc63640f9aad9e; pubkey: 2695efd1710f21c6f90bb11c9465322295f6aeed413d6df46f1154b0d944a891
{
    "id": "362552500a7240eaa3fbc6f60bea4d534bc1760dcc91ad729abc63640f9aad9e",
    "pubkey": "2695efd1710f21c6f90bb11c9465322295f6aeed413d6df46f1154b0d944a891",
    "created_at": 1740717481,
    "kind": 3
}
HERE D
event received; id: 2f99d2541c6a9ad523e326c1004d06e1021e47453e4802d423d1e412469d390d; pubkey: 89ccea93718c9cfd21fc56f3037f6892b30467030ba7f1e085651f1bdf4e00b7
{
    "id": "2f99d2541c6a9ad523e326c1004d06e1021e47453e4802d423d1e412469d390d",
    "pubkey": "89ccea93718c9cfd21fc56f3037f6892b30467030ba7f1e085651f1bdf4e00b7",
    "created_at": 1740717472,
    "kind": 3
}
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
HERE D
event received; id: 204905b5fd8ae101e4933b401fe3b7f9588b3b01d96153d96f4784be3201c781; pubkey: 14187df202f8cdf816ee532b170a2b4b323025a981c3c4352e7e50b03730f98b
{
    "id": "204905b5fd8ae101e4933b401fe3b7f9588b3b01d96153d96f4784be3201c781",
    "pubkey": "14187df202f8cdf816ee532b170a2b4b323025a981c3c4352e7e50b03730f98b",
    "created_at": 1740717453,
    "kind": 3
}
HERE D
event received; id: 63d8ce38ce8c1c70399ce0b408f18b2283c8fb815210b38a0740ea7d0ce0613b; pubkey: d0844afe66ecc2a8e792dcd4e3f9be7416a04120f7d895609d95b2de50570076
{
    "id": "63d8ce38ce8c1c70399ce0b408f18b2283c8fb815210b38a0740ea7d0ce0613b",
    "pubkey": "d0844afe66ecc2a8e792dcd4e3f9be7416a04120f7d895609d95b2de50570076",
    "created_at": 1740717432,
    "kind": 3
}
HERE D
event received; id: d6adbe118233d77dc4d07972e06a8b2308a708ce0cf6fff3ccfd05403b21e02f; pubkey: 25327cb5bf1b9a26d752d7ea17923abca4a52a9490dc3c77ae741694d4aa9651
{
    "id": "d6adbe118233d77dc4d07972e06a8b2308a708ce0cf6fff3ccfd05403b21e02f",
    "pubkey": "25327cb5bf1b9a26d752d7ea17923abca4a52a9490dc3c77ae741694d4aa9651",
    "created_at": 1740717399,
    "kind": 10000
}
HERE D
event received; id: 6fff2cc040333f250a01392f6ca31d8c23067c136e3131972c66fa1ccbdf9f91; pubkey: 20d3acfbd542324fafd9f43c7ac985237ae6531515052af46c641f507bf6e7d8
{
    "id": "6fff2cc040333f250a01392f6ca31d8c23067c136e3131972c66fa1ccbdf9f91",
    "pubkey": "20d3acfbd542324fafd9f43c7ac985237ae6531515052af46c641f507bf6e7d8",
    "created_at": 1740717374,
    "kind": 10000
}
HERE D
event received; id: f68b4e4acf438e1ce83f8ba51a8e4cadd61c9c3c944189e290db9c2c4155795f; pubkey: 4d4ab737e2fbb5af0fd590b4b7e8c6fe76d3a02a9791ef7fdacf601f9e50fad8
{
    "id": "f68b4e4acf438e1ce83f8ba51a8e4cadd61c9c3c944189e290db9c2c4155795f",
    "pubkey": "4d4ab737e2fbb5af0fd590b4b7e8c6fe76d3a02a9791ef7fdacf601f9e50fad8",
    "created_at": 1740717326,
    "kind": 3
}
HERE D
event received; id: 937c06a71ce198b7318e88921603a0e3319c855ce05eedf271652d9fa950a099; pubkey: f03df3d4134230420cdf7acbb35f96a2542424246ab052ba24c6fec6a4d4f676
{
    "id": "937c06a71ce198b7318e88921603a0e3319c855ce05eedf271652d9fa950a099",
    "pubkey": "f03df3d4134230420cdf7acbb35f96a2542424246ab052ba24c6fec6a4d4f676",
    "created_at": 1740717311,
    "kind": 1
}
HERE D
event received; id: e92b27ccfa34b91c10931d53fd8915b8bf38bdd88d7298da02de2eb168b5ff3b; pubkey: 9c802e332c39cfac8b1e0819d0136332c25a2bd0737bfbef8f011fabae6e5b82
{
    "id": "e92b27ccfa34b91c10931d53fd8915b8bf38bdd88d7298da02de2eb168b5ff3b",
    "pubkey": "9c802e332c39cfac8b1e0819d0136332c25a2bd0737bfbef8f011fabae6e5b82",
    "created_at": 1740717295,
    "kind": 3
}
HERE D
event received; id: 69e7ed50fe5e738c8e97bab1c3574b3737d2ad162ea9e3e30e5e5fcba307140f; pubkey: a3c1a5ceda8b86b7cb64d5d6af58fc787ba400f2912b907969d27547f96545d0
{
    "id": "69e7ed50fe5e738c8e97bab1c3574b3737d2ad162ea9e3e30e5e5fcba307140f",
    "pubkey": "a3c1a5ceda8b86b7cb64d5d6af58fc787ba400f2912b907969d27547f96545d0",
    "created_at": 1740717218,
    "kind": 3
}
HERE D
event received; id: 7ef3ca00a3b179c76a4a92ef0e0f3cc434d3ec9ce55d7bea18479aa8f955e1b1; pubkey: 5b10cf36b014e41d675310d53c76ca4a41b48e8b67f3808f0f44b575ac043182
{
    "id": "7ef3ca00a3b179c76a4a92ef0e0f3cc434d3ec9ce55d7bea18479aa8f955e1b1",
    "pubkey": "5b10cf36b014e41d675310d53c76ca4a41b48e8b67f3808f0f44b575ac043182",
    "created_at": 1740717212,
    "kind": 3
}
HERE D
event received; id: 6a10f7f003113728966a480e71bec5a6ce350db8e046a7ead74ba928f62fe96d; pubkey: e4301813accf90324d3e5cd52b12a1fc68fb13e24e8245315869e52ee572c33a
{
    "id": "6a10f7f003113728966a480e71bec5a6ce350db8e046a7ead74ba928f62fe96d",
    "pubkey": "e4301813accf90324d3e5cd52b12a1fc68fb13e24e8245315869e52ee572c33a",
    "created_at": 1740717189,
    "kind": 3
}
HERE D
event received; id: 98251bb9dcb375c5fefa631497210680fb01f61807f42247bcef3af02aa26bd3; pubkey: f172bd03763b8a0d9c4a45bd9e8f0294016b2d8e5f1134068513d9c8606d8419
{
    "id": "98251bb9dcb375c5fefa631497210680fb01f61807f42247bcef3af02aa26bd3",
    "pubkey": "f172bd03763b8a0d9c4a45bd9e8f0294016b2d8e5f1134068513d9c8606d8419",
    "created_at": 1740717142,
    "kind": 3
}
HERE D
event received; id: c23505073665063974eb34adf6e23c690011c6bd72ab4a771529fe480855a5a9; pubkey: 912e6bdc5ef0d6583287b0d8c9bf2f396afaa565c558f06d39a8f963c63df60a
{
    "id": "c23505073665063974eb34adf6e23c690011c6bd72ab4a771529fe480855a5a9",
    "pubkey": "912e6bdc5ef0d6583287b0d8c9bf2f396afaa565c558f06d39a8f963c63df60a",
    "created_at": 1740716941,
    "kind": 10000
}
HERE D
event received; id: e8a1fec47619c2eb9b38e81062f6e1aff308c72ca25429bdcdf18f5ae0f41cbb; pubkey: 95d06bd3bcd5b9fe6562348080e54b67ee65a32338f4250134aa14ec362fc0eb
{
    "id": "e8a1fec47619c2eb9b38e81062f6e1aff308c72ca25429bdcdf18f5ae0f41cbb",
    "pubkey": "95d06bd3bcd5b9fe6562348080e54b67ee65a32338f4250134aa14ec362fc0eb",
    "created_at": 1740716912,
    "kind": 3
}
HERE D
event received; id: dc31eb372c3224d0957ef5c1ed8338c6736afe84a170159402cfee8dba948ea4; pubkey: af724179eeea6e95db11b2fc9a84577263ee5d37cdd7ce27ed1aa4b381bc3b4a
{
    "id": "dc31eb372c3224d0957ef5c1ed8338c6736afe84a170159402cfee8dba948ea4",
    "pubkey": "af724179eeea6e95db11b2fc9a84577263ee5d37cdd7ce27ed1aa4b381bc3b4a",
    "created_at": 1740716903,
    "kind": 5
}
HERE D
event received; id: 5de8e2ea8e40126ead1b7c5f5f51105286c9b8f52487840d5ab592e399f65850; pubkey: 8a57c4b4bc098b4c441423d2e3d2f789e88e97354b25665a26274681071c02e4
{
    "id": "5de8e2ea8e40126ead1b7c5f5f51105286c9b8f52487840d5ab592e399f65850",
    "pubkey": "8a57c4b4bc098b4c441423d2e3d2f789e88e97354b25665a26274681071c02e4",
    "created_at": 1740716902,
    "kind": 3
}
HERE D
event received; id: 8c54e188c315a652d6790fcf8119479e5432126c9ff06ccb4fe7b65b3db5b2ab; pubkey: 9793bd6ce99a4fbc651668de691841437d5a01b74e74e61f707d1c30948b557f
{
    "id": "8c54e188c315a652d6790fcf8119479e5432126c9ff06ccb4fe7b65b3db5b2ab",
    "pubkey": "9793bd6ce99a4fbc651668de691841437d5a01b74e74e61f707d1c30948b557f",
    "created_at": 1740716893,
    "kind": 3
}
HERE D
event received; id: 5ae82bc6eb88c8071492d52289943de2de383f3d63c61ec088dc3b2eac1d7d75; pubkey: 19bdc906118b0f15277cdd86ee107543e6e11fb6dcd966a16cc81707ec260c1d
{
    "id": "5ae82bc6eb88c8071492d52289943de2de383f3d63c61ec088dc3b2eac1d7d75",
    "pubkey": "19bdc906118b0f15277cdd86ee107543e6e11fb6dcd966a16cc81707ec260c1d",
    "created_at": 1740716887,
    "kind": 3
}
HERE D
event received; id: caaa94ca001c0167fff4312f7c6451bc7af4c91443b0222911cc7ff2c8dd1d90; pubkey: 5faf06e3624ed2ae63a4500bfd7c3e40d9efbb21d4b45ba3cdf4fa933025a73c
{
    "id": "caaa94ca001c0167fff4312f7c6451bc7af4c91443b0222911cc7ff2c8dd1d90",
    "pubkey": "5faf06e3624ed2ae63a4500bfd7c3e40d9efbb21d4b45ba3cdf4fa933025a73c",
    "created_at": 1740716862,
    "kind": 3
}
HERE D
event received; id: 1bf3191010e1bce51ca9a9ec388fccb2efe0368e0b8a127bcd8b274ea304bc49; pubkey: 73a9eff11195e9901cb936e1ba5a4ba0555103d068e72aa93e71e713186c3741
{
    "id": "1bf3191010e1bce51ca9a9ec388fccb2efe0368e0b8a127bcd8b274ea304bc49",
    "pubkey": "73a9eff11195e9901cb936e1ba5a4ba0555103d068e72aa93e71e713186c3741",
    "created_at": 1740716854,
    "kind": 3
}
HERE D
event received; id: ae13fd2f3dc0587b0e53a50fda42e2437a25a3b04327ac103b89a069c8ab128d; pubkey: 5c9a0f7f1ccfd1542bc08823f9f67ac4eb74b7e10253a8043a035ffa4ef1e92a
{
    "id": "ae13fd2f3dc0587b0e53a50fda42e2437a25a3b04327ac103b89a069c8ab128d",
    "pubkey": "5c9a0f7f1ccfd1542bc08823f9f67ac4eb74b7e10253a8043a035ffa4ef1e92a",
    "created_at": 1740716844,
    "kind": 3
}
HERE D
event received; id: 3a0199c65c8374aabd979454c2971be77fc93253294ccd8baa36fce9ab6f0b55; pubkey: ed913977130d9b1bf62fdc64a9c383e143a416cf8314df43ca24800b9d9b0c50
{
    "id": "3a0199c65c8374aabd979454c2971be77fc93253294ccd8baa36fce9ab6f0b55",
    "pubkey": "ed913977130d9b1bf62fdc64a9c383e143a416cf8314df43ca24800b9d9b0c50",
    "created_at": 1740716824,
    "kind": 3
}
HERE D
event received; id: d414e9272968b2c34a8f2fee8407cb41bdd437efc2594c4a6391eb74c8685b56; pubkey: a37118a4888e02d28e8767c08caaf73b49abdac391ad7ff18a304891e416dc33
{
    "id": "d414e9272968b2c34a8f2fee8407cb41bdd437efc2594c4a6391eb74c8685b56",
    "pubkey": "a37118a4888e02d28e8767c08caaf73b49abdac391ad7ff18a304891e416dc33",
    "created_at": 1740716792,
    "kind": 3
}
HERE D
event received; id: 71bb31181a9bca20f6edb50bb2ec46943a59c9288cc9574a77cb2a7c8d56f10b; pubkey: 788dd06f214dc4c7404becadc224d6b57ff7f5ff7864c7ebf22042afc04487e9
{
    "id": "71bb31181a9bca20f6edb50bb2ec46943a59c9288cc9574a77cb2a7c8d56f10b",
    "pubkey": "788dd06f214dc4c7404becadc224d6b57ff7f5ff7864c7ebf22042afc04487e9",
    "created_at": 1740716791,
    "kind": 3
}
HERE D
event received; id: 94c676c583bfb6c35da45706fde63d256cbf1a1f2f76483bf75e9f82a45fdc93; pubkey: 95746ae648dde21e11129e108111681b35242f4c82df1ab36a74dc7f5acd49e8
{
    "id": "94c676c583bfb6c35da45706fde63d256cbf1a1f2f76483bf75e9f82a45fdc93",
    "pubkey": "95746ae648dde21e11129e108111681b35242f4c82df1ab36a74dc7f5acd49e8",
    "created_at": 1740716722,
    "kind": 3
}
HERE D
event received; id: 242a9a874cde17e1834b5bc2aa48d2eae9cb6ac77680b08660db561218892e1a; pubkey: 4eb88310d6b4ed95c6d66a395b3d3cf559b85faec8f7691dafd405a92e055d6d
{
    "id": "242a9a874cde17e1834b5bc2aa48d2eae9cb6ac77680b08660db561218892e1a",
    "pubkey": "4eb88310d6b4ed95c6d66a395b3d3cf559b85faec8f7691dafd405a92e055d6d",
    "created_at": 1740716694,
    "kind": 3
}
HERE D
event received; id: f802504772b8606235d8ec3e4ec8cef780baa77ef470813932f07ccdde62bc60; pubkey: 967f8c4db1977ef999142d7b8b8703be123b5a82eee9dc094af74111ea095dae
{
    "id": "f802504772b8606235d8ec3e4ec8cef780baa77ef470813932f07ccdde62bc60",
    "pubkey": "967f8c4db1977ef999142d7b8b8703be123b5a82eee9dc094af74111ea095dae",
    "created_at": 1740716675,
    "kind": 5
}
HERE D
event received; id: 96b39a7deab69b21ffc324deaff205438710a91b4fb8073c52d9c7402b8cd1eb; pubkey: 232793ce18826c75e3000926a0fbfb3a6abcb2d1306e5306d5ae7f5d710bacb1
{
    "id": "96b39a7deab69b21ffc324deaff205438710a91b4fb8073c52d9c7402b8cd1eb",
    "pubkey": "232793ce18826c75e3000926a0fbfb3a6abcb2d1306e5306d5ae7f5d710bacb1",
    "created_at": 1740716675,
    "kind": 5
}
HERE D
event received; id: 4b984f28a6eb08cd1f706c88dc8f5d0450f5e33fd807344308843648d3a50ff1; pubkey: 8f3fbb5129dcb9194c02b67c1b41a3f60dd369663f53499b2b3c72a73c6fa9d0
{
    "id": "4b984f28a6eb08cd1f706c88dc8f5d0450f5e33fd807344308843648d3a50ff1",
    "pubkey": "8f3fbb5129dcb9194c02b67c1b41a3f60dd369663f53499b2b3c72a73c6fa9d0",
    "created_at": 1740716585,
    "kind": 3
}
HERE D
event received; id: 3bbd66a971989f3369155a512a199242633eadfd67eed826acdcb686d141168a; pubkey: 581089811e7e57dd613b88e537ae5e083db91200224878a68f85a0650fd33609
{
    "id": "3bbd66a971989f3369155a512a199242633eadfd67eed826acdcb686d141168a",
    "pubkey": "581089811e7e57dd613b88e537ae5e083db91200224878a68f85a0650fd33609",
    "created_at": 1740716565,
    "kind": 3
}
HERE D
event received; id: 3abf14e80dc32c5b4b16c00862f9bc5cd9c46c1b99cc5da707157a9f76ce3646; pubkey: 0695cb75dbb27d935a9b97e1a8b7ccd335076b0ced0ec88aa8d3a3bf129ee74f
{
    "id": "3abf14e80dc32c5b4b16c00862f9bc5cd9c46c1b99cc5da707157a9f76ce3646",
    "pubkey": "0695cb75dbb27d935a9b97e1a8b7ccd335076b0ced0ec88aa8d3a3bf129ee74f",
    "created_at": 1740716549,
    "kind": 3
}
HERE D
event received; id: 0e6044ecb2d0146f603b50466b965114d4125cf3ce84cb5212b85ec72fd2f246; pubkey: 7a7d7156a3c17adf9c69a0e6bbe48784959c635c81c0254260ec1c90c3897d93
{
    "id": "0e6044ecb2d0146f603b50466b965114d4125cf3ce84cb5212b85ec72fd2f246",
    "pubkey": "7a7d7156a3c17adf9c69a0e6bbe48784959c635c81c0254260ec1c90c3897d93",
    "created_at": 1740716424,
    "kind": 3
}
HERE D
event received; id: 419603e20fb789eb381eaef5bd8b1069c6af1ab536e172a20970da89c7ed15c2; pubkey: 8ae8f8e90016760f1fafb57d2ad5c8650797e63755c215d89271f26db32316da
{
    "id": "419603e20fb789eb381eaef5bd8b1069c6af1ab536e172a20970da89c7ed15c2",
    "pubkey": "8ae8f8e90016760f1fafb57d2ad5c8650797e63755c215d89271f26db32316da",
    "created_at": 1740716357,
    "kind": 3
}
HERE D
event received; id: e1b7e8909b3618336cb14e9d24cdc6128fe51fb99f3cbc0dfe3638804cdbd75f; pubkey: 9efd5d002c4a0112ef9f58e440bf1acaad5919c2744bfdc9d0505704bbec3073
{
    "id": "e1b7e8909b3618336cb14e9d24cdc6128fe51fb99f3cbc0dfe3638804cdbd75f",
    "pubkey": "9efd5d002c4a0112ef9f58e440bf1acaad5919c2744bfdc9d0505704bbec3073",
    "created_at": 1740716344,
    "kind": 3
}
HERE D
event received; id: 74af40e43a3e454fb6bb967d39fdcacec5311589b3d94cc79762a70f8dc29238; pubkey: 3dc04334f758bea5a82f896f7670579407b49b1a9f3294d3edeec6d1e9c25673
{
    "id": "74af40e43a3e454fb6bb967d39fdcacec5311589b3d94cc79762a70f8dc29238",
    "pubkey": "3dc04334f758bea5a82f896f7670579407b49b1a9f3294d3edeec6d1e9c25673",
    "created_at": 1740716271,
    "kind": 10000
}
HERE D
event received; id: ce75cbdc7ad81000771ae8d67ad782528e578d16820eade72d3f4086fe2ea9c4; pubkey: e625f0bd2f7a6aa0d8657218a8ac2f3c90039dab82d4f0185cabf4d4ad2de810
{
    "id": "ce75cbdc7ad81000771ae8d67ad782528e578d16820eade72d3f4086fe2ea9c4",
    "pubkey": "e625f0bd2f7a6aa0d8657218a8ac2f3c90039dab82d4f0185cabf4d4ad2de810",
    "created_at": 1740716259,
    "kind": 3
}
HERE D
event received; id: c0d5be5d2d3cf9a59479175431d197801344d71c871472ff2fa3b78f43d5a50b; pubkey: 56d4b3d6310fadb7294b7f041aab469c5ffc8991b1b1b331981b96a246f6ae65
{
    "id": "c0d5be5d2d3cf9a59479175431d197801344d71c871472ff2fa3b78f43d5a50b",
    "pubkey": "56d4b3d6310fadb7294b7f041aab469c5ffc8991b1b1b331981b96a246f6ae65",
    "created_at": 1740716182,
    "kind": 1984
}
HERE D
event received; id: 9a42d1941d64d9829170b82dc9406f05ddd0c8128dfdda8aa9c7639cdad27835; pubkey: 6a36c1a62cba047b1cdb93bef316c6617c79816e32b80166c471c30bdb77e526
{
    "id": "9a42d1941d64d9829170b82dc9406f05ddd0c8128dfdda8aa9c7639cdad27835",
    "pubkey": "6a36c1a62cba047b1cdb93bef316c6617c79816e32b80166c471c30bdb77e526",
    "created_at": 1740716156,
    "kind": 3
}
HERE D
event received; id: 8721aa606ac1616e26fd76ab8c746a2442337b650ad45e201ec691f482a659a2; pubkey: de47608bb82813752b98bb01008c08aabf4a4ab97eafb4c8763a9c421fa6e2c7
{
    "id": "8721aa606ac1616e26fd76ab8c746a2442337b650ad45e201ec691f482a659a2",
    "pubkey": "de47608bb82813752b98bb01008c08aabf4a4ab97eafb4c8763a9c421fa6e2c7",
    "created_at": 1740716063,
    "kind": 3
}
HERE D
event received; id: 2eccd884bfa93eced86bea9a19c395c6e8153692b425f922b4db9215bdcc4d41; pubkey: e61093809c30403b74392ec1853c1bc40b3364fd311fa2e5a919ef6c7e8bfde1
{
    "id": "2eccd884bfa93eced86bea9a19c395c6e8153692b425f922b4db9215bdcc4d41",
    "pubkey": "e61093809c30403b74392ec1853c1bc40b3364fd311fa2e5a919ef6c7e8bfde1",
    "created_at": 1740716035,
    "kind": 3
}
HERE D
event received; id: 4008e2f57b1b0e16759012945319943893285481bd22e554c7482a065769b967; pubkey: c23b872883073cc5295004405541c7b60ef4052b6e94fc6a849b0c5d55b2d0fb
{
    "id": "4008e2f57b1b0e16759012945319943893285481bd22e554c7482a065769b967",
    "pubkey": "c23b872883073cc5295004405541c7b60ef4052b6e94fc6a849b0c5d55b2d0fb",
    "created_at": 1740715987,
    "kind": 3
}
HERE D
event received; id: 22748184e44d0a1b73f5860d1f6966b8e95069629852eb650408f2461ceb927f; pubkey: df6b7f85124c25bddca124c719da72275678ec6a878e6f2b56175b29c1105572
{
    "id": "22748184e44d0a1b73f5860d1f6966b8e95069629852eb650408f2461ceb927f",
    "pubkey": "df6b7f85124c25bddca124c719da72275678ec6a878e6f2b56175b29c1105572",
    "created_at": 1740715941,
    "kind": 3
}
HERE D
event received; id: 3c9593cbd5f2d158e8ef467b8851c3f5a55aebc5978db17b193021f391a81ab1; pubkey: 9f6a93ba4933a8f0cf62acaa577f452acd7bd7310df36b143d792cc51c727991
{
    "id": "3c9593cbd5f2d158e8ef467b8851c3f5a55aebc5978db17b193021f391a81ab1",
    "pubkey": "9f6a93ba4933a8f0cf62acaa577f452acd7bd7310df36b143d792cc51c727991",
    "created_at": 1740715847,
    "kind": 3
}
HERE D
event received; id: 376fb46c4ab0a8962f5392bebee9cfffc5d62cfa36c27e9e6986d7ff71dbbcc6; pubkey: ee603283febc4c31b09903392408a2fff1daf69ac2244a5e4ad07eca3bc79dec
{
    "id": "376fb46c4ab0a8962f5392bebee9cfffc5d62cfa36c27e9e6986d7ff71dbbcc6",
    "pubkey": "ee603283febc4c31b09903392408a2fff1daf69ac2244a5e4ad07eca3bc79dec",
    "created_at": 1740715827,
    "kind": 3
}
HERE D
event received; id: 983bb240d2eac4b1505e025e8898691d48bdd54f078105e7964702bc6adb0a17; pubkey: 0f4011159c24a6a53eeea72e1c2e97e0425be8af15e7de397003dd65d9e8d278
{
    "id": "983bb240d2eac4b1505e025e8898691d48bdd54f078105e7964702bc6adb0a17",
    "pubkey": "0f4011159c24a6a53eeea72e1c2e97e0425be8af15e7de397003dd65d9e8d278",
    "created_at": 1740715763,
    "kind": 3
}
HERE D
event received; id: acf3f4cc11b0636584a330f8915a94c80bccd922cd91894eefe80305c17188eb; pubkey: 95b6bbe53d81a91e475fb8b8a478d193bfd0a551a5634833ead99eb962e1a799
{
    "id": "acf3f4cc11b0636584a330f8915a94c80bccd922cd91894eefe80305c17188eb",
    "pubkey": "95b6bbe53d81a91e475fb8b8a478d193bfd0a551a5634833ead99eb962e1a799",
    "created_at": 1740715760,
    "kind": 3
}
HERE D
event received; id: a3c581963db538369b04c0da80126ecc5289d125f675de45b7349082addeb91e; pubkey: 7c8489be0946cf10cefd55e12fa00f8de4fe683b702f2bf9eee747edef23df73
{
    "id": "a3c581963db538369b04c0da80126ecc5289d125f675de45b7349082addeb91e",
    "pubkey": "7c8489be0946cf10cefd55e12fa00f8de4fe683b702f2bf9eee747edef23df73",
    "created_at": 1740715699,
    "kind": 10000
}
HERE D
event received; id: 4128b3feeebd9755d823a89bdd99fb4c3434b8b19718cfe5c8c5fbe65b184289; pubkey: 95eb407d5fda06538f34a501472ff65afdd7dc1a37c1ecd9014b472d021b2bc5
{
    "id": "4128b3feeebd9755d823a89bdd99fb4c3434b8b19718cfe5c8c5fbe65b184289",
    "pubkey": "95eb407d5fda06538f34a501472ff65afdd7dc1a37c1ecd9014b472d021b2bc5",
    "created_at": 1740715658,
    "kind": 3
}
HERE D
event received; id: a21cd60d3cbb444c5d758f91c7af5121ad39d8de2c18ed157e281993a65be3de; pubkey: dcaa12e212bdddbe3086016153365acef1934e519836549c8f8e50bd756a25be
{
    "id": "a21cd60d3cbb444c5d758f91c7af5121ad39d8de2c18ed157e281993a65be3de",
    "pubkey": "dcaa12e212bdddbe3086016153365acef1934e519836549c8f8e50bd756a25be",
    "created_at": 1740715652,
    "kind": 3
}
HERE D
event received; id: da6dc721e8fffe3eb4d514996467a8875bf50949137ee2c9ebdd1f8ec8e73e07; pubkey: a862d41b1824f96ad02ebb1cf287422349bc74284c69e6edb068786aebe4e9da
{
    "id": "da6dc721e8fffe3eb4d514996467a8875bf50949137ee2c9ebdd1f8ec8e73e07",
    "pubkey": "a862d41b1824f96ad02ebb1cf287422349bc74284c69e6edb068786aebe4e9da",
    "created_at": 1740715591,
    "kind": 3
}
HERE D
event received; id: 00c94a5fa9a61643e1fc7a37b4063a5ef8c611a8eeaf5973dd5cfe33c4ae8a67; pubkey: 11674b2d321fc24239b02afdf966c32e36594a6282bd7f3d4bcd12438558ab51
{
    "id": "00c94a5fa9a61643e1fc7a37b4063a5ef8c611a8eeaf5973dd5cfe33c4ae8a67",
    "pubkey": "11674b2d321fc24239b02afdf966c32e36594a6282bd7f3d4bcd12438558ab51",
    "created_at": 1740715585,
    "kind": 3
}
HERE D
event received; id: 72c0fa569d5955edd95a2f9da2ac8593255fa505566db97f69b90326794436f8; pubkey: 26e9ab7f2c8d2ac37903af90be2a1aef6f2acbd699f4f259caac7ad33d2000c1
{
    "id": "72c0fa569d5955edd95a2f9da2ac8593255fa505566db97f69b90326794436f8",
    "pubkey": "26e9ab7f2c8d2ac37903af90be2a1aef6f2acbd699f4f259caac7ad33d2000c1",
    "created_at": 1740715576,
    "kind": 10000
}
HERE D
event received; id: 30ff8a4ca2c0d7075349ae5e8915f76277be1c3a51380ea135a63b2207cc499c; pubkey: 7c8489be0946cf10cefd55e12fa00f8de4fe683b702f2bf9eee747edef23df73
{
    "id": "30ff8a4ca2c0d7075349ae5e8915f76277be1c3a51380ea135a63b2207cc499c",
    "pubkey": "7c8489be0946cf10cefd55e12fa00f8de4fe683b702f2bf9eee747edef23df73",
    "created_at": 1740715540,
    "kind": 3
}
HERE D
event received; id: 67f6248d2dc4d6d5dc0e74531c4de9668a01984e9755fe3e0a8eec5cdcd8c002; pubkey: 378562cd20849dce3b74d85bc3e72c84f8ab59e94aa29650e1ad1b47a6fc6773
{
    "id": "67f6248d2dc4d6d5dc0e74531c4de9668a01984e9755fe3e0a8eec5cdcd8c002",
    "pubkey": "378562cd20849dce3b74d85bc3e72c84f8ab59e94aa29650e1ad1b47a6fc6773",
    "created_at": 1740715523,
    "kind": 10000
}
HERE D
event received; id: 4cbf1f830d53dd3f0d46df3c13aa5c7ae6924d1129df05dc70b4d2b0af86e226; pubkey: 00000578eaa84e1cea0d6f0be5cf3f7600bba8b3a2bcc38784fb1c932a239a7f
{
    "id": "4cbf1f830d53dd3f0d46df3c13aa5c7ae6924d1129df05dc70b4d2b0af86e226",
    "pubkey": "00000578eaa84e1cea0d6f0be5cf3f7600bba8b3a2bcc38784fb1c932a239a7f",
    "created_at": 1740715514,
    "kind": 3
}
HERE D
event received; id: ccfc1eee0c31107ae4568ebc8512b48ac3719741a412b9e58a3f2c2cec600390; pubkey: c6663abf7e5b08423314aebffc1103c1b7eff425a8fe805012569c64b85c77a4
{
    "id": "ccfc1eee0c31107ae4568ebc8512b48ac3719741a412b9e58a3f2c2cec600390",
    "pubkey": "c6663abf7e5b08423314aebffc1103c1b7eff425a8fe805012569c64b85c77a4",
    "created_at": 1740715460,
    "kind": 3
}
HERE D
event received; id: ef6beed44f3c708daeebe537048f4cb5ee55573e9e91b41ec589a5a67701eb33; pubkey: 67eef828df9caa98dfba065cf180ee0b808437aa5ebcad7f8703807644acad61
{
    "id": "ef6beed44f3c708daeebe537048f4cb5ee55573e9e91b41ec589a5a67701eb33",
    "pubkey": "67eef828df9caa98dfba065cf180ee0b808437aa5ebcad7f8703807644acad61",
    "created_at": 1740715428,
    "kind": 3
}
HERE D
event received; id: e7c78891c7a7421406710eae85f0612b430976e7943568ce00e60237e64ad0dc; pubkey: ff51b667648200524ae20f85ae64e84f719092878d8513b61bb04c90b5bbd01b
{
    "id": "e7c78891c7a7421406710eae85f0612b430976e7943568ce00e60237e64ad0dc",
    "pubkey": "ff51b667648200524ae20f85ae64e84f719092878d8513b61bb04c90b5bbd01b",
    "created_at": 1740715343,
    "kind": 3
}
HERE D
event received; id: 11968e4971117dd02711d6d8fb3d54a4a520fb6d7f5a515c21410e6b43bc250a; pubkey: 1e95c007310ee7d3347b20ca71415532ca88ea21c963788c215560ac7a03b629
{
    "id": "11968e4971117dd02711d6d8fb3d54a4a520fb6d7f5a515c21410e6b43bc250a",
    "pubkey": "1e95c007310ee7d3347b20ca71415532ca88ea21c963788c215560ac7a03b629",
    "created_at": 1740715329,
    "kind": 3
}
HERE D
event received; id: 8390867742b608ff327946acfe2bae00a570a60a451a7b63fa569f71784d3a20; pubkey: 00000578eaa84e1cea0d6f0be5cf3f7600bba8b3a2bcc38784fb1c932a239a7f
{
    "id": "8390867742b608ff327946acfe2bae00a570a60a451a7b63fa569f71784d3a20",
    "pubkey": "00000578eaa84e1cea0d6f0be5cf3f7600bba8b3a2bcc38784fb1c932a239a7f",
    "created_at": 1740715287,
    "kind": 10000
}
HERE D
event received; id: 76e94a119c96727f5a0864f801348772c806699c2e271fcaddf95d7f185c2716; pubkey: 00000578eaa84e1cea0d6f0be5cf3f7600bba8b3a2bcc38784fb1c932a239a7f
{
    "id": "76e94a119c96727f5a0864f801348772c806699c2e271fcaddf95d7f185c2716",
    "pubkey": "00000578eaa84e1cea0d6f0be5cf3f7600bba8b3a2bcc38784fb1c932a239a7f",
    "created_at": 1740715287,
    "kind": 1984
}
HERE D
event received; id: de4689d1cbe2cd178f3c0bf28ea53790add1e59e482a33db9a037f93a34bbf93; pubkey: 5975800a62bbc5b00284a0f6522420bb65052248909c214e9dfc08543d9a6b7d
{
    "id": "de4689d1cbe2cd178f3c0bf28ea53790add1e59e482a33db9a037f93a34bbf93",
    "pubkey": "5975800a62bbc5b00284a0f6522420bb65052248909c214e9dfc08543d9a6b7d",
    "created_at": 1740715271,
    "kind": 3
}
HERE D
event received; id: 651f6efc232bebcf9e28b59e6b5534707fea48c8e0bc485cf6d6443506870637; pubkey: 41ed70e7b2b70c6ebf00ec2547c811bf1bee9ffd5a6ff94469b48e48e5bea524
{
    "id": "651f6efc232bebcf9e28b59e6b5534707fea48c8e0bc485cf6d6443506870637",
    "pubkey": "41ed70e7b2b70c6ebf00ec2547c811bf1bee9ffd5a6ff94469b48e48e5bea524",
    "created_at": 1740715255,
    "kind": 3
}
HERE D
event received; id: 39d57ec0e319998522a20408c01f80f6752d22ca42eeaf5ce428564ab503980e; pubkey: 805e3c98b42a2175a081666b4e077bab32136ea6cf4b9976a952569917d9e329
{
    "id": "39d57ec0e319998522a20408c01f80f6752d22ca42eeaf5ce428564ab503980e",
    "pubkey": "805e3c98b42a2175a081666b4e077bab32136ea6cf4b9976a952569917d9e329",
    "created_at": 1740715255,
    "kind": 3
}
HERE D
event received; id: 7c0471fb43e8ce8acd1843163b1167cec137c1a6f6d5f489d5fce0c57be7221d; pubkey: 1d5cfb4ff0ea67387aadd7b3059cf1473fee113642e9c1d6f308404219d9a2ae
{
    "id": "7c0471fb43e8ce8acd1843163b1167cec137c1a6f6d5f489d5fce0c57be7221d",
    "pubkey": "1d5cfb4ff0ea67387aadd7b3059cf1473fee113642e9c1d6f308404219d9a2ae",
    "created_at": 1740715187,
    "kind": 3
}
HERE D
event received; id: 8932735b2359bf3398598e42fa9addd596ab572625baf36c76db847d5b2c261b; pubkey: f901616f00a63f4f9c7881d4871a03df3d4cee7291eafd7adcbeea7c95c58e27
{
    "id": "8932735b2359bf3398598e42fa9addd596ab572625baf36c76db847d5b2c261b",
    "pubkey": "f901616f00a63f4f9c7881d4871a03df3d4cee7291eafd7adcbeea7c95c58e27",
    "created_at": 1740715156,
    "kind": 3
}
HERE D
event received; id: d0577444580a27bb9d70dea63d255dcdef8036cbbc8c3b3edaefe51a5aae2ae9; pubkey: 6172cd466f0a89976a3e8e7671bd8da1fc31f0e6c96907e6287484f7c87f4a72
{
    "id": "d0577444580a27bb9d70dea63d255dcdef8036cbbc8c3b3edaefe51a5aae2ae9",
    "pubkey": "6172cd466f0a89976a3e8e7671bd8da1fc31f0e6c96907e6287484f7c87f4a72",
    "created_at": 1740715154,
    "kind": 10000
}
HERE D
event received; id: b2e6435b702a84174c63ffd13441b55093b808f458621470f017ced55f42c7d3; pubkey: 671a0bd1ec9c8a6efd356aab91448e86a04b2cdb336a1f760eae481884649238
{
    "id": "b2e6435b702a84174c63ffd13441b55093b808f458621470f017ced55f42c7d3",
    "pubkey": "671a0bd1ec9c8a6efd356aab91448e86a04b2cdb336a1f760eae481884649238",
    "created_at": 1740715130,
    "kind": 3
}
HERE D
event received; id: 376dc5fffdaeb683058246aa63b9c3c65cd9821fe1cb72db568b005be1db1748; pubkey: df739a4c91de28ab6e30fd5f4ca9af3f78166fe54832a6b81a782cbfc0890c2f
{
    "id": "376dc5fffdaeb683058246aa63b9c3c65cd9821fe1cb72db568b005be1db1748",
    "pubkey": "df739a4c91de28ab6e30fd5f4ca9af3f78166fe54832a6b81a782cbfc0890c2f",
    "created_at": 1740715129,
    "kind": 3
}
HERE D
event received; id: bc145bc58628304235bef52dfa3a8456d49bb7daf924fb8874a85ae3663c8ff0; pubkey: ae6d1a4843298f6134e912411e19d5eca133988fa78f228150c6c136ae1d7309
{
    "id": "bc145bc58628304235bef52dfa3a8456d49bb7daf924fb8874a85ae3663c8ff0",
    "pubkey": "ae6d1a4843298f6134e912411e19d5eca133988fa78f228150c6c136ae1d7309",
    "created_at": 1740715123,
    "kind": 3
}
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
HERE D
event received; id: 34e64b6e955931646a1716647307e0631e358cea17cc2a2febf3a10364f6c8c8; pubkey: 378562cd20849dce3b74d85bc3e72c84f8ab59e94aa29650e1ad1b47a6fc6773
{
    "id": "34e64b6e955931646a1716647307e0631e358cea17cc2a2febf3a10364f6c8c8",
    "pubkey": "378562cd20849dce3b74d85bc3e72c84f8ab59e94aa29650e1ad1b47a6fc6773",
    "created_at": 1740715099,
    "kind": 3
}
HERE D
event received; id: 377b5e52ddba4d554aa838b79bd56423b613438b82854ca139a2974f7cd66719; pubkey: 9c88d3dd973dfd3876e1182fc07943ce1adcddb7b2bc993d774e254fe299b053
{
    "id": "377b5e52ddba4d554aa838b79bd56423b613438b82854ca139a2974f7cd66719",
    "pubkey": "9c88d3dd973dfd3876e1182fc07943ce1adcddb7b2bc993d774e254fe299b053",
    "created_at": 1740715078,
    "kind": 3
}
HERE D
event received; id: a8f6741057986e3d2c6d62893d8661c77675b6f0a20f7b1041dad8a46bb2929e; pubkey: 2755b492fbb0ffa5c327819a4699c7001341b9f7826a8367273549f1a58a4831
{
    "id": "a8f6741057986e3d2c6d62893d8661c77675b6f0a20f7b1041dad8a46bb2929e",
    "pubkey": "2755b492fbb0ffa5c327819a4699c7001341b9f7826a8367273549f1a58a4831",
    "created_at": 1740715078,
    "kind": 3
}
HERE D
event received; id: eff5d03c039dbd7664247521f9b6b8dbf28938475fe2328a6ca7f911ebe4f9f5; pubkey: 085900b71253772a15c266c3f6b53c9b85cb1ff502884597f0b165c7a6d044d0
{
    "id": "eff5d03c039dbd7664247521f9b6b8dbf28938475fe2328a6ca7f911ebe4f9f5",
    "pubkey": "085900b71253772a15c266c3f6b53c9b85cb1ff502884597f0b165c7a6d044d0",
    "created_at": 1740715061,
    "kind": 10000
}
HERE D
event received; id: 66d8d9a6034984a7067b71698688edc53e2a729fb3e854dcd9ad5249188f43f9; pubkey: 50809a53fef95904513a840d4082a92b45cd5f1b9e436d9d2b92a89ce091f164
{
    "id": "66d8d9a6034984a7067b71698688edc53e2a729fb3e854dcd9ad5249188f43f9",
    "pubkey": "50809a53fef95904513a840d4082a92b45cd5f1b9e436d9d2b92a89ce091f164",
    "created_at": 1740715036,
    "kind": 3
}
HERE D
event received; id: fec92e1b604dfb996ef7f6be9d0ad451a542a6fe5afecee90d475c09e73b2b53; pubkey: 3dc04334f758bea5a82f896f7670579407b49b1a9f3294d3edeec6d1e9c25673
{
    "id": "fec92e1b604dfb996ef7f6be9d0ad451a542a6fe5afecee90d475c09e73b2b53",
    "pubkey": "3dc04334f758bea5a82f896f7670579407b49b1a9f3294d3edeec6d1e9c25673",
    "created_at": 1740715029,
    "kind": 3
}
HERE D
event received; id: aa600d8cab8993c73d8dbaca84f29a85fcbd4b267519f6205f323dd7a5d9dda2; pubkey: b21121518221b0f031bd41f010aeef1e4015c1aad5d8b2539d2ddcd60c7f8666
{
    "id": "aa600d8cab8993c73d8dbaca84f29a85fcbd4b267519f6205f323dd7a5d9dda2",
    "pubkey": "b21121518221b0f031bd41f010aeef1e4015c1aad5d8b2539d2ddcd60c7f8666",
    "created_at": 1740715023,
    "kind": 3
}
HERE D
event received; id: 18086b2015e6e21b04fb6c9b9ec64c48185b8e4da438d0eafd72626d48eaa07d; pubkey: 6227dd21ff7b18f59c6f7c2948a9b25023be738160859f045e8ada2de3274303
{
    "id": "18086b2015e6e21b04fb6c9b9ec64c48185b8e4da438d0eafd72626d48eaa07d",
    "pubkey": "6227dd21ff7b18f59c6f7c2948a9b25023be738160859f045e8ada2de3274303",
    "created_at": 1740714993,
    "kind": 3
}
HERE D
event received; id: c787e23291d3065a70169ebe05a376a2be74e31dd5a62ba6f77a88c2f43d2965; pubkey: bf288b07f4ae0d4367d778adcd360f1117797421eea50277cbff4dad1b30cff6
{
    "id": "c787e23291d3065a70169ebe05a376a2be74e31dd5a62ba6f77a88c2f43d2965",
    "pubkey": "bf288b07f4ae0d4367d778adcd360f1117797421eea50277cbff4dad1b30cff6",
    "created_at": 1740714956,
    "kind": 3
}
HERE D
event received; id: 5ca194bb8a0bfea030cc8d478b81d8e476229b36b6fa98a6dd93bf127c9f6e30; pubkey: acfffe68b49925fefe543e71ea7c096430d2221491579fccfa877c9ddd2e4cc4
{
    "id": "5ca194bb8a0bfea030cc8d478b81d8e476229b36b6fa98a6dd93bf127c9f6e30",
    "pubkey": "acfffe68b49925fefe543e71ea7c096430d2221491579fccfa877c9ddd2e4cc4",
    "created_at": 1740714933,
    "kind": 10000
}
HERE D
event received; id: 09568f2eaa85049ad398ca095ba82e9a7b78af65066cffebdfcec2f26a4cf0b3; pubkey: a0f0ad355cff6618b58f2af840a2d78ff91abf08b91195dc00d7b3ba2a9c4cff
{
    "id": "09568f2eaa85049ad398ca095ba82e9a7b78af65066cffebdfcec2f26a4cf0b3",
    "pubkey": "a0f0ad355cff6618b58f2af840a2d78ff91abf08b91195dc00d7b3ba2a9c4cff",
    "created_at": 1740714926,
    "kind": 3
}
HERE D
event received; id: 1c37a4befbc4c5d6bdb27e12649ab11e0885b6d48247f3e5034add8e0cfe5004; pubkey: f901616f00a63f4f9c7881d4871a03df3d4cee7291eafd7adcbeea7c95c58e27
{
    "id": "1c37a4befbc4c5d6bdb27e12649ab11e0885b6d48247f3e5034add8e0cfe5004",
    "pubkey": "f901616f00a63f4f9c7881d4871a03df3d4cee7291eafd7adcbeea7c95c58e27",
    "created_at": 1740714924,
    "kind": 10000
}
HERE D
event received; id: 0f1dc9aeda57081bb6aa452c1837fccdff4155fcda56df1008c620215e186598; pubkey: 9322bd922f20c6fcd9e913454727b3bbc2d096be4811971055a826dda3d4cb0b
{
    "id": "0f1dc9aeda57081bb6aa452c1837fccdff4155fcda56df1008c620215e186598",
    "pubkey": "9322bd922f20c6fcd9e913454727b3bbc2d096be4811971055a826dda3d4cb0b",
    "created_at": 1740714866,
    "kind": 3
}
HERE D
event received; id: 5101fc5c486d35f5ff4825a677192f0ed95d96b5e0961718638c67eba3e6838c; pubkey: ac72b2da3a6d76e282c205b8c1e948954b8f581632a4e162b72f380c29482dc8
{
    "id": "5101fc5c486d35f5ff4825a677192f0ed95d96b5e0961718638c67eba3e6838c",
    "pubkey": "ac72b2da3a6d76e282c205b8c1e948954b8f581632a4e162b72f380c29482dc8",
    "created_at": 1740714861,
    "kind": 3
}
HERE D
event received; id: f62db651b9070c615c2028cf7904975fb5a85fb858615c4a7cea39bde82716cc; pubkey: 647d6814fdaf84ae92653788121058bbfd16ed95becb598235310823b63c3001
{
    "id": "f62db651b9070c615c2028cf7904975fb5a85fb858615c4a7cea39bde82716cc",
    "pubkey": "647d6814fdaf84ae92653788121058bbfd16ed95becb598235310823b63c3001",
    "created_at": 1740714859,
    "kind": 10000
}
HERE D
event received; id: c17a0ef09cc9059658136618fd3d70818810fd4765f58351c61dcc62451acc31; pubkey: 21077167bb124480e19d4bc0a5dc9c0d12d666be5daac823698a351637fe9aee
{
    "id": "c17a0ef09cc9059658136618fd3d70818810fd4765f58351c61dcc62451acc31",
    "pubkey": "21077167bb124480e19d4bc0a5dc9c0d12d666be5daac823698a351637fe9aee",
    "created_at": 1740714836,
    "kind": 3
}
HERE D
event received; id: 1dbf308bce4ec3497c7983112efe0e44da67054c9fe9a1895d5dd8456d00295a; pubkey: 2b3f55d55583c9dbfcc978ed77120577522cd77e481a2017d5247b4ce78f8b3e
{
    "id": "1dbf308bce4ec3497c7983112efe0e44da67054c9fe9a1895d5dd8456d00295a",
    "pubkey": "2b3f55d55583c9dbfcc978ed77120577522cd77e481a2017d5247b4ce78f8b3e",
    "created_at": 1740714745,
    "kind": 3
}
HERE D
event received; id: 6c45299b646375a45989dce428e853f998c12ee5f6a33b87ac8dd4c86ebc08e6; pubkey: 2dfbe5cb955e4018b76e6542a3b8782144dd5f5735914db9921fd24c3b3d106d
{
    "id": "6c45299b646375a45989dce428e853f998c12ee5f6a33b87ac8dd4c86ebc08e6",
    "pubkey": "2dfbe5cb955e4018b76e6542a3b8782144dd5f5735914db9921fd24c3b3d106d",
    "created_at": 1740714730,
    "kind": 3
}
HERE D
event received; id: db8a6a5fc7e13d1b058162329bb23cf1e9674e196cdef4041411042d738fc528; pubkey: 7eb44b7c585b871a8de1bbee45e412c6105017cb27befbaf673ca607d8d5552f
{
    "id": "db8a6a5fc7e13d1b058162329bb23cf1e9674e196cdef4041411042d738fc528",
    "pubkey": "7eb44b7c585b871a8de1bbee45e412c6105017cb27befbaf673ca607d8d5552f",
    "created_at": 1740714728,
    "kind": 3
}
HERE D
event received; id: 49e935c7ff849679639d91506f3817e74fe52cfafb25e4e46a310c88bd450cb3; pubkey: 7f51be298ecb4a73c9a681f197042ea49967996cb958d2238b5f2fc470b17a5b
{
    "id": "49e935c7ff849679639d91506f3817e74fe52cfafb25e4e46a310c88bd450cb3",
    "pubkey": "7f51be298ecb4a73c9a681f197042ea49967996cb958d2238b5f2fc470b17a5b",
    "created_at": 1740714671,
    "kind": 3
}
HERE D
event received; id: 00734dbdd21df0422a07f92e936b913882dd9317bdb011be96e0c80d3a21d7b2; pubkey: dfb037c0b0038dfac7920d5d70e1b4a99c320199d882d301fc8736ba9df68b11
{
    "id": "00734dbdd21df0422a07f92e936b913882dd9317bdb011be96e0c80d3a21d7b2",
    "pubkey": "dfb037c0b0038dfac7920d5d70e1b4a99c320199d882d301fc8736ba9df68b11",
    "created_at": 1740714648,
    "kind": 3
}
HERE D
event received; id: e97f74121c63f08192efb51ff5a3df947bbd94049829aea17598ead0489e78f0; pubkey: 91cee1c67c150ea3a001ce0bc7132a142653ec9e51506a0b00ab33e8045dbe47
{
    "id": "e97f74121c63f08192efb51ff5a3df947bbd94049829aea17598ead0489e78f0",
    "pubkey": "91cee1c67c150ea3a001ce0bc7132a142653ec9e51506a0b00ab33e8045dbe47",
    "created_at": 1740714638,
    "kind": 3
}
HERE D
event received; id: 85dd852314705ebf6ee279c646904ade25357c6563ab86d5de1bc77362acec00; pubkey: 9967f37546bc1f171df033f344a50cf143695d87011fd9a61365cab404f9a5e1
{
    "id": "85dd852314705ebf6ee279c646904ade25357c6563ab86d5de1bc77362acec00",
    "pubkey": "9967f37546bc1f171df033f344a50cf143695d87011fd9a61365cab404f9a5e1",
    "created_at": 1740714631,
    "kind": 3
}
HERE D
event received; id: 8e06eb73fd9752a28dcb048c9aaf438fdfca1aa0b00cc6afa6df19092a3f1fe8; pubkey: 0bfa235262029bdd325fb26836679850de294657b8c5ab32ffdc60df71f4a42b
{
    "id": "8e06eb73fd9752a28dcb048c9aaf438fdfca1aa0b00cc6afa6df19092a3f1fe8",
    "pubkey": "0bfa235262029bdd325fb26836679850de294657b8c5ab32ffdc60df71f4a42b",
    "created_at": 1740714613,
    "kind": 3
}
HERE D
event received; id: 45db126c1e26dafa919cab4d0ff1e667daad55b8fdf924b273418885b8c61b40; pubkey: 647d6814fdaf84ae92653788121058bbfd16ed95becb598235310823b63c3001
{
    "id": "45db126c1e26dafa919cab4d0ff1e667daad55b8fdf924b273418885b8c61b40",
    "pubkey": "647d6814fdaf84ae92653788121058bbfd16ed95becb598235310823b63c3001",
    "created_at": 1740714598,
    "kind": 3
}
HERE D
event received; id: d9f339c0adeb4e29ed53acc01d7b7b9b3bf9f99913adb5e1b527a2f653031c1b; pubkey: 2bfec85a63b122da047e57b18beeb678d80099fe3d9123d5ee15eb73af932171
{
    "id": "d9f339c0adeb4e29ed53acc01d7b7b9b3bf9f99913adb5e1b527a2f653031c1b",
    "pubkey": "2bfec85a63b122da047e57b18beeb678d80099fe3d9123d5ee15eb73af932171",
    "created_at": 1740714526,
    "kind": 3
}
HERE D
event received; id: 9fa11ba8d24eda2384add11d04b032d2cb4d30ab977c86e5f9a72e857178b55e; pubkey: de45f688d366bf0137ccfdf4fb3f0041b1df41e7353b6233f32a6e2a1e4448a1
{
    "id": "9fa11ba8d24eda2384add11d04b032d2cb4d30ab977c86e5f9a72e857178b55e",
    "pubkey": "de45f688d366bf0137ccfdf4fb3f0041b1df41e7353b6233f32a6e2a1e4448a1",
    "created_at": 1740714517,
    "kind": 3
}
HERE D
event received; id: cf7cf8fa506f74c6719afe704aac3386ca54af8e5aa6a70de43adb5a7b44b6d1; pubkey: 7af87943443fc3b64f87b3190ed8e9efba5b8cdc44f2cd09cfd915e337aac249
{
    "id": "cf7cf8fa506f74c6719afe704aac3386ca54af8e5aa6a70de43adb5a7b44b6d1",
    "pubkey": "7af87943443fc3b64f87b3190ed8e9efba5b8cdc44f2cd09cfd915e337aac249",
    "created_at": 1740714492,
    "kind": 3
}
HERE D
event received; id: ada5e46207ad945f0ef8d3a808d5469dc6c26ca8330c84971d805bb668fb9b7c; pubkey: 206e580157eae3395cdf954ff30501e16902074656a4b9493f36f896167496b2
{
    "id": "ada5e46207ad945f0ef8d3a808d5469dc6c26ca8330c84971d805bb668fb9b7c",
    "pubkey": "206e580157eae3395cdf954ff30501e16902074656a4b9493f36f896167496b2",
    "created_at": 1740714436,
    "kind": 3
}
HERE D
event received; id: 7575e4c79c5b4f29de92043cfe8ae2377743e0aaf254a9d6cd0dd7fed8359ec0; pubkey: 32481673e905f525a25fe43d93ccde86b2c3b50a257bed5a8084f113fdcbe81b
{
    "id": "7575e4c79c5b4f29de92043cfe8ae2377743e0aaf254a9d6cd0dd7fed8359ec0",
    "pubkey": "32481673e905f525a25fe43d93ccde86b2c3b50a257bed5a8084f113fdcbe81b",
    "created_at": 1740714423,
    "kind": 3
}
HERE D
event received; id: c9afc6a74a37304e8434dcdce77036efe2dd1e9af10e139111bb9c9d35616bc1; pubkey: b465a6a09bab1ef8705a1a60ff669f47d0f9379e922d9cc0e5c441fafd70a1a8
{
    "id": "c9afc6a74a37304e8434dcdce77036efe2dd1e9af10e139111bb9c9d35616bc1",
    "pubkey": "b465a6a09bab1ef8705a1a60ff669f47d0f9379e922d9cc0e5c441fafd70a1a8",
    "created_at": 1740714422,
    "kind": 3
}
HERE D
event received; id: b8fac38f28ec08db59c2cb14b14404e2ff3624d1ec0bbc2342d47991b0de3130; pubkey: 14def6dc35a8145127ae2355d84aa2f790ddb3f7241df99d75c4a0216061ebcb
{
    "id": "b8fac38f28ec08db59c2cb14b14404e2ff3624d1ec0bbc2342d47991b0de3130",
    "pubkey": "14def6dc35a8145127ae2355d84aa2f790ddb3f7241df99d75c4a0216061ebcb",
    "created_at": 1740714379,
    "kind": 3
}
HERE D
event received; id: 6e18efbb5e24000ec6ce99601342c6c7767c22964c892b7462613e6cfa32577e; pubkey: 6172cd466f0a89976a3e8e7671bd8da1fc31f0e6c96907e6287484f7c87f4a72
{
    "id": "6e18efbb5e24000ec6ce99601342c6c7767c22964c892b7462613e6cfa32577e",
    "pubkey": "6172cd466f0a89976a3e8e7671bd8da1fc31f0e6c96907e6287484f7c87f4a72",
    "created_at": 1740714379,
    "kind": 3
}
HERE D
event received; id: 4eda8aa079b135a6e72d61779dbd408ee8157bf2ad54b56b273b5a485faf49aa; pubkey: b7cfd472ff903441ec6cd55bb506f9744211a6e68e52525d42445169bda03f5a
{
    "id": "4eda8aa079b135a6e72d61779dbd408ee8157bf2ad54b56b273b5a485faf49aa",
    "pubkey": "b7cfd472ff903441ec6cd55bb506f9744211a6e68e52525d42445169bda03f5a",
    "created_at": 1740714359,
    "kind": 10000
}
HERE D
event received; id: 8474976c78694505e6665ec54bab78441bd0ad93e9333502fd3423ff254fc9c2; pubkey: fd59542dc7851a2768b3ed2619ef675eefc7503d079dc288321f84064475d0ae
{
    "id": "8474976c78694505e6665ec54bab78441bd0ad93e9333502fd3423ff254fc9c2",
    "pubkey": "fd59542dc7851a2768b3ed2619ef675eefc7503d079dc288321f84064475d0ae",
    "created_at": 1740714357,
    "kind": 3
}
HERE D
event received; id: 613c0695904b8842d298205a062a5dd1dab05bcb56237608f06159a5df27f580; pubkey: 6daf8a9e085339e242cb57b2c09e06383a32e7ed43eb88f2ef22c7389c250ebe
{
    "id": "613c0695904b8842d298205a062a5dd1dab05bcb56237608f06159a5df27f580",
    "pubkey": "6daf8a9e085339e242cb57b2c09e06383a32e7ed43eb88f2ef22c7389c250ebe",
    "created_at": 1740714353,
    "kind": 3
}
HERE D
event received; id: 033d4fbdc5063087c7e073c376b73d0028db8d29e7754eff4c204acd464b8810; pubkey: ab701878befc26097fcdd272bb701aebdfa3d227caac85d28c5d44de84d6d44e
{
    "id": "033d4fbdc5063087c7e073c376b73d0028db8d29e7754eff4c204acd464b8810",
    "pubkey": "ab701878befc26097fcdd272bb701aebdfa3d227caac85d28c5d44de84d6d44e",
    "created_at": 1740714348,
    "kind": 3
}
HERE D
event received; id: f74fbb25cd04a49d9f39ac67ab8baf5419d54b2e5a85e8f89219940e1fe81df1; pubkey: 2f28d75406a3867e2fd3b8285233f2514c84ec2be245f6dcaeb4ca32768731ba
{
    "id": "f74fbb25cd04a49d9f39ac67ab8baf5419d54b2e5a85e8f89219940e1fe81df1",
    "pubkey": "2f28d75406a3867e2fd3b8285233f2514c84ec2be245f6dcaeb4ca32768731ba",
    "created_at": 1740714309,
    "kind": 3
}
HERE D
event received; id: 5aa8935e065b167e7769e9263a20f030989e407c8288b2b3e474b1c6a821e75b; pubkey: 7bfda8851f0bebfaad675be189f78532e95579270dd9827d6a6df66d7a768195
{
    "id": "5aa8935e065b167e7769e9263a20f030989e407c8288b2b3e474b1c6a821e75b",
    "pubkey": "7bfda8851f0bebfaad675be189f78532e95579270dd9827d6a6df66d7a768195",
    "created_at": 1740714277,
    "kind": 3
}
HERE D
event received; id: 221b8001ca8493561d967f6220d5f73d516594b5ebc271ce7d4ead7836b37aaa; pubkey: b0ac2c26eabdb0e0a9b0d10fd1458ca73c575b19d65e13f0e7484cbee84038b3
{
    "id": "221b8001ca8493561d967f6220d5f73d516594b5ebc271ce7d4ead7836b37aaa",
    "pubkey": "b0ac2c26eabdb0e0a9b0d10fd1458ca73c575b19d65e13f0e7484cbee84038b3",
    "created_at": 1740714240,
    "kind": 3
}
HERE D
event received; id: a2bc039673eb4b62d1bdfab8537ced2eb45f31149ff17206c1cf637e6073bc7a; pubkey: 3e0f744d54acee8e2c7fea0be2c4cf99c089a4faa83ff7ccc3d0d9f1b59a3463
{
    "id": "a2bc039673eb4b62d1bdfab8537ced2eb45f31149ff17206c1cf637e6073bc7a",
    "pubkey": "3e0f744d54acee8e2c7fea0be2c4cf99c089a4faa83ff7ccc3d0d9f1b59a3463",
    "created_at": 1740714233,
    "kind": 3
}
HERE D
event received; id: e866e78378117d376c5d38b7db214bd1b7cd677be806a955a15621b6abdd31e5; pubkey: 2850338cc759306f832cc2d6445f5fee8a6a11c9971596136aae11151ae7691b
{
    "id": "e866e78378117d376c5d38b7db214bd1b7cd677be806a955a15621b6abdd31e5",
    "pubkey": "2850338cc759306f832cc2d6445f5fee8a6a11c9971596136aae11151ae7691b",
    "created_at": 1740714223,
    "kind": 3
}
HERE D
event received; id: b83e285616f8bd94b671896c6741bddecd44c2c1b0a49475770d03e60d4d87a9; pubkey: c75ff75cbe3a0d951bb856e3626716b845f1e3a650644f2bfe7f5a85dfdc2a16
{
    "id": "b83e285616f8bd94b671896c6741bddecd44c2c1b0a49475770d03e60d4d87a9",
    "pubkey": "c75ff75cbe3a0d951bb856e3626716b845f1e3a650644f2bfe7f5a85dfdc2a16",
    "created_at": 1740714193,
    "kind": 3
}
HERE D
event received; id: ecdfebd1b1a63a2e489f10c4741dd8d6de0e5ce9b206ac21c162b719ba4cbb04; pubkey: 6a02b7d5d5c1ceec3d0ad28dd71c4cfeebb6397b95fef5cd5032c9223a13d02a
{
    "id": "ecdfebd1b1a63a2e489f10c4741dd8d6de0e5ce9b206ac21c162b719ba4cbb04",
    "pubkey": "6a02b7d5d5c1ceec3d0ad28dd71c4cfeebb6397b95fef5cd5032c9223a13d02a",
    "created_at": 1740714175,
    "kind": 10000
}
HERE D
event received; id: 2abf1c15959c08d9ac721cf5058383401dfea12499bf160ab5b0f2c0033ba4ef; pubkey: a145bfb46c56abd44bc6be971b02f534093a9d27490289eb4c9394af765b71f9
{
    "id": "2abf1c15959c08d9ac721cf5058383401dfea12499bf160ab5b0f2c0033ba4ef",
    "pubkey": "a145bfb46c56abd44bc6be971b02f534093a9d27490289eb4c9394af765b71f9",
    "created_at": 1740714113,
    "kind": 3
}
HERE D
event received; id: ed4638dfe998691f81d1a01be8e1a0eb26ff04d13681671e192b49e864d3373a; pubkey: 62fdd90f4a5f421508a1fc47115be4850da79ac821f34eca541b98d98c8428e0
{
    "id": "ed4638dfe998691f81d1a01be8e1a0eb26ff04d13681671e192b49e864d3373a",
    "pubkey": "62fdd90f4a5f421508a1fc47115be4850da79ac821f34eca541b98d98c8428e0",
    "created_at": 1740714086,
    "kind": 3
}
HERE D
event received; id: 33f0441945b848f5cfc8e1613c9b773bf70b0f94ffc5e5c2ae8face8f5ec430f; pubkey: 181f334d46f8ec615ff12c0c987055ae8dc003a18967205baeeb27d41fe7d9f3
{
    "id": "33f0441945b848f5cfc8e1613c9b773bf70b0f94ffc5e5c2ae8face8f5ec430f",
    "pubkey": "181f334d46f8ec615ff12c0c987055ae8dc003a18967205baeeb27d41fe7d9f3",
    "created_at": 1740714084,
    "kind": 3
}
HERE D
event received; id: 09fac702e3859e4e2c2ae9ab0178e1ce9cc491c8cfc5058285598f24cee4fdf2; pubkey: a47b47b01500e3d17ab8fee8295650493ce927119fb18e983f311fb37d38385f
{
    "id": "09fac702e3859e4e2c2ae9ab0178e1ce9cc491c8cfc5058285598f24cee4fdf2",
    "pubkey": "a47b47b01500e3d17ab8fee8295650493ce927119fb18e983f311fb37d38385f",
    "created_at": 1740714014,
    "kind": 3
}
HERE D
event received; id: 3f7c5e83aca725c53ccf345d8b2074cc75406f901278108057aace4d6e8d24b6; pubkey: f29d7c361579222ef4af61f348a4662474e53f3b77351ee7e7252bfed0ec2f68
{
    "id": "3f7c5e83aca725c53ccf345d8b2074cc75406f901278108057aace4d6e8d24b6",
    "pubkey": "f29d7c361579222ef4af61f348a4662474e53f3b77351ee7e7252bfed0ec2f68",
    "created_at": 1740714013,
    "kind": 3
}
HERE D
event received; id: 2a754a1c15ef82d57cf118d8cedf266cea737d6e360e498604b172325efe7ec7; pubkey: 16b8676587c1ddde60b23b27205112a4d5f0ce7bd0414f67476d5eea1502af36
{
    "id": "2a754a1c15ef82d57cf118d8cedf266cea737d6e360e498604b172325efe7ec7",
    "pubkey": "16b8676587c1ddde60b23b27205112a4d5f0ce7bd0414f67476d5eea1502af36",
    "created_at": 1740714000,
    "kind": 3
}
HERE D
event received; id: 16101bf0041f42dc8820851a44e878d39b9e1449ee320ea2320f5cdc43744baf; pubkey: 58bb49e35000a6d932a3b2521b446db8a197dfa31ab5c16932455e4d4f3ee3d5
{
    "id": "16101bf0041f42dc8820851a44e878d39b9e1449ee320ea2320f5cdc43744baf",
    "pubkey": "58bb49e35000a6d932a3b2521b446db8a197dfa31ab5c16932455e4d4f3ee3d5",
    "created_at": 1740713988,
    "kind": 10000
}
HERE D
event received; id: 5bb60a910695353762f56932c4b38729e40620b75e803ad32f8dd9f857fc0ae9; pubkey: 5f70b9e212c361049290926b498ceab47ff58450c0978e8fd863d8ce435f73a7
{
    "id": "5bb60a910695353762f56932c4b38729e40620b75e803ad32f8dd9f857fc0ae9",
    "pubkey": "5f70b9e212c361049290926b498ceab47ff58450c0978e8fd863d8ce435f73a7",
    "created_at": 1740713954,
    "kind": 3
}
HERE D
event received; id: 0189490e3f5af34322878433fb33fddf79995ae568d6b43d18b0ec72aa9a8817; pubkey: de2e87b3dcea34c7789910c9967bb49c0b4f450aa231c60c7ababbbbb1cd3a06
{
    "id": "0189490e3f5af34322878433fb33fddf79995ae568d6b43d18b0ec72aa9a8817",
    "pubkey": "de2e87b3dcea34c7789910c9967bb49c0b4f450aa231c60c7ababbbbb1cd3a06",
    "created_at": 1740713931,
    "kind": 3
}
HERE D
event received; id: a77180893e9c2eb2f67aa54b13f8ee2113f0dcc954dff31bc2d460a2cded0d71; pubkey: 3d18b3d51a69ae1c77370b0df969c25f6962e5c3823a61c78ece22cc6cbcc409
{
    "id": "a77180893e9c2eb2f67aa54b13f8ee2113f0dcc954dff31bc2d460a2cded0d71",
    "pubkey": "3d18b3d51a69ae1c77370b0df969c25f6962e5c3823a61c78ece22cc6cbcc409",
    "created_at": 1740713891,
    "kind": 3
}
HERE D
event received; id: 5ae35ae36f034d40bdb310796fbd6eea21c06060a6dcf2898eacad21967d5a87; pubkey: acfffe68b49925fefe543e71ea7c096430d2221491579fccfa877c9ddd2e4cc4
{
    "id": "5ae35ae36f034d40bdb310796fbd6eea21c06060a6dcf2898eacad21967d5a87",
    "pubkey": "acfffe68b49925fefe543e71ea7c096430d2221491579fccfa877c9ddd2e4cc4",
    "created_at": 1740713877,
    "kind": 3
}
HERE D
event received; id: 4df0c5d4d35bc591bb3092602a85a7820b07e455c65582f6f6bc2aae00939565; pubkey: f1bb480dfc44a0353af97217d5949388d9fa09b9138dbc3dd2868804e979969e
{
    "id": "4df0c5d4d35bc591bb3092602a85a7820b07e455c65582f6f6bc2aae00939565",
    "pubkey": "f1bb480dfc44a0353af97217d5949388d9fa09b9138dbc3dd2868804e979969e",
    "created_at": 1740713848,
    "kind": 3
}
HERE D
event received; id: d7077ec372c8e9fa5bfa0cf8e230fba4d27f8b3bdeffced1010e005bb3a083ba; pubkey: 20a8d4ceb73c968cdd25ffda9b148c9ebe6cc2672b5b8c5f0a6c4b2ee0723b32
{
    "id": "d7077ec372c8e9fa5bfa0cf8e230fba4d27f8b3bdeffced1010e005bb3a083ba",
    "pubkey": "20a8d4ceb73c968cdd25ffda9b148c9ebe6cc2672b5b8c5f0a6c4b2ee0723b32",
    "created_at": 1740713838,
    "kind": 3
}
HERE D
event received; id: 7d86da3c9cebf2261ba3d32519fcc73d7bdbcc734176bba1b6fd3d83b6d89dad; pubkey: 416335ae6302946042249279d96cae8a33337baae859b6f962618d3c9e520a63
{
    "id": "7d86da3c9cebf2261ba3d32519fcc73d7bdbcc734176bba1b6fd3d83b6d89dad",
    "pubkey": "416335ae6302946042249279d96cae8a33337baae859b6f962618d3c9e520a63",
    "created_at": 1740713800,
    "kind": 3
}
HERE D
event received; id: d13ea4e1398a9c8938360413e1399a958a880e335c15604498a6e6d2899091d2; pubkey: a74d0dea3f08c2a4c0dab1ede11ab6884c23da20f6f842d2fc10a97743e70606
{
    "id": "d13ea4e1398a9c8938360413e1399a958a880e335c15604498a6e6d2899091d2",
    "pubkey": "a74d0dea3f08c2a4c0dab1ede11ab6884c23da20f6f842d2fc10a97743e70606",
    "created_at": 1740713760,
    "kind": 10000
}
HERE D
event received; id: 62a8947340c6a5523d5c5551e12376482ef05a781c91564eef1028c7327ab458; pubkey: 408f636bd26fcc5f29889033b447cb2411f60ab1b8a5fc8cb3842dab758fdeb5
{
    "id": "62a8947340c6a5523d5c5551e12376482ef05a781c91564eef1028c7327ab458",
    "pubkey": "408f636bd26fcc5f29889033b447cb2411f60ab1b8a5fc8cb3842dab758fdeb5",
    "created_at": 1740713736,
    "kind": 3
}
HERE D
event received; id: 5d4a6d6cba144a798097e78f23b4d44240994091330d267f85fce35abca7360f; pubkey: 89175d5704083a8957c4adb1e946bbdf92482f4c9c17794a283150abbb2470e9
{
    "id": "5d4a6d6cba144a798097e78f23b4d44240994091330d267f85fce35abca7360f",
    "pubkey": "89175d5704083a8957c4adb1e946bbdf92482f4c9c17794a283150abbb2470e9",
    "created_at": 1740713720,
    "kind": 3
}
HERE D
event received; id: 91871c5d400612fecd5252c8000cd63df454f2ced5cdee26020cbb7ff642c354; pubkey: f03df3d4134230420cdf7acbb35f96a2542424246ab052ba24c6fec6a4d4f676
{
    "id": "91871c5d400612fecd5252c8000cd63df454f2ced5cdee26020cbb7ff642c354",
    "pubkey": "f03df3d4134230420cdf7acbb35f96a2542424246ab052ba24c6fec6a4d4f676",
    "created_at": 1740713711,
    "kind": 1
}
HERE D
event received; id: d28ab58caf9a8c8d6da4d20eea84971fac7207dd8e802310a3281462bd57f709; pubkey: 9e5b3837ba58d2a9cff8b6587d25e2aa4cef49da6c41694a5a794f738cf75f70
{
    "id": "d28ab58caf9a8c8d6da4d20eea84971fac7207dd8e802310a3281462bd57f709",
    "pubkey": "9e5b3837ba58d2a9cff8b6587d25e2aa4cef49da6c41694a5a794f738cf75f70",
    "created_at": 1740713711,
    "kind": 3
}
HERE D
event received; id: 6a7f3c01c9d39f49e0f11560cf0195e50043ef5a1f97f107af7505284809c9a4; pubkey: 215dac4c9672ac5de643563fd642ea5933e6f031abfcad8bd566d8fdcfb983e4
{
    "id": "6a7f3c01c9d39f49e0f11560cf0195e50043ef5a1f97f107af7505284809c9a4",
    "pubkey": "215dac4c9672ac5de643563fd642ea5933e6f031abfcad8bd566d8fdcfb983e4",
    "created_at": 1740713700,
    "kind": 3
}
HERE D
event received; id: 64380f562b9a5b88e2626d5f4cd7cbf5907f4b9be9967595d421ab56fa55ee36; pubkey: 1ee8e31e6fdc7e9aa48d2e7393d79281f640474f757256ec151bc03c917e45ab
{
    "id": "64380f562b9a5b88e2626d5f4cd7cbf5907f4b9be9967595d421ab56fa55ee36",
    "pubkey": "1ee8e31e6fdc7e9aa48d2e7393d79281f640474f757256ec151bc03c917e45ab",
    "created_at": 1740713670,
    "kind": 3
}
HERE D
event received; id: 00e631da3a8fdaecf918cd2fcb58b172227edcab9386aca943bc0a1d444d20bb; pubkey: 21d1140c3af9909145bd5fdbad2e9e1e5f58d92a30df5b74c04f7230368bdab4
{
    "id": "00e631da3a8fdaecf918cd2fcb58b172227edcab9386aca943bc0a1d444d20bb",
    "pubkey": "21d1140c3af9909145bd5fdbad2e9e1e5f58d92a30df5b74c04f7230368bdab4",
    "created_at": 1740713616,
    "kind": 10000
}
HERE D
event received; id: 10467ff005a3bafbaf9c866fd48b2fc2bddfee6335f155ac33e09cbad65d4119; pubkey: f87298a4592b193c58d679583cbfcce6567436ed2470f466d77d40ea83f8595b
{
    "id": "10467ff005a3bafbaf9c866fd48b2fc2bddfee6335f155ac33e09cbad65d4119",
    "pubkey": "f87298a4592b193c58d679583cbfcce6567436ed2470f466d77d40ea83f8595b",
    "created_at": 1740713604,
    "kind": 3
}
HERE D
event received; id: 6f5e266ecbf98a001175b255d86d8f9f65ddaf28e5216ece87427e3c6f49d2fa; pubkey: 10b6660cb0754bfb89265475d7678359ef45ec52778d14261d17d0d3cb5507df
{
    "id": "6f5e266ecbf98a001175b255d86d8f9f65ddaf28e5216ece87427e3c6f49d2fa",
    "pubkey": "10b6660cb0754bfb89265475d7678359ef45ec52778d14261d17d0d3cb5507df",
    "created_at": 1740713559,
    "kind": 3
}
HERE D
event received; id: fc490c45b4f700e7b23a0386fab30dd79905357ed8fb5f03b72f07288ab1e55d; pubkey: b75622fd920dda0d151e719b8b33a40a4b479d77181d5fb67d5a75175a2a0bd7
{
    "id": "fc490c45b4f700e7b23a0386fab30dd79905357ed8fb5f03b72f07288ab1e55d",
    "pubkey": "b75622fd920dda0d151e719b8b33a40a4b479d77181d5fb67d5a75175a2a0bd7",
    "created_at": 1740713555,
    "kind": 3
}
HERE D
event received; id: ae21ff35ba22e8d4edf4ba609129fe1cabb6fcd361914f2be0520c279abba71d; pubkey: 652c551126c714ed92d7eff48d3690866d752bfbd228d9079d1432ee0edf13ed
{
    "id": "ae21ff35ba22e8d4edf4ba609129fe1cabb6fcd361914f2be0520c279abba71d",
    "pubkey": "652c551126c714ed92d7eff48d3690866d752bfbd228d9079d1432ee0edf13ed",
    "created_at": 1740713528,
    "kind": 3
}
HERE D
event received; id: f261d36a0d27d7ab03bfe485c5deb4d5b29595d0204f9ef7f2a6c62548790d8b; pubkey: 63eaec81ac05f2a4fd01727d7b89690042f30ced1b69bcf6a0533ec1e1cdffbe
{
    "id": "f261d36a0d27d7ab03bfe485c5deb4d5b29595d0204f9ef7f2a6c62548790d8b",
    "pubkey": "63eaec81ac05f2a4fd01727d7b89690042f30ced1b69bcf6a0533ec1e1cdffbe",
    "created_at": 1740713525,
    "kind": 10000
}
HERE D
event received; id: 103a7faa9a0f0f554e6797aee07cf7ae4924d741b134e1322edb1b9768a38cf6; pubkey: 7d488fe6636d30ba6158d08f153be931e84efdc047d01b46ff8a6b9a296ed4a8
{
    "id": "103a7faa9a0f0f554e6797aee07cf7ae4924d741b134e1322edb1b9768a38cf6",
    "pubkey": "7d488fe6636d30ba6158d08f153be931e84efdc047d01b46ff8a6b9a296ed4a8",
    "created_at": 1740713483,
    "kind": 3
}
HERE D
event received; id: 3297a67fbe7258fce73f1f419a5149082b285d88474a2354319f3d5b484ccbcb; pubkey: 21d1140c3af9909145bd5fdbad2e9e1e5f58d92a30df5b74c04f7230368bdab4
{
    "id": "3297a67fbe7258fce73f1f419a5149082b285d88474a2354319f3d5b484ccbcb",
    "pubkey": "21d1140c3af9909145bd5fdbad2e9e1e5f58d92a30df5b74c04f7230368bdab4",
    "created_at": 1740713475,
    "kind": 1984
}
HERE D
event received; id: 618f4c5219c2cffdb2c0d92e02f1cfd303613e72d05b083203bb704f0049c13f; pubkey: 08f968569f15f1f803466845f954e8b384fee6669aa589c85b860fd3ffe59a09
{
    "id": "618f4c5219c2cffdb2c0d92e02f1cfd303613e72d05b083203bb704f0049c13f",
    "pubkey": "08f968569f15f1f803466845f954e8b384fee6669aa589c85b860fd3ffe59a09",
    "created_at": 1740713474,
    "kind": 3
}
HERE D
event received; id: f7600f2a478cc2332443522c9b03b9f6e55d6375c04aad92f2693bbf79752fef; pubkey: 6a09c9ae14be7dc4eb920d82d50caf7c4e641abbd02d2316008222c96a497246
{
    "id": "f7600f2a478cc2332443522c9b03b9f6e55d6375c04aad92f2693bbf79752fef",
    "pubkey": "6a09c9ae14be7dc4eb920d82d50caf7c4e641abbd02d2316008222c96a497246",
    "created_at": 1740713422,
    "kind": 3
}
HERE D
event received; id: b5c8d7a398b59ef613ad72112970f06944251a366d1b7c2be643d043f1b54136; pubkey: b7cfd472ff903441ec6cd55bb506f9744211a6e68e52525d42445169bda03f5a
{
    "id": "b5c8d7a398b59ef613ad72112970f06944251a366d1b7c2be643d043f1b54136",
    "pubkey": "b7cfd472ff903441ec6cd55bb506f9744211a6e68e52525d42445169bda03f5a",
    "created_at": 1740713413,
    "kind": 1984
}
HERE D
event received; id: e55877c55482f13652301c008fb3b0b1d51108a68b51afaf2e51bfabdd85a4e7; pubkey: 7d4f0d0a58fca9137bca767d9c8d052586b61803bbc11a98e5756c5a58c41819
{
    "id": "e55877c55482f13652301c008fb3b0b1d51108a68b51afaf2e51bfabdd85a4e7",
    "pubkey": "7d4f0d0a58fca9137bca767d9c8d052586b61803bbc11a98e5756c5a58c41819",
    "created_at": 1740713411,
    "kind": 3
}
HERE D
event received; id: 8a787fe63bfa120420ab1bff3fef38f3d18ab4f550664e09143cf3ef359d026f; pubkey: b9ecb22ce2603076e036f12e54034983f1006392fd80d73a01721794947dfe8c
{
    "id": "8a787fe63bfa120420ab1bff3fef38f3d18ab4f550664e09143cf3ef359d026f",
    "pubkey": "b9ecb22ce2603076e036f12e54034983f1006392fd80d73a01721794947dfe8c",
    "created_at": 1740713411,
    "kind": 3
}
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
HERE D
event received; id: 763bca54e35d20eb15ba39d385c76ac21b80d109700b00b41657241c94065d2d; pubkey: d1c9bce40d0f57f8f2531c82ecd1ad8875596eeaf3b750876edd806f555653b2
{
    "id": "763bca54e35d20eb15ba39d385c76ac21b80d109700b00b41657241c94065d2d",
    "pubkey": "d1c9bce40d0f57f8f2531c82ecd1ad8875596eeaf3b750876edd806f555653b2",
    "created_at": 1740713376,
    "kind": 3
}
HERE D
event received; id: 0fde02595df2db71ff7b120bd5d786495524a2d5750607c7b82b7e41f64f8300; pubkey: e88a691e98d9987c964521dff60025f60700378a4879180dcbbb4a5027850411
{
    "id": "0fde02595df2db71ff7b120bd5d786495524a2d5750607c7b82b7e41f64f8300",
    "pubkey": "e88a691e98d9987c964521dff60025f60700378a4879180dcbbb4a5027850411",
    "created_at": 1740713371,
    "kind": 3
}
HERE D
event received; id: 650a840d590f54810752b9e5236ded62555609a1d57315e882b0c1c03530e505; pubkey: dd1f9d502c7951df47e8f8ed245e8bfa24f7e82c28f19399a8f0e74b06113a21
{
    "id": "650a840d590f54810752b9e5236ded62555609a1d57315e882b0c1c03530e505",
    "pubkey": "dd1f9d502c7951df47e8f8ed245e8bfa24f7e82c28f19399a8f0e74b06113a21",
    "created_at": 1740713329,
    "kind": 3
}
HERE D
event received; id: b8dbf11d3ce85b32aa722c91b1a21c2423829b38746fed0055b64cd5d4e5ddf8; pubkey: 7ecbfef4538faaff1b8334e8077d71259e40738fe9e2e0fe341d1f68eb4d21ee
{
    "id": "b8dbf11d3ce85b32aa722c91b1a21c2423829b38746fed0055b64cd5d4e5ddf8",
    "pubkey": "7ecbfef4538faaff1b8334e8077d71259e40738fe9e2e0fe341d1f68eb4d21ee",
    "created_at": 1740713324,
    "kind": 3
}
HERE D
event received; id: ebf26bab3c2a3267d0d1ba50cc8d8cb9120b8476e4cfc8f270647d583d4557ec; pubkey: 4ae623ae496fe596a054745262a231f6864ec5742b5f137007f984c73d4d0d4d
{
    "id": "ebf26bab3c2a3267d0d1ba50cc8d8cb9120b8476e4cfc8f270647d583d4557ec",
    "pubkey": "4ae623ae496fe596a054745262a231f6864ec5742b5f137007f984c73d4d0d4d",
    "created_at": 1740713317,
    "kind": 3
}
HERE D
event received; id: 5ad320b1261fd74cd7802958d12dc5f56f0fe0566fd08272c6128edcaa0a50bb; pubkey: a8a55813df1bdac34e7e9acebf6ee33779b809e64f8e0eb20b1b0364442f0b07
{
    "id": "5ad320b1261fd74cd7802958d12dc5f56f0fe0566fd08272c6128edcaa0a50bb",
    "pubkey": "a8a55813df1bdac34e7e9acebf6ee33779b809e64f8e0eb20b1b0364442f0b07",
    "created_at": 1740713313,
    "kind": 3
}
HERE D
event received; id: e7a39c6e876a846422776b70073eb5cabb9c7ee894b154fd18e867627c826ce4; pubkey: 3958e8666a2fbd8136de408f5d38c059823ce373e482cc68abe1b8fc11fe8101
{
    "id": "e7a39c6e876a846422776b70073eb5cabb9c7ee894b154fd18e867627c826ce4",
    "pubkey": "3958e8666a2fbd8136de408f5d38c059823ce373e482cc68abe1b8fc11fe8101",
    "created_at": 1740713309,
    "kind": 3
}
HERE D
event received; id: d0e13b31647155a6cb41a6d7d80356fdae2e590e6755bc24724afcc8bfca8200; pubkey: 468e10ef779fe9d2b34fd6c71b27dd1f30bcb71ae612d963d7823e2b9e3f41ed
{
    "id": "d0e13b31647155a6cb41a6d7d80356fdae2e590e6755bc24724afcc8bfca8200",
    "pubkey": "468e10ef779fe9d2b34fd6c71b27dd1f30bcb71ae612d963d7823e2b9e3f41ed",
    "created_at": 1740713306,
    "kind": 3
}
HERE D
event received; id: c2b0ea56c3de6ea7bbfec213adf3377d552b8a08cf0ac8abb6bbc7bed6c0ded2; pubkey: 4b3909d443f4799c2d1e0208a4105a39c3b5fd962eef514f24ca3b5eece93411
{
    "id": "c2b0ea56c3de6ea7bbfec213adf3377d552b8a08cf0ac8abb6bbc7bed6c0ded2",
    "pubkey": "4b3909d443f4799c2d1e0208a4105a39c3b5fd962eef514f24ca3b5eece93411",
    "created_at": 1740713297,
    "kind": 3
}
HERE D
event received; id: 2dfcd10c054dd06e8949a80de066c0af6c60bcecca60ac3b9b9f4c0203c014a3; pubkey: 99d74f5fe276a422eb83f39087e027732ff485642ff54cc849e06596310cab21
{
    "id": "2dfcd10c054dd06e8949a80de066c0af6c60bcecca60ac3b9b9f4c0203c014a3",
    "pubkey": "99d74f5fe276a422eb83f39087e027732ff485642ff54cc849e06596310cab21",
    "created_at": 1740713237,
    "kind": 3
}
HERE D
event received; id: 48bdd0b675d0b47c64f443fc2fa44ea28c9af7d150bd4b15a1b6abc237d7d586; pubkey: 67e93f2e306ea680e41965fc315bf692b7c67cc0cdd6de0175131f349faca14d
{
    "id": "48bdd0b675d0b47c64f443fc2fa44ea28c9af7d150bd4b15a1b6abc237d7d586",
    "pubkey": "67e93f2e306ea680e41965fc315bf692b7c67cc0cdd6de0175131f349faca14d",
    "created_at": 1740713132,
    "kind": 3
}
HERE D
event received; id: f4e45692ec6f14bed2b9457e9a9bbe25af9a79f9392dea85602d6e5f254bad09; pubkey: 38c4a72dc3d336e73b1f35041a3804d60f239ab07a26ee4107beccb88b479bff
{
    "id": "f4e45692ec6f14bed2b9457e9a9bbe25af9a79f9392dea85602d6e5f254bad09",
    "pubkey": "38c4a72dc3d336e73b1f35041a3804d60f239ab07a26ee4107beccb88b479bff",
    "created_at": 1740713129,
    "kind": 3
}
HERE D
event received; id: ab117a6c6c6e16c86edfc8f92cfd1d72c4777db2cbbf212831c0085c5da78dea; pubkey: 6b40797c7e73f7979ace527cce720ce03b51ddd918d6722168382d37f7b8d6c8
{
    "id": "ab117a6c6c6e16c86edfc8f92cfd1d72c4777db2cbbf212831c0085c5da78dea",
    "pubkey": "6b40797c7e73f7979ace527cce720ce03b51ddd918d6722168382d37f7b8d6c8",
    "created_at": 1740713128,
    "kind": 3
}
HERE D
event received; id: 3e725911c13fc2ca1bc939e6d36aaac66c95dfe7d4641e51edeed99a86f8a4b4; pubkey: 2efaa715bbb46dd5be6b7da8d7700266d11674b913b8178addb5c2e63d987331
{
    "id": "3e725911c13fc2ca1bc939e6d36aaac66c95dfe7d4641e51edeed99a86f8a4b4",
    "pubkey": "2efaa715bbb46dd5be6b7da8d7700266d11674b913b8178addb5c2e63d987331",
    "created_at": 1740713125,
    "kind": 3
}
HERE D
event received; id: fe5acd594e5b03a8ea8cba24967bf1f4729f8cea55055093ea12fe6c6a76e862; pubkey: 7244d483491d8e33f9a06564f810b182e693ab2fc99b4f01412cfd2668f33789
{
    "id": "fe5acd594e5b03a8ea8cba24967bf1f4729f8cea55055093ea12fe6c6a76e862",
    "pubkey": "7244d483491d8e33f9a06564f810b182e693ab2fc99b4f01412cfd2668f33789",
    "created_at": 1740713065,
    "kind": 3
}
HERE D
event received; id: dbc1619f4e9805ee4ea04fe8d3b7c93fe871d9f29c1e441fab68686e8905b3c8; pubkey: 0ed58c5d6f9f7481db55178266697e9fa2176f941c67fb243d9f8a39ceb1e97f
{
    "id": "dbc1619f4e9805ee4ea04fe8d3b7c93fe871d9f29c1e441fab68686e8905b3c8",
    "pubkey": "0ed58c5d6f9f7481db55178266697e9fa2176f941c67fb243d9f8a39ceb1e97f",
    "created_at": 1740713054,
    "kind": 3
}
HERE D
event received; id: 12f728b52986b845ecebf64a40c9e0e9fbc7dfff86b25c08933261c52dd11f37; pubkey: d5a9b3661fee8b6e60b3eac3543d83dbffa6486f62ec76744ca38967203efe49
{
    "id": "12f728b52986b845ecebf64a40c9e0e9fbc7dfff86b25c08933261c52dd11f37",
    "pubkey": "d5a9b3661fee8b6e60b3eac3543d83dbffa6486f62ec76744ca38967203efe49",
    "created_at": 1740713008,
    "kind": 3
}
HERE D
event received; id: f5976272b943173c24f7b861ecbb8ccef8ec54a46fc8080c88b89a686dd354e8; pubkey: 3acd2707cd916f2758be5622a84a86dcd13e2d1c62d0a1eb5d8a2834395039cc
{
    "id": "f5976272b943173c24f7b861ecbb8ccef8ec54a46fc8080c88b89a686dd354e8",
    "pubkey": "3acd2707cd916f2758be5622a84a86dcd13e2d1c62d0a1eb5d8a2834395039cc",
    "created_at": 1740712993,
    "kind": 10000
}
HERE D
event received; id: c58e9bd2e1542a2d5ef82dd55370a2aae6f095a5798da80fecccc57d6b03b0f2; pubkey: 672bb5365a4ec1a38efb843d9acc648bbc9284da6a631476dd4d7a7992731076
{
    "id": "c58e9bd2e1542a2d5ef82dd55370a2aae6f095a5798da80fecccc57d6b03b0f2",
    "pubkey": "672bb5365a4ec1a38efb843d9acc648bbc9284da6a631476dd4d7a7992731076",
    "created_at": 1740712957,
    "kind": 3
}
HERE D
event received; id: 34ddd19e7eba8945a3f34b1e781c0e88d0706f8ffccb2ac660ca16516dca84c1; pubkey: 260d3a820b7f8de20f4972725999b1af88b0cc5554ca38f9681c8d657e043cc3
{
    "id": "34ddd19e7eba8945a3f34b1e781c0e88d0706f8ffccb2ac660ca16516dca84c1",
    "pubkey": "260d3a820b7f8de20f4972725999b1af88b0cc5554ca38f9681c8d657e043cc3",
    "created_at": 1740712950,
    "kind": 3
}
HERE D
event received; id: 4695f320e3bcaf919ec56a8511dd3863a08acd32cfdb8c2029b66f9b471d58ab; pubkey: b5081b3bcdb402e4e9251f38d3bae094ff58232e50b6af0d5f609d56f17ca023
{
    "id": "4695f320e3bcaf919ec56a8511dd3863a08acd32cfdb8c2029b66f9b471d58ab",
    "pubkey": "b5081b3bcdb402e4e9251f38d3bae094ff58232e50b6af0d5f609d56f17ca023",
    "created_at": 1740712907,
    "kind": 3
}
HERE D
event received; id: 6bf344b813a8054e7199e0faec89249b837a5a1740bb62a0e5bd922330faa28a; pubkey: 39864936c435c0988f1abab623cee329f8b0a51b4afbe90c03e55f1ff11e10be
{
    "id": "6bf344b813a8054e7199e0faec89249b837a5a1740bb62a0e5bd922330faa28a",
    "pubkey": "39864936c435c0988f1abab623cee329f8b0a51b4afbe90c03e55f1ff11e10be",
    "created_at": 1740712892,
    "kind": 3
}
HERE D
event received; id: fda9c8b2c05a09526093e49aabff8e52a33a9a6d1fc8623b8470896af51fdef7; pubkey: 0e432913100161e8c4c06d554f26f7606a2e71988f2f6575ed165ddc31711594
{
    "id": "fda9c8b2c05a09526093e49aabff8e52a33a9a6d1fc8623b8470896af51fdef7",
    "pubkey": "0e432913100161e8c4c06d554f26f7606a2e71988f2f6575ed165ddc31711594",
    "created_at": 1740712873,
    "kind": 3
}
HERE D
event received; id: b57e721310da4d7ad295794a224d07608876ade65bff6077305093d210bbc35e; pubkey: cca7ef541db83689413d975c4f6a35e4ec73915a2596c770412d9286e7323176
{
    "id": "b57e721310da4d7ad295794a224d07608876ade65bff6077305093d210bbc35e",
    "pubkey": "cca7ef541db83689413d975c4f6a35e4ec73915a2596c770412d9286e7323176",
    "created_at": 1740712849,
    "kind": 3
}
HERE D
event received; id: 6796bc9ee315934f078c3b52972f4bd61ef76d60f726714b4be1be28407556c7; pubkey: 0f4011159c24a6a53eeea72e1c2e97e0425be8af15e7de397003dd65d9e8d278
{
    "id": "6796bc9ee315934f078c3b52972f4bd61ef76d60f726714b4be1be28407556c7",
    "pubkey": "0f4011159c24a6a53eeea72e1c2e97e0425be8af15e7de397003dd65d9e8d278",
    "created_at": 1740712824,
    "kind": 10000
}
HERE D
event received; id: c10ffcb056786d1a1ad0fb037f83b9cfce7b12aec985aed74ceee3a22df94a15; pubkey: e7bcad523d65217b0c43e39bedde3876f9ce15e4e4591b10e6a1f68617524213
{
    "id": "c10ffcb056786d1a1ad0fb037f83b9cfce7b12aec985aed74ceee3a22df94a15",
    "pubkey": "e7bcad523d65217b0c43e39bedde3876f9ce15e4e4591b10e6a1f68617524213",
    "created_at": 1740712816,
    "kind": 3
}
HERE D
event received; id: 724f83d68d52a8b07a1649eaad6f8688dc2db1ccb99269de303e6904bce8d8f7; pubkey: 0ef73fe39bee564d2d2074553719eac93d33333e3be257bea207af3ddb18476f
{
    "id": "724f83d68d52a8b07a1649eaad6f8688dc2db1ccb99269de303e6904bce8d8f7",
    "pubkey": "0ef73fe39bee564d2d2074553719eac93d33333e3be257bea207af3ddb18476f",
    "created_at": 1740712805,
    "kind": 3
}
HERE D
event received; id: 1c6fc44b46c39917cfb03405011e4392a9018768ce6230fd370fd69463350c87; pubkey: fe445cbe3e63c04d0cc206b9dcb15652fb57c222081af5b1bef82aac14db7dd8
{
    "id": "1c6fc44b46c39917cfb03405011e4392a9018768ce6230fd370fd69463350c87",
    "pubkey": "fe445cbe3e63c04d0cc206b9dcb15652fb57c222081af5b1bef82aac14db7dd8",
    "created_at": 1740712759,
    "kind": 3
}
HERE D
event received; id: c33b272961d29ff5c2c401b0ff6a26316873e947141c48434f55cdb89810f70b; pubkey: 80b96c960a44904303b0eed0fc27ded8d883b314ef5defcaf1367bf914a5cb0a
{
    "id": "c33b272961d29ff5c2c401b0ff6a26316873e947141c48434f55cdb89810f70b",
    "pubkey": "80b96c960a44904303b0eed0fc27ded8d883b314ef5defcaf1367bf914a5cb0a",
    "created_at": 1740712745,
    "kind": 3
}
HERE D
event received; id: da887df3ed311e97b23f86ab2616fffd7d9e2d074fbc109e29e47b9b8e796911; pubkey: b904fe5abfc73f95461f1ebf943649872d47ee74177ecea8282a6ac0a0400423
{
    "id": "da887df3ed311e97b23f86ab2616fffd7d9e2d074fbc109e29e47b9b8e796911",
    "pubkey": "b904fe5abfc73f95461f1ebf943649872d47ee74177ecea8282a6ac0a0400423",
    "created_at": 1740712744,
    "kind": 3
}
HERE D
event received; id: c68020ad38836dd0d51eb2f42c1db824ca3fa8660b64d49424766a543e3b9754; pubkey: 03ca4808e6ba72f33e6a27bdcd1b3b2baeb85a97441c2f41ff1c8a29ccf9b400
{
    "id": "c68020ad38836dd0d51eb2f42c1db824ca3fa8660b64d49424766a543e3b9754",
    "pubkey": "03ca4808e6ba72f33e6a27bdcd1b3b2baeb85a97441c2f41ff1c8a29ccf9b400",
    "created_at": 1740712736,
    "kind": 3
}
HERE D
event received; id: 8b9535c70a4ae95c02d091783a9d6f8e591df60290baa0e2d1e9cc6dc173ebb8; pubkey: 17538dc2a62769d09443f18c37cbe358fab5bbf981173542aa7c5ff171ed77c4
{
    "id": "8b9535c70a4ae95c02d091783a9d6f8e591df60290baa0e2d1e9cc6dc173ebb8",
    "pubkey": "17538dc2a62769d09443f18c37cbe358fab5bbf981173542aa7c5ff171ed77c4",
    "created_at": 1740712653,
    "kind": 10000
}
HERE D
event received; id: fe5bf7c4f5c2e22404334690e1d41db7c8a205626ec6d2d1541c4b30a9abdb09; pubkey: 2af2ce2888ad6c4c52fff1ccd356c4868e6ccc561fcf94b813c95b5f4bfcbfd6
{
    "id": "fe5bf7c4f5c2e22404334690e1d41db7c8a205626ec6d2d1541c4b30a9abdb09",
    "pubkey": "2af2ce2888ad6c4c52fff1ccd356c4868e6ccc561fcf94b813c95b5f4bfcbfd6",
    "created_at": 1740712600,
    "kind": 3
}
HERE D
event received; id: 20f04600334f57abf25d9644fae6c27d4332efb55e9e34be6a0b5618157265b5; pubkey: 28a697d690ce583b3a6b59ff826e7720ead55dd1bcd10980c5fecdbae51c814c
{
    "id": "20f04600334f57abf25d9644fae6c27d4332efb55e9e34be6a0b5618157265b5",
    "pubkey": "28a697d690ce583b3a6b59ff826e7720ead55dd1bcd10980c5fecdbae51c814c",
    "created_at": 1740712563,
    "kind": 3
}
HERE D
event received; id: f9daa25cf198048de7bcca5697fb8e0d751e71ab75fb35236f606a9bf97131ca; pubkey: d7b01213da221e66617e2ec5b7003deb68edff0bd0fc1452ce6b054ebac29402
{
    "id": "f9daa25cf198048de7bcca5697fb8e0d751e71ab75fb35236f606a9bf97131ca",
    "pubkey": "d7b01213da221e66617e2ec5b7003deb68edff0bd0fc1452ce6b054ebac29402",
    "created_at": 1740712546,
    "kind": 3
}
HERE D
event received; id: 85f73dd3ce5eb8b92b90349f3d358a738626a272128e6af3f3f4eaaa4e4b2a07; pubkey: cd80d2cd7bdaa062d40c0fb830e5857ea6b5ef5914ea96c48f052e1a198a5512
{
    "id": "85f73dd3ce5eb8b92b90349f3d358a738626a272128e6af3f3f4eaaa4e4b2a07",
    "pubkey": "cd80d2cd7bdaa062d40c0fb830e5857ea6b5ef5914ea96c48f052e1a198a5512",
    "created_at": 1740712532,
    "kind": 3
}
HERE D
event received; id: 9a0cf2253845423bfeb00aabb39f0d4cc6a478925e3f7619244bf8ed14167f35; pubkey: b4ac8fb1f8c1d531bc34734664697f14f51716a45fe832225dd580148db7c04d
{
    "id": "9a0cf2253845423bfeb00aabb39f0d4cc6a478925e3f7619244bf8ed14167f35",
    "pubkey": "b4ac8fb1f8c1d531bc34734664697f14f51716a45fe832225dd580148db7c04d",
    "created_at": 1740712518,
    "kind": 3
}
HERE D
event received; id: 340683c5f4e94e4ee39d732f72eb585166a8ed56595e44b8a38fc9370e2a29b4; pubkey: 3f770d65d3a764a9c5cb503ae123e62ec7598ad035d836e2a810f3877a745b24
{
    "id": "340683c5f4e94e4ee39d732f72eb585166a8ed56595e44b8a38fc9370e2a29b4",
    "pubkey": "3f770d65d3a764a9c5cb503ae123e62ec7598ad035d836e2a810f3877a745b24",
    "created_at": 1740712490,
    "kind": 3
}
HERE D
event received; id: 0ecf87a76b367646d1bdd0a7f6618be115e1507e73c1197ddecbe3ea0532ddb9; pubkey: b8b2410401e3ce0fc10edc3d027668fda4594aaae4d57ca63e8a46a4cf7d3bbe
{
    "id": "0ecf87a76b367646d1bdd0a7f6618be115e1507e73c1197ddecbe3ea0532ddb9",
    "pubkey": "b8b2410401e3ce0fc10edc3d027668fda4594aaae4d57ca63e8a46a4cf7d3bbe",
    "created_at": 1740712483,
    "kind": 3
}
HERE D
event received; id: 670e42d34ef5254de9a25b848268e6bb3836d8ba5a40047105f663876c780fe1; pubkey: ccfd63f996f8dd6995063aecf3d8517671e049ad85e268daa9affc7986487338
{
    "id": "670e42d34ef5254de9a25b848268e6bb3836d8ba5a40047105f663876c780fe1",
    "pubkey": "ccfd63f996f8dd6995063aecf3d8517671e049ad85e268daa9affc7986487338",
    "created_at": 1740712469,
    "kind": 3
}
HERE D
event received; id: 9798cf7218d67e329bce4ac4e70d0819d27acbe1e8fea684827707ea05ac1bf1; pubkey: dace63b00c42e6e017d00dd190a9328386002ff597b841eb5ef91de4f1ce8491
{
    "id": "9798cf7218d67e329bce4ac4e70d0819d27acbe1e8fea684827707ea05ac1bf1",
    "pubkey": "dace63b00c42e6e017d00dd190a9328386002ff597b841eb5ef91de4f1ce8491",
    "created_at": 1740712463,
    "kind": 3
}
HERE D
event received; id: 7c3b7c99768bb12a400b5e614c491c28937fb34f746368196dac0a9492b0cde3; pubkey: f8de74aecd549d3db96bad6a2e24947903fa249eb0c309dbef6d9e7b1deb54cb
{
    "id": "7c3b7c99768bb12a400b5e614c491c28937fb34f746368196dac0a9492b0cde3",
    "pubkey": "f8de74aecd549d3db96bad6a2e24947903fa249eb0c309dbef6d9e7b1deb54cb",
    "created_at": 1740712446,
    "kind": 3
}
HERE D
event received; id: d1e428eacdb88728269dc7c88b6de02823c2061de213b724697553ada944c083; pubkey: 2af2ce2888ad6c4c52fff1ccd356c4868e6ccc561fcf94b813c95b5f4bfcbfd6
{
    "id": "d1e428eacdb88728269dc7c88b6de02823c2061de213b724697553ada944c083",
    "pubkey": "2af2ce2888ad6c4c52fff1ccd356c4868e6ccc561fcf94b813c95b5f4bfcbfd6",
    "created_at": 1740712423,
    "kind": 10000
}
HERE D
event received; id: d68143c10b6d40304958b1587d3f9d17cb098db47548e422db50ff82c75604c9; pubkey: 20d29810d6a5f92b045ade02ebbadc9036d741cc686b00415c42b4236fe4ad2f
{
    "id": "d68143c10b6d40304958b1587d3f9d17cb098db47548e422db50ff82c75604c9",
    "pubkey": "20d29810d6a5f92b045ade02ebbadc9036d741cc686b00415c42b4236fe4ad2f",
    "created_at": 1740712416,
    "kind": 3
}
HERE D
event received; id: 0f38667629fe538c3a3b47c213a9c657baa026868e3092059eb51febefac6c3d; pubkey: dbf377b7e71855303fc48a8b1fee079ff9107af6d7a59c89236a9bce37ee9e19
{
    "id": "0f38667629fe538c3a3b47c213a9c657baa026868e3092059eb51febefac6c3d",
    "pubkey": "dbf377b7e71855303fc48a8b1fee079ff9107af6d7a59c89236a9bce37ee9e19",
    "created_at": 1740712380,
    "kind": 3
}
HERE D
event received; id: 789fb6604fc67fe2605dc382da18e38d26d69ab373e5463d4b156c588cabee8f; pubkey: 31a35caea7c5361b9f3ed664275623d0d08e7c447b6c857f0fb012594e224c54
{
    "id": "789fb6604fc67fe2605dc382da18e38d26d69ab373e5463d4b156c588cabee8f",
    "pubkey": "31a35caea7c5361b9f3ed664275623d0d08e7c447b6c857f0fb012594e224c54",
    "created_at": 1740712257,
    "kind": 3
}
HERE D
event received; id: 5e52693b25abb25516c49b862debb3e31bfeb7c7cb9a7ec8a7e941a2bed87161; pubkey: 0f6ad7e156bc6e410035cd6dff0ea69e15d22a1c85e84cad4b8ac5affe6459df
{
    "id": "5e52693b25abb25516c49b862debb3e31bfeb7c7cb9a7ec8a7e941a2bed87161",
    "pubkey": "0f6ad7e156bc6e410035cd6dff0ea69e15d22a1c85e84cad4b8ac5affe6459df",
    "created_at": 1740712221,
    "kind": 3
}
HERE D
event received; id: e6d82b48df64c862e8cc06bee9283dd8a66ff5554d0ab7484aba1f92aab4d5eb; pubkey: 2850567c8df0948241cb28309dad1cb84f74e4da7eb2c515eeb2bc0883c026bf
{
    "id": "e6d82b48df64c862e8cc06bee9283dd8a66ff5554d0ab7484aba1f92aab4d5eb",
    "pubkey": "2850567c8df0948241cb28309dad1cb84f74e4da7eb2c515eeb2bc0883c026bf",
    "created_at": 1740712203,
    "kind": 3
}
HERE D
event received; id: b58f3d225cc1b7e861543ac47325628c99d15000d2903643a5b527659a82ae09; pubkey: 23431e706546b55ef36b36a26a33201a95c062b1d5e7bd0c7cbea3153862d1d3
{
    "id": "b58f3d225cc1b7e861543ac47325628c99d15000d2903643a5b527659a82ae09",
    "pubkey": "23431e706546b55ef36b36a26a33201a95c062b1d5e7bd0c7cbea3153862d1d3",
    "created_at": 1740712168,
    "kind": 3
}
HERE D
event received; id: 10d96ea099c52d46d1aae9cc826c0a1926bc590a0a7b69fffb75e5088c22bcee; pubkey: 938186fe42d03106c87d84b14a9b04228d27b4c0c1ea9d0d458499dab70074d6
{
    "id": "10d96ea099c52d46d1aae9cc826c0a1926bc590a0a7b69fffb75e5088c22bcee",
    "pubkey": "938186fe42d03106c87d84b14a9b04228d27b4c0c1ea9d0d458499dab70074d6",
    "created_at": 1740712149,
    "kind": 3
}
HERE D
event received; id: f336c6d1443f0660b331f1c458657a3775ce0e245ccd36fab4ad8f8c1f841c59; pubkey: 64533e16035f1bea95faa0a8106ba97bf100a9ff27182befc0eac94f39bf19c0
{
    "id": "f336c6d1443f0660b331f1c458657a3775ce0e245ccd36fab4ad8f8c1f841c59",
    "pubkey": "64533e16035f1bea95faa0a8106ba97bf100a9ff27182befc0eac94f39bf19c0",
    "created_at": 1740712127,
    "kind": 3
}
HERE D
event received; id: cb4cf54db182697d83d8943b8e9fdebbdda678bcc46abce819ef5580e051002d; pubkey: 5beb861a2d7f63fca94344f36b29ee60e3fac8282c596fe5b0276dd81741e03a
{
    "id": "cb4cf54db182697d83d8943b8e9fdebbdda678bcc46abce819ef5580e051002d",
    "pubkey": "5beb861a2d7f63fca94344f36b29ee60e3fac8282c596fe5b0276dd81741e03a",
    "created_at": 1740712115,
    "kind": 3
}
HERE D
event received; id: 532824bc70910b09490df8e4bb10e1a03730867f350d7dc45f888445ed63c6f8; pubkey: b4e17ff04b6efd7b971a9e83144b8608ff292355643b33d0aafdcb59bf01a3fd
{
    "id": "532824bc70910b09490df8e4bb10e1a03730867f350d7dc45f888445ed63c6f8",
    "pubkey": "b4e17ff04b6efd7b971a9e83144b8608ff292355643b33d0aafdcb59bf01a3fd",
    "created_at": 1740712067,
    "kind": 3
}
HERE D
event received; id: b8a23469c580fbe15ea1b375e789ffaf4a81e7d9e8579d6bc884841c54f7b93a; pubkey: 17b7682aba03b043f507d791c9f347ab05a01e60e3a875bc5fe0b4be59f55ed1
{
    "id": "b8a23469c580fbe15ea1b375e789ffaf4a81e7d9e8579d6bc884841c54f7b93a",
    "pubkey": "17b7682aba03b043f507d791c9f347ab05a01e60e3a875bc5fe0b4be59f55ed1",
    "created_at": 1740712047,
    "kind": 3
}
HERE D
event received; id: 43419555ba0bea173dab92a3bdb590ea45350788029cfa215743db341970a49b; pubkey: f4d89779148ccd245c8d50914a284fd62d97cb0fb68b797a70f24a172b522db9
{
    "id": "43419555ba0bea173dab92a3bdb590ea45350788029cfa215743db341970a49b",
    "pubkey": "f4d89779148ccd245c8d50914a284fd62d97cb0fb68b797a70f24a172b522db9",
    "created_at": 1740712032,
    "kind": 3
}
HERE D
event received; id: 20d287828ab05c46c2e9b1858cf0e1d3aa94c3dbfd8d61a4861b0e205cc76e45; pubkey: 059a51695dc1342075d716304f1f5bc9f647a61705b4bb150e624233088dfae7
{
    "id": "20d287828ab05c46c2e9b1858cf0e1d3aa94c3dbfd8d61a4861b0e205cc76e45",
    "pubkey": "059a51695dc1342075d716304f1f5bc9f647a61705b4bb150e624233088dfae7",
    "created_at": 1740712026,
    "kind": 10000
}
HERE D
event received; id: e47e52e563e26f312b597e9214194d15fb3a79a6812f8627762f560c012b01c4; pubkey: 059a51695dc1342075d716304f1f5bc9f647a61705b4bb150e624233088dfae7
{
    "id": "e47e52e563e26f312b597e9214194d15fb3a79a6812f8627762f560c012b01c4",
    "pubkey": "059a51695dc1342075d716304f1f5bc9f647a61705b4bb150e624233088dfae7",
    "created_at": 1740712026,
    "kind": 3
}
HERE D
event received; id: 756829e79c2cb6ff710e688e9fb470b7951cd48570b1124ee843f24323650a48; pubkey: 707bb829c96ea4c1fe2fe9b6b0ca6aabb3c2fb6cf18cf42c9c0e6431deacff75
{
    "id": "756829e79c2cb6ff710e688e9fb470b7951cd48570b1124ee843f24323650a48",
    "pubkey": "707bb829c96ea4c1fe2fe9b6b0ca6aabb3c2fb6cf18cf42c9c0e6431deacff75",
    "created_at": 1740712006,
    "kind": 3
}
HERE D
event received; id: 3ac5320a6fd0fa7f453a0af674b7ff9f67034ed185a12acfd6ea54e851a9abe7; pubkey: e4a51cb4730706d59cb75f05fdbce7378efd93c99a5808e60b371f77235ef1e4
{
    "id": "3ac5320a6fd0fa7f453a0af674b7ff9f67034ed185a12acfd6ea54e851a9abe7",
    "pubkey": "e4a51cb4730706d59cb75f05fdbce7378efd93c99a5808e60b371f77235ef1e4",
    "created_at": 1740711978,
    "kind": 3
}
HERE D
event received; id: b71e20630cdeff36958c8bdae0f7bb437593883db95dd67515db0df0f9125d51; pubkey: 7103e17a686c6729a150f7c64d05fce4d315743f1f82e4d9184107c142432676
{
    "id": "b71e20630cdeff36958c8bdae0f7bb437593883db95dd67515db0df0f9125d51",
    "pubkey": "7103e17a686c6729a150f7c64d05fce4d315743f1f82e4d9184107c142432676",
    "created_at": 1740711921,
    "kind": 3
}
HERE D
event received; id: a97f6636113ce61405043b5ca78e0bf5d8b905b7255257ca21f70fea9d17e831; pubkey: df1f66f32a199e3a616c10ce8131dc4ca468a5c709e39ef774e4f0a775b356de
{
    "id": "a97f6636113ce61405043b5ca78e0bf5d8b905b7255257ca21f70fea9d17e831",
    "pubkey": "df1f66f32a199e3a616c10ce8131dc4ca468a5c709e39ef774e4f0a775b356de",
    "created_at": 1740711887,
    "kind": 3
}
HERE D
event received; id: c4e15d56bdb5d4a30450b894f48dd4007d0b88b58dfc90879594d11076c84f60; pubkey: 8bad797ad2e63369c8ff2fbab6b0b2aed4b1b429593c13729761623f8461b4bc
{
    "id": "c4e15d56bdb5d4a30450b894f48dd4007d0b88b58dfc90879594d11076c84f60",
    "pubkey": "8bad797ad2e63369c8ff2fbab6b0b2aed4b1b429593c13729761623f8461b4bc",
    "created_at": 1740711856,
    "kind": 3
}
HERE D
event received; id: 205083b9791890e58ecd2e2c72bdd730b9bb982c4d8fb98346178a34e3a5fccf; pubkey: de5969e20ca9ebc2cf99af428feb9956ab535774f10b8d89736382c83d736f09
{
    "id": "205083b9791890e58ecd2e2c72bdd730b9bb982c4d8fb98346178a34e3a5fccf",
    "pubkey": "de5969e20ca9ebc2cf99af428feb9956ab535774f10b8d89736382c83d736f09",
    "created_at": 1740711734,
    "kind": 3
}
HERE D
event received; id: 6b0843ac58c7501e2e15019514b21758c3d2821cc0765882d47c5240795d74ee; pubkey: 055527847617f8d9f14bf574223efc7be8745c7b9517f91772453514dd3ffd18
{
    "id": "6b0843ac58c7501e2e15019514b21758c3d2821cc0765882d47c5240795d74ee",
    "pubkey": "055527847617f8d9f14bf574223efc7be8745c7b9517f91772453514dd3ffd18",
    "created_at": 1740711717,
    "kind": 3
}
HERE D
event received; id: c2b02e30cee63212e5d22c01744048f69c7b1a1062ce60ae14c42e707120a8ce; pubkey: 190ff173c9fa8e1ae93b4fdda5963387383543f537dab2e02cc4c10c92a43b9a
{
    "id": "c2b02e30cee63212e5d22c01744048f69c7b1a1062ce60ae14c42e707120a8ce",
    "pubkey": "190ff173c9fa8e1ae93b4fdda5963387383543f537dab2e02cc4c10c92a43b9a",
    "created_at": 1740711691,
    "kind": 3
}
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
HERE D
event received; id: d5530558b361d64a63bc4c709f51f9298f997b667a95ff8dfc55a5706b91aa5e; pubkey: 196b54b0f85f9dbd68cf2c53bb80c8693df421367519f265a2c8a9b3b11291ba
{
    "id": "d5530558b361d64a63bc4c709f51f9298f997b667a95ff8dfc55a5706b91aa5e",
    "pubkey": "196b54b0f85f9dbd68cf2c53bb80c8693df421367519f265a2c8a9b3b11291ba",
    "created_at": 1740711676,
    "kind": 3
}
HERE D
event received; id: 5263bea38526740e21ddf35cfbd6d1fd1726fefadd4c0c2ec11b46c53196dfed; pubkey: a45e69312561dfffe69258778a9bf4c5db01d33ad284d2080fd4d4ab7cc5c09b
{
    "id": "5263bea38526740e21ddf35cfbd6d1fd1726fefadd4c0c2ec11b46c53196dfed",
    "pubkey": "a45e69312561dfffe69258778a9bf4c5db01d33ad284d2080fd4d4ab7cc5c09b",
    "created_at": 1740711646,
    "kind": 3
}
HERE D
event received; id: 2a757ddaa24bdd10bb69a707c93013171285692a4064164e3961c0d4c82cda49; pubkey: 9f8535464090dfa3973f5ff626f8090ba9e6fc9281bbed0a53b80370debef07e
{
    "id": "2a757ddaa24bdd10bb69a707c93013171285692a4064164e3961c0d4c82cda49",
    "pubkey": "9f8535464090dfa3973f5ff626f8090ba9e6fc9281bbed0a53b80370debef07e",
    "created_at": 1740711636,
    "kind": 3
}
HERE D
event received; id: 6706a157927bca2393f810d1c0eed9a9ffc7b4006ab8e190ffea7c5a594fcd87; pubkey: a8f8ceb852ad616163020b86234c59609c882d2bec051d6f33597d7fc1fea489
{
    "id": "6706a157927bca2393f810d1c0eed9a9ffc7b4006ab8e190ffea7c5a594fcd87",
    "pubkey": "a8f8ceb852ad616163020b86234c59609c882d2bec051d6f33597d7fc1fea489",
    "created_at": 1740711419,
    "kind": 10000
}
HERE D
event received; id: 142050628ecd8a7ee395fe441817c77e31ccb69c4716a53401601743e67827c7; pubkey: ccdabb13d837719490690b7a897c778a9be24a15067b01d516b882c0887002ec
{
    "id": "142050628ecd8a7ee395fe441817c77e31ccb69c4716a53401601743e67827c7",
    "pubkey": "ccdabb13d837719490690b7a897c778a9be24a15067b01d516b882c0887002ec",
    "created_at": 1740711376,
    "kind": 3
}
HERE D
event received; id: e161481edc7357a8a0331607333d93238c0a26e58b746c63febd3fe2976083d9; pubkey: 5ca4c90438f65265b5062421af8c291911f0e633c8a020495ed2ccd4ef7a42ca
{
    "id": "e161481edc7357a8a0331607333d93238c0a26e58b746c63febd3fe2976083d9",
    "pubkey": "5ca4c90438f65265b5062421af8c291911f0e633c8a020495ed2ccd4ef7a42ca",
    "created_at": 1740711364,
    "kind": 3
}
HERE D
event received; id: b537f522d0b57e151fe0bc979f79b9769c863dbe924b14fedb9ea3f69ed2eb9a; pubkey: ffbb1c5748f93fe48768b493b4117b6a4776de34a2ae78dfb373fe8794510560
{
    "id": "b537f522d0b57e151fe0bc979f79b9769c863dbe924b14fedb9ea3f69ed2eb9a",
    "pubkey": "ffbb1c5748f93fe48768b493b4117b6a4776de34a2ae78dfb373fe8794510560",
    "created_at": 1740711316,
    "kind": 10000
}
HERE D
event received; id: 8e3233d0998499f0d562bd63c9f93c9a66876120bdb75f7d71d2d22cd8ae6faf; pubkey: 9e7700f16afbc48053bbfca6792797de00e74d2466b84311ccd4fb32f88ffef6
{
    "id": "8e3233d0998499f0d562bd63c9f93c9a66876120bdb75f7d71d2d22cd8ae6faf",
    "pubkey": "9e7700f16afbc48053bbfca6792797de00e74d2466b84311ccd4fb32f88ffef6",
    "created_at": 1740711308,
    "kind": 3
}
HERE D
event received; id: 64844961bba3dc0b8b172dd80f95647f7da49b9f8088306e875795db16f849c9; pubkey: bbd40ebcce1c2ef2cd6eb0750b56beb5b159f76bc986af31fe6907395a670d9b
{
    "id": "64844961bba3dc0b8b172dd80f95647f7da49b9f8088306e875795db16f849c9",
    "pubkey": "bbd40ebcce1c2ef2cd6eb0750b56beb5b159f76bc986af31fe6907395a670d9b",
    "created_at": 1740711305,
    "kind": 3
}
HERE D
event received; id: ab9d7771316977c1e95c7411a5f6a7e26fb9d87870f26285e4539e25b168a38d; pubkey: 623ed218de81311783656783d6ce690b521a89c4dc09f28962e5bfd4fa549249
{
    "id": "ab9d7771316977c1e95c7411a5f6a7e26fb9d87870f26285e4539e25b168a38d",
    "pubkey": "623ed218de81311783656783d6ce690b521a89c4dc09f28962e5bfd4fa549249",
    "created_at": 1740711300,
    "kind": 3
}
HERE D
event received; id: a8ebf41d0d9f6db90a832dc636660f0dc15d24be13e8ad364fed8c782b050771; pubkey: f64f55b01b75ac21bd2c604b7f56d5a25fef1cdc58e126637b97a4ec6786904f
{
    "id": "a8ebf41d0d9f6db90a832dc636660f0dc15d24be13e8ad364fed8c782b050771",
    "pubkey": "f64f55b01b75ac21bd2c604b7f56d5a25fef1cdc58e126637b97a4ec6786904f",
    "created_at": 1740711273,
    "kind": 3
}
HERE D
event received; id: ae0bea6e4c049cec0978362a512a39fce9f11d6ff7e7099835bf1719d7bde1e0; pubkey: e172a0c36c46cba65b464d322003e166d7a88402b0898cef09243411906eb849
{
    "id": "ae0bea6e4c049cec0978362a512a39fce9f11d6ff7e7099835bf1719d7bde1e0",
    "pubkey": "e172a0c36c46cba65b464d322003e166d7a88402b0898cef09243411906eb849",
    "created_at": 1740711268,
    "kind": 3
}
HERE D
event received; id: 1c440976998c1efe414940fd53d9fec1da82c652d42065a065b5ff4e1f80931a; pubkey: 515aeadb38805e57c967dcf407a5a304db8fa3678f251eabc4aa9f3af0c827a5
{
    "id": "1c440976998c1efe414940fd53d9fec1da82c652d42065a065b5ff4e1f80931a",
    "pubkey": "515aeadb38805e57c967dcf407a5a304db8fa3678f251eabc4aa9f3af0c827a5",
    "created_at": 1740711242,
    "kind": 3
}
HERE D
event received; id: 47703032a67dc9bf3b0aab00a25e1fbb148e593be691c16ff0efe8b33484dff7; pubkey: 991a6ba278e2df53cedd78af589602454f355f9ae08fab8390c457aa431aaae9
{
    "id": "47703032a67dc9bf3b0aab00a25e1fbb148e593be691c16ff0efe8b33484dff7",
    "pubkey": "991a6ba278e2df53cedd78af589602454f355f9ae08fab8390c457aa431aaae9",
    "created_at": 1740711239,
    "kind": 3
}
HERE D
event received; id: 069359c48f5eb4a140ba119b3c027c65bfc84008bdecb77153c902e77f8e4dca; pubkey: ff6fff69f841691ec51ca4ba3f750c81f19ee4abc38d0a0e27b87c13c77c815e
{
    "id": "069359c48f5eb4a140ba119b3c027c65bfc84008bdecb77153c902e77f8e4dca",
    "pubkey": "ff6fff69f841691ec51ca4ba3f750c81f19ee4abc38d0a0e27b87c13c77c815e",
    "created_at": 1740711227,
    "kind": 3
}
HERE D
event received; id: 1da763f4f13a0f722eee9ab8004beccbf3381e4a85f363d2fb49fd3e2795e2ce; pubkey: c7d141f05e3d8fcfa4c90d15993566c582361bc852fa780de0bf345557ac6001
{
    "id": "1da763f4f13a0f722eee9ab8004beccbf3381e4a85f363d2fb49fd3e2795e2ce",
    "pubkey": "c7d141f05e3d8fcfa4c90d15993566c582361bc852fa780de0bf345557ac6001",
    "created_at": 1740711217,
    "kind": 3
}
HERE D
event received; id: e187cdf101994e8d5ec0674919202c1443f61594add31d8e0e75424f619953e9; pubkey: 076d48a6f545744b62f9788257040fd28e88aebb1d44809ba5289bc5ff05bf49
{
    "id": "e187cdf101994e8d5ec0674919202c1443f61594add31d8e0e75424f619953e9",
    "pubkey": "076d48a6f545744b62f9788257040fd28e88aebb1d44809ba5289bc5ff05bf49",
    "created_at": 1740711207,
    "kind": 3
}
HERE D
event received; id: a23780302a7b453f4ab924554b25aecc00cc26858e50efe09092976e3936d515; pubkey: 8919726d156773af4239707472e679e7e6decf8ff6dde9160af6d947d5722139
{
    "id": "a23780302a7b453f4ab924554b25aecc00cc26858e50efe09092976e3936d515",
    "pubkey": "8919726d156773af4239707472e679e7e6decf8ff6dde9160af6d947d5722139",
    "created_at": 1740711204,
    "kind": 3
}
HERE D
event received; id: 2fe6c13139beb6c5df83c7204362696af7b60f839dc91581e34d90cd97c3d302; pubkey: ff6fff69f841691ec51ca4ba3f750c81f19ee4abc38d0a0e27b87c13c77c815e
{
    "id": "2fe6c13139beb6c5df83c7204362696af7b60f839dc91581e34d90cd97c3d302",
    "pubkey": "ff6fff69f841691ec51ca4ba3f750c81f19ee4abc38d0a0e27b87c13c77c815e",
    "created_at": 1740711174,
    "kind": 10000
}
HERE D
event received; id: 1a8b39edeccc3050ffd8f6f799c29e97b64950287833d2fce55890dacf1fbe2c; pubkey: ff1d65e78ac81592fa7ebb9ebfc9f163108e0bef80f71658c25497ea383d4957
{
    "id": "1a8b39edeccc3050ffd8f6f799c29e97b64950287833d2fce55890dacf1fbe2c",
    "pubkey": "ff1d65e78ac81592fa7ebb9ebfc9f163108e0bef80f71658c25497ea383d4957",
    "created_at": 1740711160,
    "kind": 3
}
HERE D
event received; id: ee62e7ba8bdc03b47f6c044e46883fafe540801965c07bcf76ae5e408c4d7528; pubkey: 940c9746b818c1cae337f6487eee130dd7c0c9c00fa56e46a0d938e966431977
{
    "id": "ee62e7ba8bdc03b47f6c044e46883fafe540801965c07bcf76ae5e408c4d7528",
    "pubkey": "940c9746b818c1cae337f6487eee130dd7c0c9c00fa56e46a0d938e966431977",
    "created_at": 1740711127,
    "kind": 3
}
HERE D
event received; id: 630b018858c9ee86c922952e56060917a1e9ba185d576656d28d068be7986d8a; pubkey: ccdabb13d837719490690b7a897c778a9be24a15067b01d516b882c0887002ec
{
    "id": "630b018858c9ee86c922952e56060917a1e9ba185d576656d28d068be7986d8a",
    "pubkey": "ccdabb13d837719490690b7a897c778a9be24a15067b01d516b882c0887002ec",
    "created_at": 1740711083,
    "kind": 10000
}
HERE D
event received; id: cfa97b1d8958f9238b733bc4f1e4d53b8382081effd2a9adc8ca884e37baeec0; pubkey: 87e33cd2efa4c29dfd1ebb9007c97d49802056939b4970d228c15d1734fea59c
{
    "id": "cfa97b1d8958f9238b733bc4f1e4d53b8382081effd2a9adc8ca884e37baeec0",
    "pubkey": "87e33cd2efa4c29dfd1ebb9007c97d49802056939b4970d228c15d1734fea59c",
    "created_at": 1740711075,
    "kind": 3
}
HERE D
event received; id: 8a98f70c8ade7f3837981d8a77e987be0d6a51cbaf2f4db0d3607b2c7182d82f; pubkey: 724e69c292696a546a7674aa775297db77ec97f347cbbb62b7895b230cfc5469
{
    "id": "8a98f70c8ade7f3837981d8a77e987be0d6a51cbaf2f4db0d3607b2c7182d82f",
    "pubkey": "724e69c292696a546a7674aa775297db77ec97f347cbbb62b7895b230cfc5469",
    "created_at": 1740711067,
    "kind": 3
}
HERE D
event received; id: 7178352ba5ba8a2337868b8c39401105015352388071b8305fc5d03cbba99cc4; pubkey: 66df60562d939ada8612436489945a4ecf1d62346b3d9478dea8a338f3203c64
{
    "id": "7178352ba5ba8a2337868b8c39401105015352388071b8305fc5d03cbba99cc4",
    "pubkey": "66df60562d939ada8612436489945a4ecf1d62346b3d9478dea8a338f3203c64",
    "created_at": 1740711050,
    "kind": 3
}
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
File written successfully.
HERE D
event received; id: 8358e254df1a8a49e41ba39a2cc5d6ae3ce984974aff221cf91af023afbe5578; pubkey: a619eb76964b870a0edad133db1b92183b6533332de555a033ada4e311d75935
{
    "id": "8358e254df1a8a49e41ba39a2cc5d6ae3ce984974aff221cf91af023afbe5578",
    "pubkey": "a619eb76964b870a0edad133db1b92183b6533332de555a033ada4e311d75935",
    "created_at": 1740724882,
    "kind": 3
}
File written successfully.
^XHERE D
event received; id: 718a5ca97033169b5bc696d55e5e519879668a22839e641a46c3aa525747865d; pubkey: e7bf8dad360828f0289b7b4bea1a1bd28eb6d4d6522fa17f957e0dfb839ef3db
{
    "id": "718a5ca97033169b5bc696d55e5e519879668a22839e641a46c3aa525747865d",
    "pubkey": "e7bf8dad360828f0289b7b4bea1a1bd28eb6d4d6522fa17f957e0dfb839ef3db",
    "created_at": 1740724812,
    "kind": 1
}
File written successfully.
HERE D
event received; id: d835b55700e9f55aa1a641ab32d7ca65d9d51dad313a58589b33096c95397ec0; pubkey: 7f0e64b52ef56bec2b588d460fc63125f567db2c014d1ecce806d8d5b4209e2e
{
    "id": "d835b55700e9f55aa1a641ab32d7ca65d9d51dad313a58589b33096c95397ec0",
    "pubkey": "7f0e64b52ef56bec2b588d460fc63125f567db2c014d1ecce806d8d5b4209e2e",
    "created_at": 1740724889,
    "kind": 3
}
File written successfully.
^C
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ cd queue
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -la
total 1908
drwxr-xr-x 2 ubuntu ubuntu 49152 Feb 28 06:41 .
drwxrwxr-x 3 ubuntu ubuntu  4096 Feb 28 06:41 ..
-rw-r--r-- 1 root   root     187 Feb 28 06:41 00000001505e7e48927046e9bbaa728b1f3b511227e2200c578d6e6bb0c77eb9
-rw-r--r-- 1 root   root     187 Feb 28 06:41 00000578eaa84e1cea0d6f0be5cf3f7600bba8b3a2bcc38784fb1c932a239a7f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 00fc93b517e4fd7d8acd139694d85cc879b25540d6a0e3cb247dceaa26934bf8
-rw-r--r-- 1 root   root     187 Feb 28 06:41 0143b2b0de297ed177df0cd3f576ce629e4437773952aa65582a7ca126b5ab13
-rw-r--r-- 1 root   root     183 Feb 28 06:41 01d0bbf9537ef1fd0ddf815f41c1896738f6a3a0f600f51c782b7d8891130d4c
-rw-r--r-- 1 root   root     187 Feb 28 06:41 023b8fa899633ced8beea27eef854faf2ecab412a1dc2e98ee0d96a884314ec3
-rw-r--r-- 1 root   root     183 Feb 28 06:41 02a125efe7cddebadd000efbbdd1c43449e009382618ebf85e931266ea07dbe6
-rw-r--r-- 1 root   root     183 Feb 28 06:41 0332877b413f0c1b4263d2c2b6a7a4a9a7a73329cdb5bb209ec7a230f8ae700f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 03ca4808e6ba72f33e6a27bdcd1b3b2baeb85a97441c2f41ff1c8a29ccf9b400
-rw-r--r-- 1 root   root     183 Feb 28 06:41 055527847617f8d9f14bf574223efc7be8745c7b9517f91772453514dd3ffd18
-rw-r--r-- 1 root   root     187 Feb 28 06:41 059a51695dc1342075d716304f1f5bc9f647a61705b4bb150e624233088dfae7
-rw-r--r-- 1 root   root     187 Feb 28 06:41 068334b2f9cd5e30b43866c4b60bd31234e29be9bc11b06af037ec248df4f7ae
-rw-r--r-- 1 root   root     183 Feb 28 06:41 0695cb75dbb27d935a9b97e1a8b7ccd335076b0ced0ec88aa8d3a3bf129ee74f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 076d48a6f545744b62f9788257040fd28e88aebb1d44809ba5289bc5ff05bf49
-rw-r--r-- 1 root   root     183 Feb 28 06:41 07ffabcd3d17c33e784816e07702830b386373250cacca013cffae55265ca3d3
-rw-r--r-- 1 root   root     183 Feb 28 06:41 0828869029e4ce6b108b5195a0db76fd725a0b8987d028b428a10f5e77f58eba
-rw-r--r-- 1 root   root     187 Feb 28 06:41 085900b71253772a15c266c3f6b53c9b85cb1ff502884597f0b165c7a6d044d0
-rw-r--r-- 1 root   root     183 Feb 28 06:41 087c51f1926f8d3cb4ff45f53a8ee2a8511cfe113527ab0e87f9c5821201a61e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 08f968569f15f1f803466845f954e8b384fee6669aa589c85b860fd3ffe59a09
-rw-r--r-- 1 root   root     183 Feb 28 06:41 098d581e8152957ffd2939d7c2146ec15b54e5fe782beb4ad8425a99faeb60f7
-rw-r--r-- 1 root   root     187 Feb 28 06:41 0b9de7c5e82d26c285690a13cd164149a5a0ee3131b9912e1c0bb36c66b471ab
-rw-r--r-- 1 root   root     183 Feb 28 06:41 0bfa235262029bdd325fb26836679850de294657b8c5ab32ffdc60df71f4a42b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 0e432913100161e8c4c06d554f26f7606a2e71988f2f6575ed165ddc31711594
-rw-r--r-- 1 root   root     183 Feb 28 06:41 0e52122d1eb95cdd8ba5f65815f7d1c9125a8c14d82989eae52ab369eea6c7e4
-rw-r--r-- 1 root   root     183 Feb 28 06:41 0e82ab8bffbb4a955ae2eb98a00ee35b7affbb50844f9f569220a2136fad7024
-rw-r--r-- 1 root   root     183 Feb 28 06:41 0ed58c5d6f9f7481db55178266697e9fa2176f941c67fb243d9f8a39ceb1e97f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 0ef73fe39bee564d2d2074553719eac93d33333e3be257bea207af3ddb18476f
-rw-r--r-- 1 root   root     187 Feb 28 06:41 0f4011159c24a6a53eeea72e1c2e97e0425be8af15e7de397003dd65d9e8d278
-rw-r--r-- 1 root   root     183 Feb 28 06:41 0f6ad7e156bc6e410035cd6dff0ea69e15d22a1c85e84cad4b8ac5affe6459df
-rw-r--r-- 1 root   root     183 Feb 28 06:41 10b6660cb0754bfb89265475d7678359ef45ec52778d14261d17d0d3cb5507df
-rw-r--r-- 1 root   root     187 Feb 28 06:41 11644c547cfc1df9e0169b4e300cdab4cd341b89a9bfeb69f6f16bd78fc20949
-rw-r--r-- 1 root   root     183 Feb 28 06:41 11674b2d321fc24239b02afdf966c32e36594a6282bd7f3d4bcd12438558ab51
-rw-r--r-- 1 root   root     183 Feb 28 06:41 13b8e28e661d5ca60a46477a6192bba342583a9fe55bee3595685262d7bc06a1
-rw-r--r-- 1 root   root     183 Feb 28 06:41 14187df202f8cdf816ee532b170a2b4b323025a981c3c4352e7e50b03730f98b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 14def6dc35a8145127ae2355d84aa2f790ddb3f7241df99d75c4a0216061ebcb
-rw-r--r-- 1 root   root     183 Feb 28 06:41 1525d0589d5bcf7c6193e107e230638bf2190c872f9cf464ef073b78718b5894
-rw-r--r-- 1 root   root     183 Feb 28 06:41 16b8676587c1ddde60b23b27205112a4d5f0ce7bd0414f67476d5eea1502af36
-rw-r--r-- 1 root   root     183 Feb 28 06:41 16d76f262b689bb1a33faa2df954dbe7ac717937fad4765a05ddfae3dac92856
-rw-r--r-- 1 root   root     187 Feb 28 06:41 17538dc2a62769d09443f18c37cbe358fab5bbf981173542aa7c5ff171ed77c4
-rw-r--r-- 1 root   root     183 Feb 28 06:41 17b7682aba03b043f507d791c9f347ab05a01e60e3a875bc5fe0b4be59f55ed1
-rw-r--r-- 1 root   root     183 Feb 28 06:41 181f334d46f8ec615ff12c0c987055ae8dc003a18967205baeeb27d41fe7d9f3
-rw-r--r-- 1 root   root     183 Feb 28 06:41 190ff173c9fa8e1ae93b4fdda5963387383543f537dab2e02cc4c10c92a43b9a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 194c251cd4e3d2296fa92728a1e9c8e8ab93d11554c54f5d376293f4460e06f0
-rw-r--r-- 1 root   root     183 Feb 28 06:41 196b54b0f85f9dbd68cf2c53bb80c8693df421367519f265a2c8a9b3b11291ba
-rw-r--r-- 1 root   root     183 Feb 28 06:41 19bdc906118b0f15277cdd86ee107543e6e11fb6dcd966a16cc81707ec260c1d
-rw-r--r-- 1 root   root     183 Feb 28 06:41 1a276cbcddaca78181323c19c669e3b17dc1ef617faa194c0b925661570dc3ca
-rw-r--r-- 1 root   root     183 Feb 28 06:41 1bf9f239dca1636149bc2f3fc334077ae959ea9607cacf945ef8f8bb227dc5e1
-rw-r--r-- 1 root   root     183 Feb 28 06:41 1d5cfb4ff0ea67387aadd7b3059cf1473fee113642e9c1d6f308404219d9a2ae
-rw-r--r-- 1 root   root     183 Feb 28 06:41 1d7f4f494650b465c1614cbb20c70fc680f6c77d4fca733364ec119960f86652
-rw-r--r-- 1 root   root     183 Feb 28 06:41 1e7c647fffee385f8972634725992c15f7f547fc9b67d52e8d9ae74bc3e0f2c5
-rw-r--r-- 1 root   root     183 Feb 28 06:41 1e95c007310ee7d3347b20ca71415532ca88ea21c963788c215560ac7a03b629
-rw-r--r-- 1 root   root     183 Feb 28 06:41 1ee8e31e6fdc7e9aa48d2e7393d79281f640474f757256ec151bc03c917e45ab
-rw-r--r-- 1 root   root     183 Feb 28 06:41 1f3de76f945ccbc2dd9178fb2486fbfd8aaac5aab21c3a0c687a768ec7444c77
-rw-r--r-- 1 root   root     187 Feb 28 06:41 1f830dd875130b134fbf3f27a69eecd8613a499748a71b5a271a719febae14ed
-rw-r--r-- 1 root   root     183 Feb 28 06:41 1fdaf6a7b5ae61695f61035f1f5a001567936a6f1494b7f10f5b71a0679468ab
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2045369fc115b138d1438f98d3c29916986c9fde6b8203f7ff8699f0faee1c93
-rw-r--r-- 1 root   root     183 Feb 28 06:41 206e580157eae3395cdf954ff30501e16902074656a4b9493f36f896167496b2
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2071e1aac3e21887a3e11b602d30960d504b3883789f79929095e66ec9fb4385
-rw-r--r-- 1 root   root     183 Feb 28 06:41 20a8d4ceb73c968cdd25ffda9b148c9ebe6cc2672b5b8c5f0a6c4b2ee0723b32
-rw-r--r-- 1 root   root     183 Feb 28 06:41 20d29810d6a5f92b045ade02ebbadc9036d741cc686b00415c42b4236fe4ad2f
-rw-r--r-- 1 root   root     187 Feb 28 06:41 20d3acfbd542324fafd9f43c7ac985237ae6531515052af46c641f507bf6e7d8
-rw-r--r-- 1 root   root     183 Feb 28 06:41 20e7c953439e66f3882ab96fe0faa8ba246d6fb12c03b0cb4e2dc4623b8bcb21
-rw-r--r-- 1 root   root     183 Feb 28 06:41 21077167bb124480e19d4bc0a5dc9c0d12d666be5daac823698a351637fe9aee
-rw-r--r-- 1 root   root     183 Feb 28 06:41 215dac4c9672ac5de643563fd642ea5933e6f031abfcad8bd566d8fdcfb983e4
-rw-r--r-- 1 root   root     187 Feb 28 06:41 21d1140c3af9909145bd5fdbad2e9e1e5f58d92a30df5b74c04f7230368bdab4
-rw-r--r-- 1 root   root     183 Feb 28 06:41 21decdbc8c0eab836b2723f395f2bbbb974df0435ad1d91fa539cd335015b4d4
-rw-r--r-- 1 root   root     183 Feb 28 06:41 22050dd3659b568c5cb352b0e81958fb986bd941031a90c74ba7f6d2480c11ea
-rw-r--r-- 1 root   root     183 Feb 28 06:41 232793ce18826c75e3000926a0fbfb3a6abcb2d1306e5306d5ae7f5d710bacb1
-rw-r--r-- 1 root   root     183 Feb 28 06:41 23431e706546b55ef36b36a26a33201a95c062b1d5e7bd0c7cbea3153862d1d3
-rw-r--r-- 1 root   root     187 Feb 28 06:41 25327cb5bf1b9a26d752d7ea17923abca4a52a9490dc3c77ae741694d4aa9651
-rw-r--r-- 1 root   root     183 Feb 28 06:41 260d3a820b7f8de20f4972725999b1af88b0cc5554ca38f9681c8d657e043cc3
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2695efd1710f21c6f90bb11c9465322295f6aeed413d6df46f1154b0d944a891
-rw-r--r-- 1 root   root     187 Feb 28 06:41 26e9ab7f2c8d2ac37903af90be2a1aef6f2acbd699f4f259caac7ad33d2000c1
-rw-r--r-- 1 root   root     183 Feb 28 06:41 272fc988e582a377bcc3580d784dfd68aaa037a87b476d7aca1d86899f4c5e8e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 27445c6cff2144aa2feec31dd590bb663e0d397d13ae02ff77b0eb71b52d689e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2755b492fbb0ffa5c327819a4699c7001341b9f7826a8367273549f1a58a4831
-rw-r--r-- 1 root   root     187 Feb 28 06:41 27e9c50380da4e2f1d081e25070b8e069fbdd5e6c63c7c2f6f83bb7b12591812
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2850338cc759306f832cc2d6445f5fee8a6a11c9971596136aae11151ae7691b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2850567c8df0948241cb28309dad1cb84f74e4da7eb2c515eeb2bc0883c026bf
-rw-r--r-- 1 root   root     183 Feb 28 06:41 28a697d690ce583b3a6b59ff826e7720ead55dd1bcd10980c5fecdbae51c814c
-rw-r--r-- 1 root   root     183 Feb 28 06:41 294fa9e6631bd404d39b3e4d5712e135e6f4d8b4c37e7f9dd7912c7af11e354a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 29ab2a70793af289bcd906df3de0cd31b1d3d686ba2baffb6a3933e4e65ce93f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2a52dbc35240b2d407743ef53047b5815425dded3798b710a9b7cbb28c2a7175
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2a5da67267175025bf185b8b70e5522a7a90886bef82b0b6d8ea9d6538ebd01b
-rw-r--r-- 1 root   root     187 Feb 28 06:41 2af2ce2888ad6c4c52fff1ccd356c4868e6ccc561fcf94b813c95b5f4bfcbfd6
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2b3f55d55583c9dbfcc978ed77120577522cd77e481a2017d5247b4ce78f8b3e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2bfec85a63b122da047e57b18beeb678d80099fe3d9123d5ee15eb73af932171
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2de0ffa0ac235ff45fa4ccb944cd3f33f79ff5d21fcf95f01f99516bb6bb72cc
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2dfbe5cb955e4018b76e6542a3b8782144dd5f5735914db9921fd24c3b3d106d
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2e41cb1b64ad259378aa70b7d6dd8c35ddda552a08c424fab78772a82803aa3e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2ec6b656dee82aca76d4d8f525358878efb427fcd0939f133f710af5f044e156
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2efaa715bbb46dd5be6b7da8d7700266d11674b913b8178addb5c2e63d987331
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2f28d75406a3867e2fd3b8285233f2514c84ec2be245f6dcaeb4ca32768731ba
-rw-r--r-- 1 root   root     183 Feb 28 06:41 2f5de0003db84ecd5449128350c66c7fb63e9d02b250d84af84f463e2f9bcef1
-rw-r--r-- 1 root   root     183 Feb 28 06:41 31a35caea7c5361b9f3ed664275623d0d08e7c447b6c857f0fb012594e224c54
-rw-r--r-- 1 root   root     183 Feb 28 06:41 32481673e905f525a25fe43d93ccde86b2c3b50a257bed5a8084f113fdcbe81b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 332c8ceb5c4a412c0bcb24e3e806bd0659a5b8eb984ada517c77e2bf1d12f599
-rw-r--r-- 1 root   root     183 Feb 28 06:41 335d9273156fd83495da779327158676538700ae2eee4c92ed99509b4b0aa3ec
-rw-r--r-- 1 root   root     183 Feb 28 06:41 3436c6f3e5c10513a959fc7ed7bcfbdf3241788cfa517f892650f4829fe226a4
-rw-r--r-- 1 root   root     183 Feb 28 06:41 353e1e9782fba614354a6fbc82ace480d35f7cdbb1308bf97a6b4edc25cf265c
-rw-r--r-- 1 root   root     183 Feb 28 06:41 36141fcd15aaff25436cd53348c131e7409a6b14476565938711a6a0f9f219b0
-rw-r--r-- 1 root   root     183 Feb 28 06:41 3721cb871a61152858868b42334b9aeaf279b2e2256881ab942c739a81748ade
-rw-r--r-- 1 root   root     187 Feb 28 06:41 378562cd20849dce3b74d85bc3e72c84f8ab59e94aa29650e1ad1b47a6fc6773
-rw-r--r-- 1 root   root     183 Feb 28 06:41 38c4a72dc3d336e73b1f35041a3804d60f239ab07a26ee4107beccb88b479bff
-rw-r--r-- 1 root   root     183 Feb 28 06:41 3958e8666a2fbd8136de408f5d38c059823ce373e482cc68abe1b8fc11fe8101
-rw-r--r-- 1 root   root     183 Feb 28 06:41 39864936c435c0988f1abab623cee329f8b0a51b4afbe90c03e55f1ff11e10be
-rw-r--r-- 1 root   root     187 Feb 28 06:41 3acd2707cd916f2758be5622a84a86dcd13e2d1c62d0a1eb5d8a2834395039cc
-rw-r--r-- 1 root   root     183 Feb 28 06:41 3ae4a4ee140b0f16bac0c40f4391eda0d40caf1d7616193d8d0bbe415ec7a597
-rw-r--r-- 1 root   root     183 Feb 28 06:41 3b84f4dff765ba081df73c5e930ab7c5870d31a07bdccf1af7dca3a874abbe7e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 3bf30ed3406875194d74a8d86fb6b47308c440b51fda1fbea2599349545b3c21
-rw-r--r-- 1 root   root     183 Feb 28 06:41 3d18b3d51a69ae1c77370b0df969c25f6962e5c3823a61c78ece22cc6cbcc409
-rw-r--r-- 1 root   root     187 Feb 28 06:41 3dc04334f758bea5a82f896f7670579407b49b1a9f3294d3edeec6d1e9c25673
-rw-r--r-- 1 root   root     183 Feb 28 06:41 3e0f744d54acee8e2c7fea0be2c4cf99c089a4faa83ff7ccc3d0d9f1b59a3463
-rw-r--r-- 1 root   root     183 Feb 28 06:41 3f770d65d3a764a9c5cb503ae123e62ec7598ad035d836e2a810f3877a745b24
-rw-r--r-- 1 root   root     183 Feb 28 06:41 408f636bd26fcc5f29889033b447cb2411f60ab1b8a5fc8cb3842dab758fdeb5
-rw-r--r-- 1 root   root     183 Feb 28 06:41 416335ae6302946042249279d96cae8a33337baae859b6f962618d3c9e520a63
-rw-r--r-- 1 root   root     183 Feb 28 06:41 41ed70e7b2b70c6ebf00ec2547c811bf1bee9ffd5a6ff94469b48e48e5bea524
-rw-r--r-- 1 root   root     183 Feb 28 06:41 41f07bc3191c806ab29af19ce16beca62237fb3339ce25fd9ef3d471dc11a444
-rw-r--r-- 1 root   root     187 Feb 28 06:41 4613d320aa8802792a5a2f3349a2207e32f671e8c0400580ddc30eda6fddf62a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 468e10ef779fe9d2b34fd6c71b27dd1f30bcb71ae612d963d7823e2b9e3f41ed
-rw-r--r-- 1 root   root     183 Feb 28 06:41 47f97d4e0a640c8a963d3fa71d9f0a6aad958afa505fefdedd6d529ef4122ef3
-rw-r--r-- 1 root   root     183 Feb 28 06:41 480ec1a7516406090dc042ddf67780ef30f26f3a864e83b417c053a5a611c838
-rw-r--r-- 1 root   root     183 Feb 28 06:41 48b81f45ee29cffcca68876118944ab5f571fa4a1aa2e6a1670265ed1396a96e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 4ad9a2700fedcd04fec7b1d2add3fa61548b798a6875aa9747086040cff86bdc
-rw-r--r-- 1 root   root     183 Feb 28 06:41 4ae623ae496fe596a054745262a231f6864ec5742b5f137007f984c73d4d0d4d
-rw-r--r-- 1 root   root     183 Feb 28 06:41 4b3909d443f4799c2d1e0208a4105a39c3b5fd962eef514f24ca3b5eece93411
-rw-r--r-- 1 root   root     183 Feb 28 06:41 4bf3a313782dc9576f21efb3bd3d61387d0d5913052207e90306a741bf6af7d5
-rw-r--r-- 1 root   root     183 Feb 28 06:41 4cf5ff39fd37b61f1fc66365e5ab985f88075eff14644648f790e9b8d334813f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 4d0a4d726627e2c411be89cff4c56221eaed1b6fceb17fd881b0e00c0332e6f2
-rw-r--r-- 1 root   root     183 Feb 28 06:41 4d4401ec1241c7b89ee08d74a3246ac4f0845656d735a8a4f8fdadfbb63b9503
-rw-r--r-- 1 root   root     183 Feb 28 06:41 4d4ab737e2fbb5af0fd590b4b7e8c6fe76d3a02a9791ef7fdacf601f9e50fad8
-rw-r--r-- 1 root   root     183 Feb 28 06:41 4eb88310d6b4ed95c6d66a395b3d3cf559b85faec8f7691dafd405a92e055d6d
-rw-r--r-- 1 root   root     183 Feb 28 06:41 4f6009380da927ea4ed6f5f36c93198bd46c1b22d2ac8b6d1a1306fd2731b015
-rw-r--r-- 1 root   root     183 Feb 28 06:41 4f7bfcc755b99a18a4896a773a727db65be4ea1df3a985e3f330f5141ca95b9e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 50809a53fef95904513a840d4082a92b45cd5f1b9e436d9d2b92a89ce091f164
-rw-r--r-- 1 root   root     183 Feb 28 06:41 508cdbf6cf797d7eb38e1b54c136935cccf444c614643f18bdf51e508f717552
-rw-r--r-- 1 root   root     183 Feb 28 06:41 515aeadb38805e57c967dcf407a5a304db8fa3678f251eabc4aa9f3af0c827a5
-rw-r--r-- 1 root   root     183 Feb 28 06:41 55ebc6f8ae3b0718f07c06172c026d5684fc89203bd35f0412d07eddfe64b762
-rw-r--r-- 1 root   root     186 Feb 28 06:41 56d4b3d6310fadb7294b7f041aab469c5ffc8991b1b1b331981b96a246f6ae65
-rw-r--r-- 1 root   root     183 Feb 28 06:41 57c99216eb119f4b2682c5820bab272ff302fae89b9e32edb538d0cf6663d1c7
-rw-r--r-- 1 root   root     183 Feb 28 06:41 581089811e7e57dd613b88e537ae5e083db91200224878a68f85a0650fd33609
-rw-r--r-- 1 root   root     187 Feb 28 06:41 58bb49e35000a6d932a3b2521b446db8a197dfa31ab5c16932455e4d4f3ee3d5
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5975800a62bbc5b00284a0f6522420bb65052248909c214e9dfc08543d9a6b7d
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5a0fe5bcb3a975da19dd1bd7ae26157c7252f7fab44192beb2f05246b0c8bbb1
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5a61b7f7fb6474708f95cb2e3d8b2a6ae4b5a1aec65e81225777019b5162148f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5b10cf36b014e41d675310d53c76ca4a41b48e8b67f3808f0f44b575ac043182
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5b30870d76c2ee6b01a6d6c39f2682302fb9378d741e609479d4771d5c811761
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5b4a1d20fef8e42e301caea4b77f2283a685065559fd97f9b154118825e0b10f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5beb861a2d7f63fca94344f36b29ee60e3fac8282c596fe5b0276dd81741e03a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5bfc4134a36c849614bd4c7e15a5cc07ea46711178421bb00a34df9ee4c93afb
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5c9a0f7f1ccfd1542bc08823f9f67ac4eb74b7e10253a8043a035ffa4ef1e92a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5ca4c90438f65265b5062421af8c291911f0e633c8a020495ed2ccd4ef7a42ca
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5d6e3e63e837860d21a3669ed90bde4c4d0fe267fd6c1dfad8ec9ef0ded29fa3
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5de23b9a4fd02ca6a760af19539a5c6ea8576db98f025233384901f5d83005b3
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5f0558f396a1152233360aba4fbd7ae7ee591d11fa6232304b8419a3c313d813
-rw-r--r-- 1 root   root     187 Feb 28 06:41 5f1d434104a2cad55ccee69b106cd4c10977bee01220e63a0bb00e58afd00fed
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5f55785440c7b7e7c7cf975ea4b3428f1f2145a0698361f7f6bb03e9a8a6e3c3
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5f70b9e212c361049290926b498ceab47ff58450c0978e8fd863d8ce435f73a7
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5faf06e3624ed2ae63a4500bfd7c3e40d9efbb21d4b45ba3cdf4fa933025a73c
-rw-r--r-- 1 root   root     183 Feb 28 06:41 5fb7c7d14a60f3be4b4392d9d13be44969f973f38763af36da4eb008e4ae6b05
-rw-r--r-- 1 root   root     187 Feb 28 06:41 6172cd466f0a89976a3e8e7671bd8da1fc31f0e6c96907e6287484f7c87f4a72
-rw-r--r-- 1 root   root     183 Feb 28 06:41 6227dd21ff7b18f59c6f7c2948a9b25023be738160859f045e8ada2de3274303
-rw-r--r-- 1 root   root     183 Feb 28 06:41 62343711e78a30e992d9694af9a8bc3859b0bb81f18b55f66a851fd36ff6ad1f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 623ed218de81311783656783d6ce690b521a89c4dc09f28962e5bfd4fa549249
-rw-r--r-- 1 root   root     183 Feb 28 06:41 62603b373350d977737beca068ba22ca615f499e6214a813cfbaa299f6bc5c2e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 62a1dde77ae9f40ec476841109239f64fa6624d4077ef219479c39031db510b0
-rw-r--r-- 1 root   root     183 Feb 28 06:41 62fdd90f4a5f421508a1fc47115be4850da79ac821f34eca541b98d98c8428e0
-rw-r--r-- 1 root   root     187 Feb 28 06:41 63c0ae0dfab61833c03642e1265ab52eebff6a440063af5c498aa761c0323ab4
-rw-r--r-- 1 root   root     187 Feb 28 06:41 63eaec81ac05f2a4fd01727d7b89690042f30ced1b69bcf6a0533ec1e1cdffbe
-rw-r--r-- 1 root   root     183 Feb 28 06:41 64533e16035f1bea95faa0a8106ba97bf100a9ff27182befc0eac94f39bf19c0
-rw-r--r-- 1 root   root     187 Feb 28 06:41 647d6814fdaf84ae92653788121058bbfd16ed95becb598235310823b63c3001
-rw-r--r-- 1 root   root     183 Feb 28 06:41 6483f131b8f10e1ab879031e6dcfeffb83b5c1141eecfa403e8c3d46bf10577c
-rw-r--r-- 1 root   root     183 Feb 28 06:41 652c551126c714ed92d7eff48d3690866d752bfbd228d9079d1432ee0edf13ed
-rw-r--r-- 1 root   root     183 Feb 28 06:41 658ab960c1cd0f3d141a833cd3c55beadcba045ba17113979392845fdda2ac4d
-rw-r--r-- 1 root   root     183 Feb 28 06:41 6638a33320db5e7de27ca9847f71b219ac367bbbf27709068de684062368d9c8
-rw-r--r-- 1 root   root     183 Feb 28 06:41 66df60562d939ada8612436489945a4ecf1d62346b3d9478dea8a338f3203c64
-rw-r--r-- 1 root   root     183 Feb 28 06:41 66fd9c5c022bbe5b883b86e8a550c7d9c90d28fa244754c4f732e6dfe91fcb58
-rw-r--r-- 1 root   root     183 Feb 28 06:41 670874fa6dd544edc5867763ce793552396aedda1a5fda3a97949f66ab0acfb3
-rw-r--r-- 1 root   root     183 Feb 28 06:41 671a0bd1ec9c8a6efd356aab91448e86a04b2cdb336a1f760eae481884649238
-rw-r--r-- 1 root   root     183 Feb 28 06:41 672bb5365a4ec1a38efb843d9acc648bbc9284da6a631476dd4d7a7992731076
-rw-r--r-- 1 root   root     183 Feb 28 06:41 67e93f2e306ea680e41965fc315bf692b7c67cc0cdd6de0175131f349faca14d
-rw-r--r-- 1 root   root     183 Feb 28 06:41 67eef828df9caa98dfba065cf180ee0b808437aa5ebcad7f8703807644acad61
-rw-r--r-- 1 root   root     187 Feb 28 06:41 6867d899ce6b677b89052602cfe04a165f26bb6a1a6390355f497f9ee5cb0796
-rw-r--r-- 1 root   root     183 Feb 28 06:41 686a8c459873abf9a9038ba0170ab3bf21d1954d13b9454f1cc788779ff4627b
-rw-r--r-- 1 root   root     187 Feb 28 06:41 68df662892eb89aa05cc321215cbafb7a8dcfca2271b9936dd544da4aa174253
-rw-r--r-- 1 root   root     183 Feb 28 06:41 69c39eaad9048f5563d2554f97b09a679484b4b7d7f5f5b88cb88c46d7d1f187
-rw-r--r-- 1 root   root     187 Feb 28 06:41 6a02b7d5d5c1ceec3d0ad28dd71c4cfeebb6397b95fef5cd5032c9223a13d02a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 6a09c9ae14be7dc4eb920d82d50caf7c4e641abbd02d2316008222c96a497246
-rw-r--r-- 1 root   root     183 Feb 28 06:41 6a36c1a62cba047b1cdb93bef316c6617c79816e32b80166c471c30bdb77e526
-rw-r--r-- 1 root   root     183 Feb 28 06:41 6b18bbee6003ea4b9143aa34e6bdf937f414ca67667693065e07bec79dbbf0ca
-rw-r--r-- 1 root   root     183 Feb 28 06:41 6b40797c7e73f7979ace527cce720ce03b51ddd918d6722168382d37f7b8d6c8
-rw-r--r-- 1 root   root     183 Feb 28 06:41 6b4ec98f02e647e01440b473bbd92a7fae21e01b6aa6c65e32db94a36092272e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 6bb0082dfd02be52ba7d532cf29dcf82977df9eb10483ccf71efc6f00146ed0a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 6c516eefe1dfc59598eb79162f909abead01062d7f2bb2e89b87fde05d928e2f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 6da8c1b9c6d1ceef78a31dbc7acbb9bd8ef35f319861acec25031b49049c08fb
-rw-r--r-- 1 root   root     183 Feb 28 06:41 6daf8a9e085339e242cb57b2c09e06383a32e7ed43eb88f2ef22c7389c250ebe
-rw-r--r-- 1 root   root     183 Feb 28 06:41 6f2a40b0be331a2aa81f4445cf4d5c24b4a7de197177e86636c5af5dfee020e8
-rw-r--r-- 1 root   root     183 Feb 28 06:41 707bb829c96ea4c1fe2fe9b6b0ca6aabb3c2fb6cf18cf42c9c0e6431deacff75
-rw-r--r-- 1 root   root     183 Feb 28 06:41 709bd2be88c1f020b36d0b1414fd92e7306e8b91612bef0b3e3e202189d608e0
-rw-r--r-- 1 root   root     183 Feb 28 06:41 7103e17a686c6729a150f7c64d05fce4d315743f1f82e4d9184107c142432676
-rw-r--r-- 1 root   root     183 Feb 28 06:41 71ca930ef0af2e997078b4f46bb473e9a750cd3c3593af1836cd9756ea31e967
-rw-r--r-- 1 root   root     183 Feb 28 06:41 7216e1df98ff551e77a4c0ce2d886a48ef79319d281b507ca3bfdd8118ce74ad
-rw-r--r-- 1 root   root     183 Feb 28 06:41 7244d483491d8e33f9a06564f810b182e693ab2fc99b4f01412cfd2668f33789
-rw-r--r-- 1 root   root     183 Feb 28 06:41 724e69c292696a546a7674aa775297db77ec97f347cbbb62b7895b230cfc5469
-rw-r--r-- 1 root   root     183 Feb 28 06:41 73a9eff11195e9901cb936e1ba5a4ba0555103d068e72aa93e71e713186c3741
-rw-r--r-- 1 root   root     183 Feb 28 06:41 753d025936c8c3238b1b2b2f748be6df92743c2201e5198946e9d6a29156793f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 7564a27aae32ab0c593e26d134c475405e4034f7e38f61248b57e47fdf77f725
-rw-r--r-- 1 root   root     183 Feb 28 06:41 76076b9e2eca3c4f25435780f57b1d5649c7d08b784c20f96c384fa0fec5456f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 77313c523694bfccaa05034010f6714604098380e77e13deeda40dc91427ef53
-rw-r--r-- 1 root   root     183 Feb 28 06:41 77c2969ea4db4ca1859305d7ebabf6053fd132ddcc88e1b178bfd938a33cfa50
-rw-r--r-- 1 root   root     183 Feb 28 06:41 788dd06f214dc4c7404becadc224d6b57ff7f5ff7864c7ebf22042afc04487e9
-rw-r--r-- 1 root   root     183 Feb 28 06:41 78b512a29311693e5357c4cf2e8a3552ed58af3d8582da439df45ed524df9bfe
-rw-r--r-- 1 root   root     183 Feb 28 06:41 7a7d7156a3c17adf9c69a0e6bbe48784959c635c81c0254260ec1c90c3897d93
-rw-r--r-- 1 root   root     183 Feb 28 06:41 7af87943443fc3b64f87b3190ed8e9efba5b8cdc44f2cd09cfd915e337aac249
-rw-r--r-- 1 root   root     187 Feb 28 06:41 7b5471d86de038c28fdc80de91e8b03627171aadde5f40410d0a9450956fa337
-rw-r--r-- 1 root   root     183 Feb 28 06:41 7bfda8851f0bebfaad675be189f78532e95579270dd9827d6a6df66d7a768195
-rw-r--r-- 1 root   root     183 Feb 28 06:41 7c17b40889d132083dee1f1f08ff7c569526d0da46bfa6f77eb51dd1a52f048a
-rw-r--r-- 1 root   root     187 Feb 28 06:41 7c8489be0946cf10cefd55e12fa00f8de4fe683b702f2bf9eee747edef23df73
-rw-r--r-- 1 root   root     183 Feb 28 06:41 7d488fe6636d30ba6158d08f153be931e84efdc047d01b46ff8a6b9a296ed4a8
-rw-r--r-- 1 root   root     183 Feb 28 06:41 7d4f0d0a58fca9137bca767d9c8d052586b61803bbc11a98e5756c5a58c41819
-rw-r--r-- 1 root   root     183 Feb 28 06:41 7d633defc4d820f27094e76048fb87d43dd9e4696025e123a22086e68347bf90
-rw-r--r-- 1 root   root     183 Feb 28 06:41 7eb44b7c585b871a8de1bbee45e412c6105017cb27befbaf673ca607d8d5552f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 7ecbfef4538faaff1b8334e8077d71259e40738fe9e2e0fe341d1f68eb4d21ee
-rw-r--r-- 1 root   root     183 Feb 28 06:41 7f0e64b52ef56bec2b588d460fc63125f567db2c014d1ecce806d8d5b4209e2e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 7f51be298ecb4a73c9a681f197042ea49967996cb958d2238b5f2fc470b17a5b
-rw-r--r-- 1 root   root     186 Feb 28 06:41 800e0fe3d8638ce3f75a56ed865df9d96fc9d9cd2f75550df0d7f5c1d8468b0b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 805e3c98b42a2175a081666b4e077bab32136ea6cf4b9976a952569917d9e329
-rw-r--r-- 1 root   root     183 Feb 28 06:41 80b96c960a44904303b0eed0fc27ded8d883b314ef5defcaf1367bf914a5cb0a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 816509826498efe74904f186f4d09e2b987b39113b2d0b285968c288299380fa
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed75
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8330db864d294c14c05e78319906d0a005fbb46968fca5b2d00c7d42abe0e31d
-rw-r--r-- 1 root   root     183 Feb 28 06:41 840f9d415fe27e55b98913ac5e3b106d68447c84a86b5b0b91deb8aebaa35bb8
-rw-r--r-- 1 root   root     187 Feb 28 06:41 841b017d49f8211881a23acbd002bfb07c0d9c0d720c4a99c42669458bf0ee39
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8476d0dcdb53f1cc67efc8d33f40104394da2d33e61369a8a8ade288036977c6
-rw-r--r-- 1 root   root     183 Feb 28 06:41 85c88e108282b27931edc34173baee4b6968c4a5280916098e32740f9f073242
-rw-r--r-- 1 root   root     183 Feb 28 06:41 870cfe16acaf55f405a4458b4ba3830f85cc08c42d22f5c4a7a6c23bb993de62
-rw-r--r-- 1 root   root     183 Feb 28 06:41 87e33cd2efa4c29dfd1ebb9007c97d49802056939b4970d228c15d1734fea59c
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8877a11eaa55502789708fa5291acd885d3887727b5eb6768ce7342fbbc69e7b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 89175d5704083a8957c4adb1e946bbdf92482f4c9c17794a283150abbb2470e9
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8919726d156773af4239707472e679e7e6decf8ff6dde9160af6d947d5722139
-rw-r--r-- 1 root   root     183 Feb 28 06:41 89ccea93718c9cfd21fc56f3037f6892b30467030ba7f1e085651f1bdf4e00b7
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8a57c4b4bc098b4c441423d2e3d2f789e88e97354b25665a26274681071c02e4
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8a95ee7c9678b2d3ab32e16623e38594ed4471123d0af38ac6713d708bf9d5c6
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8aa142a40116d27af0146c991ebc119c65a84c1f663aef077992e08eac2ff7fe
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8ae8f8e90016760f1fafb57d2ad5c8650797e63755c215d89271f26db32316da
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8b12bddc423189c660156eab1ea04e1d44cc6621c550c313686705f704dda895
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8bad797ad2e63369c8ff2fbab6b0b2aed4b1b429593c13729761623f8461b4bc
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8d04d984fd5f9daf14612578070f132ed69a2cf78a2ac47730710324d03998eb
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8ea88bd9dfe884532d47f77b737274ba23866740612010d081dbdfb513d6c3b9
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8ef6711ecffecd61f350d95b4e9ccdbe934ef387b3a73243c102e7a7e1d818cb
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8f3fbb5129dcb9194c02b67c1b41a3f60dd369663f53499b2b3c72a73c6fa9d0
-rw-r--r-- 1 root   root     183 Feb 28 06:41 8f465cdbf43abdbd0dbb4e90cee85fb1a821923098bf6b6d466cae8d26eb0520
-rw-r--r-- 1 root   root     187 Feb 28 06:41 8f78675a0eb4d5d86242dafedf5141edcdc8d4df5e2802ea7f69ba060902dc85
-rw-r--r-- 1 root   root     183 Feb 28 06:41 90eb20364eea23c320b750476b36772b5348bf2960d0d6ba941239a576ca3150
-rw-r--r-- 1 root   root     187 Feb 28 06:41 912e6bdc5ef0d6583287b0d8c9bf2f396afaa565c558f06d39a8f963c63df60a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 91cee1c67c150ea3a001ce0bc7132a142653ec9e51506a0b00ab33e8045dbe47
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9322bd922f20c6fcd9e913454727b3bbc2d096be4811971055a826dda3d4cb0b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9349d012686caab46f6bfefd2f4c361c52e14b1cde1cd027476e0ae6d3e98946
-rw-r--r-- 1 root   root     183 Feb 28 06:41 938186fe42d03106c87d84b14a9b04228d27b4c0c1ea9d0d458499dab70074d6
-rw-r--r-- 1 root   root     183 Feb 28 06:41 938550fd1bd8ba418a4c2030e084282d02b8b1e0279d3eecfb80d2bda4bea81e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 940c9746b818c1cae337f6487eee130dd7c0c9c00fa56e46a0d938e966431977
-rw-r--r-- 1 root   root     183 Feb 28 06:41 940da210c22582431063b711f96b92d6dab5700fa163db902c29ded44c295c83
-rw-r--r-- 1 root   root     183 Feb 28 06:41 946dcf713fff4b44808b0f193e5bb9768b4f78f3cca1fe35d34b80eb3dc87712
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9557955355f5f11d64dc1c2d7d136d5811904fdc592a950cb4091d05417ffba1
-rw-r--r-- 1 root   root     183 Feb 28 06:41 95746ae648dde21e11129e108111681b35242f4c82df1ab36a74dc7f5acd49e8
-rw-r--r-- 1 root   root     183 Feb 28 06:41 95b6bbe53d81a91e475fb8b8a478d193bfd0a551a5634833ead99eb962e1a799
-rw-r--r-- 1 root   root     183 Feb 28 06:41 95d06bd3bcd5b9fe6562348080e54b67ee65a32338f4250134aa14ec362fc0eb
-rw-r--r-- 1 root   root     183 Feb 28 06:41 95eb407d5fda06538f34a501472ff65afdd7dc1a37c1ecd9014b472d021b2bc5
-rw-r--r-- 1 root   root     183 Feb 28 06:41 967f8c4db1977ef999142d7b8b8703be123b5a82eee9dc094af74111ea095dae
-rw-r--r-- 1 root   root     183 Feb 28 06:41 96d4945b4bdfe52db60875ff7aba6e98aff214a52d1384d866238fdfd9b60e7c
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9793bd6ce99a4fbc651668de691841437d5a01b74e74e61f707d1c30948b557f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 991a6ba278e2df53cedd78af589602454f355f9ae08fab8390c457aa431aaae9
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9922a52935b88f2f8a3484d57712749b298dd26e9dfc7e043a6cf4adf8fa7c9a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9967f37546bc1f171df033f344a50cf143695d87011fd9a61365cab404f9a5e1
-rw-r--r-- 1 root   root     183 Feb 28 06:41 99d74f5fe276a422eb83f39087e027732ff485642ff54cc849e06596310cab21
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9b3334b66d04056213183b2e367c6d7ebc60496f0a5f1e2b8efffa25bda09b9e
-rw-r--r-- 1 root   root     187 Feb 28 06:41 9c6d95f794a10b1dbf6125924d95e5576df54b545a9340177430be4691cb3f0a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9c802e332c39cfac8b1e0819d0136332c25a2bd0737bfbef8f011fabae6e5b82
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9c86d77537a6380ce371e3a4860bc7e1fb2adbb2821bf1a8f1cd4e8ce02240c9
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9c88d3dd973dfd3876e1182fc07943ce1adcddb7b2bc993d774e254fe299b053
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9d3a17803858befc7d87d72f8b7ac86c479243e115c35744fd540860e4a020f4
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9dd1562e77db7963ff9282e33fbb40521a9889c2c32831d0a71bf84eda4d2ad6
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9e5b3837ba58d2a9cff8b6587d25e2aa4cef49da6c41694a5a794f738cf75f70
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9e7700f16afbc48053bbfca6792797de00e74d2466b84311ccd4fb32f88ffef6
-rw-r--r-- 1 root   root     187 Feb 28 06:41 9e8dd91d21e867dec464868a8d1f4a27c0e113c53e32f2bec0a7c6e25ad2e9d5
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9efd5d002c4a0112ef9f58e440bf1acaad5919c2744bfdc9d0505704bbec3073
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9f6a93ba4933a8f0cf62acaa577f452acd7bd7310df36b143d792cc51c727991
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9f8535464090dfa3973f5ff626f8090ba9e6fc9281bbed0a53b80370debef07e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 9ffcbe73548aabd7ae74d43caaa9d59e785d3514d3e65804dc56811851d4f8f4
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a005de34035cc6a8fa62d6ea3f19f94e02a0bc6246064f3efc6485bf2130d592
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a02357c2f569329f4b76c2bb5bb5a2a65cb986283142b156e9e8128ec6a00ba5
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a0f0ad355cff6618b58f2af840a2d78ff91abf08b91195dc00d7b3ba2a9c4cff
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a0f69816b6e23128ae8edff2861fbbbe540d67b2c0924bb985942e762e5f41a6
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a145bfb46c56abd44bc6be971b02f534093a9d27490289eb4c9394af765b71f9
-rw-r--r-- 1 root   root     187 Feb 28 06:41 a2a73b2756a5364f39844e652c3696f5f0dea521d0c5c70eacdc416e7adc75e8
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a2c580ed966ff13d295aab54f2073e2675e6e2e72d8e0711050eaf243db651c1
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a2ddc2e07b48561da61f5e06cb5a172329a8afdc1e5f8059154330be5b30ea24
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a37118a4888e02d28e8767c08caaf73b49abdac391ad7ff18a304891e416dc33
-rw-r--r-- 1 root   root     187 Feb 28 06:41 a372829d236a92cfe48008845daacf63ab87bd3f09dea86e4f13e9b89275ce5b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a3c1a5ceda8b86b7cb64d5d6af58fc787ba400f2912b907969d27547f96545d0
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a45e69312561dfffe69258778a9bf4c5db01d33ad284d2080fd4d4ab7cc5c09b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a47b47b01500e3d17ab8fee8295650493ce927119fb18e983f311fb37d38385f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a48a9f159e6a7dcbd24b3d837935765a1fe4040e45611985b34eb6bb35589363
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a4e6c42442cc1ccce8c2da04e5ff7a61368d475925a9712e722aab098cb771df
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a4f3687ae234d208d0f21d17573c2bb60f46ba4001ecaadd332924c2f3e13cf4
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a619eb76964b870a0edad133db1b92183b6533332de555a033ada4e311d75935
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a6e954f91be82164c380982eaccf2499ebacf1fe49cbd849f4c9cde94468610f
-rw-r--r-- 1 root   root     187 Feb 28 06:41 a74d0dea3f08c2a4c0dab1ede11ab6884c23da20f6f842d2fc10a97743e70606
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a77ece743db956b9985f2908dd4d6940b639e64b928a12b2a123f76f18e0a5fa
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a7e9b36ff24ae730706742553b4a4a2733b01156e7c9e26145f9bc6a14f061a9
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a862d41b1824f96ad02ebb1cf287422349bc74284c69e6edb068786aebe4e9da
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a8a55813df1bdac34e7e9acebf6ee33779b809e64f8e0eb20b1b0364442f0b07
-rw-r--r-- 1 root   root     187 Feb 28 06:41 a8b2b6e915127ef5b45d4f3d2f0bc2f6aa045e47bf3b65ef22ceb8539a4fc11c
-rw-r--r-- 1 root   root     187 Feb 28 06:41 a8f8ceb852ad616163020b86234c59609c882d2bec051d6f33597d7fc1fea489
-rw-r--r-- 1 root   root     183 Feb 28 06:41 a9d7d69f33ab0d528d0e4793bea0377775f6f2d809752ec653a2ecd451be6bfc
-rw-r--r-- 1 root   root     183 Feb 28 06:41 aa23a3a5aac15413ff5834db2066c7568f9ba3b0826588f9855bb3c29c216581
-rw-r--r-- 1 root   root     187 Feb 28 06:41 aac07d95089ce6adf08b9156d43c1a4ab594c6130b7dcb12ec199008c5819a2f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ab701878befc26097fcdd272bb701aebdfa3d227caac85d28c5d44de84d6d44e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ab7d91705025289d6149ad9ea1abc4ce4c49555df71904f29136c223785ea6f7
-rw-r--r-- 1 root   root     183 Feb 28 06:41 abd277d90caba20aee0f1f05a68d24cd117badc1205d0d1b1a0451357d32b92f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ac72b2da3a6d76e282c205b8c1e948954b8f581632a4e162b72f380c29482dc8
-rw-r--r-- 1 root   root     187 Feb 28 06:41 acfffe68b49925fefe543e71ea7c096430d2221491579fccfa877c9ddd2e4cc4
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ad1a216219eb17ef3f6cc28c288d86bd1d414ef1062475db716bb513ee8143a0
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ad908d4edf588f573a5d9841fea8ef70546228facfa5c5615e56456650e3408b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 adc14fa3ad590856dd8b80815d367f7c1e6735ad00fd98a86d002fbe9fb535e1
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ae6d1a4843298f6134e912411e19d5eca133988fa78f228150c6c136ae1d7309
-rw-r--r-- 1 root   root     183 Feb 28 06:41 af724179eeea6e95db11b2fc9a84577263ee5d37cdd7ce27ed1aa4b381bc3b4a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 af92154b4fd002924031386f71333b0afd9741a076f5c738bc2603a5b59d671f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b05ddaa79926f85b23723a8938cfe432d84ec0d7a9b3137d979af6d0877da8a7
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b0ac2c26eabdb0e0a9b0d10fd1458ca73c575b19d65e13f0e7484cbee84038b3
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b12b52096e9437a5b6cf12cda11c9b5af4a3b37d37c07cdecd6bb1422bf5b3c5
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b21121518221b0f031bd41f010aeef1e4015c1aad5d8b2539d2ddcd60c7f8666
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b2bbcbec8a7f4b8771700879f74988e96b465c6320f90d0de1bfea3bcb14e194
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b316688e84f2d215dbcb597f65bedf7a8f1a5eb17cb327af2c8eabd9f8ddfac2
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b465a6a09bab1ef8705a1a60ff669f47d0f9379e922d9cc0e5c441fafd70a1a8
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b4ac8fb1f8c1d531bc34734664697f14f51716a45fe832225dd580148db7c04d
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b4e17ff04b6efd7b971a9e83144b8608ff292355643b33d0aafdcb59bf01a3fd
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b5081b3bcdb402e4e9251f38d3bae094ff58232e50b6af0d5f609d56f17ca023
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b5aabce9b530a9adcda916a3d030f2c398cfb720a4fb86eb9ae7dfbfb62cec60
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b7274d28e3e983bf720db4b4a12a31f5c7ef262320d05c25ec90489ac99628cb
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b747f0bf48d3e8429af372025895d1754afbecf8b937609478209a235f6f6bd7
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b75622fd920dda0d151e719b8b33a40a4b479d77181d5fb67d5a75175a2a0bd7
-rw-r--r-- 1 root   root     187 Feb 28 06:41 b7cfd472ff903441ec6cd55bb506f9744211a6e68e52525d42445169bda03f5a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b819d50fad4201f5f6479f9800c8a1b35b8f7d3ac6e1cc5f71686b61d1502641
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b8b2410401e3ce0fc10edc3d027668fda4594aaae4d57ca63e8a46a4cf7d3bbe
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b904fe5abfc73f95461f1ebf943649872d47ee74177ecea8282a6ac0a0400423
-rw-r--r-- 1 root   root     183 Feb 28 06:41 b9ecb22ce2603076e036f12e54034983f1006392fd80d73a01721794947dfe8c
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ba667b59d6061b5e318db800a8b8d05b4906ccf467a0b780694f474fbdb9ff0a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 bbac8936566f8317308f00a027b5965a1edbbd97791437cb0f95c656a96d963a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 bbd40ebcce1c2ef2cd6eb0750b56beb5b159f76bc986af31fe6907395a670d9b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 bc5757053eff53caf00441de144557f236dffa4547cd2a32c4abcc77dba3ed39
-rw-r--r-- 1 root   root     183 Feb 28 06:41 bd93c5a6c9a85f7af62d297accc4fc9cda936eaafebb7d650b1657e064722d01
-rw-r--r-- 1 root   root     183 Feb 28 06:41 be131ee180b6e548422c6004d3ce5fff78aa98b55bfca270a48fe3fdff10af7c
-rw-r--r-- 1 root   root     183 Feb 28 06:41 bea2169db1be756760cc9b711a674d511dc61a8cbd8814eb4029a2c4a6be1505
-rw-r--r-- 1 root   root     183 Feb 28 06:41 bf09a071f5310dae429626c6fb9939424a90381f52bce857a112f4d2baa6969f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 bf288b07f4ae0d4367d778adcd360f1117797421eea50277cbff4dad1b30cff6
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c19621bcad2c9d502618dfaf25a6be0fde23bd730e51889dc883376c91cca6c4
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c1e6505c02da8d1b0a5b3d6db6e19b2eb22dcd54f0e86306ec8a213902b3157e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c1e9ab3a56a2ab6ca4bebf44ea64b2fda40ac6311e886ba86b4652169cb56b43
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c23b872883073cc5295004405541c7b60ef4052b6e94fc6a849b0c5d55b2d0fb
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c38bf1b09cf29657245b35820ad8e3d4d170f233f3eaa5ef9a9e147e0f4b6aa8
-rw-r--r-- 1 root   root     187 Feb 28 06:41 c465a1051794a507a55adebc0f044dc6e79d9b67a5e05aed4bf684afe088f976
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c4b7c953b769c6299a801fb2d194e8d7c797ceee885a576c50c3bae0cb9c9e1d
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c54320e351de4b83050f63dd6569ccfb325fa8365d2a8a4163c3b4d6dec1c0f0
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c5bf32be58438d4383592921e4a47ced6ef82f54f9084673caa707c720033216
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c6663abf7e5b08423314aebffc1103c1b7eff425a8fe805012569c64b85c77a4
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c68e21767f951463ae6be28fa637237e578d8197e07c39101d00d1b74439e6cf
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c69a0aaf02fa18655c0d47593a1570db3643e487bf43cd2da2a0796de75ced44
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c6f7077f1699d50cf92a9652bfebffac05fc6842b9ee391089d959b8ad5d48fd
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c75ff75cbe3a0d951bb856e3626716b845f1e3a650644f2bfe7f5a85dfdc2a16
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c7d141f05e3d8fcfa4c90d15993566c582361bc852fa780de0bf345557ac6001
-rw-r--r-- 1 root   root     187 Feb 28 06:41 c7dadb010bf62c83ea3d49f3d6bfce1f3c41f4e0ff57d9637b37c287692c1c44
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c85e65a173c65f32e7dde10e38aaea00cbb549165920422c04223171e1cc3747
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c891ed24e93b19191dc8865d867a5454d50fcc086c77a715e286c1e8b5250862
-rw-r--r-- 1 root   root     183 Feb 28 06:41 c9bb31e285a27b76d6314788e2de51c01dedd371f8d538dc4da16436a38aa615
-rw-r--r-- 1 root   root     183 Feb 28 06:41 cca7ef541db83689413d975c4f6a35e4ec73915a2596c770412d9286e7323176
-rw-r--r-- 1 root   root     187 Feb 28 06:41 ccdabb13d837719490690b7a897c778a9be24a15067b01d516b882c0887002ec
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ccfd63f996f8dd6995063aecf3d8517671e049ad85e268daa9affc7986487338
-rw-r--r-- 1 root   root     183 Feb 28 06:41 cd80d2cd7bdaa062d40c0fb830e5857ea6b5ef5914ea96c48f052e1a198a5512
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ce008ca7b773bdae609b833541f8c738ce1946d345ecc8ad8c3fabe77ad1acbd
-rw-r--r-- 1 root   root     183 Feb 28 06:41 cebb434d7bcd40b4fdade7a275bda6102ac2761891bf19466bd584274ce6287b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 cebfb26d9675a8f24b2202f67d3c62a9287f073128ea8e983ce9daafbd7f4477
-rw-r--r-- 1 root   root     183 Feb 28 06:41 cf7ad05f8e99de8eadbbfbd5ca1c0f9b75499bce07074966b277688ca5e1d726
-rw-r--r-- 1 root   root     183 Feb 28 06:41 cff1720e77bb068f0ebbd389dcd50822dd1ac8d2ac0b0f5f0800ae9e15c7e2b2
-rw-r--r-- 1 root   root     183 Feb 28 06:41 d0844afe66ecc2a8e792dcd4e3f9be7416a04120f7d895609d95b2de50570076
-rw-r--r-- 1 root   root     183 Feb 28 06:41 d0f49e7cfd789e7b260196ae70892ba24156854e587a5c22f1318ac0ef79eecc
-rw-r--r-- 1 root   root     183 Feb 28 06:41 d1c9bce40d0f57f8f2531c82ecd1ad8875596eeaf3b750876edd806f555653b2
-rw-r--r-- 1 root   root     187 Feb 28 06:41 d2b4168467439f03eb7e0e30be9412d5a29d050aac77dc60de3dcb9f45f91b07
-rw-r--r-- 1 root   root     183 Feb 28 06:41 d3d0579c02a00dd4a444d34f675317cf7ee8dfb7df6fda7486d93f70914eb63e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 d4cf3423b64bfeb540b3e0ce22946191c033d38b5d32b37a8f0f3a4cf514cd23
-rw-r--r-- 1 root   root     183 Feb 28 06:41 d574e6e65d5478c51263ede37ff05ce086921f9047b51aceddf1e02d13b10082
-rw-r--r-- 1 root   root     183 Feb 28 06:41 d5a9b3661fee8b6e60b3eac3543d83dbffa6486f62ec76744ca38967203efe49
-rw-r--r-- 1 root   root     183 Feb 28 06:41 d7b01213da221e66617e2ec5b7003deb68edff0bd0fc1452ce6b054ebac29402
-rw-r--r-- 1 root   root     183 Feb 28 06:41 d9006e0752348dd0bd20efcb295fdccb62fb8dd02c7d88654db80e5df2b81360
-rw-r--r-- 1 root   root     187 Feb 28 06:41 da0cc82154bdf4ce8bf417eaa2d2fa99aa65c96c77867d6656fccdbf8e781b18
-rw-r--r-- 1 root   root     183 Feb 28 06:41 dace63b00c42e6e017d00dd190a9328386002ff597b841eb5ef91de4f1ce8491
-rw-r--r-- 1 root   root     183 Feb 28 06:41 dbf377b7e71855303fc48a8b1fee079ff9107af6d7a59c89236a9bce37ee9e19
-rw-r--r-- 1 root   root     183 Feb 28 06:41 dcaa12e212bdddbe3086016153365acef1934e519836549c8f8e50bd756a25be
-rw-r--r-- 1 root   root     183 Feb 28 06:41 dd1f9d502c7951df47e8f8ed245e8bfa24f7e82c28f19399a8f0e74b06113a21
-rw-r--r-- 1 root   root     183 Feb 28 06:41 dd5b0fd9005f232da99f6d41e6ffb74b8c3a41f688b984dc5c9f37d0eef2f29e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 dd844857fcfbdc12631dcd96efdf3db259df466531f9bbca2fda6fa5a5b13f8a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 de2e87b3dcea34c7789910c9967bb49c0b4f450aa231c60c7ababbbbb1cd3a06
-rw-r--r-- 1 root   root     183 Feb 28 06:41 de45f688d366bf0137ccfdf4fb3f0041b1df41e7353b6233f32a6e2a1e4448a1
-rw-r--r-- 1 root   root     183 Feb 28 06:41 de47608bb82813752b98bb01008c08aabf4a4ab97eafb4c8763a9c421fa6e2c7
-rw-r--r-- 1 root   root     183 Feb 28 06:41 de5969e20ca9ebc2cf99af428feb9956ab535774f10b8d89736382c83d736f09
-rw-r--r-- 1 root   root     183 Feb 28 06:41 df06d21eca7c19c89d054964b2d9e305a425ebde34403cb0e7966a872b23058f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 df1f66f32a199e3a616c10ce8131dc4ca468a5c709e39ef774e4f0a775b356de
-rw-r--r-- 1 root   root     183 Feb 28 06:41 df478568479de26b4a83c1bdc4dbab61b5cc82e1a312e2b28bc815a12a951e67
-rw-r--r-- 1 root   root     183 Feb 28 06:41 df6b7f85124c25bddca124c719da72275678ec6a878e6f2b56175b29c1105572
-rw-r--r-- 1 root   root     183 Feb 28 06:41 df739a4c91de28ab6e30fd5f4ca9af3f78166fe54832a6b81a782cbfc0890c2f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 dfb037c0b0038dfac7920d5d70e1b4a99c320199d882d301fc8736ba9df68b11
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e005e2f25e20a0f0180b2c69cda34d326a4ec332da059a849223a514a613107b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e172a0c36c46cba65b464d322003e166d7a88402b0898cef09243411906eb849
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e1b84e248c162b8341d3b54ec43649ba73414be9801166e904b99755fdb96f1e
-rw-r--r-- 1 root   root     187 Feb 28 06:41 e2260a7af33b3ba30074111c456793cef58d2ab43c5965bdbb655f90f97399ac
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e2b8ba3e6f7d63ab44559f25a6863d1d9ba1a2cd751391a69e261ad027400d81
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e2ccf7cf20403f3f2a4a55b328f0de3be38558a7d5f33632fdaaefc726c1c8eb
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e3a59924933c9f9f2df83449055eb3858f1480fdd0c5edb95df08bedcd2e6624
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e4301813accf90324d3e5cd52b12a1fc68fb13e24e8245315869e52ee572c33a
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e4a51cb4730706d59cb75f05fdbce7378efd93c99a5808e60b371f77235ef1e4
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e4b67f9f7c0a1cce1c24ca9196f8e1446fcce17fdef5d5eb46a3929433ea4d91
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e5de992e4d0d9d2819c14e4962a60a8f9e6f4d449e26226c194fce674a95ef85
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e61093809c30403b74392ec1853c1bc40b3364fd311fa2e5a919ef6c7e8bfde1
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e625f0bd2f7a6aa0d8657218a8ac2f3c90039dab82d4f0185cabf4d4ad2de810
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e64dad0e4748cdff0f11d43b4c5552dc98c3555e8113efcca107f6baa971ad8f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e7bcad523d65217b0c43e39bedde3876f9ce15e4e4591b10e6a1f68617524213
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e7bf8dad360828f0289b7b4bea1a1bd28eb6d4d6522fa17f957e0dfb839ef3db
-rw-r--r-- 1 root   root     183 Feb 28 06:41 e88a691e98d9987c964521dff60025f60700378a4879180dcbbb4a5027850411
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ea435dbc2a4feaf5844bdfdf234791402d4336efcd9a343507661db4d549d04c
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ebf67dbf1854bcba8b57a3c9b0f058eca175685dc7f63fe50f00efba0af5a2e1
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ed56bc6dfa898640acc8203d6b67c28bdeb6d6d15d2355dd5e2854ddcdf4abbb
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ed913977130d9b1bf62fdc64a9c383e143a416cf8314df43ca24800b9d9b0c50
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ee603283febc4c31b09903392408a2fff1daf69ac2244a5e4ad07eca3bc79dec
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ef184a9c1179993f9127516fa2c740c21634f9c19944786ac58aa33a131fce4d
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f03df3d4134230420cdf7acbb35f96a2542424246ab052ba24c6fec6a4d4f676
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f0f1ca51a0bfee403f6def92744bf4abf630fcfc2d0a7b9b407bfa28a4a808ba
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f167930831b2cd2aa65ed69874db70e3ad2c1b8b8312eb6abc7b424f977614d4
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f172bd03763b8a0d9c4a45bd9e8f0294016b2d8e5f1134068513d9c8606d8419
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f1bb480dfc44a0353af97217d5949388d9fa09b9138dbc3dd2868804e979969e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f29d7c361579222ef4af61f348a4662474e53f3b77351ee7e7252bfed0ec2f68
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f2e9f2dc720b46609f26142ec0a86b4e610ad7e5a36f2484bb8ea6876d24618e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f43c2c03f1c9f930cf8b71dae7e4dd6b9e8e38115df9869bd5a2c2402302e77e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f4a29f6397c32409a7cd3bcda1acb7ddad76a38e457ea5ddf7a827705b2b1ea3
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f4c0c85932d26496e6ce4c680aa4fbe8987284805f3c475084b407dbffd29d3b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f4d89779148ccd245c8d50914a284fd62d97cb0fb68b797a70f24a172b522db9
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f5f669b64f897b6206a4ffd3761816c0a0cbbc8a1796f2d8302c61797d5766c0
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f64f55b01b75ac21bd2c604b7f56d5a25fef1cdc58e126637b97a4ec6786904f
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f8419453af6457edf08e7edbad2cd8e4920125b989e214f49fb4dabd8c106905
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f87298a4592b193c58d679583cbfcce6567436ed2470f466d77d40ea83f8595b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f88e6629b320c83b559075b084d14c00043e01dc206918782ce40d54e5254dd5
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f8de74aecd549d3db96bad6a2e24947903fa249eb0c309dbef6d9e7b1deb54cb
-rw-r--r-- 1 root   root     187 Feb 28 06:41 f901616f00a63f4f9c7881d4871a03df3d4cee7291eafd7adcbeea7c95c58e27
-rw-r--r-- 1 root   root     183 Feb 28 06:41 f941ad2a24f166c1b594039c908db45c408b671f8ff76c5bd7b9d6cd50d5d339
-rw-r--r-- 1 root   root     183 Feb 28 06:41 fbbee9af0f8e95f5e539c46013c7002a1c568f5fb08dde3e5680b451367a87fa
-rw-r--r-- 1 root   root     183 Feb 28 06:41 fc89f8c988548dd7ce2d43c034b5ae3d82dbeda52199eaecca5c572aea43f826
-rw-r--r-- 1 root   root     183 Feb 28 06:41 fd59542dc7851a2768b3ed2619ef675eefc7503d079dc288321f84064475d0ae
-rw-r--r-- 1 root   root     183 Feb 28 06:41 fe445cbe3e63c04d0cc206b9dcb15652fb57c222081af5b1bef82aac14db7dd8
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ff1d65e78ac81592fa7ebb9ebfc9f163108e0bef80f71658c25497ea383d4957
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ff51b667648200524ae20f85ae64e84f719092878d8513b61bb04c90b5bbd01b
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ff6e3a950919c361b253acb9b9c35a9636d6b89c52803285f629f4767df9ff06
-rw-r--r-- 1 root   root     187 Feb 28 06:41 ff6fff69f841691ec51ca4ba3f750c81f19ee4abc38d0a0e27b87c13c77c815e
-rw-r--r-- 1 root   root     183 Feb 28 06:41 ffa458285374138c8b9faea3444f229228a5f8c73e5236e6fb3de900f87a272a
-rw-r--r-- 1 root   root     187 Feb 28 06:41 ffbb1c5748f93fe48768b493b4117b6a4776de34a2ae78dfb373fe8794510560
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 1852
-rw-r--r-- 1 root root 183 Feb 28 06:41 fbbee9af0f8e95f5e539c46013c7002a1c568f5fb08dde3e5680b451367a87fa
-rw-r--r-- 1 root root 183 Feb 28 06:41 f167930831b2cd2aa65ed69874db70e3ad2c1b8b8312eb6abc7b424f977614d4
-rw-r--r-- 1 root root 183 Feb 28 06:41 e5de992e4d0d9d2819c14e4962a60a8f9e6f4d449e26226c194fce674a95ef85
-rw-r--r-- 1 root root 183 Feb 28 06:41 e2b8ba3e6f7d63ab44559f25a6863d1d9ba1a2cd751391a69e261ad027400d81
-rw-r--r-- 1 root root 187 Feb 28 06:41 da0cc82154bdf4ce8bf417eaa2d2fa99aa65c96c77867d6656fccdbf8e781b18
-rw-r--r-- 1 root root 183 Feb 28 06:41 d9006e0752348dd0bd20efcb295fdccb62fb8dd02c7d88654db80e5df2b81360
-rw-r--r-- 1 root root 183 Feb 28 06:41 cff1720e77bb068f0ebbd389dcd50822dd1ac8d2ac0b0f5f0800ae9e15c7e2b2
-rw-r--r-- 1 root root 183 Feb 28 06:41 c9bb31e285a27b76d6314788e2de51c01dedd371f8d538dc4da16436a38aa615
-rw-r--r-- 1 root root 187 Feb 28 06:41 c7dadb010bf62c83ea3d49f3d6bfce1f3c41f4e0ff57d9637b37c287692c1c44
-rw-r--r-- 1 root root 183 Feb 28 06:41 c54320e351de4b83050f63dd6569ccfb325fa8365d2a8a4163c3b4d6dec1c0f0
-rw-r--r-- 1 root root 183 Feb 28 06:41 bc5757053eff53caf00441de144557f236dffa4547cd2a32c4abcc77dba3ed39
-rw-r--r-- 1 root root 183 Feb 28 06:41 ba667b59d6061b5e318db800a8b8d05b4906ccf467a0b780694f474fbdb9ff0a
-rw-r--r-- 1 root root 183 Feb 28 06:41 b819d50fad4201f5f6479f9800c8a1b35b8f7d3ac6e1cc5f71686b61d1502641
-rw-r--r-- 1 root root 183 Feb 28 06:41 b05ddaa79926f85b23723a8938cfe432d84ec0d7a9b3137d979af6d0877da8a7
-rw-r--r-- 1 root root 187 Feb 28 06:41 aac07d95089ce6adf08b9156d43c1a4ab594c6130b7dcb12ec199008c5819a2f
-rw-r--r-- 1 root root 183 Feb 28 06:41 a6e954f91be82164c380982eaccf2499ebacf1fe49cbd849f4c9cde94468610f
-rw-r--r-- 1 root root 187 Feb 28 06:41 a372829d236a92cfe48008845daacf63ab87bd3f09dea86e4f13e9b89275ce5b
-rw-r--r-- 1 root root 183 Feb 28 06:41 96d4945b4bdfe52db60875ff7aba6e98aff214a52d1384d866238fdfd9b60e7c
-rw-r--r-- 1 root root 183 Feb 28 06:41 9557955355f5f11d64dc1c2d7d136d5811904fdc592a950cb4091d05417ffba1
-rw-r--r-- 1 root root 183 Feb 28 06:41 8d04d984fd5f9daf14612578070f132ed69a2cf78a2ac47730710324d03998eb
-rw-r--r-- 1 root root 183 Feb 28 06:41 8b12bddc423189c660156eab1ea04e1d44cc6621c550c313686705f704dda895
-rw-r--r-- 1 root root 183 Feb 28 06:41 8a95ee7c9678b2d3ab32e16623e38594ed4471123d0af38ac6713d708bf9d5c6
-rw-r--r-- 1 root root 183 Feb 28 06:41 7c17b40889d132083dee1f1f08ff7c569526d0da46bfa6f77eb51dd1a52f048a
-rw-r--r-- 1 root root 183 Feb 28 06:41 78b512a29311693e5357c4cf2e8a3552ed58af3d8582da439df45ed524df9bfe
-rw-r--r-- 1 root root 183 Feb 28 06:41 753d025936c8c3238b1b2b2f748be6df92743c2201e5198946e9d6a29156793f
-rw-r--r-- 1 root root 183 Feb 28 06:41 7216e1df98ff551e77a4c0ce2d886a48ef79319d281b507ca3bfdd8118ce74ad
-rw-r--r-- 1 root root 183 Feb 28 06:41 6b18bbee6003ea4b9143aa34e6bdf937f414ca67667693065e07bec79dbbf0ca
-rw-r--r-- 1 root root 183 Feb 28 06:41 69c39eaad9048f5563d2554f97b09a679484b4b7d7f5f5b88cb88c46d7d1f187
-rw-r--r-- 1 root root 183 Feb 28 06:41 62343711e78a30e992d9694af9a8bc3859b0bb81f18b55f66a851fd36ff6ad1f
-rw-r--r-- 1 root root 183 Feb 28 06:41 5d6e3e63e837860d21a3669ed90bde4c4d0fe267fd6c1dfad8ec9ef0ded29fa3
-rw-r--r-- 1 root root 183 Feb 28 06:41 4f7bfcc755b99a18a4896a773a727db65be4ea1df3a985e3f330f5141ca95b9e
-rw-r--r-- 1 root root 183 Feb 28 06:41 2f5de0003db84ecd5449128350c66c7fb63e9d02b250d84af84f463e2f9bcef1
-rw-r--r-- 1 root root 183 Feb 28 06:41 194c251cd4e3d2296fa92728a1e9c8e8ab93d11554c54f5d376293f4460e06f0
-rw-r--r-- 1 root root 187 Feb 28 06:41 00000001505e7e48927046e9bbaa728b1f3b511227e2200c578d6e6bb0c77eb9
-rw-r--r-- 1 root root 183 Feb 28 06:41 f941ad2a24f166c1b594039c908db45c408b671f8ff76c5bd7b9d6cd50d5d339
-rw-r--r-- 1 root root 183 Feb 28 06:41 f8419453af6457edf08e7edbad2cd8e4920125b989e214f49fb4dabd8c106905
-rw-r--r-- 1 root root 183 Feb 28 06:41 f0f1ca51a0bfee403f6def92744bf4abf630fcfc2d0a7b9b407bfa28a4a808ba
-rw-r--r-- 1 root root 183 Feb 28 06:41 ef184a9c1179993f9127516fa2c740c21634f9c19944786ac58aa33a131fce4d
-rw-r--r-- 1 root root 183 Feb 28 06:41 dd844857fcfbdc12631dcd96efdf3db259df466531f9bbca2fda6fa5a5b13f8a
-rw-r--r-- 1 root root 183 Feb 28 06:41 d3d0579c02a00dd4a444d34f675317cf7ee8dfb7df6fda7486d93f70914eb63e
-rw-r--r-- 1 root root 183 Feb 28 06:41 c891ed24e93b19191dc8865d867a5454d50fcc086c77a715e286c1e8b5250862
-rw-r--r-- 1 root root 183 Feb 28 06:41 c68e21767f951463ae6be28fa637237e578d8197e07c39101d00d1b74439e6cf
-rw-r--r-- 1 root root 183 Feb 28 06:41 af92154b4fd002924031386f71333b0afd9741a076f5c738bc2603a5b59d671f
-rw-r--r-- 1 root root 183 Feb 28 06:41 ad908d4edf588f573a5d9841fea8ef70546228facfa5c5615e56456650e3408b
-rw-r--r-- 1 root root 183 Feb 28 06:41 a77ece743db956b9985f2908dd4d6940b639e64b928a12b2a123f76f18e0a5fa
-rw-r--r-- 1 root root 183 Feb 28 06:41 938550fd1bd8ba418a4c2030e084282d02b8b1e0279d3eecfb80d2bda4bea81e
-rw-r--r-- 1 root root 186 Feb 28 06:41 800e0fe3d8638ce3f75a56ed865df9d96fc9d9cd2f75550df0d7f5c1d8468b0b
-rw-r--r-- 1 root root 183 Feb 28 06:41 6bb0082dfd02be52ba7d532cf29dcf82977df9eb10483ccf71efc6f00146ed0a
-rw-r--r-- 1 root root 183 Feb 28 06:41 6b4ec98f02e647e01440b473bbd92a7fae21e01b6aa6c65e32db94a36092272e
-rw-r--r-- 1 root root 187 Feb 28 06:41 6867d899ce6b677b89052602cfe04a165f26bb6a1a6390355f497f9ee5cb0796
-rw-r--r-- 1 root root 183 Feb 28 06:41 6638a33320db5e7de27ca9847f71b219ac367bbbf27709068de684062368d9c8
-rw-r--r-- 1 root root 183 Feb 28 06:41 658ab960c1cd0f3d141a833cd3c55beadcba045ba17113979392845fdda2ac4d
-rw-r--r-- 1 root root 183 Feb 28 06:41 6483f131b8f10e1ab879031e6dcfeffb83b5c1141eecfa403e8c3d46bf10577c
-rw-r--r-- 1 root root 183 Feb 28 06:41 5b4a1d20fef8e42e301caea4b77f2283a685065559fd97f9b154118825e0b10f
-rw-r--r-- 1 root root 183 Feb 28 06:41 4d0a4d726627e2c411be89cff4c56221eaed1b6fceb17fd881b0e00c0332e6f2
-rw-r--r-- 1 root root 183 Feb 28 06:41 47f97d4e0a640c8a963d3fa71d9f0a6aad958afa505fefdedd6d529ef4122ef3
-rw-r--r-- 1 root root 183 Feb 28 06:41 3b84f4dff765ba081df73c5e930ab7c5870d31a07bdccf1af7dca3a874abbe7e
-rw-r--r-- 1 root root 183 Feb 28 06:41 353e1e9782fba614354a6fbc82ace480d35f7cdbb1308bf97a6b4edc25cf265c
-rw-r--r-- 1 root root 183 Feb 28 06:41 2ec6b656dee82aca76d4d8f525358878efb427fcd0939f133f710af5f044e156
-rw-r--r-- 1 root root 183 Feb 28 06:41 2e41cb1b64ad259378aa70b7d6dd8c35ddda552a08c424fab78772a82803aa3e
-rw-r--r-- 1 root root 183 Feb 28 06:41 2a5da67267175025bf185b8b70e5522a7a90886bef82b0b6d8ea9d6538ebd01b
-rw-r--r-- 1 root root 183 Feb 28 06:41 29ab2a70793af289bcd906df3de0cd31b1d3d686ba2baffb6a3933e4e65ce93f
-rw-r--r-- 1 root root 183 Feb 28 06:41 27445c6cff2144aa2feec31dd590bb663e0d397d13ae02ff77b0eb71b52d689e
-rw-r--r-- 1 root root 183 Feb 28 06:41 1fdaf6a7b5ae61695f61035f1f5a001567936a6f1494b7f10f5b71a0679468ab
-rw-r--r-- 1 root root 187 Feb 28 06:41 1f830dd875130b134fbf3f27a69eecd8613a499748a71b5a271a719febae14ed
-rw-r--r-- 1 root root 183 Feb 28 06:41 1d7f4f494650b465c1614cbb20c70fc680f6c77d4fca733364ec119960f86652
-rw-r--r-- 1 root root 187 Feb 28 06:41 11644c547cfc1df9e0169b4e300cdab4cd341b89a9bfeb69f6f16bd78fc20949
-rw-r--r-- 1 root root 187 Feb 28 06:41 0b9de7c5e82d26c285690a13cd164149a5a0ee3131b9912e1c0bb36c66b471ab
-rw-r--r-- 1 root root 183 Feb 28 06:41 098d581e8152957ffd2939d7c2146ec15b54e5fe782beb4ad8425a99faeb60f7
-rw-r--r-- 1 root root 183 Feb 28 06:41 0332877b413f0c1b4263d2c2b6a7a4a9a7a73329cdb5bb209ec7a230f8ae700f
-rw-r--r-- 1 root root 183 Feb 28 06:41 02a125efe7cddebadd000efbbdd1c43449e009382618ebf85e931266ea07dbe6
-rw-r--r-- 1 root root 183 Feb 28 06:41 f43c2c03f1c9f930cf8b71dae7e4dd6b9e8e38115df9869bd5a2c2402302e77e
-rw-r--r-- 1 root root 183 Feb 28 06:41 f2e9f2dc720b46609f26142ec0a86b4e610ad7e5a36f2484bb8ea6876d24618e
-rw-r--r-- 1 root root 183 Feb 28 06:41 ed56bc6dfa898640acc8203d6b67c28bdeb6d6d15d2355dd5e2854ddcdf4abbb
-rw-r--r-- 1 root root 183 Feb 28 06:41 e4b67f9f7c0a1cce1c24ca9196f8e1446fcce17fdef5d5eb46a3929433ea4d91
-rw-r--r-- 1 root root 183 Feb 28 06:41 e005e2f25e20a0f0180b2c69cda34d326a4ec332da059a849223a514a613107b
-rw-r--r-- 1 root root 183 Feb 28 06:41 d0f49e7cfd789e7b260196ae70892ba24156854e587a5c22f1318ac0ef79eecc
-rw-r--r-- 1 root root 183 Feb 28 06:41 cf7ad05f8e99de8eadbbfbd5ca1c0f9b75499bce07074966b277688ca5e1d726
-rw-r--r-- 1 root root 183 Feb 28 06:41 cebfb26d9675a8f24b2202f67d3c62a9287f073128ea8e983ce9daafbd7f4477
-rw-r--r-- 1 root root 183 Feb 28 06:41 ce008ca7b773bdae609b833541f8c738ce1946d345ecc8ad8c3fabe77ad1acbd
-rw-r--r-- 1 root root 183 Feb 28 06:41 c38bf1b09cf29657245b35820ad8e3d4d170f233f3eaa5ef9a9e147e0f4b6aa8
-rw-r--r-- 1 root root 183 Feb 28 06:41 c1e6505c02da8d1b0a5b3d6db6e19b2eb22dcd54f0e86306ec8a213902b3157e
-rw-r--r-- 1 root root 183 Feb 28 06:41 adc14fa3ad590856dd8b80815d367f7c1e6735ad00fd98a86d002fbe9fb535e1
-rw-r--r-- 1 root root 183 Feb 28 06:41 a9d7d69f33ab0d528d0e4793bea0377775f6f2d809752ec653a2ecd451be6bfc
-rw-r--r-- 1 root root 183 Feb 28 06:41 a0f69816b6e23128ae8edff2861fbbbe540d67b2c0924bb985942e762e5f41a6
-rw-r--r-- 1 root root 183 Feb 28 06:41 9ffcbe73548aabd7ae74d43caaa9d59e785d3514d3e65804dc56811851d4f8f4
-rw-r--r-- 1 root root 187 Feb 28 06:41 9e8dd91d21e867dec464868a8d1f4a27c0e113c53e32f2bec0a7c6e25ad2e9d5
-rw-r--r-- 1 root root 183 Feb 28 06:41 9d3a17803858befc7d87d72f8b7ac86c479243e115c35744fd540860e4a020f4
-rw-r--r-- 1 root root 183 Feb 28 06:41 9c86d77537a6380ce371e3a4860bc7e1fb2adbb2821bf1a8f1cd4e8ce02240c9
-rw-r--r-- 1 root root 183 Feb 28 06:41 940da210c22582431063b711f96b92d6dab5700fa163db902c29ded44c295c83
-rw-r--r-- 1 root root 183 Feb 28 06:41 9349d012686caab46f6bfefd2f4c361c52e14b1cde1cd027476e0ae6d3e98946
-rw-r--r-- 1 root root 183 Feb 28 06:41 90eb20364eea23c320b750476b36772b5348bf2960d0d6ba941239a576ca3150
-rw-r--r-- 1 root root 183 Feb 28 06:41 8ea88bd9dfe884532d47f77b737274ba23866740612010d081dbdfb513d6c3b9
-rw-r--r-- 1 root root 183 Feb 28 06:41 870cfe16acaf55f405a4458b4ba3830f85cc08c42d22f5c4a7a6c23bb993de62
-rw-r--r-- 1 root root 183 Feb 28 06:41 77313c523694bfccaa05034010f6714604098380e77e13deeda40dc91427ef53
-rw-r--r-- 1 root root 183 Feb 28 06:41 76076b9e2eca3c4f25435780f57b1d5649c7d08b784c20f96c384fa0fec5456f
-rw-r--r-- 1 root root 183 Feb 28 06:41 7564a27aae32ab0c593e26d134c475405e4034f7e38f61248b57e47fdf77f725
-rw-r--r-- 1 root root 187 Feb 28 06:41 68df662892eb89aa05cc321215cbafb7a8dcfca2271b9936dd544da4aa174253
-rw-r--r-- 1 root root 183 Feb 28 06:41 66fd9c5c022bbe5b883b86e8a550c7d9c90d28fa244754c4f732e6dfe91fcb58
-rw-r--r-- 1 root root 187 Feb 28 06:41 63c0ae0dfab61833c03642e1265ab52eebff6a440063af5c498aa761c0323ab4
-rw-r--r-- 1 root root 183 Feb 28 06:41 62a1dde77ae9f40ec476841109239f64fa6624d4077ef219479c39031db510b0
-rw-r--r-- 1 root root 187 Feb 28 06:41 5f1d434104a2cad55ccee69b106cd4c10977bee01220e63a0bb00e58afd00fed
-rw-r--r-- 1 root root 183 Feb 28 06:41 5b30870d76c2ee6b01a6d6c39f2682302fb9378d741e609479d4771d5c811761
-rw-r--r-- 1 root root 183 Feb 28 06:41 5a0fe5bcb3a975da19dd1bd7ae26157c7252f7fab44192beb2f05246b0c8bbb1
-rw-r--r-- 1 root root 183 Feb 28 06:41 508cdbf6cf797d7eb38e1b54c136935cccf444c614643f18bdf51e508f717552
-rw-r--r-- 1 root root 183 Feb 28 06:41 4f6009380da927ea4ed6f5f36c93198bd46c1b22d2ac8b6d1a1306fd2731b015
-rw-r--r-- 1 root root 183 Feb 28 06:41 4d4401ec1241c7b89ee08d74a3246ac4f0845656d735a8a4f8fdadfbb63b9503
-rw-r--r-- 1 root root 183 Feb 28 06:41 4ad9a2700fedcd04fec7b1d2add3fa61548b798a6875aa9747086040cff86bdc
-rw-r--r-- 1 root root 183 Feb 28 06:41 480ec1a7516406090dc042ddf67780ef30f26f3a864e83b417c053a5a611c838
-rw-r--r-- 1 root root 183 Feb 28 06:41 3ae4a4ee140b0f16bac0c40f4391eda0d40caf1d7616193d8d0bbe415ec7a597
-rw-r--r-- 1 root root 183 Feb 28 06:41 3721cb871a61152858868b42334b9aeaf279b2e2256881ab942c739a81748ade
-rw-r--r-- 1 root root 183 Feb 28 06:41 36141fcd15aaff25436cd53348c131e7409a6b14476565938711a6a0f9f219b0
-rw-r--r-- 1 root root 183 Feb 28 06:41 332c8ceb5c4a412c0bcb24e3e806bd0659a5b8eb984ada517c77e2bf1d12f599
-rw-r--r-- 1 root root 187 Feb 28 06:41 27e9c50380da4e2f1d081e25070b8e069fbdd5e6c63c7c2f6f83bb7b12591812
-rw-r--r-- 1 root root 183 Feb 28 06:41 2071e1aac3e21887a3e11b602d30960d504b3883789f79929095e66ec9fb4385
-rw-r--r-- 1 root root 183 Feb 28 06:41 2045369fc115b138d1438f98d3c29916986c9fde6b8203f7ff8699f0faee1c93
-rw-r--r-- 1 root root 183 Feb 28 06:41 0e52122d1eb95cdd8ba5f65815f7d1c9125a8c14d82989eae52ab369eea6c7e4
-rw-r--r-- 1 root root 183 Feb 28 06:41 087c51f1926f8d3cb4ff45f53a8ee2a8511cfe113527ab0e87f9c5821201a61e
-rw-r--r-- 1 root root 183 Feb 28 06:41 0828869029e4ce6b108b5195a0db76fd725a0b8987d028b428a10f5e77f58eba
-rw-r--r-- 1 root root 183 Feb 28 06:41 f88e6629b320c83b559075b084d14c00043e01dc206918782ce40d54e5254dd5
-rw-r--r-- 1 root root 183 Feb 28 06:41 f4c0c85932d26496e6ce4c680aa4fbe8987284805f3c475084b407dbffd29d3b
-rw-r--r-- 1 root root 183 Feb 28 06:41 f4a29f6397c32409a7cd3bcda1acb7ddad76a38e457ea5ddf7a827705b2b1ea3
-rw-r--r-- 1 root root 183 Feb 28 06:41 ebf67dbf1854bcba8b57a3c9b0f058eca175685dc7f63fe50f00efba0af5a2e1
-rw-r--r-- 1 root root 183 Feb 28 06:41 ea435dbc2a4feaf5844bdfdf234791402d4336efcd9a343507661db4d549d04c
-rw-r--r-- 1 root root 183 Feb 28 06:41 e64dad0e4748cdff0f11d43b4c5552dc98c3555e8113efcca107f6baa971ad8f
-rw-r--r-- 1 root root 183 Feb 28 06:41 e3a59924933c9f9f2df83449055eb3858f1480fdd0c5edb95df08bedcd2e6624
-rw-r--r-- 1 root root 183 Feb 28 06:41 e1b84e248c162b8341d3b54ec43649ba73414be9801166e904b99755fdb96f1e
-rw-r--r-- 1 root root 183 Feb 28 06:41 df478568479de26b4a83c1bdc4dbab61b5cc82e1a312e2b28bc815a12a951e67
-rw-r--r-- 1 root root 183 Feb 28 06:41 df06d21eca7c19c89d054964b2d9e305a425ebde34403cb0e7966a872b23058f
-rw-r--r-- 1 root root 183 Feb 28 06:41 dd5b0fd9005f232da99f6d41e6ffb74b8c3a41f688b984dc5c9f37d0eef2f29e
-rw-r--r-- 1 root root 183 Feb 28 06:41 cebb434d7bcd40b4fdade7a275bda6102ac2761891bf19466bd584274ce6287b
-rw-r--r-- 1 root root 183 Feb 28 06:41 c6f7077f1699d50cf92a9652bfebffac05fc6842b9ee391089d959b8ad5d48fd
-rw-r--r-- 1 root root 183 Feb 28 06:41 c69a0aaf02fa18655c0d47593a1570db3643e487bf43cd2da2a0796de75ced44
-rw-r--r-- 1 root root 183 Feb 28 06:41 bd93c5a6c9a85f7af62d297accc4fc9cda936eaafebb7d650b1657e064722d01
-rw-r--r-- 1 root root 183 Feb 28 06:41 b747f0bf48d3e8429af372025895d1754afbecf8b937609478209a235f6f6bd7
-rw-r--r-- 1 root root 183 Feb 28 06:41 b316688e84f2d215dbcb597f65bedf7a8f1a5eb17cb327af2c8eabd9f8ddfac2
-rw-r--r-- 1 root root 183 Feb 28 06:41 b2bbcbec8a7f4b8771700879f74988e96b465c6320f90d0de1bfea3bcb14e194
-rw-r--r-- 1 root root 183 Feb 28 06:41 ad1a216219eb17ef3f6cc28c288d86bd1d414ef1062475db716bb513ee8143a0
-rw-r--r-- 1 root root 183 Feb 28 06:41 aa23a3a5aac15413ff5834db2066c7568f9ba3b0826588f9855bb3c29c216581
-rw-r--r-- 1 root root 187 Feb 28 06:41 a8b2b6e915127ef5b45d4f3d2f0bc2f6aa045e47bf3b65ef22ceb8539a4fc11c
-rw-r--r-- 1 root root 183 Feb 28 06:41 a7e9b36ff24ae730706742553b4a4a2733b01156e7c9e26145f9bc6a14f061a9
-rw-r--r-- 1 root root 183 Feb 28 06:41 a4e6c42442cc1ccce8c2da04e5ff7a61368d475925a9712e722aab098cb771df
-rw-r--r-- 1 root root 183 Feb 28 06:41 a2ddc2e07b48561da61f5e06cb5a172329a8afdc1e5f8059154330be5b30ea24
-rw-r--r-- 1 root root 183 Feb 28 06:41 a2c580ed966ff13d295aab54f2073e2675e6e2e72d8e0711050eaf243db651c1
-rw-r--r-- 1 root root 187 Feb 28 06:41 a2a73b2756a5364f39844e652c3696f5f0dea521d0c5c70eacdc416e7adc75e8
-rw-r--r-- 1 root root 183 Feb 28 06:41 a02357c2f569329f4b76c2bb5bb5a2a65cb986283142b156e9e8128ec6a00ba5
-rw-r--r-- 1 root root 183 Feb 28 06:41 9dd1562e77db7963ff9282e33fbb40521a9889c2c32831d0a71bf84eda4d2ad6
-rw-r--r-- 1 root root 187 Feb 28 06:41 9c6d95f794a10b1dbf6125924d95e5576df54b545a9340177430be4691cb3f0a
-rw-r--r-- 1 root root 183 Feb 28 06:41 9922a52935b88f2f8a3484d57712749b298dd26e9dfc7e043a6cf4adf8fa7c9a
-rw-r--r-- 1 root root 183 Feb 28 06:41 946dcf713fff4b44808b0f193e5bb9768b4f78f3cca1fe35d34b80eb3dc87712
-rw-r--r-- 1 root root 187 Feb 28 06:41 8f78675a0eb4d5d86242dafedf5141edcdc8d4df5e2802ea7f69ba060902dc85
-rw-r--r-- 1 root root 183 Feb 28 06:41 8877a11eaa55502789708fa5291acd885d3887727b5eb6768ce7342fbbc69e7b
-rw-r--r-- 1 root root 183 Feb 28 06:41 85c88e108282b27931edc34173baee4b6968c4a5280916098e32740f9f073242
-rw-r--r-- 1 root root 183 Feb 28 06:41 840f9d415fe27e55b98913ac5e3b106d68447c84a86b5b0b91deb8aebaa35bb8
-rw-r--r-- 1 root root 183 Feb 28 06:41 8330db864d294c14c05e78319906d0a005fbb46968fca5b2d00c7d42abe0e31d
-rw-r--r-- 1 root root 183 Feb 28 06:41 816509826498efe74904f186f4d09e2b987b39113b2d0b285968c288299380fa
-rw-r--r-- 1 root root 187 Feb 28 06:41 7b5471d86de038c28fdc80de91e8b03627171aadde5f40410d0a9450956fa337
-rw-r--r-- 1 root root 183 Feb 28 06:41 77c2969ea4db4ca1859305d7ebabf6053fd132ddcc88e1b178bfd938a33cfa50
-rw-r--r-- 1 root root 183 Feb 28 06:41 6f2a40b0be331a2aa81f4445cf4d5c24b4a7de197177e86636c5af5dfee020e8
-rw-r--r-- 1 root root 183 Feb 28 06:41 6c516eefe1dfc59598eb79162f909abead01062d7f2bb2e89b87fde05d928e2f
-rw-r--r-- 1 root root 183 Feb 28 06:41 686a8c459873abf9a9038ba0170ab3bf21d1954d13b9454f1cc788779ff4627b
-rw-r--r-- 1 root root 183 Feb 28 06:41 670874fa6dd544edc5867763ce793552396aedda1a5fda3a97949f66ab0acfb3
-rw-r--r-- 1 root root 183 Feb 28 06:41 62603b373350d977737beca068ba22ca615f499e6214a813cfbaa299f6bc5c2e
-rw-r--r-- 1 root root 183 Feb 28 06:41 5f55785440c7b7e7c7cf975ea4b3428f1f2145a0698361f7f6bb03e9a8a6e3c3
-rw-r--r-- 1 root root 183 Feb 28 06:41 5f0558f396a1152233360aba4fbd7ae7ee591d11fa6232304b8419a3c313d813
-rw-r--r-- 1 root root 183 Feb 28 06:41 5de23b9a4fd02ca6a760af19539a5c6ea8576db98f025233384901f5d83005b3
-rw-r--r-- 1 root root 183 Feb 28 06:41 55ebc6f8ae3b0718f07c06172c026d5684fc89203bd35f0412d07eddfe64b762
-rw-r--r-- 1 root root 183 Feb 28 06:41 4bf3a313782dc9576f21efb3bd3d61387d0d5913052207e90306a741bf6af7d5
-rw-r--r-- 1 root root 183 Feb 28 06:41 48b81f45ee29cffcca68876118944ab5f571fa4a1aa2e6a1670265ed1396a96e
-rw-r--r-- 1 root root 183 Feb 28 06:41 41f07bc3191c806ab29af19ce16beca62237fb3339ce25fd9ef3d471dc11a444
-rw-r--r-- 1 root root 183 Feb 28 06:41 3bf30ed3406875194d74a8d86fb6b47308c440b51fda1fbea2599349545b3c21
-rw-r--r-- 1 root root 183 Feb 28 06:41 335d9273156fd83495da779327158676538700ae2eee4c92ed99509b4b0aa3ec
-rw-r--r-- 1 root root 183 Feb 28 06:41 2de0ffa0ac235ff45fa4ccb944cd3f33f79ff5d21fcf95f01f99516bb6bb72cc
-rw-r--r-- 1 root root 183 Feb 28 06:41 272fc988e582a377bcc3580d784dfd68aaa037a87b476d7aca1d86899f4c5e8e
-rw-r--r-- 1 root root 183 Feb 28 06:41 22050dd3659b568c5cb352b0e81958fb986bd941031a90c74ba7f6d2480c11ea
-rw-r--r-- 1 root root 183 Feb 28 06:41 21decdbc8c0eab836b2723f395f2bbbb974df0435ad1d91fa539cd335015b4d4
-rw-r--r-- 1 root root 183 Feb 28 06:41 20e7c953439e66f3882ab96fe0faa8ba246d6fb12c03b0cb4e2dc4623b8bcb21
-rw-r--r-- 1 root root 183 Feb 28 06:41 1e7c647fffee385f8972634725992c15f7f547fc9b67d52e8d9ae74bc3e0f2c5
-rw-r--r-- 1 root root 183 Feb 28 06:41 1bf9f239dca1636149bc2f3fc334077ae959ea9607cacf945ef8f8bb227dc5e1
-rw-r--r-- 1 root root 183 Feb 28 06:41 1525d0589d5bcf7c6193e107e230638bf2190c872f9cf464ef073b78718b5894
-rw-r--r-- 1 root root 183 Feb 28 06:41 13b8e28e661d5ca60a46477a6192bba342583a9fe55bee3595685262d7bc06a1
-rw-r--r-- 1 root root 183 Feb 28 06:41 07ffabcd3d17c33e784816e07702830b386373250cacca013cffae55265ca3d3
-rw-r--r-- 1 root root 187 Feb 28 06:41 068334b2f9cd5e30b43866c4b60bd31234e29be9bc11b06af037ec248df4f7ae
-rw-r--r-- 1 root root 183 Feb 28 06:41 01d0bbf9537ef1fd0ddf815f41c1896738f6a3a0f600f51c782b7d8891130d4c
-rw-r--r-- 1 root root 183 Feb 28 06:41 00fc93b517e4fd7d8acd139694d85cc879b25540d6a0e3cb247dceaa26934bf8
-rw-r--r-- 1 root root 183 Feb 28 06:41 ffa458285374138c8b9faea3444f229228a5f8c73e5236e6fb3de900f87a272a
-rw-r--r-- 1 root root 183 Feb 28 06:41 ff6e3a950919c361b253acb9b9c35a9636d6b89c52803285f629f4767df9ff06
-rw-r--r-- 1 root root 183 Feb 28 06:41 fc89f8c988548dd7ce2d43c034b5ae3d82dbeda52199eaecca5c572aea43f826
-rw-r--r-- 1 root root 183 Feb 28 06:41 f5f669b64f897b6206a4ffd3761816c0a0cbbc8a1796f2d8302c61797d5766c0
-rw-r--r-- 1 root root 183 Feb 28 06:41 e2ccf7cf20403f3f2a4a55b328f0de3be38558a7d5f33632fdaaefc726c1c8eb
-rw-r--r-- 1 root root 187 Feb 28 06:41 e2260a7af33b3ba30074111c456793cef58d2ab43c5965bdbb655f90f97399ac
-rw-r--r-- 1 root root 183 Feb 28 06:41 d574e6e65d5478c51263ede37ff05ce086921f9047b51aceddf1e02d13b10082
-rw-r--r-- 1 root root 183 Feb 28 06:41 d4cf3423b64bfeb540b3e0ce22946191c033d38b5d32b37a8f0f3a4cf514cd23
-rw-r--r-- 1 root root 187 Feb 28 06:41 d2b4168467439f03eb7e0e30be9412d5a29d050aac77dc60de3dcb9f45f91b07
-rw-r--r-- 1 root root 183 Feb 28 06:41 c85e65a173c65f32e7dde10e38aaea00cbb549165920422c04223171e1cc3747
-rw-r--r-- 1 root root 183 Feb 28 06:41 c5bf32be58438d4383592921e4a47ced6ef82f54f9084673caa707c720033216
-rw-r--r-- 1 root root 183 Feb 28 06:41 c4b7c953b769c6299a801fb2d194e8d7c797ceee885a576c50c3bae0cb9c9e1d
-rw-r--r-- 1 root root 187 Feb 28 06:41 c465a1051794a507a55adebc0f044dc6e79d9b67a5e05aed4bf684afe088f976
-rw-r--r-- 1 root root 183 Feb 28 06:41 c1e9ab3a56a2ab6ca4bebf44ea64b2fda40ac6311e886ba86b4652169cb56b43
-rw-r--r-- 1 root root 183 Feb 28 06:41 c19621bcad2c9d502618dfaf25a6be0fde23bd730e51889dc883376c91cca6c4
-rw-r--r-- 1 root root 183 Feb 28 06:41 bf09a071f5310dae429626c6fb9939424a90381f52bce857a112f4d2baa6969f
-rw-r--r-- 1 root root 183 Feb 28 06:41 bea2169db1be756760cc9b711a674d511dc61a8cbd8814eb4029a2c4a6be1505
-rw-r--r-- 1 root root 183 Feb 28 06:41 bbac8936566f8317308f00a027b5965a1edbbd97791437cb0f95c656a96d963a
-rw-r--r-- 1 root root 183 Feb 28 06:41 b7274d28e3e983bf720db4b4a12a31f5c7ef262320d05c25ec90489ac99628cb
-rw-r--r-- 1 root root 183 Feb 28 06:41 b5aabce9b530a9adcda916a3d030f2c398cfb720a4fb86eb9ae7dfbfb62cec60
-rw-r--r-- 1 root root 183 Feb 28 06:41 b12b52096e9437a5b6cf12cda11c9b5af4a3b37d37c07cdecd6bb1422bf5b3c5
-rw-r--r-- 1 root root 183 Feb 28 06:41 abd277d90caba20aee0f1f05a68d24cd117badc1205d0d1b1a0451357d32b92f
-rw-r--r-- 1 root root 183 Feb 28 06:41 ab7d91705025289d6149ad9ea1abc4ce4c49555df71904f29136c223785ea6f7
-rw-r--r-- 1 root root 183 Feb 28 06:41 a4f3687ae234d208d0f21d17573c2bb60f46ba4001ecaadd332924c2f3e13cf4
-rw-r--r-- 1 root root 183 Feb 28 06:41 a48a9f159e6a7dcbd24b3d837935765a1fe4040e45611985b34eb6bb35589363
-rw-r--r-- 1 root root 183 Feb 28 06:41 9b3334b66d04056213183b2e367c6d7ebc60496f0a5f1e2b8efffa25bda09b9e
-rw-r--r-- 1 root root 183 Feb 28 06:41 8f465cdbf43abdbd0dbb4e90cee85fb1a821923098bf6b6d466cae8d26eb0520
-rw-r--r-- 1 root root 183 Feb 28 06:41 8ef6711ecffecd61f350d95b4e9ccdbe934ef387b3a73243c102e7a7e1d818cb
-rw-r--r-- 1 root root 183 Feb 28 06:41 8aa142a40116d27af0146c991ebc119c65a84c1f663aef077992e08eac2ff7fe
-rw-r--r-- 1 root root 183 Feb 28 06:41 8476d0dcdb53f1cc67efc8d33f40104394da2d33e61369a8a8ade288036977c6
-rw-r--r-- 1 root root 187 Feb 28 06:41 841b017d49f8211881a23acbd002bfb07c0d9c0d720c4a99c42669458bf0ee39
-rw-r--r-- 1 root root 183 Feb 28 06:41 8318535b54105d4a7aae60c08fc45f9687181b4fdfc625bd1a753fa7397fed75
-rw-r--r-- 1 root root 183 Feb 28 06:41 7d633defc4d820f27094e76048fb87d43dd9e4696025e123a22086e68347bf90
-rw-r--r-- 1 root root 183 Feb 28 06:41 71ca930ef0af2e997078b4f46bb473e9a750cd3c3593af1836cd9756ea31e967
-rw-r--r-- 1 root root 183 Feb 28 06:41 6da8c1b9c6d1ceef78a31dbc7acbb9bd8ef35f319861acec25031b49049c08fb
-rw-r--r-- 1 root root 183 Feb 28 06:41 5bfc4134a36c849614bd4c7e15a5cc07ea46711178421bb00a34df9ee4c93afb
-rw-r--r-- 1 root root 183 Feb 28 06:41 5a61b7f7fb6474708f95cb2e3d8b2a6ae4b5a1aec65e81225777019b5162148f
-rw-r--r-- 1 root root 183 Feb 28 06:41 57c99216eb119f4b2682c5820bab272ff302fae89b9e32edb538d0cf6663d1c7
-rw-r--r-- 1 root root 183 Feb 28 06:41 4cf5ff39fd37b61f1fc66365e5ab985f88075eff14644648f790e9b8d334813f
-rw-r--r-- 1 root root 187 Feb 28 06:41 4613d320aa8802792a5a2f3349a2207e32f671e8c0400580ddc30eda6fddf62a
-rw-r--r-- 1 root root 183 Feb 28 06:41 3436c6f3e5c10513a959fc7ed7bcfbdf3241788cfa517f892650f4829fe226a4
-rw-r--r-- 1 root root 183 Feb 28 06:41 2a52dbc35240b2d407743ef53047b5815425dded3798b710a9b7cbb28c2a7175
-rw-r--r-- 1 root root 183 Feb 28 06:41 294fa9e6631bd404d39b3e4d5712e135e6f4d8b4c37e7f9dd7912c7af11e354a
-rw-r--r-- 1 root root 183 Feb 28 06:41 1f3de76f945ccbc2dd9178fb2486fbfd8aaac5aab21c3a0c687a768ec7444c77
-rw-r--r-- 1 root root 183 Feb 28 06:41 1a276cbcddaca78181323c19c669e3b17dc1ef617faa194c0b925661570dc3ca
-rw-r--r-- 1 root root 183 Feb 28 06:41 16d76f262b689bb1a33faa2df954dbe7ac717937fad4765a05ddfae3dac92856
-rw-r--r-- 1 root root 183 Feb 28 06:41 0e82ab8bffbb4a955ae2eb98a00ee35b7affbb50844f9f569220a2136fad7024
-rw-r--r-- 1 root root 187 Feb 28 06:41 023b8fa899633ced8beea27eef854faf2ecab412a1dc2e98ee0d96a884314ec3
-rw-r--r-- 1 root root 187 Feb 28 06:41 0143b2b0de297ed177df0cd3f576ce629e4437773952aa65582a7ca126b5ab13
-rw-r--r-- 1 root root 183 Feb 28 06:41 be131ee180b6e548422c6004d3ce5fff78aa98b55bfca270a48fe3fdff10af7c
-rw-r--r-- 1 root root 183 Feb 28 06:41 a005de34035cc6a8fa62d6ea3f19f94e02a0bc6246064f3efc6485bf2130d592
-rw-r--r-- 1 root root 183 Feb 28 06:41 89ccea93718c9cfd21fc56f3037f6892b30467030ba7f1e085651f1bdf4e00b7
-rw-r--r-- 1 root root 183 Feb 28 06:41 709bd2be88c1f020b36d0b1414fd92e7306e8b91612bef0b3e3e202189d608e0
-rw-r--r-- 1 root root 183 Feb 28 06:41 5fb7c7d14a60f3be4b4392d9d13be44969f973f38763af36da4eb008e4ae6b05
-rw-r--r-- 1 root root 183 Feb 28 06:41 2695efd1710f21c6f90bb11c9465322295f6aeed413d6df46f1154b0d944a891
-rw-r--r-- 1 root root 183 Feb 28 06:41 d0844afe66ecc2a8e792dcd4e3f9be7416a04120f7d895609d95b2de50570076
-rw-r--r-- 1 root root 187 Feb 28 06:41 25327cb5bf1b9a26d752d7ea17923abca4a52a9490dc3c77ae741694d4aa9651
-rw-r--r-- 1 root root 183 Feb 28 06:41 14187df202f8cdf816ee532b170a2b4b323025a981c3c4352e7e50b03730f98b
-rw-r--r-- 1 root root 183 Feb 28 06:41 ff51b667648200524ae20f85ae64e84f719092878d8513b61bb04c90b5bbd01b
-rw-r--r-- 1 root root 183 Feb 28 06:41 f172bd03763b8a0d9c4a45bd9e8f0294016b2d8e5f1134068513d9c8606d8419
-rw-r--r-- 1 root root 183 Feb 28 06:41 ee603283febc4c31b09903392408a2fff1daf69ac2244a5e4ad07eca3bc79dec
-rw-r--r-- 1 root root 183 Feb 28 06:41 ed913977130d9b1bf62fdc64a9c383e143a416cf8314df43ca24800b9d9b0c50
-rw-r--r-- 1 root root 183 Feb 28 06:41 e625f0bd2f7a6aa0d8657218a8ac2f3c90039dab82d4f0185cabf4d4ad2de810
-rw-r--r-- 1 root root 183 Feb 28 06:41 e61093809c30403b74392ec1853c1bc40b3364fd311fa2e5a919ef6c7e8bfde1
-rw-r--r-- 1 root root 183 Feb 28 06:41 e4301813accf90324d3e5cd52b12a1fc68fb13e24e8245315869e52ee572c33a
-rw-r--r-- 1 root root 183 Feb 28 06:41 df739a4c91de28ab6e30fd5f4ca9af3f78166fe54832a6b81a782cbfc0890c2f
-rw-r--r-- 1 root root 183 Feb 28 06:41 df6b7f85124c25bddca124c719da72275678ec6a878e6f2b56175b29c1105572
-rw-r--r-- 1 root root 183 Feb 28 06:41 de47608bb82813752b98bb01008c08aabf4a4ab97eafb4c8763a9c421fa6e2c7
-rw-r--r-- 1 root root 183 Feb 28 06:41 dcaa12e212bdddbe3086016153365acef1934e519836549c8f8e50bd756a25be
-rw-r--r-- 1 root root 183 Feb 28 06:41 c6663abf7e5b08423314aebffc1103c1b7eff425a8fe805012569c64b85c77a4
-rw-r--r-- 1 root root 183 Feb 28 06:41 c23b872883073cc5295004405541c7b60ef4052b6e94fc6a849b0c5d55b2d0fb
-rw-r--r-- 1 root root 183 Feb 28 06:41 af724179eeea6e95db11b2fc9a84577263ee5d37cdd7ce27ed1aa4b381bc3b4a
-rw-r--r-- 1 root root 183 Feb 28 06:41 ae6d1a4843298f6134e912411e19d5eca133988fa78f228150c6c136ae1d7309
-rw-r--r-- 1 root root 183 Feb 28 06:41 a862d41b1824f96ad02ebb1cf287422349bc74284c69e6edb068786aebe4e9da
-rw-r--r-- 1 root root 183 Feb 28 06:41 a3c1a5ceda8b86b7cb64d5d6af58fc787ba400f2912b907969d27547f96545d0
-rw-r--r-- 1 root root 183 Feb 28 06:41 a37118a4888e02d28e8767c08caaf73b49abdac391ad7ff18a304891e416dc33
-rw-r--r-- 1 root root 183 Feb 28 06:41 9f6a93ba4933a8f0cf62acaa577f452acd7bd7310df36b143d792cc51c727991
-rw-r--r-- 1 root root 183 Feb 28 06:41 9efd5d002c4a0112ef9f58e440bf1acaad5919c2744bfdc9d0505704bbec3073
-rw-r--r-- 1 root root 183 Feb 28 06:41 9c802e332c39cfac8b1e0819d0136332c25a2bd0737bfbef8f011fabae6e5b82
-rw-r--r-- 1 root root 183 Feb 28 06:41 9793bd6ce99a4fbc651668de691841437d5a01b74e74e61f707d1c30948b557f
-rw-r--r-- 1 root root 183 Feb 28 06:41 967f8c4db1977ef999142d7b8b8703be123b5a82eee9dc094af74111ea095dae
-rw-r--r-- 1 root root 183 Feb 28 06:41 95eb407d5fda06538f34a501472ff65afdd7dc1a37c1ecd9014b472d021b2bc5
-rw-r--r-- 1 root root 183 Feb 28 06:41 95d06bd3bcd5b9fe6562348080e54b67ee65a32338f4250134aa14ec362fc0eb
-rw-r--r-- 1 root root 183 Feb 28 06:41 95b6bbe53d81a91e475fb8b8a478d193bfd0a551a5634833ead99eb962e1a799
-rw-r--r-- 1 root root 183 Feb 28 06:41 95746ae648dde21e11129e108111681b35242f4c82df1ab36a74dc7f5acd49e8
-rw-r--r-- 1 root root 187 Feb 28 06:41 912e6bdc5ef0d6583287b0d8c9bf2f396afaa565c558f06d39a8f963c63df60a
-rw-r--r-- 1 root root 183 Feb 28 06:41 8f3fbb5129dcb9194c02b67c1b41a3f60dd369663f53499b2b3c72a73c6fa9d0
-rw-r--r-- 1 root root 183 Feb 28 06:41 8ae8f8e90016760f1fafb57d2ad5c8650797e63755c215d89271f26db32316da
-rw-r--r-- 1 root root 183 Feb 28 06:41 8a57c4b4bc098b4c441423d2e3d2f789e88e97354b25665a26274681071c02e4
-rw-r--r-- 1 root root 183 Feb 28 06:41 805e3c98b42a2175a081666b4e077bab32136ea6cf4b9976a952569917d9e329
-rw-r--r-- 1 root root 187 Feb 28 06:41 7c8489be0946cf10cefd55e12fa00f8de4fe683b702f2bf9eee747edef23df73
-rw-r--r-- 1 root root 183 Feb 28 06:41 7a7d7156a3c17adf9c69a0e6bbe48784959c635c81c0254260ec1c90c3897d93
-rw-r--r-- 1 root root 183 Feb 28 06:41 788dd06f214dc4c7404becadc224d6b57ff7f5ff7864c7ebf22042afc04487e9
-rw-r--r-- 1 root root 183 Feb 28 06:41 73a9eff11195e9901cb936e1ba5a4ba0555103d068e72aa93e71e713186c3741
-rw-r--r-- 1 root root 183 Feb 28 06:41 6a36c1a62cba047b1cdb93bef316c6617c79816e32b80166c471c30bdb77e526
-rw-r--r-- 1 root root 183 Feb 28 06:41 67eef828df9caa98dfba065cf180ee0b808437aa5ebcad7f8703807644acad61
-rw-r--r-- 1 root root 183 Feb 28 06:41 671a0bd1ec9c8a6efd356aab91448e86a04b2cdb336a1f760eae481884649238
-rw-r--r-- 1 root root 183 Feb 28 06:41 5faf06e3624ed2ae63a4500bfd7c3e40d9efbb21d4b45ba3cdf4fa933025a73c
-rw-r--r-- 1 root root 183 Feb 28 06:41 5c9a0f7f1ccfd1542bc08823f9f67ac4eb74b7e10253a8043a035ffa4ef1e92a
-rw-r--r-- 1 root root 183 Feb 28 06:41 5b10cf36b014e41d675310d53c76ca4a41b48e8b67f3808f0f44b575ac043182
-rw-r--r-- 1 root root 183 Feb 28 06:41 5975800a62bbc5b00284a0f6522420bb65052248909c214e9dfc08543d9a6b7d
-rw-r--r-- 1 root root 183 Feb 28 06:41 581089811e7e57dd613b88e537ae5e083db91200224878a68f85a0650fd33609
-rw-r--r-- 1 root root 186 Feb 28 06:41 56d4b3d6310fadb7294b7f041aab469c5ffc8991b1b1b331981b96a246f6ae65
-rw-r--r-- 1 root root 183 Feb 28 06:41 4eb88310d6b4ed95c6d66a395b3d3cf559b85faec8f7691dafd405a92e055d6d
-rw-r--r-- 1 root root 183 Feb 28 06:41 4d4ab737e2fbb5af0fd590b4b7e8c6fe76d3a02a9791ef7fdacf601f9e50fad8
-rw-r--r-- 1 root root 183 Feb 28 06:41 41ed70e7b2b70c6ebf00ec2547c811bf1bee9ffd5a6ff94469b48e48e5bea524
-rw-r--r-- 1 root root 187 Feb 28 06:41 26e9ab7f2c8d2ac37903af90be2a1aef6f2acbd699f4f259caac7ad33d2000c1
-rw-r--r-- 1 root root 183 Feb 28 06:41 232793ce18826c75e3000926a0fbfb3a6abcb2d1306e5306d5ae7f5d710bacb1
-rw-r--r-- 1 root root 187 Feb 28 06:41 20d3acfbd542324fafd9f43c7ac985237ae6531515052af46c641f507bf6e7d8
-rw-r--r-- 1 root root 183 Feb 28 06:41 1e95c007310ee7d3347b20ca71415532ca88ea21c963788c215560ac7a03b629
-rw-r--r-- 1 root root 183 Feb 28 06:41 1d5cfb4ff0ea67387aadd7b3059cf1473fee113642e9c1d6f308404219d9a2ae
-rw-r--r-- 1 root root 183 Feb 28 06:41 19bdc906118b0f15277cdd86ee107543e6e11fb6dcd966a16cc81707ec260c1d
-rw-r--r-- 1 root root 183 Feb 28 06:41 11674b2d321fc24239b02afdf966c32e36594a6282bd7f3d4bcd12438558ab51
-rw-r--r-- 1 root root 183 Feb 28 06:41 0695cb75dbb27d935a9b97e1a8b7ccd335076b0ced0ec88aa8d3a3bf129ee74f
-rw-r--r-- 1 root root 187 Feb 28 06:41 00000578eaa84e1cea0d6f0be5cf3f7600bba8b3a2bcc38784fb1c932a239a7f
-rw-r--r-- 1 root root 183 Feb 28 06:41 fd59542dc7851a2768b3ed2619ef675eefc7503d079dc288321f84064475d0ae
-rw-r--r-- 1 root root 187 Feb 28 06:41 f901616f00a63f4f9c7881d4871a03df3d4cee7291eafd7adcbeea7c95c58e27
-rw-r--r-- 1 root root 183 Feb 28 06:41 f87298a4592b193c58d679583cbfcce6567436ed2470f466d77d40ea83f8595b
-rw-r--r-- 1 root root 183 Feb 28 06:41 f29d7c361579222ef4af61f348a4662474e53f3b77351ee7e7252bfed0ec2f68
-rw-r--r-- 1 root root 183 Feb 28 06:41 f1bb480dfc44a0353af97217d5949388d9fa09b9138dbc3dd2868804e979969e
-rw-r--r-- 1 root root 183 Feb 28 06:41 f03df3d4134230420cdf7acbb35f96a2542424246ab052ba24c6fec6a4d4f676
-rw-r--r-- 1 root root 183 Feb 28 06:41 dfb037c0b0038dfac7920d5d70e1b4a99c320199d882d301fc8736ba9df68b11
-rw-r--r-- 1 root root 183 Feb 28 06:41 de45f688d366bf0137ccfdf4fb3f0041b1df41e7353b6233f32a6e2a1e4448a1
-rw-r--r-- 1 root root 183 Feb 28 06:41 de2e87b3dcea34c7789910c9967bb49c0b4f450aa231c60c7ababbbbb1cd3a06
-rw-r--r-- 1 root root 183 Feb 28 06:41 c75ff75cbe3a0d951bb856e3626716b845f1e3a650644f2bfe7f5a85dfdc2a16
-rw-r--r-- 1 root root 183 Feb 28 06:41 bf288b07f4ae0d4367d778adcd360f1117797421eea50277cbff4dad1b30cff6
-rw-r--r-- 1 root root 183 Feb 28 06:41 b9ecb22ce2603076e036f12e54034983f1006392fd80d73a01721794947dfe8c
-rw-r--r-- 1 root root 187 Feb 28 06:41 b7cfd472ff903441ec6cd55bb506f9744211a6e68e52525d42445169bda03f5a
-rw-r--r-- 1 root root 183 Feb 28 06:41 b75622fd920dda0d151e719b8b33a40a4b479d77181d5fb67d5a75175a2a0bd7
-rw-r--r-- 1 root root 183 Feb 28 06:41 b465a6a09bab1ef8705a1a60ff669f47d0f9379e922d9cc0e5c441fafd70a1a8
-rw-r--r-- 1 root root 183 Feb 28 06:41 b21121518221b0f031bd41f010aeef1e4015c1aad5d8b2539d2ddcd60c7f8666
-rw-r--r-- 1 root root 183 Feb 28 06:41 b0ac2c26eabdb0e0a9b0d10fd1458ca73c575b19d65e13f0e7484cbee84038b3
-rw-r--r-- 1 root root 187 Feb 28 06:41 acfffe68b49925fefe543e71ea7c096430d2221491579fccfa877c9ddd2e4cc4
-rw-r--r-- 1 root root 183 Feb 28 06:41 ac72b2da3a6d76e282c205b8c1e948954b8f581632a4e162b72f380c29482dc8
-rw-r--r-- 1 root root 183 Feb 28 06:41 ab701878befc26097fcdd272bb701aebdfa3d227caac85d28c5d44de84d6d44e
-rw-r--r-- 1 root root 187 Feb 28 06:41 a74d0dea3f08c2a4c0dab1ede11ab6884c23da20f6f842d2fc10a97743e70606
-rw-r--r-- 1 root root 183 Feb 28 06:41 a47b47b01500e3d17ab8fee8295650493ce927119fb18e983f311fb37d38385f
-rw-r--r-- 1 root root 183 Feb 28 06:41 a145bfb46c56abd44bc6be971b02f534093a9d27490289eb4c9394af765b71f9
-rw-r--r-- 1 root root 183 Feb 28 06:41 a0f0ad355cff6618b58f2af840a2d78ff91abf08b91195dc00d7b3ba2a9c4cff
-rw-r--r-- 1 root root 183 Feb 28 06:41 9e5b3837ba58d2a9cff8b6587d25e2aa4cef49da6c41694a5a794f738cf75f70
-rw-r--r-- 1 root root 183 Feb 28 06:41 9c88d3dd973dfd3876e1182fc07943ce1adcddb7b2bc993d774e254fe299b053
-rw-r--r-- 1 root root 183 Feb 28 06:41 9967f37546bc1f171df033f344a50cf143695d87011fd9a61365cab404f9a5e1
-rw-r--r-- 1 root root 183 Feb 28 06:41 9322bd922f20c6fcd9e913454727b3bbc2d096be4811971055a826dda3d4cb0b
-rw-r--r-- 1 root root 183 Feb 28 06:41 91cee1c67c150ea3a001ce0bc7132a142653ec9e51506a0b00ab33e8045dbe47
-rw-r--r-- 1 root root 183 Feb 28 06:41 89175d5704083a8957c4adb1e946bbdf92482f4c9c17794a283150abbb2470e9
-rw-r--r-- 1 root root 183 Feb 28 06:41 7f51be298ecb4a73c9a681f197042ea49967996cb958d2238b5f2fc470b17a5b
-rw-r--r-- 1 root root 183 Feb 28 06:41 7eb44b7c585b871a8de1bbee45e412c6105017cb27befbaf673ca607d8d5552f
-rw-r--r-- 1 root root 183 Feb 28 06:41 7d4f0d0a58fca9137bca767d9c8d052586b61803bbc11a98e5756c5a58c41819
-rw-r--r-- 1 root root 183 Feb 28 06:41 7d488fe6636d30ba6158d08f153be931e84efdc047d01b46ff8a6b9a296ed4a8
-rw-r--r-- 1 root root 183 Feb 28 06:41 7bfda8851f0bebfaad675be189f78532e95579270dd9827d6a6df66d7a768195
-rw-r--r-- 1 root root 183 Feb 28 06:41 7af87943443fc3b64f87b3190ed8e9efba5b8cdc44f2cd09cfd915e337aac249
-rw-r--r-- 1 root root 183 Feb 28 06:41 6daf8a9e085339e242cb57b2c09e06383a32e7ed43eb88f2ef22c7389c250ebe
-rw-r--r-- 1 root root 183 Feb 28 06:41 6a09c9ae14be7dc4eb920d82d50caf7c4e641abbd02d2316008222c96a497246
-rw-r--r-- 1 root root 187 Feb 28 06:41 6a02b7d5d5c1ceec3d0ad28dd71c4cfeebb6397b95fef5cd5032c9223a13d02a
-rw-r--r-- 1 root root 183 Feb 28 06:41 652c551126c714ed92d7eff48d3690866d752bfbd228d9079d1432ee0edf13ed
-rw-r--r-- 1 root root 187 Feb 28 06:41 647d6814fdaf84ae92653788121058bbfd16ed95becb598235310823b63c3001
-rw-r--r-- 1 root root 187 Feb 28 06:41 63eaec81ac05f2a4fd01727d7b89690042f30ced1b69bcf6a0533ec1e1cdffbe
-rw-r--r-- 1 root root 183 Feb 28 06:41 62fdd90f4a5f421508a1fc47115be4850da79ac821f34eca541b98d98c8428e0
-rw-r--r-- 1 root root 183 Feb 28 06:41 6227dd21ff7b18f59c6f7c2948a9b25023be738160859f045e8ada2de3274303
-rw-r--r-- 1 root root 187 Feb 28 06:41 6172cd466f0a89976a3e8e7671bd8da1fc31f0e6c96907e6287484f7c87f4a72
-rw-r--r-- 1 root root 183 Feb 28 06:41 5f70b9e212c361049290926b498ceab47ff58450c0978e8fd863d8ce435f73a7
-rw-r--r-- 1 root root 187 Feb 28 06:41 58bb49e35000a6d932a3b2521b446db8a197dfa31ab5c16932455e4d4f3ee3d5
-rw-r--r-- 1 root root 183 Feb 28 06:41 50809a53fef95904513a840d4082a92b45cd5f1b9e436d9d2b92a89ce091f164
-rw-r--r-- 1 root root 183 Feb 28 06:41 416335ae6302946042249279d96cae8a33337baae859b6f962618d3c9e520a63
-rw-r--r-- 1 root root 183 Feb 28 06:41 408f636bd26fcc5f29889033b447cb2411f60ab1b8a5fc8cb3842dab758fdeb5
-rw-r--r-- 1 root root 183 Feb 28 06:41 3e0f744d54acee8e2c7fea0be2c4cf99c089a4faa83ff7ccc3d0d9f1b59a3463
-rw-r--r-- 1 root root 187 Feb 28 06:41 3dc04334f758bea5a82f896f7670579407b49b1a9f3294d3edeec6d1e9c25673
-rw-r--r-- 1 root root 183 Feb 28 06:41 3d18b3d51a69ae1c77370b0df969c25f6962e5c3823a61c78ece22cc6cbcc409
-rw-r--r-- 1 root root 187 Feb 28 06:41 378562cd20849dce3b74d85bc3e72c84f8ab59e94aa29650e1ad1b47a6fc6773
-rw-r--r-- 1 root root 183 Feb 28 06:41 32481673e905f525a25fe43d93ccde86b2c3b50a257bed5a8084f113fdcbe81b
-rw-r--r-- 1 root root 183 Feb 28 06:41 2f28d75406a3867e2fd3b8285233f2514c84ec2be245f6dcaeb4ca32768731ba
-rw-r--r-- 1 root root 183 Feb 28 06:41 2dfbe5cb955e4018b76e6542a3b8782144dd5f5735914db9921fd24c3b3d106d
-rw-r--r-- 1 root root 183 Feb 28 06:41 2bfec85a63b122da047e57b18beeb678d80099fe3d9123d5ee15eb73af932171
-rw-r--r-- 1 root root 183 Feb 28 06:41 2b3f55d55583c9dbfcc978ed77120577522cd77e481a2017d5247b4ce78f8b3e
-rw-r--r-- 1 root root 183 Feb 28 06:41 2850338cc759306f832cc2d6445f5fee8a6a11c9971596136aae11151ae7691b
-rw-r--r-- 1 root root 183 Feb 28 06:41 2755b492fbb0ffa5c327819a4699c7001341b9f7826a8367273549f1a58a4831
-rw-r--r-- 1 root root 187 Feb 28 06:41 21d1140c3af9909145bd5fdbad2e9e1e5f58d92a30df5b74c04f7230368bdab4
-rw-r--r-- 1 root root 183 Feb 28 06:41 215dac4c9672ac5de643563fd642ea5933e6f031abfcad8bd566d8fdcfb983e4
-rw-r--r-- 1 root root 183 Feb 28 06:41 21077167bb124480e19d4bc0a5dc9c0d12d666be5daac823698a351637fe9aee
-rw-r--r-- 1 root root 183 Feb 28 06:41 20a8d4ceb73c968cdd25ffda9b148c9ebe6cc2672b5b8c5f0a6c4b2ee0723b32
-rw-r--r-- 1 root root 183 Feb 28 06:41 206e580157eae3395cdf954ff30501e16902074656a4b9493f36f896167496b2
-rw-r--r-- 1 root root 183 Feb 28 06:41 1ee8e31e6fdc7e9aa48d2e7393d79281f640474f757256ec151bc03c917e45ab
-rw-r--r-- 1 root root 183 Feb 28 06:41 181f334d46f8ec615ff12c0c987055ae8dc003a18967205baeeb27d41fe7d9f3
-rw-r--r-- 1 root root 183 Feb 28 06:41 16b8676587c1ddde60b23b27205112a4d5f0ce7bd0414f67476d5eea1502af36
-rw-r--r-- 1 root root 183 Feb 28 06:41 14def6dc35a8145127ae2355d84aa2f790ddb3f7241df99d75c4a0216061ebcb
-rw-r--r-- 1 root root 183 Feb 28 06:41 10b6660cb0754bfb89265475d7678359ef45ec52778d14261d17d0d3cb5507df
-rw-r--r-- 1 root root 183 Feb 28 06:41 0bfa235262029bdd325fb26836679850de294657b8c5ab32ffdc60df71f4a42b
-rw-r--r-- 1 root root 183 Feb 28 06:41 08f968569f15f1f803466845f954e8b384fee6669aa589c85b860fd3ffe59a09
-rw-r--r-- 1 root root 187 Feb 28 06:41 085900b71253772a15c266c3f6b53c9b85cb1ff502884597f0b165c7a6d044d0
-rw-r--r-- 1 root root 183 Feb 28 06:41 fe445cbe3e63c04d0cc206b9dcb15652fb57c222081af5b1bef82aac14db7dd8
-rw-r--r-- 1 root root 183 Feb 28 06:41 f8de74aecd549d3db96bad6a2e24947903fa249eb0c309dbef6d9e7b1deb54cb
-rw-r--r-- 1 root root 183 Feb 28 06:41 f4d89779148ccd245c8d50914a284fd62d97cb0fb68b797a70f24a172b522db9
-rw-r--r-- 1 root root 183 Feb 28 06:41 e88a691e98d9987c964521dff60025f60700378a4879180dcbbb4a5027850411
-rw-r--r-- 1 root root 183 Feb 28 06:41 e7bcad523d65217b0c43e39bedde3876f9ce15e4e4591b10e6a1f68617524213
-rw-r--r-- 1 root root 183 Feb 28 06:41 e4a51cb4730706d59cb75f05fdbce7378efd93c99a5808e60b371f77235ef1e4
-rw-r--r-- 1 root root 183 Feb 28 06:41 df1f66f32a199e3a616c10ce8131dc4ca468a5c709e39ef774e4f0a775b356de
-rw-r--r-- 1 root root 183 Feb 28 06:41 de5969e20ca9ebc2cf99af428feb9956ab535774f10b8d89736382c83d736f09
-rw-r--r-- 1 root root 183 Feb 28 06:41 dd1f9d502c7951df47e8f8ed245e8bfa24f7e82c28f19399a8f0e74b06113a21
-rw-r--r-- 1 root root 183 Feb 28 06:41 dbf377b7e71855303fc48a8b1fee079ff9107af6d7a59c89236a9bce37ee9e19
-rw-r--r-- 1 root root 183 Feb 28 06:41 dace63b00c42e6e017d00dd190a9328386002ff597b841eb5ef91de4f1ce8491
-rw-r--r-- 1 root root 183 Feb 28 06:41 d7b01213da221e66617e2ec5b7003deb68edff0bd0fc1452ce6b054ebac29402
-rw-r--r-- 1 root root 183 Feb 28 06:41 d5a9b3661fee8b6e60b3eac3543d83dbffa6486f62ec76744ca38967203efe49
-rw-r--r-- 1 root root 183 Feb 28 06:41 d1c9bce40d0f57f8f2531c82ecd1ad8875596eeaf3b750876edd806f555653b2
-rw-r--r-- 1 root root 183 Feb 28 06:41 cd80d2cd7bdaa062d40c0fb830e5857ea6b5ef5914ea96c48f052e1a198a5512
-rw-r--r-- 1 root root 183 Feb 28 06:41 ccfd63f996f8dd6995063aecf3d8517671e049ad85e268daa9affc7986487338
-rw-r--r-- 1 root root 183 Feb 28 06:41 cca7ef541db83689413d975c4f6a35e4ec73915a2596c770412d9286e7323176
-rw-r--r-- 1 root root 183 Feb 28 06:41 b904fe5abfc73f95461f1ebf943649872d47ee74177ecea8282a6ac0a0400423
-rw-r--r-- 1 root root 183 Feb 28 06:41 b8b2410401e3ce0fc10edc3d027668fda4594aaae4d57ca63e8a46a4cf7d3bbe
-rw-r--r-- 1 root root 183 Feb 28 06:41 b5081b3bcdb402e4e9251f38d3bae094ff58232e50b6af0d5f609d56f17ca023
-rw-r--r-- 1 root root 183 Feb 28 06:41 b4e17ff04b6efd7b971a9e83144b8608ff292355643b33d0aafdcb59bf01a3fd
-rw-r--r-- 1 root root 183 Feb 28 06:41 b4ac8fb1f8c1d531bc34734664697f14f51716a45fe832225dd580148db7c04d
-rw-r--r-- 1 root root 183 Feb 28 06:41 a8a55813df1bdac34e7e9acebf6ee33779b809e64f8e0eb20b1b0364442f0b07
-rw-r--r-- 1 root root 183 Feb 28 06:41 99d74f5fe276a422eb83f39087e027732ff485642ff54cc849e06596310cab21
-rw-r--r-- 1 root root 183 Feb 28 06:41 938186fe42d03106c87d84b14a9b04228d27b4c0c1ea9d0d458499dab70074d6
-rw-r--r-- 1 root root 183 Feb 28 06:41 8bad797ad2e63369c8ff2fbab6b0b2aed4b1b429593c13729761623f8461b4bc
-rw-r--r-- 1 root root 183 Feb 28 06:41 80b96c960a44904303b0eed0fc27ded8d883b314ef5defcaf1367bf914a5cb0a
-rw-r--r-- 1 root root 183 Feb 28 06:41 7ecbfef4538faaff1b8334e8077d71259e40738fe9e2e0fe341d1f68eb4d21ee
-rw-r--r-- 1 root root 183 Feb 28 06:41 7244d483491d8e33f9a06564f810b182e693ab2fc99b4f01412cfd2668f33789
-rw-r--r-- 1 root root 183 Feb 28 06:41 7103e17a686c6729a150f7c64d05fce4d315743f1f82e4d9184107c142432676
-rw-r--r-- 1 root root 183 Feb 28 06:41 707bb829c96ea4c1fe2fe9b6b0ca6aabb3c2fb6cf18cf42c9c0e6431deacff75
-rw-r--r-- 1 root root 183 Feb 28 06:41 6b40797c7e73f7979ace527cce720ce03b51ddd918d6722168382d37f7b8d6c8
-rw-r--r-- 1 root root 183 Feb 28 06:41 67e93f2e306ea680e41965fc315bf692b7c67cc0cdd6de0175131f349faca14d
-rw-r--r-- 1 root root 183 Feb 28 06:41 672bb5365a4ec1a38efb843d9acc648bbc9284da6a631476dd4d7a7992731076
-rw-r--r-- 1 root root 183 Feb 28 06:41 64533e16035f1bea95faa0a8106ba97bf100a9ff27182befc0eac94f39bf19c0
-rw-r--r-- 1 root root 183 Feb 28 06:41 5beb861a2d7f63fca94344f36b29ee60e3fac8282c596fe5b0276dd81741e03a
-rw-r--r-- 1 root root 183 Feb 28 06:41 4b3909d443f4799c2d1e0208a4105a39c3b5fd962eef514f24ca3b5eece93411
-rw-r--r-- 1 root root 183 Feb 28 06:41 4ae623ae496fe596a054745262a231f6864ec5742b5f137007f984c73d4d0d4d
-rw-r--r-- 1 root root 183 Feb 28 06:41 468e10ef779fe9d2b34fd6c71b27dd1f30bcb71ae612d963d7823e2b9e3f41ed
-rw-r--r-- 1 root root 183 Feb 28 06:41 3f770d65d3a764a9c5cb503ae123e62ec7598ad035d836e2a810f3877a745b24
-rw-r--r-- 1 root root 187 Feb 28 06:41 3acd2707cd916f2758be5622a84a86dcd13e2d1c62d0a1eb5d8a2834395039cc
-rw-r--r-- 1 root root 183 Feb 28 06:41 39864936c435c0988f1abab623cee329f8b0a51b4afbe90c03e55f1ff11e10be
-rw-r--r-- 1 root root 183 Feb 28 06:41 3958e8666a2fbd8136de408f5d38c059823ce373e482cc68abe1b8fc11fe8101
-rw-r--r-- 1 root root 183 Feb 28 06:41 38c4a72dc3d336e73b1f35041a3804d60f239ab07a26ee4107beccb88b479bff
-rw-r--r-- 1 root root 183 Feb 28 06:41 31a35caea7c5361b9f3ed664275623d0d08e7c447b6c857f0fb012594e224c54
-rw-r--r-- 1 root root 183 Feb 28 06:41 2efaa715bbb46dd5be6b7da8d7700266d11674b913b8178addb5c2e63d987331
-rw-r--r-- 1 root root 187 Feb 28 06:41 2af2ce2888ad6c4c52fff1ccd356c4868e6ccc561fcf94b813c95b5f4bfcbfd6
-rw-r--r-- 1 root root 183 Feb 28 06:41 28a697d690ce583b3a6b59ff826e7720ead55dd1bcd10980c5fecdbae51c814c
-rw-r--r-- 1 root root 183 Feb 28 06:41 2850567c8df0948241cb28309dad1cb84f74e4da7eb2c515eeb2bc0883c026bf
-rw-r--r-- 1 root root 183 Feb 28 06:41 260d3a820b7f8de20f4972725999b1af88b0cc5554ca38f9681c8d657e043cc3
-rw-r--r-- 1 root root 183 Feb 28 06:41 23431e706546b55ef36b36a26a33201a95c062b1d5e7bd0c7cbea3153862d1d3
-rw-r--r-- 1 root root 183 Feb 28 06:41 20d29810d6a5f92b045ade02ebbadc9036d741cc686b00415c42b4236fe4ad2f
-rw-r--r-- 1 root root 183 Feb 28 06:41 190ff173c9fa8e1ae93b4fdda5963387383543f537dab2e02cc4c10c92a43b9a
-rw-r--r-- 1 root root 183 Feb 28 06:41 17b7682aba03b043f507d791c9f347ab05a01e60e3a875bc5fe0b4be59f55ed1
-rw-r--r-- 1 root root 187 Feb 28 06:41 17538dc2a62769d09443f18c37cbe358fab5bbf981173542aa7c5ff171ed77c4
-rw-r--r-- 1 root root 183 Feb 28 06:41 0f6ad7e156bc6e410035cd6dff0ea69e15d22a1c85e84cad4b8ac5affe6459df
-rw-r--r-- 1 root root 187 Feb 28 06:41 0f4011159c24a6a53eeea72e1c2e97e0425be8af15e7de397003dd65d9e8d278
-rw-r--r-- 1 root root 183 Feb 28 06:41 0ef73fe39bee564d2d2074553719eac93d33333e3be257bea207af3ddb18476f
-rw-r--r-- 1 root root 183 Feb 28 06:41 0ed58c5d6f9f7481db55178266697e9fa2176f941c67fb243d9f8a39ceb1e97f
-rw-r--r-- 1 root root 183 Feb 28 06:41 0e432913100161e8c4c06d554f26f7606a2e71988f2f6575ed165ddc31711594
-rw-r--r-- 1 root root 187 Feb 28 06:41 059a51695dc1342075d716304f1f5bc9f647a61705b4bb150e624233088dfae7
-rw-r--r-- 1 root root 183 Feb 28 06:41 055527847617f8d9f14bf574223efc7be8745c7b9517f91772453514dd3ffd18
-rw-r--r-- 1 root root 183 Feb 28 06:41 03ca4808e6ba72f33e6a27bdcd1b3b2baeb85a97441c2f41ff1c8a29ccf9b400
-rw-r--r-- 1 root root 187 Feb 28 06:41 ffbb1c5748f93fe48768b493b4117b6a4776de34a2ae78dfb373fe8794510560
-rw-r--r-- 1 root root 187 Feb 28 06:41 ff6fff69f841691ec51ca4ba3f750c81f19ee4abc38d0a0e27b87c13c77c815e
-rw-r--r-- 1 root root 183 Feb 28 06:41 ff1d65e78ac81592fa7ebb9ebfc9f163108e0bef80f71658c25497ea383d4957
-rw-r--r-- 1 root root 183 Feb 28 06:41 f64f55b01b75ac21bd2c604b7f56d5a25fef1cdc58e126637b97a4ec6786904f
-rw-r--r-- 1 root root 183 Feb 28 06:41 e172a0c36c46cba65b464d322003e166d7a88402b0898cef09243411906eb849
-rw-r--r-- 1 root root 187 Feb 28 06:41 ccdabb13d837719490690b7a897c778a9be24a15067b01d516b882c0887002ec
-rw-r--r-- 1 root root 183 Feb 28 06:41 c7d141f05e3d8fcfa4c90d15993566c582361bc852fa780de0bf345557ac6001
-rw-r--r-- 1 root root 183 Feb 28 06:41 bbd40ebcce1c2ef2cd6eb0750b56beb5b159f76bc986af31fe6907395a670d9b
-rw-r--r-- 1 root root 187 Feb 28 06:41 a8f8ceb852ad616163020b86234c59609c882d2bec051d6f33597d7fc1fea489
-rw-r--r-- 1 root root 183 Feb 28 06:41 a45e69312561dfffe69258778a9bf4c5db01d33ad284d2080fd4d4ab7cc5c09b
-rw-r--r-- 1 root root 183 Feb 28 06:41 9f8535464090dfa3973f5ff626f8090ba9e6fc9281bbed0a53b80370debef07e
-rw-r--r-- 1 root root 183 Feb 28 06:41 9e7700f16afbc48053bbfca6792797de00e74d2466b84311ccd4fb32f88ffef6
-rw-r--r-- 1 root root 183 Feb 28 06:41 991a6ba278e2df53cedd78af589602454f355f9ae08fab8390c457aa431aaae9
-rw-r--r-- 1 root root 183 Feb 28 06:41 940c9746b818c1cae337f6487eee130dd7c0c9c00fa56e46a0d938e966431977
-rw-r--r-- 1 root root 183 Feb 28 06:41 8919726d156773af4239707472e679e7e6decf8ff6dde9160af6d947d5722139
-rw-r--r-- 1 root root 183 Feb 28 06:41 87e33cd2efa4c29dfd1ebb9007c97d49802056939b4970d228c15d1734fea59c
-rw-r--r-- 1 root root 183 Feb 28 06:41 724e69c292696a546a7674aa775297db77ec97f347cbbb62b7895b230cfc5469
-rw-r--r-- 1 root root 183 Feb 28 06:41 66df60562d939ada8612436489945a4ecf1d62346b3d9478dea8a338f3203c64
-rw-r--r-- 1 root root 183 Feb 28 06:41 623ed218de81311783656783d6ce690b521a89c4dc09f28962e5bfd4fa549249
-rw-r--r-- 1 root root 183 Feb 28 06:41 5ca4c90438f65265b5062421af8c291911f0e633c8a020495ed2ccd4ef7a42ca
-rw-r--r-- 1 root root 183 Feb 28 06:41 515aeadb38805e57c967dcf407a5a304db8fa3678f251eabc4aa9f3af0c827a5
-rw-r--r-- 1 root root 183 Feb 28 06:41 196b54b0f85f9dbd68cf2c53bb80c8693df421367519f265a2c8a9b3b11291ba
-rw-r--r-- 1 root root 183 Feb 28 06:41 076d48a6f545744b62f9788257040fd28e88aebb1d44809ba5289bc5ff05bf49
-rw-r--r-- 1 root root 183 Feb 28 06:41 a619eb76964b870a0edad133db1b92183b6533332de555a033ada4e311d75935
-rw-r--r-- 1 root root 183 Feb 28 06:41 e7bf8dad360828f0289b7b4bea1a1bd28eb6d4d6522fa17f957e0dfb839ef3db
-rw-r--r-- 1 root root 183 Feb 28 06:41 7f0e64b52ef56bec2b588d460fc63125f567db2c014d1ecce806d8d5b4209e2e
463
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ cd ..
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo nano addToQueue.mjs
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ cd queue
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ sudo rm -r ./*
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 0
0
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 0
0
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 0
0
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 0
0
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 0
0
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ cd ..
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ ls -la
total 72
drwxrwxr-x 3 ubuntu ubuntu  4096 Feb 28 06:44 .
drwxrwxr-x 4 ubuntu ubuntu  4096 Feb 28 01:53 ..
-rwxr-xr-x 1 ubuntu ubuntu  1571 Feb 28 06:44 addToQueue.mjs
-rwxrwxr-x 1 ubuntu ubuntu  1168 Feb 28 01:53 processQueue.sh
drwxr-xr-x 2 ubuntu ubuntu 49152 Feb 28 06:45 queue
-rwxrwxr-x 1 ubuntu ubuntu  2346 Feb 28 01:53 updateSingleNostrUser.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo nano addToQueue.mjs
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ cd queue
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 0
0
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ cd ..
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo nano addToQueue.mjs
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ cd queue
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 0
0
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ cd ..
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo nano addToQueue.mjs
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ cd queue
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -la
total 64
drwxr-xr-x 2 ubuntu ubuntu 49152 Feb 28 06:51 .
drwxrwxr-x 3 ubuntu ubuntu  4096 Feb 28 06:51 ..
-rw-r--r-- 1 ubuntu ubuntu   183 Feb 28 06:51 841b017d49f8211881a23acbd002bfb07c0d9c0d720c4a99c42669458bf0ee39
-rw-r--r-- 1 ubuntu ubuntu   183 Feb 28 06:51 b05ddaa79926f85b23723a8938cfe432d84ec0d7a9b3137d979af6d0877da8a7
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ cd ..
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo nano addToQueue.mjs
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo nano /etc/systemd/system/addToQueue.service
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ history 
    1  git clone https://github.com/Pretty-Good-Freedom-Tech/hasenpfeffr.git
    2  sudo apt update && sudo apt install -y wget
    3  pwd
    4  wget -O - https://debian.neo4j.com/neotechnology.gpg.key | sudo apt-key add -
    5  echo 'deb https://debian.neo4j.com stable 5' | sudo tee /etc/apt/sources.list.d/neo4j.list
    6  sudo apt update
    7  apt list -a neo4j // to see what versions are available to install
    8  apt list -a neo4j
    9  sudo apt-get install neo4j=1:5.26.3
   10  sudo systemctl start neo4j
   11  sudo systemctl status neo4j
   12  sudo systemctl enable neo4j
   13  sudo systemctl status neo4j
   14  sudo cp /etc/neo4j/neo4j.conf /etc/neo4j/neo4j.conf.backup
   15  sudo nano /etc/neo4j/neo4j.conf
   16  sudo systemctl restart neo4j
   17  sudo systemctl status neo4j
   18  neo4j status
   19  sudo systemctl status neo4j
   20  sudo nano /etc/neo4j/neo4j.conf
   21  cd /var/lib/neo4j/plugins/
   22  sudo wget https://github.com/neo4j/graph-data-science/releases/download/2.13.2/neo4j-graph-data-science-2.13.2.jar
   23  ls -la # to verify presence of neo4j-graph-data-science-2.13.2.jar
   24  sudo chown neo4j:neo4j neo4j-graph-data-science-2.13.2.jar
   25  sudo nano /etc/neo4j/neo4j.conf
   26  sudo systemctl restart neo4j
   27  sudo systemctl status neo4j
   28  cd /var/lib/neo4j/plugins
   29  sudo wget https://github.com/neo4j/apoc/releases/download/5.26.2/apoc-5.26.2-core.jar
   30  ls -la 
   31  sudo chown neo4j:neo4j apoc-5.26.2-core.jar
   32  sudo chmod 755 apoc-5.26.2-core.jar
   33  sudo mv ~/hasenpfeffr/setup/apoc.conf /etc/neo4j/apoc.conf
   34  sudo nano /etc/neo4j/neo4j.conf
   35  sudo systemctl restart neo4j
   36  sudo systemctl status neo4j
   37  sudo apt update
   38  cd ~
   39  git clone https://github.com/hoytech/strfry.git
   40  cd strfry
   41  sudo apt install -y git build-essential libyaml-perl libtemplate-perl libregexp-grammars-perl libssl-dev zlib1g-dev liblmdb-dev libflatbuffers-dev libsecp256k1-dev libzstd-dev ufw
   42  make setup-golpe
   43  history
   44  git submodule update --init
   45  make setup-golpe
   46  make -j2
   47  sudo cp strfry /usr/local/bin
   48  sudo apt install nginx certbot python3-certbot-nginx
   49  sudo rm -rf /etc/nginx/sites-available/default
   50  sudo vim /etc/nginx/sites-available/default
   51  sudo service nginx restart
   52  sudo useradd -M -s /usr/sbin/nologin strfry
   53  sudo mkdir /var/lib/strfry
   54  sudo chown strfry:strfry /var/lib/strfry
   55  sudo chmod 755 /var/lib/strfry 
   56  sudo nano /etc/nginx/sites-available/default
   57  sudo nano strfry.conf
   58  ulimit -Hn
   59  udo cp strfry.conf /etc/strfry.conf
   60  sudo cp strfry.conf /etc/strfry.conf
   61  sudo nano /etc/systemd/system/strfry.service
   62  sudo systemctl enable strfry.service
   63  sudo systemctl start strfry
   64  sudo systemctl status strfry
   65  curl localhost:7777 
   66  curl localhost:80
   67  sudo ufw allow 'Nginx Full'
   68  sudo ufw status
   69  sudo ufw default deny incoming 
   70  sudo ufw default allow outgoing
   71  ufw allow 22/tcp
   72  sudo ufw allow 22/tcp
   73  sudo ufw enable
   74  sudo ufw default allow incoming
   75  sudo certbot --nginx -d relay4.hasenpfeffr.com
   76  sudo nano /var/log/letsencrypt/letsencrypt.log
   77  strfry status
   78  strfry scan --count '{}'
   79  sudo strfry scan --count '{}'
   80  sudo nano /etc/nginx/sites-available/default
   81  curl localhost:80
   82  sudo ufw status
   83  sudo ufw status verbose
   84  sudo certbot --nginx -d relay4.hasenpfeffr.com
   85  sudo nano /etc/nginx/sites-available/default
   86  sudo certbot --nginx -d relay4.hasenpfeffr.com
   87  sudo apt update
   88  cd ~/hasenpfeffr
   89  sudo nano hasenpfeffr.conf
   90  ls -la
   91  cd setup
   92  sudo nano hasenpfeffr.conf
   93  sudo strfry scan --count '{}'
   94  cd /etc
   95  ls -la
   96  cd ~/hasenpfeffr
   97  ls -la
   98  cd setup
   99  ls -la
  100  cd ..
  101  cd strfry
  102  ls -la
  103  history
  104  cd ..
  105  cd hasenpfeffr
  106  ls -la
  107  cd setup
  108  ls -la
  109  sudo nano /etc/strfry-router.config
  110  ls -la
  111  sudo nano runRouter.sh
  112  ls -la
  113  sudo chown ubuntu:ubuntu runRouter.sh
  114  cd ..
  115  cd services
  116  sudo nano runRouter.service
  117  sudo chown ubuntu:ubuntu runRouter.service
  118  ls -la
  119  sudo mv ~/hasenpfeffr/services/runRouter.service /etc/systemd/system/runRouter.service
  120  sudo chown root:root /etc/systemd/system/runRouter.service
  121  sudo systemctl enable runRouter.service
  122  sudo systemctl start runRouter.service
  123  sudo strfry scan --count '{}'
  124  sudo systemctl status runRouter.service
  125  sudo journalctl -u strfry -f
  126  sudo strfry scan --count '{}'
  127  sudo nano ~/hasenpfeffr/setup/strfry-router.config
  128  sudo nano /etc/strfry-router.config
  129  cd ..
  130  cd setup
  131  ls -la
  132  sudo nano ~/hasenpfeffr/setup/hasenpfeffr.conf
  133  sudo mv ~/hasenpfeffr/setup/hasenpfeffr.conf /etc/hasenpfeffr.conf
  134  sudo chown root:root /etc/hasenpfeffr.conf
  135  ls -la
  136  cd ~/hasenpfeffr/setup
  137  sudo ./neo4jCommandsAndIndices.sh
  138  sudo chmod +x neo4jCommandsAndIndices.sh
  139  sudo ./neo4jCommandsAndIndices.sh
  140  sudo strfry scan --count '{}'
  141  sudo npm install dotenv
  142  which fs
  143  udo apt install npm
  144  sudo apt install npm
  145  history
  146  sudo npm install -g @nostr-dev-kit/ndk nostr-tools ws websocket-polyfill fs dotenv
  147  sudo apt update
  148  sudo apt upgrade
  149  cd ..
  150  cd stream
  151  sudo nano addToQueue.mjs
  152  cd ~/hasenpfeffr/pipeline/stream
  153  ls -la
  154  sudo nano addToQueue.mjs
  155  ls -la
  156  cd ..
  157  ls -la
  158  sudo rm addToQueue.mjs
  159  cd pipeline
  160  cd stream
  161  ls -la
  162  sudo chown ubuntu:ubuntu addToQueue.mjs
  163  sudo chmod +x addToQueue.mjs
  164  sudo chmod +x processQueue.sh
  165  sudo chmod +x updateSingleNostrUser.sh
  166  sudo nano /etc/systemd/system/addToQueue.service
  167  sudo nano ~/hasenpfeffr/services/addToQueue.service
  168  ls -la
  169  cd ..
  170  cd services
  171  ls -la
  172  sudo nano addToQueue.service
  173  sudo mv ~/hasenpfeffr/services/addToQueue.service /etc/systemd/system/addToQueue.service
  174  sudo chown root:root /etc/systemd/system/addToQueue.service
  175  sudo systemctl enable addToQueue.service
  176  sudo systemctl start addToQueue.service
  177  sudo systemctl status addToQueue.service
  178  sudo nano ~/hasenpfeffr/pipeline/stream/addToQueue.mjs
  179  sudo systemctl stop addToQueue.service
  180  sudo nano /etc/systemd/system/addToQueue.service
  181  sudo systemctl start addToQueue.service
  182  sudo systemctl stop addToQueue.service
  183  sudo systemctl daemon-reload
  184  sudo systemctl start addToQueue.service
  185  sudo systemctl status addToQueue.service
  186  sudo node ~/hasenpfeffr/pipeline/stream/addToQueue.mjs
  187  which websocket-polyfill
  188  npm install -g websocket-polyfill
  189  sudo npm install -g websocket-polyfill
  190  sudo node ~/hasenpfeffr/pipeline/stream/addToQueue.mjs
  191  cd ..
  192  cd pipeline
  193  cd stream
  194  cd queue
  195  ls -la
  196  sudo nano queue
  197  sudo mkdir queue
  198  sudo rem queue
  199  sudo rm queue
  200  sudo mkdir queue
  201  sudo chown ubuntu:ubuntu queue
  202  cd queue
  203  cd ..
  204  ls -la
  205  sudo node ./addToQueue.mjs
  206  sudo nano addToQueue.mjs
  207  sudo node ./addToQueue.mjs
  208  sudo nano addToQueue.mjs
  209  sudo node ./addToQueue.mjs
  210  sudo nano addToQueue.mjs
  211  sudo node ./addToQueue.mjs
  212  which dotenv
  213  cd ..
  214  sudo npm install dotenv
  215  cd pipeline
  216  cd stream
  217  sudo node ./addToQueue.mjs
  218  cd ..
  219  sudo npm @nostr-dev-kit/ndk
  220  sudo npm install @nostr-dev-kit/ndk
  221  sudo node ./pipeline/stream/addToQueue.mjs
  222  sudo npm install ws
  223  sudo node ./pipeline/stream/addToQueue.mjs
  224  sudo npm install -g @nostr-dev-kit/ndk
  225  sudo node ./pipeline/stream/addToQueue.mjs
  226  sudo nano ./pipeline/stream/addToQueue.mjs
  227  sudo node ./pipeline/stream/addToQueue.mjs
  228  sudo nano ./pipeline/stream/addToQueue.mjs
  229  sudo node ./pipeline/stream/addToQueue.mjs
  230  sudo nano ./pipeline/stream/addToQueue.mjs
  231  sudo node ./pipeline/stream/addToQueue.mjs
  232  sudo nano ./pipeline/stream/addToQueue.mjs
  233  sudo node ./pipeline/stream/addToQueue.mjs
  234  ls -la
  235  cd ..
  236  ls -la
  237  npm install -g @nostr-dev-kit/ndk nostr-tools ws websocket-polyfill fs dotenv
  238  ls -la
  239  sudo npm install -g @nostr-dev-kit/ndk nostr-tools ws websocket-polyfill fs dotenv
  240  ls -la
  241  cd hasenpfeffr
  242  ls -la
  243  cd pipeline
  244  cd stream
  245  ls -la
  246  sudo node ./addToQueue.mjs
  247  node ./addToQueue.mjs
  248  sudo strfry scan --count '{}'
  249  ls -la
  250  sudo node ./addToQueue.mjs
  251  sudo strfry scan --count '{}'
  252  ls -la
  253  sudo nano addToQueue.mjs
  254  HASENPFEFFR_RELAY_URL="wss://relay4.hasenpfeffr.com"
  255  sudo node ./addToQueue.mjs
  256  sudo nano addToQueue.mjs
  257  sudo node ./addToQueue.mjs
  258  sudo nano addToQueue.mjs
  259  echo $HASENPFEFFR_RELAY_URL
  260  sudo nano addToQueue.mjs
  261  cat: /home/ubuntu/hasenpfeffr/pipeline/stream/addToQueue.mjs
  262  cat /home/ubuntu/hasenpfeffr/pipeline/stream/addToQueue.mjs
  263  logout
  264  ls -la /home/ubuntu/hasenpfeffr/pipeline/stream/
  265  sudo node /home/ubuntu/hasenpfeffr/pipeline/stream/addToQueue.mjs
  266  echo $HASENPFEFFR_RELAY_URL
  267  sudo echo $HASENPFEFFR_RELAY_URL
  268  HASENPFEFFR_RELAY_URL="wss://relay4.hasenpfeffr.com""
  269  HASENPFEFFR_RELAY_URL="wss://relay4.hasenpfeffr.com"
  270  sudo echo $HASENPFEFFR_RELAY_URL
  271  sudo node /home/ubuntu/hasenpfeffr/pipeline/stream/addToQueue.mjs
  272  echo $HASENPFEFFR_RELAY_URL
  273  sudo nano /etc/hasenpfeffr.conf
  274  sudo nano /etc/systemd/system/addToQueue.service
  275  sudo systemctl daemon-reload
  276  sudo systemctl status addToQueue.service
  277  sudo systemctl restart addToQueue.service
  278  sudo systemctl status addToQueue.service
  279  cd ~/hasenpfeffr/pipeline/stream
  280  cd queue
  281  ls -la
  282  sudo journalctl -u addToQueue -f
  283  ls -la
  284  cd ..
  285  ls -la
  286  sudo node ./addToQueue.mjs
  287  sudo nano addToQueue.mjs
  288  sudo node ./addToQueue.mjs
  289  sudo strfry scan --count '{}'
  290  sudo nano addToQueue.mjs
  291  sudo node ./addToQueue.mjs
  292  logout
  293  sudo systemctl restart addToQueue.service
  294  logout
  295  cd hasenpfeffr/pipeline
  296  cd stream
  297  ls -la
  298  cd queue
  299  ls -la
  300  cd ..
  301  sudo nano addToQueue.mjs
  302  sudo ./addToQueue.mjs
  303  sudo nano addToQueue.mjs
  304  sudo ./addToQueue.mjs
  305  cd queue
  306  ls -la
  307  ls -Rltr ; ls -1 | wc -l
  308  cd ..
  309  sudo nano addToQueue.mjs
  310  cd queue
  311  sudo rm -r ./*
  312  ls -Rltr ; ls -1 | wc -l
  313  cd ..
  314  ls -la
  315  sudo nano addToQueue.mjs
  316  cd queue
  317  ls -Rltr ; ls -1 | wc -l
  318  cd ..
  319  sudo nano addToQueue.mjs
  320  cd queue
  321  ls -Rltr ; ls -1 | wc -l
  322  cd ..
  323  sudo nano addToQueue.mjs
  324  cd queue
  325  ls -la
  326  cd ..
  327  sudo nano addToQueue.mjs
  328  sudo nano /etc/systemd/system/addToQueue.service
  329  history 
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ cd queue
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 72
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:51 b05ddaa79926f85b23723a8938cfe432d84ec0d7a9b3137d979af6d0877da8a7
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:52 d724775fd4c923cdf6a6ad1167b4be13e708284283e2a00fe9995b5318bc21db
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:52 c54320e351de4b83050f63dd6569ccfb325fa8365d2a8a4163c3b4d6dec1c0f0
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:52 5fb7c7d14a60f3be4b4392d9d13be44969f973f38763af36da4eb008e4ae6b05
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:52 433919814fcc5c2141b3d1ffffe8fd5adf3af1ac99768458eafe5208bd48baad
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:53 78b512a29311693e5357c4cf2e8a3552ed58af3d8582da439df45ed524df9bfe
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:53 7f0e64b52ef56bec2b588d460fc63125f567db2c014d1ecce806d8d5b4209e2e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:53 5de23b9a4fd02ca6a760af19539a5c6ea8576db98f025233384901f5d83005b3
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:53 28411462854c5e382e8275dfb4fc584b76902520136e6d5869d3c616477eb8a8
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:53 00c5f69c2a87a31508e9bb1a60b3d94cefaf73946fccc90b99e22b964520e13f
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:54 583458100f6581e3f21ef1b78eda03e9045b36cba445dcf5d62bfde66301a682
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:54 087c51f1926f8d3cb4ff45f53a8ee2a8511cfe113527ab0e87f9c5821201a61e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:55 e9986a10caaa96738ceda88aabd3e184307be5143e687457581f9b096c6ef89c
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:55 7c17b40889d132083dee1f1f08ff7c569526d0da46bfa6f77eb51dd1a52f048a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:55 fbbee9af0f8e95f5e539c46013c7002a1c568f5fb08dde3e5680b451367a87fa
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:55 296d356c279ba983f771d05742324ab6e4dd71af654405bd09565ca5ae382479
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:56 583e5ea1e7ea2703aeae82ab9d0b4be0206a240bd843cfd9813ce10bb44effdd
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:56 841b017d49f8211881a23acbd002bfb07c0d9c0d720c4a99c42669458bf0ee39
18
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ sudo nano /etc/systemd/system/processQueue.service
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ sudo systemctl daemon-reload
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ sudo nano /etc/systemd/system/processQueue.service
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ sudo systemctl daemon-reload
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ cd ..
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ ls -la
total 72
drwxrwxr-x 3 ubuntu ubuntu  4096 Feb 28 06:54 .
drwxrwxr-x 4 ubuntu ubuntu  4096 Feb 28 01:53 ..
-rwxr-xr-x 1 ubuntu ubuntu  1610 Feb 28 06:51 addToQueue.mjs
-rwxrwxr-x 1 ubuntu ubuntu  1168 Feb 28 01:53 processQueue.sh
drwxr-xr-x 2 ubuntu ubuntu 49152 Feb 28 07:08 queue
-rwxrwxr-x 1 ubuntu ubuntu  2346 Feb 28 01:53 updateSingleNostrUser.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo nano processQueue.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo nano updateSingleNostrUser.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo nano apocCypherCommand
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo nano updateSingleNostrUser.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo nano updateSingleNostrUser.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ ls -la
total 76
drwxrwxr-x 3 ubuntu ubuntu  4096 Feb 28 07:18 .
drwxrwxr-x 4 ubuntu ubuntu  4096 Feb 28 01:53 ..
-rwxr-xr-x 1 ubuntu ubuntu  1610 Feb 28 06:51 addToQueue.mjs
-rw-r--r-- 1 root   root     321 Feb 28 07:17 apocCypherCommand
-rwxrwxr-x 1 ubuntu ubuntu  1154 Feb 28 07:11 processQueue.sh
drwxr-xr-x 2 ubuntu ubuntu 49152 Feb 28 07:17 queue
-rwxrwxr-x 1 ubuntu ubuntu  2215 Feb 28 07:17 updateSingleNostrUser.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ sudo chown ubuntu:ubuntu apocCypherCommand
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream$ cd queue
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 212
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 06:59 1021c8921548fa89abb4cc7e8668a3a8dcebae0a4c323ffeaf570438832d6993
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:00 d7fe398ee1314f35cd4466ab1089d7af0cb7aa54928d3f25c2f30851c0983f92
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:01 5fb7c7d14a60f3be4b4392d9d13be44969f973f38763af36da4eb008e4ae6b05
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:01 13c39e81b007746d861cce871a87d6834731a31766217152ac469a1c6355a10b
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:02 d7adc5284738090554213b0d906f8e1107fc0f3b114b188476e1eddbee85c921
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 2d74600a46329825b190125a2197d3c942a2180ccfe75a80298ce49cd6708a00
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 3f0d27d40206df909b52c43537942777850df0a5af1691fa674f3945e5788918
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 2e8824a360a25e3f5f1ed18d8ffff27f4e011e92541af8ac9eba5935a8a501cf
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 d2b2553ba7027819f33c10bf482514529702255db5381abe7519556f848b7533
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 1aa1dbbeeb04dde30e1e7a00f7eea7605549e78726d53522e3990aa68009f433
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 ab11aa702482080cfead6e35fb6fbad454a3e792dd4d75f183f52f5fea2a2fa9
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 1a4efa72bf53194315efbcba38f2c251d3ed81bab5b911c386b7ed922270ca39
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 11674b2d321fc24239b02afdf966c32e36594a6282bd7f3d4bcd12438558ab51
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:05 55ebc6f8ae3b0718f07c06172c026d5684fc89203bd35f0412d07eddfe64b762
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:06 ea8a86e341f61f4e8956ec40e707e5b2700dba1137ddb9653b5db9f4dd0df735
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:06 5de23b9a4fd02ca6a760af19539a5c6ea8576db98f025233384901f5d83005b3
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:07 aaa60aa200d1981b511cbc349c1e9167de8fa0024c52c27e290c659d523afccc
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:07 ff6e37687cec3122b878436bbf0fe06a623a6e61a2693338f3ef16f63a77b0be
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 31c36ab2197a795aff78653363f2bad76977ab9ff186066c3b47f66458f59188
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 8511d166530fa6a4e35d5cb3572b669adda7ca6cfb685e383781dcbd1866d7a6
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 ca195cfc9ad2b633267a26ec783b4046b3d872d3f636fe4166e8c228a083d8db
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 043f141a6f84949d67409ee680abbce3397877c858153718181dfa18e3ed3984
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:09 6bb0082dfd02be52ba7d532cf29dcf82977df9eb10483ccf71efc6f00146ed0a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:09 40f2f1e2977e6d96c3a52b203973f99b8f6f8b2e2ed822d7afda8a8e52f1d5f4
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:09 b5aabce9b530a9adcda916a3d030f2c398cfb720a4fb86eb9ae7dfbfb62cec60
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 2a52dbc35240b2d407743ef53047b5815425dded3798b710a9b7cbb28c2a7175
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 f42dcf45ff0c142e7dd80b16fb4f0bb2e3bdf08037caa6f85bcbc043bf707a6d
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 a2cdc1463e69a6869cac941fe041de44d556c9ba098549caf66962d1b11af33f
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 962386c2e5f863a55aa26335fadd25481f53663858be7989db5c117bf1876954
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:11 b05ddaa79926f85b23723a8938cfe432d84ec0d7a9b3137d979af6d0877da8a7
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:11 9557955355f5f11d64dc1c2d7d136d5811904fdc592a950cb4091d05417ffba1
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:11 0ad780cb0491e8ee4f72a8981d2a6604b0777b33541bd4a1e34277e40aa61826
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:12 4f7bfcc755b99a18a4896a773a727db65be4ea1df3a985e3f330f5141ca95b9e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:12 f916334d3ad713fb5f6fb9a2a6a86f362fb664287ec453f8c86227d07d1c88d5
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:12 43d140f61e46792199dea8a8ab4634dd21f1aedaaa4fbd29add506f8029f1265
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 055527847617f8d9f14bf574223efc7be8745c7b9517f91772453514dd3ffd18
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 7f0e64b52ef56bec2b588d460fc63125f567db2c014d1ecce806d8d5b4209e2e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 78b512a29311693e5357c4cf2e8a3552ed58af3d8582da439df45ed524df9bfe
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 90c9b3fef4647a1b73cac167e8b19d98474dbc78f2d51f8cead12392271f5871
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:14 7c17b40889d132083dee1f1f08ff7c569526d0da46bfa6f77eb51dd1a52f048a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:16 4def761b94f40502070c0caad512775d4daeae0f7aaa7842b16ece7c40d26eed
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:16 087c51f1926f8d3cb4ff45f53a8ee2a8511cfe113527ab0e87f9c5821201a61e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:17 3d5ffa91f5c8c13d0bc82ecfe2e546020b3d51763333589829c9c3fdc24fe74a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:17 cd1e4fbd9d2631a82450ab47ffaae6773058cf248f28d50da7e4da0735ff28fc
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:17 be5ad7960ca5a3499197477d58e2f34e2164a21bdd8221c84680e311c8586c96
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:18 f167930831b2cd2aa65ed69874db70e3ad2c1b8b8312eb6abc7b424f977614d4
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:18 dbb19ae0e0ea853289c54c7ca810782b61306c848cad8d8416174597c3f22d5a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:18 13b42c1bbc81aad1e28b3e87c8e1ac818444902dd5f6ff0582632114cf750fd6
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:19 321bc0db92a8b9db0549ed9a7439f778fbe63ba98ce70a4cefdb0fcbd45d8fbf
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:19 fbbee9af0f8e95f5e539c46013c7002a1c568f5fb08dde3e5680b451367a87fa
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:20 e2b8ba3e6f7d63ab44559f25a6863d1d9ba1a2cd751391a69e261ad027400d81
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:20 dbbd7125eaead5470fa0f1c8e148fc866a0e0a24756d9e9964810d9007ff73f8
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:20 cd7a2f5775028d4e42fa5826b1bc56d65ff87c3c2733429807c68b99ebc2d2b9
53
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 208
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:00 d7fe398ee1314f35cd4466ab1089d7af0cb7aa54928d3f25c2f30851c0983f92
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:01 5fb7c7d14a60f3be4b4392d9d13be44969f973f38763af36da4eb008e4ae6b05
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:01 13c39e81b007746d861cce871a87d6834731a31766217152ac469a1c6355a10b
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:02 d7adc5284738090554213b0d906f8e1107fc0f3b114b188476e1eddbee85c921
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 2d74600a46329825b190125a2197d3c942a2180ccfe75a80298ce49cd6708a00
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 3f0d27d40206df909b52c43537942777850df0a5af1691fa674f3945e5788918
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 2e8824a360a25e3f5f1ed18d8ffff27f4e011e92541af8ac9eba5935a8a501cf
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 d2b2553ba7027819f33c10bf482514529702255db5381abe7519556f848b7533
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 1aa1dbbeeb04dde30e1e7a00f7eea7605549e78726d53522e3990aa68009f433
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 ab11aa702482080cfead6e35fb6fbad454a3e792dd4d75f183f52f5fea2a2fa9
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 1a4efa72bf53194315efbcba38f2c251d3ed81bab5b911c386b7ed922270ca39
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 11674b2d321fc24239b02afdf966c32e36594a6282bd7f3d4bcd12438558ab51
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:05 55ebc6f8ae3b0718f07c06172c026d5684fc89203bd35f0412d07eddfe64b762
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:06 ea8a86e341f61f4e8956ec40e707e5b2700dba1137ddb9653b5db9f4dd0df735
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:06 5de23b9a4fd02ca6a760af19539a5c6ea8576db98f025233384901f5d83005b3
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:07 aaa60aa200d1981b511cbc349c1e9167de8fa0024c52c27e290c659d523afccc
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:07 ff6e37687cec3122b878436bbf0fe06a623a6e61a2693338f3ef16f63a77b0be
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 31c36ab2197a795aff78653363f2bad76977ab9ff186066c3b47f66458f59188
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 8511d166530fa6a4e35d5cb3572b669adda7ca6cfb685e383781dcbd1866d7a6
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 ca195cfc9ad2b633267a26ec783b4046b3d872d3f636fe4166e8c228a083d8db
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 043f141a6f84949d67409ee680abbce3397877c858153718181dfa18e3ed3984
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:09 6bb0082dfd02be52ba7d532cf29dcf82977df9eb10483ccf71efc6f00146ed0a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:09 40f2f1e2977e6d96c3a52b203973f99b8f6f8b2e2ed822d7afda8a8e52f1d5f4
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:09 b5aabce9b530a9adcda916a3d030f2c398cfb720a4fb86eb9ae7dfbfb62cec60
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 2a52dbc35240b2d407743ef53047b5815425dded3798b710a9b7cbb28c2a7175
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 f42dcf45ff0c142e7dd80b16fb4f0bb2e3bdf08037caa6f85bcbc043bf707a6d
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 a2cdc1463e69a6869cac941fe041de44d556c9ba098549caf66962d1b11af33f
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 962386c2e5f863a55aa26335fadd25481f53663858be7989db5c117bf1876954
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:11 b05ddaa79926f85b23723a8938cfe432d84ec0d7a9b3137d979af6d0877da8a7
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:11 9557955355f5f11d64dc1c2d7d136d5811904fdc592a950cb4091d05417ffba1
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:11 0ad780cb0491e8ee4f72a8981d2a6604b0777b33541bd4a1e34277e40aa61826
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:12 4f7bfcc755b99a18a4896a773a727db65be4ea1df3a985e3f330f5141ca95b9e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:12 f916334d3ad713fb5f6fb9a2a6a86f362fb664287ec453f8c86227d07d1c88d5
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:12 43d140f61e46792199dea8a8ab4634dd21f1aedaaa4fbd29add506f8029f1265
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 055527847617f8d9f14bf574223efc7be8745c7b9517f91772453514dd3ffd18
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 7f0e64b52ef56bec2b588d460fc63125f567db2c014d1ecce806d8d5b4209e2e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 78b512a29311693e5357c4cf2e8a3552ed58af3d8582da439df45ed524df9bfe
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 90c9b3fef4647a1b73cac167e8b19d98474dbc78f2d51f8cead12392271f5871
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:14 7c17b40889d132083dee1f1f08ff7c569526d0da46bfa6f77eb51dd1a52f048a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:16 4def761b94f40502070c0caad512775d4daeae0f7aaa7842b16ece7c40d26eed
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:16 087c51f1926f8d3cb4ff45f53a8ee2a8511cfe113527ab0e87f9c5821201a61e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:17 3d5ffa91f5c8c13d0bc82ecfe2e546020b3d51763333589829c9c3fdc24fe74a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:17 cd1e4fbd9d2631a82450ab47ffaae6773058cf248f28d50da7e4da0735ff28fc
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:17 be5ad7960ca5a3499197477d58e2f34e2164a21bdd8221c84680e311c8586c96
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:18 f167930831b2cd2aa65ed69874db70e3ad2c1b8b8312eb6abc7b424f977614d4
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:18 dbb19ae0e0ea853289c54c7ca810782b61306c848cad8d8416174597c3f22d5a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:18 13b42c1bbc81aad1e28b3e87c8e1ac818444902dd5f6ff0582632114cf750fd6
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:19 321bc0db92a8b9db0549ed9a7439f778fbe63ba98ce70a4cefdb0fcbd45d8fbf
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:19 fbbee9af0f8e95f5e539c46013c7002a1c568f5fb08dde3e5680b451367a87fa
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:20 e2b8ba3e6f7d63ab44559f25a6863d1d9ba1a2cd751391a69e261ad027400d81
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:20 dbbd7125eaead5470fa0f1c8e148fc866a0e0a24756d9e9964810d9007ff73f8
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:20 cd7a2f5775028d4e42fa5826b1bc56d65ff87c3c2733429807c68b99ebc2d2b9
52
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 208
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:00 d7fe398ee1314f35cd4466ab1089d7af0cb7aa54928d3f25c2f30851c0983f92
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:01 5fb7c7d14a60f3be4b4392d9d13be44969f973f38763af36da4eb008e4ae6b05
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:01 13c39e81b007746d861cce871a87d6834731a31766217152ac469a1c6355a10b
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:02 d7adc5284738090554213b0d906f8e1107fc0f3b114b188476e1eddbee85c921
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 2d74600a46329825b190125a2197d3c942a2180ccfe75a80298ce49cd6708a00
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 3f0d27d40206df909b52c43537942777850df0a5af1691fa674f3945e5788918
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 2e8824a360a25e3f5f1ed18d8ffff27f4e011e92541af8ac9eba5935a8a501cf
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 d2b2553ba7027819f33c10bf482514529702255db5381abe7519556f848b7533
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 1aa1dbbeeb04dde30e1e7a00f7eea7605549e78726d53522e3990aa68009f433
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 ab11aa702482080cfead6e35fb6fbad454a3e792dd4d75f183f52f5fea2a2fa9
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 1a4efa72bf53194315efbcba38f2c251d3ed81bab5b911c386b7ed922270ca39
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 11674b2d321fc24239b02afdf966c32e36594a6282bd7f3d4bcd12438558ab51
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:05 55ebc6f8ae3b0718f07c06172c026d5684fc89203bd35f0412d07eddfe64b762
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:06 ea8a86e341f61f4e8956ec40e707e5b2700dba1137ddb9653b5db9f4dd0df735
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:06 5de23b9a4fd02ca6a760af19539a5c6ea8576db98f025233384901f5d83005b3
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:07 aaa60aa200d1981b511cbc349c1e9167de8fa0024c52c27e290c659d523afccc
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:07 ff6e37687cec3122b878436bbf0fe06a623a6e61a2693338f3ef16f63a77b0be
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 31c36ab2197a795aff78653363f2bad76977ab9ff186066c3b47f66458f59188
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 8511d166530fa6a4e35d5cb3572b669adda7ca6cfb685e383781dcbd1866d7a6
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 ca195cfc9ad2b633267a26ec783b4046b3d872d3f636fe4166e8c228a083d8db
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 043f141a6f84949d67409ee680abbce3397877c858153718181dfa18e3ed3984
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:09 6bb0082dfd02be52ba7d532cf29dcf82977df9eb10483ccf71efc6f00146ed0a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:09 40f2f1e2977e6d96c3a52b203973f99b8f6f8b2e2ed822d7afda8a8e52f1d5f4
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:09 b5aabce9b530a9adcda916a3d030f2c398cfb720a4fb86eb9ae7dfbfb62cec60
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 2a52dbc35240b2d407743ef53047b5815425dded3798b710a9b7cbb28c2a7175
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 f42dcf45ff0c142e7dd80b16fb4f0bb2e3bdf08037caa6f85bcbc043bf707a6d
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 a2cdc1463e69a6869cac941fe041de44d556c9ba098549caf66962d1b11af33f
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 962386c2e5f863a55aa26335fadd25481f53663858be7989db5c117bf1876954
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:11 b05ddaa79926f85b23723a8938cfe432d84ec0d7a9b3137d979af6d0877da8a7
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:11 9557955355f5f11d64dc1c2d7d136d5811904fdc592a950cb4091d05417ffba1
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:11 0ad780cb0491e8ee4f72a8981d2a6604b0777b33541bd4a1e34277e40aa61826
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:12 4f7bfcc755b99a18a4896a773a727db65be4ea1df3a985e3f330f5141ca95b9e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:12 f916334d3ad713fb5f6fb9a2a6a86f362fb664287ec453f8c86227d07d1c88d5
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:12 43d140f61e46792199dea8a8ab4634dd21f1aedaaa4fbd29add506f8029f1265
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 055527847617f8d9f14bf574223efc7be8745c7b9517f91772453514dd3ffd18
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 7f0e64b52ef56bec2b588d460fc63125f567db2c014d1ecce806d8d5b4209e2e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 78b512a29311693e5357c4cf2e8a3552ed58af3d8582da439df45ed524df9bfe
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 90c9b3fef4647a1b73cac167e8b19d98474dbc78f2d51f8cead12392271f5871
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:14 7c17b40889d132083dee1f1f08ff7c569526d0da46bfa6f77eb51dd1a52f048a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:16 4def761b94f40502070c0caad512775d4daeae0f7aaa7842b16ece7c40d26eed
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:16 087c51f1926f8d3cb4ff45f53a8ee2a8511cfe113527ab0e87f9c5821201a61e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:17 3d5ffa91f5c8c13d0bc82ecfe2e546020b3d51763333589829c9c3fdc24fe74a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:17 cd1e4fbd9d2631a82450ab47ffaae6773058cf248f28d50da7e4da0735ff28fc
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:17 be5ad7960ca5a3499197477d58e2f34e2164a21bdd8221c84680e311c8586c96
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:18 f167930831b2cd2aa65ed69874db70e3ad2c1b8b8312eb6abc7b424f977614d4
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:18 dbb19ae0e0ea853289c54c7ca810782b61306c848cad8d8416174597c3f22d5a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:18 13b42c1bbc81aad1e28b3e87c8e1ac818444902dd5f6ff0582632114cf750fd6
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:19 321bc0db92a8b9db0549ed9a7439f778fbe63ba98ce70a4cefdb0fcbd45d8fbf
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:19 fbbee9af0f8e95f5e539c46013c7002a1c568f5fb08dde3e5680b451367a87fa
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:20 e2b8ba3e6f7d63ab44559f25a6863d1d9ba1a2cd751391a69e261ad027400d81
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:20 dbbd7125eaead5470fa0f1c8e148fc866a0e0a24756d9e9964810d9007ff73f8
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:20 cd7a2f5775028d4e42fa5826b1bc56d65ff87c3c2733429807c68b99ebc2d2b9
52
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 204
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:01 5fb7c7d14a60f3be4b4392d9d13be44969f973f38763af36da4eb008e4ae6b05
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:01 13c39e81b007746d861cce871a87d6834731a31766217152ac469a1c6355a10b
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:02 d7adc5284738090554213b0d906f8e1107fc0f3b114b188476e1eddbee85c921
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 2d74600a46329825b190125a2197d3c942a2180ccfe75a80298ce49cd6708a00
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 3f0d27d40206df909b52c43537942777850df0a5af1691fa674f3945e5788918
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 2e8824a360a25e3f5f1ed18d8ffff27f4e011e92541af8ac9eba5935a8a501cf
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:03 d2b2553ba7027819f33c10bf482514529702255db5381abe7519556f848b7533
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 1aa1dbbeeb04dde30e1e7a00f7eea7605549e78726d53522e3990aa68009f433
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 ab11aa702482080cfead6e35fb6fbad454a3e792dd4d75f183f52f5fea2a2fa9
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 1a4efa72bf53194315efbcba38f2c251d3ed81bab5b911c386b7ed922270ca39
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:04 11674b2d321fc24239b02afdf966c32e36594a6282bd7f3d4bcd12438558ab51
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:05 55ebc6f8ae3b0718f07c06172c026d5684fc89203bd35f0412d07eddfe64b762
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:06 ea8a86e341f61f4e8956ec40e707e5b2700dba1137ddb9653b5db9f4dd0df735
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:06 5de23b9a4fd02ca6a760af19539a5c6ea8576db98f025233384901f5d83005b3
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:07 aaa60aa200d1981b511cbc349c1e9167de8fa0024c52c27e290c659d523afccc
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:07 ff6e37687cec3122b878436bbf0fe06a623a6e61a2693338f3ef16f63a77b0be
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 31c36ab2197a795aff78653363f2bad76977ab9ff186066c3b47f66458f59188
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 8511d166530fa6a4e35d5cb3572b669adda7ca6cfb685e383781dcbd1866d7a6
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 ca195cfc9ad2b633267a26ec783b4046b3d872d3f636fe4166e8c228a083d8db
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:08 043f141a6f84949d67409ee680abbce3397877c858153718181dfa18e3ed3984
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:09 6bb0082dfd02be52ba7d532cf29dcf82977df9eb10483ccf71efc6f00146ed0a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:09 40f2f1e2977e6d96c3a52b203973f99b8f6f8b2e2ed822d7afda8a8e52f1d5f4
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:09 b5aabce9b530a9adcda916a3d030f2c398cfb720a4fb86eb9ae7dfbfb62cec60
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 2a52dbc35240b2d407743ef53047b5815425dded3798b710a9b7cbb28c2a7175
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 f42dcf45ff0c142e7dd80b16fb4f0bb2e3bdf08037caa6f85bcbc043bf707a6d
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 a2cdc1463e69a6869cac941fe041de44d556c9ba098549caf66962d1b11af33f
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:10 962386c2e5f863a55aa26335fadd25481f53663858be7989db5c117bf1876954
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:11 b05ddaa79926f85b23723a8938cfe432d84ec0d7a9b3137d979af6d0877da8a7
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:11 9557955355f5f11d64dc1c2d7d136d5811904fdc592a950cb4091d05417ffba1
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:11 0ad780cb0491e8ee4f72a8981d2a6604b0777b33541bd4a1e34277e40aa61826
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:12 4f7bfcc755b99a18a4896a773a727db65be4ea1df3a985e3f330f5141ca95b9e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:12 f916334d3ad713fb5f6fb9a2a6a86f362fb664287ec453f8c86227d07d1c88d5
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:12 43d140f61e46792199dea8a8ab4634dd21f1aedaaa4fbd29add506f8029f1265
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 055527847617f8d9f14bf574223efc7be8745c7b9517f91772453514dd3ffd18
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 7f0e64b52ef56bec2b588d460fc63125f567db2c014d1ecce806d8d5b4209e2e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 78b512a29311693e5357c4cf2e8a3552ed58af3d8582da439df45ed524df9bfe
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:13 90c9b3fef4647a1b73cac167e8b19d98474dbc78f2d51f8cead12392271f5871
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:14 7c17b40889d132083dee1f1f08ff7c569526d0da46bfa6f77eb51dd1a52f048a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:16 4def761b94f40502070c0caad512775d4daeae0f7aaa7842b16ece7c40d26eed
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:16 087c51f1926f8d3cb4ff45f53a8ee2a8511cfe113527ab0e87f9c5821201a61e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:17 3d5ffa91f5c8c13d0bc82ecfe2e546020b3d51763333589829c9c3fdc24fe74a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:17 cd1e4fbd9d2631a82450ab47ffaae6773058cf248f28d50da7e4da0735ff28fc
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:17 be5ad7960ca5a3499197477d58e2f34e2164a21bdd8221c84680e311c8586c96
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:18 f167930831b2cd2aa65ed69874db70e3ad2c1b8b8312eb6abc7b424f977614d4
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:18 dbb19ae0e0ea853289c54c7ca810782b61306c848cad8d8416174597c3f22d5a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:18 13b42c1bbc81aad1e28b3e87c8e1ac818444902dd5f6ff0582632114cf750fd6
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:19 321bc0db92a8b9db0549ed9a7439f778fbe63ba98ce70a4cefdb0fcbd45d8fbf
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:20 e2b8ba3e6f7d63ab44559f25a6863d1d9ba1a2cd751391a69e261ad027400d81
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:20 dbbd7125eaead5470fa0f1c8e148fc866a0e0a24756d9e9964810d9007ff73f8
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:20 fbbee9af0f8e95f5e539c46013c7002a1c568f5fb08dde3e5680b451367a87fa
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:20 cd7a2f5775028d4e42fa5826b1bc56d65ff87c3c2733429807c68b99ebc2d2b9
51
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 8
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:55 7c17b40889d132083dee1f1f08ff7c569526d0da46bfa6f77eb51dd1a52f048a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 07:55 4f7bfcc755b99a18a4896a773a727db65be4ea1df3a985e3f330f5141ca95b9e
2
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ sudo strfry scan --count '{}'
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 07:57:10.452 (   0.013s) [main thread     ]INFO| arguments: strfry scan --count {}
2025-02-28 07:57:10.452 (   0.013s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/stream/queue
2025-02-28 07:57:10.452 (   0.013s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 07:57:10.452 (   0.013s) [main thread     ]INFO| -----------------------------------
2025-02-28 07:57:10.453 (   0.013s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 07:57:10.458 (   0.019s) [main thread     ]INFO| CONFIG: successfully installed
21181
2025-02-28 07:57:11.488 (   1.049s) [main thread     ]INFO| atexit
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ sudo strfry scan --count '{}'
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 07:58:10.475 (   0.013s) [main thread     ]INFO| arguments: strfry scan --count {}
2025-02-28 07:58:10.475 (   0.013s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/stream/queue
2025-02-28 07:58:10.475 (   0.013s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 07:58:10.475 (   0.013s) [main thread     ]INFO| -----------------------------------
2025-02-28 07:58:10.475 (   0.013s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 07:58:10.481 (   0.019s) [main thread     ]INFO| CONFIG: successfully installed
40181
2025-02-28 07:58:11.286 (   0.825s) [main thread     ]INFO| atexit
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ sudo strfry scan --count '{}'
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 08:12:49.142 (   0.013s) [main thread     ]INFO| arguments: strfry scan --count {}
2025-02-28 08:12:49.142 (   0.013s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/stream/queue
2025-02-28 08:12:49.142 (   0.013s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 08:12:49.142 (   0.013s) [main thread     ]INFO| -----------------------------------
2025-02-28 08:12:49.142 (   0.013s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 08:12:49.148 (   0.018s) [main thread     ]INFO| CONFIG: successfully installed
132135
2025-02-28 08:12:49.166 (   0.036s) [main thread     ]INFO| atexit
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ sudo strfry scan --count '{"kinds":[3]}'
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 08:13:12.374 (   0.012s) [main thread     ]INFO| arguments: strfry scan --count {\"kinds\":[3]}
2025-02-28 08:13:12.374 (   0.012s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/stream/queue
2025-02-28 08:13:12.374 (   0.012s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 08:13:12.374 (   0.012s) [main thread     ]INFO| -----------------------------------
2025-02-28 08:13:12.374 (   0.012s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 08:13:12.379 (   0.018s) [main thread     ]INFO| CONFIG: successfully installed
112278
2025-02-28 08:13:12.393 (   0.032s) [main thread     ]INFO| atexit
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ sudo strfry scan --count '{"kinds":[3]}'
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 08:20:36.724 (   0.012s) [main thread     ]INFO| arguments: strfry scan --count {\"kinds\":[3]}
2025-02-28 08:20:36.724 (   0.012s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/stream/queue
2025-02-28 08:20:36.724 (   0.012s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 08:20:36.724 (   0.012s) [main thread     ]INFO| -----------------------------------
2025-02-28 08:20:36.724 (   0.012s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 08:20:36.729 (   0.018s) [main thread     ]INFO| CONFIG: successfully installed
112283
2025-02-28 08:20:36.744 (   0.032s) [main thread     ]INFO| atexit
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 12
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 08:21 c2e0166b51cc1095a12e437516adb7dba1a114cdfeb3ffaa5225bab58f37daf3
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 08:21 087c51f1926f8d3cb4ff45f53a8ee2a8511cfe113527ab0e87f9c5821201a61e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 08:21 7c17b40889d132083dee1f1f08ff7c569526d0da46bfa6f77eb51dd1a52f048a
3
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 8
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 08:21 7c17b40889d132083dee1f1f08ff7c569526d0da46bfa6f77eb51dd1a52f048a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 08:22 024cfe871c36b77304b17d4de1dd933eca268fb6ba9c03716e20ddc20f03184b
2
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ client_loop: send disconnect: Broken pipe
wds@MBAir-989 ~ % ssh -i "pgftGrapeRanktech.pem" ubuntu@ec2-3-227-35-42.compute-1.amazonaws.com

Welcome to Ubuntu 24.04.2 LTS (GNU/Linux 6.8.0-1021-aws x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Fri Feb 28 14:26:21 UTC 2025

  System load:  0.93               Temperature:              -273.1 C
  Usage of /:   37.5% of 18.33GB   Processes:                177
  Memory usage: 7%                 Users logged in:          0
  Swap usage:   0%                 IPv4 address for enp39s0: 172.31.24.99

 * Ubuntu Pro delivers the most comprehensive open source security and
   compliance features.

   https://ubuntu.com/aws/pro

Expanded Security Maintenance for Applications is not enabled.

6 updates can be applied immediately.
To see these additional updates run: apt list --upgradable

Enable ESM Apps to receive additional future security updates.
See https://ubuntu.com/esm or run: sudo pro status


*** System restart required ***
Last login: Fri Feb 28 06:29:16 2025 from 73.135.5.188
ubuntu@ip-172-31-24-99:~$ cd ~/hasenpfeffr/pipeline/stream/queue$
-bash: cd: /home/ubuntu/hasenpfeffr/pipeline/stream/queue$: No such file or directory
ubuntu@ip-172-31-24-99:~$ cd ~/hasenpfeffr/pipeline/stream/queue
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 24
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 0983cc1ed43e16fbfdffbb481e3d5d82bf10868f7bb26f3450e67a73db2cab1f
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 7fa37a146a39b2864d062a28387ad09303fde58bcbcc0e582bca0183e7d681e0
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 35cdc3a9c6a6bfd3a681d672d714eed913278c1c03e20b2a7d1756c4f4db216e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 f10512dfdae6adf5c8b613bd2e423b4058fc862d743293bfa08471fcc9293bb3
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 7bb5becb077956461789287bc6b00781ae0cc2d0698d39b37687a53241209b06
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 48c5c04dbb79e29619af1e85d629d23075cd3baae557a533221343bba47808f3
6
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 24
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 0983cc1ed43e16fbfdffbb481e3d5d82bf10868f7bb26f3450e67a73db2cab1f
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 7fa37a146a39b2864d062a28387ad09303fde58bcbcc0e582bca0183e7d681e0
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 f10512dfdae6adf5c8b613bd2e423b4058fc862d743293bfa08471fcc9293bb3
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 35cdc3a9c6a6bfd3a681d672d714eed913278c1c03e20b2a7d1756c4f4db216e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 7bb5becb077956461789287bc6b00781ae0cc2d0698d39b37687a53241209b06
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 48c5c04dbb79e29619af1e85d629d23075cd3baae557a533221343bba47808f3
6
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ 
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ 
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ 
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ 
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ 
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ 
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 28
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 0983cc1ed43e16fbfdffbb481e3d5d82bf10868f7bb26f3450e67a73db2cab1f
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 f10512dfdae6adf5c8b613bd2e423b4058fc862d743293bfa08471fcc9293bb3
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 35cdc3a9c6a6bfd3a681d672d714eed913278c1c03e20b2a7d1756c4f4db216e
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 7bb5becb077956461789287bc6b00781ae0cc2d0698d39b37687a53241209b06
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:26 48c5c04dbb79e29619af1e85d629d23075cd3baae557a533221343bba47808f3
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:27 98de3e4c8ec76a9fc5bc9309187b5d13f57fb6f8858a2a35389df975849315e5
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 14:27 7fa37a146a39b2864d062a28387ad09303fde58bcbcc0e582bca0183e7d681e0
7
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ 
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 0
0
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 4
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:03 92837eab1708de086e4a4e9de3c54f7f03df35809cfa36f9932fceb61f5bf2dc
1
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 12
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:08 d9006e0752348dd0bd20efcb295fdccb62fb8dd02c7d88654db80e5df2b81360
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:08 71b697820bb95c7bf16274f3abd72a4cce6ba8185532a171db55742da6f7e6f9
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:08 5dfb9a8bdca56f28f8473572285b89f953d2e5045b5736315b3205b5fead9cdc
3
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 16
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:09 50d2f8abc4a99b54498c5b1d3d0668021c2329d20c5496ab1696342c63a287b6
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:09 ddeac1010464e1641422fb241a2b6109edfb81206d5d97ba56fa60f38a09d19c
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:09 71b697820bb95c7bf16274f3abd72a4cce6ba8185532a171db55742da6f7e6f9
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:09 5bbe5a060a80e71dc971ee6de37eaf89e12db51d5e167fbfa015b7b11085ad90
4
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 28
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:09 ddeac1010464e1641422fb241a2b6109edfb81206d5d97ba56fa60f38a09d19c
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:09 71b697820bb95c7bf16274f3abd72a4cce6ba8185532a171db55742da6f7e6f9
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:09 5bbe5a060a80e71dc971ee6de37eaf89e12db51d5e167fbfa015b7b11085ad90
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:09 b05ddaa79926f85b23723a8938cfe432d84ec0d7a9b3137d979af6d0877da8a7
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:10 6bb0082dfd02be52ba7d532cf29dcf82977df9eb10483ccf71efc6f00146ed0a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:10 e13490fd23435a3c9b536e18e8309e9fd95475bf72a477b1166f2d4c651a2e63
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:10 50d2f8abc4a99b54498c5b1d3d0668021c2329d20c5496ab1696342c63a287b6
7
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 36
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:09 ddeac1010464e1641422fb241a2b6109edfb81206d5d97ba56fa60f38a09d19c
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:09 5bbe5a060a80e71dc971ee6de37eaf89e12db51d5e167fbfa015b7b11085ad90
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:09 b05ddaa79926f85b23723a8938cfe432d84ec0d7a9b3137d979af6d0877da8a7
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:10 6bb0082dfd02be52ba7d532cf29dcf82977df9eb10483ccf71efc6f00146ed0a
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:10 e13490fd23435a3c9b536e18e8309e9fd95475bf72a477b1166f2d4c651a2e63
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:10 50d2f8abc4a99b54498c5b1d3d0668021c2329d20c5496ab1696342c63a287b6
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:10 e2b8ba3e6f7d63ab44559f25a6863d1d9ba1a2cd751391a69e261ad027400d81
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:10 2d4ac730951065b7c6b1863256d1107ef7a179664d6736f17a068418009a64d7
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:10 71b697820bb95c7bf16274f3abd72a4cce6ba8185532a171db55742da6f7e6f9
9
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ ls -Rltr ; ls -1 | wc -l
.:
total 28
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:09 b05ddaa79926f85b23723a8938cfe432d84ec0d7a9b3137d979af6d0877da8a7
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:10 e13490fd23435a3c9b536e18e8309e9fd95475bf72a477b1166f2d4c651a2e63
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:10 50d2f8abc4a99b54498c5b1d3d0668021c2329d20c5496ab1696342c63a287b6
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:10 e2b8ba3e6f7d63ab44559f25a6863d1d9ba1a2cd751391a69e261ad027400d81
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:10 2d4ac730951065b7c6b1863256d1107ef7a179664d6736f17a068418009a64d7
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:10 71b697820bb95c7bf16274f3abd72a4cce6ba8185532a171db55742da6f7e6f9
-rw-r--r-- 1 ubuntu ubuntu 183 Feb 28 15:10 6bb0082dfd02be52ba7d532cf29dcf82977df9eb10483ccf71efc6f00146ed0a
7
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ cd ~/haseppfeffr/pipeline/batch
-bash: cd: /home/ubuntu/haseppfeffr/pipeline/batch: No such file or directory
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ cd ~/hasepfeffr/pipeline/batch
-bash: cd: /home/ubuntu/hasepfeffr/pipeline/batch: No such file or directory
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/stream/queue$ cd ~/hasenpfeffr/pipeline/batch
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 36
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 01:53 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  341 Feb 28 01:53 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rw-rw-r-- 1 ubuntu ubuntu  418 Feb 28 01:53 createAllKind3EventsStripped.sh
-rw-rw-r-- 1 ubuntu ubuntu 1195 Feb 28 01:53 kind3EventsToJson.sh
-rw-rw-r-- 1 ubuntu ubuntu  323 Feb 28 01:53 load.sh
-rw-rw-r-- 1 ubuntu ubuntu  189 Feb 28 01:53 loadJsonIntoNeo4j.sh
-rw-rw-r-- 1 ubuntu ubuntu  189 Feb 28 01:53 updateNostrUserKind3Data.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo +x load.sh
sudo: +x: command not found
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo chmod +x load.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo chmod +x createAllKind3EventsStripped.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo chmod +x kind3EventsToJson.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo chmod +x loadJsonIntoNeo4j.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo chmod +x updateNostrUserKind3Data.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./createAllKind3EventsStripped.sh
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 15:23:34.041 (   0.013s) [main thread     ]INFO| arguments: strfry scan --count {\ \"kinds\":\ [3],\ \"since\":\ 0\ }
2025-02-28 15:23:34.041 (   0.013s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 15:23:34.041 (   0.013s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 15:23:34.041 (   0.013s) [main thread     ]INFO| -----------------------------------
2025-02-28 15:23:34.041 (   0.013s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 15:23:34.047 (   0.019s) [main thread     ]INFO| CONFIG: successfully installed
112444
2025-02-28 15:23:34.062 (   0.034s) [main thread     ]INFO| atexit
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 15:23:34.087 (   0.013s) [main thread     ]INFO| arguments: strfry scan {\ \"kinds\":\ [3],\ \"since\":\ 0\ }
2025-02-28 15:23:34.087 (   0.013s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 15:23:34.087 (   0.013s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 15:23:34.087 (   0.013s) [main thread     ]INFO| -----------------------------------
2025-02-28 15:23:34.087 (   0.013s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 15:23:34.093 (   0.019s) [main thread     ]INFO| CONFIG: successfully installed
2025-02-28 15:23:45.105 (  11.031s) [main thread     ]INFO| atexit
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 517280
drwxrwxr-x 2 ubuntu ubuntu      4096 Feb 28 15:23 .
drwxrwxr-x 4 ubuntu ubuntu      4096 Feb 28 01:53 ..
-rw-r--r-- 1 root   root   529656956 Feb 28 15:23 allKind3EventsStripped.json
-rw-rw-r-- 1 ubuntu ubuntu       341 Feb 28 01:53 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu       306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu       418 Feb 28 01:53 createAllKind3EventsStripped.sh
-rwxrwxr-x 1 ubuntu ubuntu      1195 Feb 28 01:53 kind3EventsToJson.sh
-rwxrwxr-x 1 ubuntu ubuntu       323 Feb 28 01:53 load.sh
-rwxrwxr-x 1 ubuntu ubuntu       189 Feb 28 01:53 loadJsonIntoNeo4j.sh
-rwxrwxr-x 1 ubuntu ubuntu       189 Feb 28 01:53 updateNostrUserKind3Data.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./createAllKind3EventsStripped.sh --recent 604800
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 15:24:43.739 (   0.014s) [main thread     ]INFO| arguments: strfry scan --count {\ \"kinds\":\ [3],\ \"since\":\ 1740151483\ }
2025-02-28 15:24:43.739 (   0.014s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 15:24:43.739 (   0.014s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 15:24:43.739 (   0.014s) [main thread     ]INFO| -----------------------------------
2025-02-28 15:24:43.739 (   0.014s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 15:24:43.746 (   0.022s) [main thread     ]INFO| CONFIG: successfully installed
10809
2025-02-28 15:24:43.749 (   0.025s) [main thread     ]INFO| atexit
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 15:24:43.782 (   0.018s) [main thread     ]INFO| arguments: strfry scan {\ \"kinds\":\ [3],\ \"since\":\ 1740151483\ }
2025-02-28 15:24:43.782 (   0.018s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 15:24:43.782 (   0.018s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 15:24:43.782 (   0.018s) [main thread     ]INFO| -----------------------------------
2025-02-28 15:24:43.782 (   0.018s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 15:24:43.790 (   0.026s) [main thread     ]INFO| CONFIG: successfully installed
2025-02-28 15:24:46.926 (   3.162s) [main thread     ]INFO| atexit
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 101512
drwxrwxr-x 2 ubuntu ubuntu      4096 Feb 28 15:23 .
drwxrwxr-x 4 ubuntu ubuntu      4096 Feb 28 01:53 ..
-rw-r--r-- 1 root   root   103909284 Feb 28 15:24 allKind3EventsStripped.json
-rw-rw-r-- 1 ubuntu ubuntu       341 Feb 28 01:53 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu       306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu       418 Feb 28 01:53 createAllKind3EventsStripped.sh
-rwxrwxr-x 1 ubuntu ubuntu      1195 Feb 28 01:53 kind3EventsToJson.sh
-rwxrwxr-x 1 ubuntu ubuntu       323 Feb 28 01:53 load.sh
-rwxrwxr-x 1 ubuntu ubuntu       189 Feb 28 01:53 loadJsonIntoNeo4j.sh
-rwxrwxr-x 1 ubuntu ubuntu       189 Feb 28 01:53 updateNostrUserKind3Data.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./createAllKind3EventsStripped.sh --recent 86400
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 15:25:51.564 (   0.013s) [main thread     ]INFO| arguments: strfry scan --count {\ \"kinds\":\ [3],\ \"since\":\ 1740669951\ }
2025-02-28 15:25:51.564 (   0.013s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 15:25:51.564 (   0.013s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 15:25:51.564 (   0.013s) [main thread     ]INFO| -----------------------------------
2025-02-28 15:25:51.564 (   0.013s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 15:25:51.570 (   0.019s) [main thread     ]INFO| CONFIG: successfully installed
2168
2025-02-28 15:25:51.571 (   0.020s) [main thread     ]INFO| atexit
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 15:25:51.595 (   0.013s) [main thread     ]INFO| arguments: strfry scan {\ \"kinds\":\ [3],\ \"since\":\ 1740669951\ }
2025-02-28 15:25:51.595 (   0.013s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 15:25:51.595 (   0.013s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 15:25:51.595 (   0.013s) [main thread     ]INFO| -----------------------------------
2025-02-28 15:25:51.595 (   0.013s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 15:25:51.601 (   0.019s) [main thread     ]INFO| CONFIG: successfully installed
2025-02-28 15:25:52.196 (   0.614s) [main thread     ]INFO| atexit
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 28184
drwxrwxr-x 2 ubuntu ubuntu     4096 Feb 28 15:23 .
drwxrwxr-x 4 ubuntu ubuntu     4096 Feb 28 01:53 ..
-rw-r--r-- 1 root   root   28819581 Feb 28 15:25 allKind3EventsStripped.json
-rw-rw-r-- 1 ubuntu ubuntu      341 Feb 28 01:53 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu      306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu      418 Feb 28 01:53 createAllKind3EventsStripped.sh
-rwxrwxr-x 1 ubuntu ubuntu     1195 Feb 28 01:53 kind3EventsToJson.sh
-rwxrwxr-x 1 ubuntu ubuntu      323 Feb 28 01:53 load.sh
-rwxrwxr-x 1 ubuntu ubuntu      189 Feb 28 01:53 loadJsonIntoNeo4j.sh
-rwxrwxr-x 1 ubuntu ubuntu      189 Feb 28 01:53 updateNostrUserKind3Data.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano load.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano load.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./kind3EventsToJson.sh
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 100 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 200 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 300 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 400 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 500 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 600 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 700 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 800 out of 2168 allKind3EventsStripped.json
[eval]:2
        const oEvent = JSON.parse('{"created_at":1740723313,"id":"c3df443deb67b27349f040eec2910a1cc456c30244f557d12a7d308127066b2f","kind":3,"pubkey":"2e41cb1b64ad259378aa70b7d6dd8c35ddda552a08c424fab78772a82803aa3e","sig":"5e7ec4d7c78cfcea5f5af0f8442c1b1b7920310638509ba181734110841618e4fd1b72d0a156bce619587b83ae77d1e852bc129275f7e0541e9a8b75f98ab6dd","tags":[["client","snort","31990:84de35e2584d2b144aae823c9ed0b0f3deda09648530b93d1a2a146d1dea9864:app-profile"],["alt","Follow List"],["p","c4eabae1be3cf657bc1855ee05e69de9f059cb7a059227168b80b89761cbc4e0","wss://purplepag.es/","jack mallers"],["p","958b754a1d3de5b5eca0fe31d2d555f451325f8498a83da1997b7fcd5c39e88c"],["p","3f2ccdac73b1f34d234f78dec61dccbb3b8436b454bb29ba144056bb23e25ad0"],["p","d2e6028f99deb2c76c8ebf34531bef058ef525f1624f74ad96e31cf9fb7b11e3"],["p","819056b908c9e5fe16626693f48268942994fd448e00b010fc42390d74f37f65"],["p","af7673fb09d598eb63272cd7e6c1d1614031cdfc084c460f5d549be335dc7630"],["p","3d70ec1ea586650a0474d6858454209d222158f4079e8db806f017ef5e30e767"],["p","5be6446aa8a31c11b3b453bf8dafc9b346ff328d1fa11a0fa02a1e6461f6a9b1"],["p","aef0d6b212827f3ba1de6189613e6d4824f181f567b1205273c16895fdaf0b23"],["p","3aa329cc86826ab25ca64b8b24450836727b6c1991fced637001e2aa91ba5ed3"],["p","bb6e8b751ca4a8085082f588d62cb93ea163067a421a62420180dd19c1431f4f"],["p","5c82ae805075d9b3cc719d6052fd6acde3afbc5b58bc8a3b2cb551dadb4d5b9a"],["p","604e96e099936a104883958b040b47672e0f048c98ac793f37ffe4c720279eb2"],["p","e8d67c435a4a59304e1414280e952efe17be4254fca27916bf63f9f73e54aba4"],["p","4379e76bfa76a80b8db9ea759211d90bb3e67b2202f8880cc4f5ffe2065061ad"],["p","813fce4c4e76f1e7b4f4697bf1030a90f1a0b783f187d329800a4dd8697f9759"],["p","1b11ed41e815234599a52050a6a40c79bdd3bfa3d65e5d4a2c8d626698835d6d"],["p","1bd32a386a7be6f688b3dc7c480efc21cd946b43eac14ba4ba7834ac77a23e69"],["p","76c71aae3a491f1d9eec47cba17e229cda4113a0bbb6e6ae1776d7643e29cafa"],["p","3efdaebb1d8923ebd99c9e7ace3b4194ab45512e2be79c1b7d68d9243e0d2681"],["p","58c741aa630c2da35a56a77c1d05381908bd10504fdd2d8b43f725efa6d23196"],["p","b9003833fabff271d0782e030be61b7ec38ce7d45a1b9a869fbdb34b9e2d2000"],["p","baf27a4cc4da49913e7fdecc951fd3b971c9279959af62b02b761a043c33384c"],["p","a4dbfdc6e7e27e33b04e8009cf15dd1df35d62a9b258e70c38166871a577c47a"],["p","e41e883f1ef62485a074c1a1fa1d0a092a5d678ad49bedc2f955ab5e305ba94e"],["p","5a8e581f16a012e24d2a640152ad562058cb065e1df28e907c1bfa82c150c8ba"],["p","84de08882b6e36705cf6592ee58e632dd6e092dd61c13192fc80cbbc0cbc82cc"],["p","472f440f29ef996e92a186b8d320ff180c855903882e59d50de1b8bd5669301e"],["p","090254801a7e8e5085b02e711622f0dfa1a85503493af246aa42af08f5e4d2df"],["p","c9f67501de710fb311d4d9e234c78067ba953a106937272ba06067f069f0ea49"],["p","7fa56f5d6962ab1e3cd424e758c3002b8665f7b0d8dcee9fe9e288d7751ac194"],["p","f728d9e6e7048358e70930f5ca64b097770d989ccd86854fe618eda9c8a38106"],["p","e88a691e98d9987c964521dff60025f60700378a4879180dcbbb4a5027850411"],["p","3f770d65d3a764a9c5cb503ae123e62ec7598ad035d836e2a810f3877a745b24"],["p","6e468422dfb74a5738702a8823b9b28168abab8655faacb6853cd0ee15deee93"],["p","3d2e51508699f98f0f2bdbe7a45b673c687fe6420f466dc296d90b908d51d594"],["p","a3eb29554bd27fca7f53f66272e4bb59d066f2f31708cf341540cb4729fbd841"],["p","ea50fcbe84864a0dd3d5ba1a2255d38c9b8590647b7b7a569fe4767277723f2f"],["p","9c612f8b770f0e3fd35cdac2bc57fcee8561e560504ea25c8b9eff8e03512b3e"],["p","d61f3bc5b3eb4400efdae6169a5c17cabf3246b514361de939ce4a1a0da6ef4a"],["p","50d94fc2d8580c682b071a542f8b1e31a200b0508bab95a33bef0855df281d63"],["p","8fe3f243e91121818107875d51bca4f3fcf543437aa9715150ec8036358939c5"],["p","29fbc05acee671fb579182ca33b0e41b455bb1f9564b90a3d8f2f39dee3f2779"],["p","c43bbb58e2e6bc2f9455758257f6ba5329107bd4e8274068c2936c69d9980b7d"],["p","9b12847f3d28bf8850ebc03f8d495a1ae8f9a2c86dbda295c90556619a3ee831"],["p","053935081a69624466034446eda3374d905652ddbf8217c88708182687a33066"],["p","04c915daefee38317fa734444acee390a8269fe5810b2241e5e6dd343dfbecc9"],["p","84dee6e676e5bb67b4ad4e042cf70cbd8681155db535942fcc6a0533858a7240"],["p","a849beb6efafd675fe3f616241c593f99d12c23dbb59bbb3fcd715e4b327e6d2"],["p","b9e76546ba06456ed301d9e52bc49fa48e70a6bf2282be7a1ae72947612023dc"],["p","626f5262765ba3130ebf9d3e778b3f44e3a843bb392e0bf99ada438b3fed4976"],["p","3eeb3de14ec5c48c6c4c9ff80908c4186170eabb74b2a6705a7db9f9922cd61e"],["p","eaf27aa104833bcd16f671488b01d65f6da30163b5848aea99677cc947dd00aa"],["p","8867bed93e89c93d0d8ac98b2443c5554799edb9190346946b12e03f13664450"],["p","96c075fee951c713c54281c2e31c856e9e8009b6f26a2fa05318386da17235be"],["p","90b9bec74789688e515125596ab6350bfe646176ac75742275063922c5fea010"],["p","c2cfdd03c47bcf083f25e1fc410a6ad7fb9887e2c93eca623e8be7829ec9c63b"],["p","1f2c17bd3bcaf12f9c7e78fe798eeea59c1b22e1ee036694d5dc2886ddfa35d7"],["p","32e1827635450ebb3c5a7d12c1f8e7b2b514439ac10a67eef3d9fd9c5c68e245"],["p","8967f290cc7749fd3d232fb7110c05db746a31fce0635aeec4e111ad8bfc810d"],["p","6b0d4c8d9dc59e110d380b0429a02891f1341a0fa2ba1b1cf83a3db4d47e3964"],["p","874db6d2db7b39035fe7aac19e83a48257915e37d4f2a55cb4ca66be2d77aa88"],["p","e20f8a383ac5e15366101c1608ee4f33fa8b2d79250ceb2b5a8abaa4394a6e7c"],["p","a4cb51f4618cfcd16b2d3171c466179bed8e197c43b8598823b04de266cef110"],["p","9c9ecd7c8a8c3144ae48bf425b6592c8e53c385fd83376d4ffb7f6ac1a17bfab"],["p","fdd5e8f6ae0db817be0b71da20498c1806968d8a6459559c249f322fa73464a7"],["p","f594042d848778ff97a66aaddde83d221af21ef1d40643576b046960fc128dcc"],["p","e1ff3bfdd4e40315959b08b4fcc8245eaa514637e1d4ec2ae166b743341be1af"],["p","b81f6b275ebd27a8f04ffd05dc16bc9fa329cb8d9c464bc7bdbf5068818e03c0"],["p","36732cc35fe56185af1b11160a393d6c73a1fe41ddf1184c10394c28ca5d627b"],["p","83e818dfbeccea56b0f551576b3fd39a7a50e1d8159343500368fa085ccd964b"],["p","a8abe37636fec9ccc78807bb8a8aad7c1ff6801617e5805864a6882fc98ba023"],["p","eab0e756d32b80bcd464f3d844b8040303075a13eabc3599a762c9ac7ab91f4f"],["p","25a2192dcf34c3be326988b5c9f942aa96789899d15b59412602854a8723e9e8"],["p","edcd20558f17d99327d841e4582f9b006331ac4010806efa020ef0d40078e6da"],["p","85080d3bad70ccdcd7f74c29a44f55bb85cbcd3dd0cbb957da1d215bdb931204"],["p","bd9eb657c25b4f6cda68871ce26259d1f9bc62420487e3224905b674a710a45a"],["p","b99dbca0184a32ce55904cb267b22e434823c97f418f36daf5d2dff0dd7b5c27"],["p","a341f45ff9758f570a21b000c17d4e53a3a497c8397f26c0e6d61e5acffc7a98"],["p","2bbace553efebf58dd55912169f92c1123eb6121d7ba092f6c50104afc31acef"],["p","208967cddc2249314d2342d66c198736931161aae8e6083b2ce768274a75ccd7"],["p","c1651ae9616f87373ba00af0d97dc46902564e1fc1e5b6c4083383d91e83506b"],["p","368f4e0027fd223fdb69b6ec6e1c06d1f027a611b1ed38eeb32493eb2878bb35"],["p","9ba8c688f091ca48de2b0f9bc998e3bc36a0092149f9201767da592849777f1c"],["p","c9b19ffcd43e6a5f23b3d27106ce19e4ad2df89ba1031dd4617f1b591e108965"],["p","1afe0c74e3d7784eba93a5e3fa554a6eeb01928d12739ae8ba4832786808e36d"],["p","0d2e939b84dfe63353b074310d00c494dec6a4bebebaa053afaba0faadab883e"],["p","7251b7dd510500496e290095fac1ea8b823abcb8ea37b04b60d5668f328b2e06"],["p","c49d52a573366792b9a6e4851587c28042fb24fa5625c6d67b8c95c8751aca15"],["p","ff04a0e6cd80c141b0b55825fed127d4532a6eecdb7e743a38a3c28bf9f44609"],["p","707fa91042f4d449a6efa7c5107e317c4a2f34bf84856d2440ef65661ea6d4a1"],["p","92cbe5861cfc5213dd89f0a6f6084486f85e6f03cfeb70a13f455938116433b8"],["p","e4c822745ac83d6e2534803d185579ed26f80c45d15a307a3b9e716a0260edb9"],["p","73e1ef97368a84327b389ea6f43abcc20f618b7c2c0314eefc422495c010dc7e"],["p","fa984bd7dbb282f07e16e7ae87b26a2a7b9b90b7246a44771f0cf5ae58018f52"],["p","c2622c916d9b90e10a81b2ba67b19bdfc5d6be26c25756d1f990d3785ce1361b"],["p","19fefd7f39c96d2ff76f87f7627ae79145bc971d8ab23205005939a5a913bc2f"],["p","82341f882b6eabcd2ba7f1ef90aad961cf074af15b9ef44a09f9d2a8fbfbe6a2"],["p","3bf0c63fcb93463407af97a5e5ee64fa883d107ef9e558472c4eb9aaaefa459d"],["p","eaba7a49cdcc542942567ab92ec08d0622b538a34a1392fbbbdbc75697790a4d"],["p","171ddd43dab1af0d1fb14029287152a4c89296890e0607cf5e7ba73c73fdf1a5"],["p","2856cda3235e68be9df2b5327d389551e5db90fccf0cba4273b9330610b71966"],["p","c48b5cced5ada74db078df6b00fa53fc1139d73bf0ed16de325d52220211dbd5"],["p","77aa5d9a477ee69ab90ba7b7130fe74656f28171dd1068912048a265ecfc6d92"],["p","0815ff97fe03766824041b68e2a39f3e3c9580852643803307eabea240a2bb75"],["p","ee6ea13ab9fe5c4a68eaf9b1a34fe014a66b40117c50ee2a614f4cda959b6e74"],["p","9e9d7b81341133cdb2c9d7762a3f3fb39aa4aad4648067ee4f0b871a2c6241d8"],["p","020f2d21ae09bf35fcdfb65decf1478b846f5f728ab30c5eaabcd6d081a81c3e"],["p","63fe6318dc58583cfe16810f86dd09e18bfd76aabc24a0081ce2856f330504ed"],["p","d307643547703537dfdef811c3dea96f1f9e84c8249e200353425924a9908cf8"],["p","9579444852221038dcba34512257b66a1c6e5bdb4339b6794826d4024b3e4ce9"],["p","16b8676587c1ddde60b23b27205112a4d5f0ce7bd0414f67476d5eea1502af36"],["p","87570647ca3b7549e66cb6c4bb8d197f5bc91de73b58eb1ade78c8ddd5fec7eb"],["p","b5b26195bafa17b6c7cbe0100b2918ec3c5e168ce4f40337de76f5072fcf04a7"],["p","826e9f895b81ab41a4522268b249e68d02ca81608def562a493cee35ffc5c759"],["p","91c9a5e1a9744114c6fe2d61ae4de82629eaaa0fb52f48288093c7e7e036f832"],["p","6c237d8b3b120251c38c230c06d9e48f0d3017657c5b65c8c36112eb15c52aeb"],["p","a9f8b3f2ac19cc06d5194dd1ac9314d4741a09777444986553926d9165181647","wss://relay.damus.io/","Tico 🇨🇷"],["p","90aaac10e033b4d1e607d426fc0eaabb9caa86720421dad8ae30182dd3efdb01","wss://purplerelay.com/","Fractal Bitcoin"],["p","5c50661b092cc786b55cb5d69149b129bdcc8e05d7238cc653de9f465ed69f91","wss://140.f7z.io/","fractalchris"],["p","13bc95d921c8b6b26cf35494964daf86f9312fe50924483d266827979d80897d","wss://wot.siamstr.com/","Rich Nost"],["p","76abc32ca6df2ed4835bde48166779aea0c624373547a2926ddca08ec2dab4dc","wss://creatr.nostr.wine/","Tatum"],["p","064de2497ce621aee2a5b4b926a08b1ca01bce9da85b0c714e883e119375140c","wss://eden.nostr.land/","Mandrik"],["p","5ea721dd7828229a39a372477090208db30a6c2d357951b8ae504d2ecf86c06c","wss://nostr-pub.wellorder.net/","PhantomPowerMedia"],["p","b83a28b7e4e5d20bd960c5faeb6625f95529166b8bdb045d42634a2f35919450","wss://nostr.wine/","AviBurra"],["p","1739d937dc8c0c7370aa27585938c119e25c41f6c441a5d34c6d38503e3136ef","wss://relay.damus.io/","JeffG"],["p","dedf91f5c5eee3f3864eec34b28fc99c6a8cc44b250888ccf4d0d8d854f48d54","wss://140.f7z.io/","chowcollection"],["p","29904dc1dc3101581a87ccd2b2e35dfa07bf2bbafe2e1feea390916ff1332910","wss://atlas.nostr.land/","Frogfren17"],["p","b6dcdddf86675287d1a4e8620d92aa905c258d850bf8cc923d39df1edfee5ee7","wss://a.nos.lol/","geyser"],["p","7bdef7be22dd8e59f4600e044aa53a1cf975a9dc7d27df5833bc77db784a5805","wss://nostr.wine/","dtonon"],["p","6e75f7972397ca3295e0f4ca0fbc6eb9cc79be85bafdd56bd378220ca8eee74e","wss://wot.utxo.one/","TheGrinder"],["p","3e21c587ac08b2d0205da3006c7e602fd2a32aa6cb9f4b43a751720b1a85b1fd","wss://relay.blackbyte.nl/","BTC_for_Freedom"],["p","17538dc2a62769d09443f18c37cbe358fab5bbf981173542aa7c5ff171ed77c4","wss://wot.utxo.one/","elsat"],["p","6389be6491e7b693e9f368ece88fcd145f07c068d2c1bbae4247b9b5ef439d32","wss://nostr.wine/","NunyaBidness"],["p","eeb11961b25442b16389fe6c7ebea9adf0ac36dd596816ea7119e521b8821b9e","wss://nostr.wine/","OpenMike"],["p","35b23cd02d2d75e55cee38fdee26bc82f1d15d3c9580800b04b0da2edb7517ea","wss://eclipse.pub/relay","River"],["p","af27a694e1ed4f6fe41290139a4819b182dc39befd9d855f718285546dba7c8f","wss://relay.nostr.band/","Uxellodunum"],["p","8fb140b4e8ddef97ce4b821d247278a1a4353362623f64021484b372f948000c","wss://yabu.me/","The Fishcake🐶🐾"],["p","1bc70a0148b3f316da33fe3c89f23e3e71ac4ff998027ec712b905cd24f6a411","wss://relay.snort.social/","Karnage"],["p","cfe3b4316d905335b6ce056ba0ec230b587a334381e82bf9a02a184f2d068f8d","wss://nostr.land/","Marie"],["p","460c25e682fda7832b52d1f22d3d22b3176d972f60dcdc3212ed8c92ef85065c","wss://vitor.nostr1.com/","Vitor Pamplona"],["p","97c70a44366a6535c145b333f973ea86dfdc2d7a99da618c40c64705ad98e322","wss://nos.lol/","hodlbod"],["p","971615b70ad9ec896f8d5ba0f2d01652f1dfe5f9ced81ac9469ca7facefad68b","wss://relay.primal.net/","BenGWeeks"],["p","f8e6c64342f1e052480630e27e1016dce35fc3a614e60434fef4aa2503328ca9","wss://search.nos.today/","corndalorian"],["p","5b0183ab6c3e322bf4d41c6b3aef98562a144847b7499543727c5539a114563e","wss://relay.mostr.pub/","QW"],["p","bf2376e17ba4ec269d10fcc996a4746b451152be9031fa48e74553dde5526bce","wss://bitcoiner.social/","CARLA"],["p","c48e29f04b482cc01ca1f9ef8c86ef8318c059e0e9353235162f080f26e14c11","wss://relay.snort.social/","walker"],["p","883fea4c071fda4406d2b66be21cb1edaf45a3e058050d6201ecf1d3596bbc39","wss://puravida.nostr.land/","adamcurry"],["p","5c508c34f58866ec7341aaf10cc1af52e9232bb9f859c8103ca5ecf2aa93bf78","wss://nostr.wine/","tanel"],["p","ce41c1698a8c042218bc586f0b9ec8d5bffa3dcbcea09bd59db9d0d92c3fc0b4","wss://ryan.nostr1.com/","ltngstore"],["p","ea57b25f7a57c61d7dd0bf62411244a580d6709e42a20428fd381f89ef8d63db","wss://eden.nostr.land/","isabella"],["p","a5e93aef8e820cbc7ab7b6205f854b87aed4b48c5f6b30fbbeba5c99e40dcf3f","wss://at.nostrworks.com/","BitcoinArchive"],["p","a9434ee165ed01b286becfc2771ef1705d3537d051b387288898cc00d5c885be","wss://niel.nostr1.com/","nielliesmons"],["p","dab6c6065c439b9bafb0b0f1ff5a0c68273bce5c1959a4158ad6a70851f507b6","wss://relay.nostr.info/","Juraj"],["p","8158c3897d607816e5961fe0c1a8e9bf07a4d71aeecceed79be7af007ab23039","wss://relay.damus.io/","jgbtc"],["p","8f44c56131b362668b0e01be8c71b24786598bb68fb909cfd78fabfb058dd0f0","wss://relay.damus.io/","doot"],["p","4ce6abbd68dab6e9fdf6e8e9912a8e12f9b539e078c634c55a9bff2994a514dd","wss://nostr.wine/","manlikekweks"],["p","96246920aa53df6684e8e38f02410740df9128b7edc69692a5bc5f744ec1ed6c","wss://nostr.oxtr.dev/","Eshara"],["p","2250f69694c2a43929e77e5de0f6a61ae5e37a1ee6d6a3baef1706ed9901248b","wss://nostr.wine/","wavlake"],["p","61066504617ee79387021e18c89fb79d1ddbc3e7bff19cf2298f40466f8715e9","wss://wot.sovbit.host/","atyh"],["p","d8a6ecf0c396eaa8f79a4497fe9b77dc977633451f3ca5c634e208659116647b","wss://relay.damus.io/","L0laL33tz"],["p","cc9976d96708729c89027c1137340399ff511f7c741563b44a5b1fda7bb8508b","wss://a.nos.lol/","awayslice"],["p","66721dfa30fd5cffeb0519950ad4c86acad88081d067f17bfbe3893d23352890","wss://echo.websocket.org/","hsromaine"],["p","b9ceaeeb4178a549e8b0570f348b2caa4bef8933fe3323d45e3875c01919a2c2","wss://brb.io/","kineticfinance"],["p","b7996c183e036df27802945b80bbdc8b0bf5971b6621a86bf3569c332117f07d","wss://wot.sudocarlos.com/","DrJeff"],["p","a44dbc9aaa357176a7d4f5c3106846ea096b66de0b50ee39aff54baab6c4bf4b","wss://nostr.bitcoiner.social/","BenJustman"],["p","50c6ce2e69cf0baf79b52488b20418c4a6f9ca7bd0ac654b4624d5c025cf57db","wss://relay.0xchat.com/","Skipper"],["p","516add19a861a2f429ccc883fe73243179d5298248c827d68fafe822e697c014","wss://relay.damus.io/","MountainLion"],["p","ac340a0ffa48589e98af8577754529e8c59f7fd110f1bc832d0e8d4c4d3d1853","wss://nostr-pub.wellorder.net/","SatsMan"],["p","bdbe1bdbc9b25a8d89d8fdaf0be1a0dcd837bac9691f597892903a5fdd86e27f","wss://relay.snort.social/","mutatrum"],["p","e6f713f35a15983f21cf9165c1187131be7316dc9a6985fc35e5f703be07f7cb","wss://fabian.nostr1.com/","BitLo"],["p","d0a1ffb8761b974cec4a3be8cbcb2e96a7090dcf465ffeac839aa4ca20c9a59e","wss://relay.snort.social/","mplorentz"],["p","637b9c7c6adce6bd91db2c6ea0c4c9b2260c1b2708c62c4c9583fc0f4692d37d","wss://puravida.nostr.land/","TNStacker"],["p","c9bdb692cef1f403336be7e0a79f8436e6fbc325a0d2e8746c4b7342234e27a4","wss://algo.utxo.one/","strike"],["p","676ffea2ec31426a906d7795d7ebae2ba5e61f0b9fa815995b4a299dd085d510","wss://relay.utxo.one/outbox","Jordan Eskovitz"],["p","482754a056b1e7b51a2e6e9ef99634c1578f19082caf6a353d7db8c1a190233d","wss://community.proxymana.net/","skwp"],["p","99bb5591c9116600f845107d31f9b59e2f7c7e09a1ff802e84f1d43da557ca64","wss://nostr.oxtr.dev/","Don't ₿elieve the Hype  🦊"],["p","66bd8fed3590f2299ef0128f58d67879289e6a99a660e83ead94feab7606fd17","wss://bitcoiner.social/","Run with Bitcoin"],["p","38dbb9b07d93861d40620ad62d44b1a8e8785df0997eeb4454f12d217048cd5c","wss://relay.snort.social/","bitcoinsandy"],["p","13c63df6c5651a3b0e3d53f340e6e370b140a62557429fd165b94162a8f3e923","wss://nostr.oxtr.dev/","rheedio"],["p","880f967145ab66b53d9dc279d44a9722ba875d232c73f3df4707d1e79c4336ce","wss://relay.snort.social/","plebiANON"],["p","60d53675f07dee9e7d77910efa44682d87cb532313ba66b8f4449d649172296b","wss://relay.snort.social/","silent.link"],["p","4d5ce768123563bc583697db5e84841fb528f7b708d966f2e546286ce3c72077","wss://relay.stoner.com/","Car"],["p","a367f9eb1cb3a241a7f3646f31cd6d597bbbbf8eaeb5cd2e707d09b00633efea","wss://relay.primal.net/","Yael"],["p","c9dd2f54ad27e1975436d9789117d760d76d45c923f0902b05432a5f440aa5db","wss://nostr-relay.derekross.me/","marksea"],["p","ef151c7a380f40a75d7d1493ac347b6777a9d9b5fa0aa3cddb47fc78fab69a8b","wss://atlas.nostr.land/","giacomozucco"],["p","7c765d407d3a9d5ea117cb8b8699628560787fc084a0c76afaa449bfbd121d84","wss://bucket.coracle.social/","Jor"],["p","e4f695f05bb05b231255ccce3d471b8d79c64a65bccc014662d27f0f7e921092","wss://relay.primal.net/","merryoscar"],["p","20d29810d6a5f92b045ade02ebbadc9036d741cc686b00415c42b4236fe4ad2f","wss://relay.nostr.band/","negr0"],["p","1989034e56b8f606c724f45a12ce84a11841621aaf7182a1f6564380b9c4276b","wss://purplepag.es/","BTCsessions"],["p","472be9f9264eea1254f2b2f7cd2da0c319dae4fe4cd649f0424e94234dcacf97","wss://bitcoiner.social/","nico"],["p","9ad868917571ea5a34c02cd2eb305ca452a673e14b2ee386c2bae698e5bed163","wss://eden.nostr.land/","camilacampton"],["p","935dc9483d36f24456a9150dd3f89758e6c41fe204d85b8476a41b636af43a24","wss://a.nos.lol/","bquittem"],["p","9cb3545c36940d9a2ef86d50d5c7a8fab90310cc898c4344bcfc4c822ff47bca","wss://relay.nostr.band/","TKay"],["p","d981591e0ea6153b8687b2aed670ab7d9b6c3ad018a360b2820b3cf0f7c0ae37"],["t","V4V"],["p","4918eb332a41b71ba9a74b1dc64276cfff592e55107b93baae38af3520e55975"],["t","Bitcoin"],["p","55e1b51046886030429c801d5bcbdd5cff7b4066ffdd277be4951e871afa7617"],["t","Monero"],["t","Privacy"],["t","FOSS"],["t","Notedeck"],["t","Amethyst"],["t","Linux"],["t","gamingonlinux"],["t","robertkiyosaki"]]}');
                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

SyntaxError: missing ) after argument list
    at new Script (node:vm:94:7)
    at createScript (node:vm:250:10)
    at Object.runInThisContext (node:vm:298:10)
    at node:internal/process/execution:82:21
    at [eval]-wrapper:6:24
    at runScript (node:internal/process/execution:81:62)
    at evalScript (node:internal/process/execution:103:10)
    at node:internal/main/eval_string:30:3

Node.js v18.19.1
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 900 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 1000 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 1100 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 1200 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 1300 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 1400 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 1500 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 1600 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 1700 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 1800 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 1900 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 2000 out of 2168 allKind3EventsStripped.json
./kind3EventsToJson.sh: line 14: timestamp: command not found
processing event 2100 out of 2168 allKind3EventsStripped.json
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 36
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 15:33 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  341 Feb 28 01:53 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu  418 Feb 28 01:53 createAllKind3EventsStripped.sh
-rwxrwxr-x 1 ubuntu ubuntu 1195 Feb 28 01:53 kind3EventsToJson.sh
-rwxrwxr-x 1 ubuntu ubuntu  333 Feb 28 15:29 load.sh
-rwxrwxr-x 1 ubuntu ubuntu  189 Feb 28 01:53 loadJsonIntoNeo4j.sh
-rwxrwxr-x 1 ubuntu ubuntu  189 Feb 28 01:53 updateNostrUserKind3Data.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./loadJsonIntoNeo4j.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./updateNostrUserKind3Data.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano load.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano apocCypherCommand2
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano apocCypherCommand1
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano kind3EventsToJson.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano apocCypherCommand1
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano apocCypherCommand2
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano apocCypherCommand1
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano load.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ mv createAllKind3EventsStripped.sh strfryToKind3Events.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 36
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 15:57 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu 1139 Feb 28 15:50 kind3EventsToJson.sh
-rwxrwxr-x 1 ubuntu ubuntu  450 Feb 28 15:56 load.sh
-rwxrwxr-x 1 ubuntu ubuntu  189 Feb 28 01:53 loadJsonIntoNeo4j.sh
-rwxrwxr-x 1 ubuntu ubuntu  418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu  189 Feb 28 01:53 updateNostrUserKind3Data.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ mv kind3EventsToJson.sh kind3EventsToFollows.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ mv loadJsonIntoNeo4j.sh followsToNeo4j.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 36
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 15:58 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu  189 Feb 28 01:53 followsToNeo4j.sh
-rwxrwxr-x 1 ubuntu ubuntu 1139 Feb 28 15:50 kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu  450 Feb 28 15:56 load.sh
-rwxrwxr-x 1 ubuntu ubuntu  418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu  189 Feb 28 01:53 updateNostrUserKind3Data.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano load.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ cat followsToNeo4j.sh
#!/bin/bash

source /etc/hasenpfeffr.conf # NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD

sudo cypher-shell -u "$NEO4J_USER" -p "$NEO4J_PASSWORD" -a "$NEO4J_URI" -f apocCypherCommand1 > /dev/null
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo rm followsToNeo4j.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ cat updateNostrUserKind3Data.sh
#!/bin/bash

source /etc/hasenpfeffr.conf # NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD

sudo cypher-shell -u "$NEO4J_USER" -p "$NEO4J_PASSWORD" -a "$NEO4J_URI" -f apocCypherCommand2 > /dev/null
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo rm updateNostrUserKind3Data.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano load.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 28
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 16:06 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu 1139 Feb 28 15:50 kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu  843 Feb 28 16:06 load.sh
-rwxrwxr-x 1 ubuntu ubuntu  418 Feb 28 01:53 strfryToKind3Events.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo mv load.sh transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 28
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 16:07 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu 1139 Feb 28 15:50 kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu  418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu  843 Feb 28 16:06 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ cat /home/ubuntu/hasenpfeffr/pipeline/batch/kind3EventsToFollows.sh
#!/bin/bash

source /etc/hasenpfeffr.conf # NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD

> followsToAddToNeo4j.json

totNumberOfEvents=$(wc -l allKind3EventsStripped.json)

eventCounter=0
cat allKind3EventsStripped.json | while read line; do
    ((eventCounter++))
    eventCounterMod=$(($eventCounter % 100))
    if [[ "$eventCounterMod" = 0 ]]; then
        timestamp
        echo "processing event $eventCounter out of $totNumberOfEvents"
    fi
    sudo node -e "try {
        const oEvent = JSON.parse('$line');
        const pk_follower = oEvent.pubkey
        const aTags = oEvent.tags
        for (x=0; x< aTags.length; x++) {
            const tag = aTags[x]
            if (tag[0] == 'p') {
                const pk_followee = tag[1]
                const nextLine = {
                    pk_follower, pk_followee
                }
                console.log(JSON.stringify(nextLine))
            }
        }
    } catch (e) {
    }" >> followsToAddToNeo4j.json
done

sudo mv followsToAddToNeo4j.json /var/lib/neo4j/import/followsToAddToNeo4j.json
sudo mv allKind3EventsStripped.json /var/lib/neo4j/import/allKind3EventsStripped.json
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano optimized_kind3EventsToFollows.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano optimized_kind3EventsToFollows.js
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 36
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 16:28 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu 1139 Feb 28 15:50 kind3EventsToFollows.sh
-rw-r--r-- 1 root   root   2236 Feb 28 16:28 optimized_kind3EventsToFollows.js
-rw-r--r-- 1 root   root    456 Feb 28 16:27 optimized_kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu  418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu 1114 Feb 28 16:12 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo chmod +x optimized_kind3EventsToFollows.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 36
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 16:28 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu 1139 Feb 28 15:50 kind3EventsToFollows.sh
-rw-r--r-- 1 root   root   2236 Feb 28 16:28 optimized_kind3EventsToFollows.js
-rwxr-xr-x 1 root   root    456 Feb 28 16:27 optimized_kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu  418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu 1114 Feb 28 16:12 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./strfryToKind3Events.sh
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 16:30:10.515 (   0.014s) [main thread     ]INFO| arguments: strfry scan --count {\ \"kinds\":\ [3],\ \"since\":\ 0\ }
2025-02-28 16:30:10.515 (   0.014s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 16:30:10.515 (   0.014s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 16:30:10.515 (   0.014s) [main thread     ]INFO| -----------------------------------
2025-02-28 16:30:10.515 (   0.014s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 16:30:10.522 (   0.020s) [main thread     ]INFO| CONFIG: successfully installed
112464
2025-02-28 16:30:10.537 (   0.036s) [main thread     ]INFO| atexit
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 16:30:10.563 (   0.013s) [main thread     ]INFO| arguments: strfry scan {\ \"kinds\":\ [3],\ \"since\":\ 0\ }
2025-02-28 16:30:10.563 (   0.014s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 16:30:10.563 (   0.014s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 16:30:10.563 (   0.014s) [main thread     ]INFO| -----------------------------------
2025-02-28 16:30:10.563 (   0.014s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 16:30:10.569 (   0.020s) [main thread     ]INFO| CONFIG: successfully installed
ls -la
2025-02-28 16:30:27.778 (  17.228s) [main thread     ]INFO| atexit
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 517356
drwxrwxr-x 2 ubuntu ubuntu      4096 Feb 28 16:30 .
drwxrwxr-x 4 ubuntu ubuntu      4096 Feb 28 01:53 ..
-rw-r--r-- 1 root   root   529735247 Feb 28 16:30 allKind3EventsStripped.json
-rw-rw-r-- 1 ubuntu ubuntu       327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu       306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu      1139 Feb 28 15:50 kind3EventsToFollows.sh
-rw-r--r-- 1 root   root        2236 Feb 28 16:28 optimized_kind3EventsToFollows.js
-rwxr-xr-x 1 root   root         456 Feb 28 16:27 optimized_kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu       418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu      1114 Feb 28 16:12 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./strfryToKind3Events.sh --recent 86400
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 16:31:30.631 (   0.014s) [main thread     ]INFO| arguments: strfry scan --count {\ \"kinds\":\ [3],\ \"since\":\ 1740673890\ }
2025-02-28 16:31:30.631 (   0.014s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 16:31:30.631 (   0.014s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 16:31:30.631 (   0.014s) [main thread     ]INFO| -----------------------------------
2025-02-28 16:31:30.631 (   0.014s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 16:31:30.637 (   0.020s) [main thread     ]INFO| CONFIG: successfully installed
2150
2025-02-28 16:31:30.638 (   0.021s) [main thread     ]INFO| atexit
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 16:31:30.662 (   0.013s) [main thread     ]INFO| arguments: strfry scan {\ \"kinds\":\ [3],\ \"since\":\ 1740673890\ }
2025-02-28 16:31:30.662 (   0.013s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 16:31:30.662 (   0.013s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 16:31:30.662 (   0.013s) [main thread     ]INFO| -----------------------------------
2025-02-28 16:31:30.662 (   0.013s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 16:31:30.668 (   0.019s) [main thread     ]INFO| CONFIG: successfully installed
2025-02-28 16:31:31.316 (   0.667s) [main thread     ]INFO| atexit
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 28224
drwxrwxr-x 2 ubuntu ubuntu     4096 Feb 28 16:30 .
drwxrwxr-x 4 ubuntu ubuntu     4096 Feb 28 01:53 ..
-rw-r--r-- 1 root   root   28863332 Feb 28 16:31 allKind3EventsStripped.json
-rw-rw-r-- 1 ubuntu ubuntu      327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu      306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu     1139 Feb 28 15:50 kind3EventsToFollows.sh
-rw-r--r-- 1 root   root       2236 Feb 28 16:28 optimized_kind3EventsToFollows.js
-rwxr-xr-x 1 root   root        456 Feb 28 16:27 optimized_kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu      418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu     1114 Feb 28 16:12 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./optimized_kind3EventsToFollows.sh
Total events to process: 2150
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 36
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 16:31 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu 1139 Feb 28 15:50 kind3EventsToFollows.sh
-rw-r--r-- 1 root   root   2236 Feb 28 16:28 optimized_kind3EventsToFollows.js
-rwxr-xr-x 1 root   root    456 Feb 28 16:27 optimized_kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu  418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu 1114 Feb 28 16:12 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 36
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 16:31 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu 1139 Feb 28 15:50 kind3EventsToFollows.sh
-rw-r--r-- 1 root   root   2236 Feb 28 16:28 optimized_kind3EventsToFollows.js
-rwxr-xr-x 1 root   root    456 Feb 28 16:27 optimized_kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu  418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu 1114 Feb 28 16:12 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./strfryToKind3Events.sh --recent 86400
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 16:34:28.913 (   0.014s) [main thread     ]INFO| arguments: strfry scan --count {\ \"kinds\":\ [3],\ \"since\":\ 1740674068\ }
2025-02-28 16:34:28.913 (   0.014s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 16:34:28.913 (   0.014s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 16:34:28.913 (   0.014s) [main thread     ]INFO| -----------------------------------
2025-02-28 16:34:28.914 (   0.014s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 16:34:28.920 (   0.020s) [main thread     ]INFO| CONFIG: successfully installed
2148
2025-02-28 16:34:28.920 (   0.021s) [main thread     ]INFO| atexit
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 16:34:28.946 (   0.014s) [main thread     ]INFO| arguments: strfry scan {\ \"kinds\":\ [3],\ \"since\":\ 1740674068\ }
2025-02-28 16:34:28.946 (   0.014s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 16:34:28.946 (   0.014s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 16:34:28.946 (   0.014s) [main thread     ]INFO| -----------------------------------
2025-02-28 16:34:28.946 (   0.014s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 16:34:28.952 (   0.019s) [main thread     ]INFO| CONFIG: successfully installed
2025-02-28 16:34:29.577 (   0.645s) [main thread     ]INFO| atexit
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 28220
drwxrwxr-x 2 ubuntu ubuntu     4096 Feb 28 16:34 .
drwxrwxr-x 4 ubuntu ubuntu     4096 Feb 28 01:53 ..
-rw-r--r-- 1 root   root   28857333 Feb 28 16:34 allKind3EventsStripped.json
-rw-rw-r-- 1 ubuntu ubuntu      327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu      306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu     1139 Feb 28 15:50 kind3EventsToFollows.sh
-rw-r--r-- 1 root   root       2236 Feb 28 16:28 optimized_kind3EventsToFollows.js
-rwxr-xr-x 1 root   root        456 Feb 28 16:27 optimized_kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu      418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu     1114 Feb 28 16:12 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./optimized_kind3EventsToFollows.sh
Total events to process: 2148
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 36
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 16:34 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu 1139 Feb 28 15:50 kind3EventsToFollows.sh
-rw-r--r-- 1 root   root   2236 Feb 28 16:28 optimized_kind3EventsToFollows.js
-rwxr-xr-x 1 root   root    456 Feb 28 16:27 optimized_kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu  418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu 1114 Feb 28 16:12 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo chmod +x optimized_kind3EventsToFollows.js
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 36
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 16:34 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu 1139 Feb 28 15:50 kind3EventsToFollows.sh
-rwxr-xr-x 1 root   root   2236 Feb 28 16:28 optimized_kind3EventsToFollows.js
-rwxr-xr-x 1 root   root    456 Feb 28 16:27 optimized_kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu  418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu 1114 Feb 28 16:12 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./strfryToKind3Events.sh --recent 86400
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 16:37:03.871 (   0.014s) [main thread     ]INFO| arguments: strfry scan --count {\ \"kinds\":\ [3],\ \"since\":\ 1740674223\ }
2025-02-28 16:37:03.871 (   0.014s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 16:37:03.871 (   0.014s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 16:37:03.871 (   0.014s) [main thread     ]INFO| -----------------------------------
2025-02-28 16:37:03.871 (   0.014s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 16:37:03.877 (   0.020s) [main thread     ]INFO| CONFIG: successfully installed
2151
2025-02-28 16:37:03.878 (   0.021s) [main thread     ]INFO| atexit
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 16:37:03.904 (   0.014s) [main thread     ]INFO| arguments: strfry scan {\ \"kinds\":\ [3],\ \"since\":\ 1740674223\ }
2025-02-28 16:37:03.904 (   0.014s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 16:37:03.904 (   0.014s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 16:37:03.904 (   0.014s) [main thread     ]INFO| -----------------------------------
2025-02-28 16:37:03.904 (   0.014s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 16:37:03.910 (   0.020s) [main thread     ]INFO| CONFIG: successfully installed
2025-02-28 16:37:04.527 (   0.636s) [main thread     ]INFO| atexit
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 28164
drwxrwxr-x 2 ubuntu ubuntu     4096 Feb 28 16:37 .
drwxrwxr-x 4 ubuntu ubuntu     4096 Feb 28 01:53 ..
-rw-r--r-- 1 root   root   28799488 Feb 28 16:37 allKind3EventsStripped.json
-rw-rw-r-- 1 ubuntu ubuntu      327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu      306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu     1139 Feb 28 15:50 kind3EventsToFollows.sh
-rwxr-xr-x 1 root   root       2236 Feb 28 16:28 optimized_kind3EventsToFollows.js
-rwxr-xr-x 1 root   root        456 Feb 28 16:27 optimized_kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu      418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu     1114 Feb 28 16:12 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./optimized_kind3EventsToFollows.sh
Total events to process: 2151
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano optimized_kind3EventsToFollows.js
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano optimized_kind3EventsToFollows.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 36
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 16:40 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu 1139 Feb 28 15:50 kind3EventsToFollows.sh
-rwxr-xr-x 1 root   root   2294 Feb 28 16:40 optimized_kind3EventsToFollows.js
-rwxr-xr-x 1 root   root    460 Feb 28 16:40 optimized_kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu  418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu 1114 Feb 28 16:12 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./strfryToKind3Events.sh --recent 86400
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 16:41:50.622 (   0.016s) [main thread     ]INFO| arguments: strfry scan --count {\ \"kinds\":\ [3],\ \"since\":\ 1740674510\ }
2025-02-28 16:41:50.622 (   0.016s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 16:41:50.622 (   0.016s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 16:41:50.622 (   0.016s) [main thread     ]INFO| -----------------------------------
2025-02-28 16:41:50.622 (   0.016s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 16:41:50.629 (   0.023s) [main thread     ]INFO| CONFIG: successfully installed
2145
2025-02-28 16:41:50.630 (   0.024s) [main thread     ]INFO| atexit
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 16:41:50.659 (   0.018s) [main thread     ]INFO| arguments: strfry scan {\ \"kinds\":\ [3],\ \"since\":\ 1740674510\ }
2025-02-28 16:41:50.659 (   0.018s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 16:41:50.659 (   0.018s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 16:41:50.659 (   0.018s) [main thread     ]INFO| -----------------------------------
2025-02-28 16:41:50.659 (   0.018s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 16:41:50.665 (   0.024s) [main thread     ]INFO| CONFIG: successfully installed
2025-02-28 16:41:51.505 (   0.863s) [main thread     ]INFO| atexit
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 28004
drwxrwxr-x 2 ubuntu ubuntu     4096 Feb 28 16:41 .
drwxrwxr-x 4 ubuntu ubuntu     4096 Feb 28 01:53 ..
-rw-r--r-- 1 root   root   28636213 Feb 28 16:41 allKind3EventsStripped.json
-rw-rw-r-- 1 ubuntu ubuntu      327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu      306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu     1139 Feb 28 15:50 kind3EventsToFollows.sh
-rwxr-xr-x 1 root   root       2294 Feb 28 16:40 optimized_kind3EventsToFollows.js
-rwxr-xr-x 1 root   root        460 Feb 28 16:40 optimized_kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu      418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu     1114 Feb 28 16:12 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./optimized_kind3EventsToFollows.sh
here in optimized_kind3EventsToFollows.js
Total events to process: 2145
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 28004
drwxrwxr-x 2 ubuntu ubuntu     4096 Feb 28 16:42 .
drwxrwxr-x 4 ubuntu ubuntu     4096 Feb 28 01:53 ..
-rw-r--r-- 1 root   root   28636213 Feb 28 16:41 allKind3EventsStripped.json
-rw-rw-r-- 1 ubuntu ubuntu      327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu      306 Feb 28 01:53 apocCypherCommand2
-rw-r--r-- 1 root   root          0 Feb 28 16:42 followsToAddToNeo4j.json
-rwxrwxr-x 1 ubuntu ubuntu     1139 Feb 28 15:50 kind3EventsToFollows.sh
-rwxr-xr-x 1 root   root       2294 Feb 28 16:40 optimized_kind3EventsToFollows.js
-rwxr-xr-x 1 root   root        460 Feb 28 16:40 optimized_kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu      418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu     1114 Feb 28 16:12 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano optimized_kind3EventsToFollows.js
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano optimized_kind3EventsToFollows.js
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano optimized_kind3EventsToFollows.js
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./optimized_kind3EventsToFollows.sh
Total events to process: 2145
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano optimized_kind3EventsToFollows.js
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./optimized_kind3EventsToFollows.sh
Total events to process: 2145
[2025-02-28T16:55:18.990Z] Processing event 100 out of 2145
[2025-02-28T16:55:19.118Z] Processing event 200 out of 2145
[2025-02-28T16:55:19.222Z] Processing event 300 out of 2145
[2025-02-28T16:55:19.317Z] Processing event 400 out of 2145
[2025-02-28T16:55:19.429Z] Processing event 500 out of 2145
[2025-02-28T16:55:19.540Z] Processing event 600 out of 2145
[2025-02-28T16:55:19.621Z] Processing event 700 out of 2145
[2025-02-28T16:55:19.702Z] Processing event 800 out of 2145
[2025-02-28T16:55:19.771Z] Processing event 900 out of 2145
[2025-02-28T16:55:19.877Z] Processing event 1000 out of 2145
[2025-02-28T16:55:19.959Z] Processing event 1100 out of 2145
[2025-02-28T16:55:20.063Z] Processing event 1200 out of 2145
[2025-02-28T16:55:20.159Z] Processing event 1300 out of 2145
[2025-02-28T16:55:20.242Z] Processing event 1400 out of 2145
[2025-02-28T16:55:20.315Z] Processing event 1500 out of 2145
[2025-02-28T16:55:20.382Z] Processing event 1600 out of 2145
[2025-02-28T16:55:20.454Z] Processing event 1700 out of 2145
[2025-02-28T16:55:20.521Z] Processing event 1800 out of 2145
[2025-02-28T16:55:20.606Z] Processing event 1900 out of 2145
[2025-02-28T16:55:20.689Z] Processing event 2000 out of 2145
[2025-02-28T16:55:20.753Z] Processing event 2100 out of 2145
Processed all 2145 events. Output written to /home/ubuntu/hasenpfeffr/pipeline/batch/followsToAddToNeo4j.json
Processing completed successfully
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 88548
drwxrwxr-x 2 ubuntu ubuntu     4096 Feb 28 16:55 .
drwxrwxr-x 4 ubuntu ubuntu     4096 Feb 28 01:53 ..
-rw-r--r-- 1 root   root   28636213 Feb 28 16:41 allKind3EventsStripped.json
-rw-rw-r-- 1 ubuntu ubuntu      327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu      306 Feb 28 01:53 apocCypherCommand2
-rw-r--r-- 1 root   root   61993640 Feb 28 16:55 followsToAddToNeo4j.json
-rwxrwxr-x 1 ubuntu ubuntu     1139 Feb 28 15:50 kind3EventsToFollows.sh
-rwxr-xr-x 1 root   root       2492 Feb 28 16:55 optimized_kind3EventsToFollows.js
-rwxr-xr-x 1 root   root        460 Feb 28 16:40 optimized_kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu      418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu     1114 Feb 28 16:12 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano followsToAddToNeo4j.json
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano optimized_kind3EventsToFollows.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./transfer.sh --recent 86400
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 16:56:28.936 (   0.020s) [main thread     ]INFO| arguments: strfry scan --count {\ \"kinds\":\ [3],\ \"since\":\ 1740675388\ }
2025-02-28 16:56:28.936 (   0.020s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 16:56:28.936 (   0.020s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 16:56:28.936 (   0.020s) [main thread     ]INFO| -----------------------------------
2025-02-28 16:56:28.936 (   0.020s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 16:56:28.945 (   0.029s) [main thread     ]INFO| CONFIG: successfully installed
2147
2025-02-28 16:56:28.946 (   0.031s) [main thread     ]INFO| atexit
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 16:56:28.985 (   0.019s) [main thread     ]INFO| arguments: strfry scan {\ \"kinds\":\ [3],\ \"since\":\ 1740675388\ }
2025-02-28 16:56:28.985 (   0.019s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 16:56:28.985 (   0.019s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 16:56:28.985 (   0.019s) [main thread     ]INFO| -----------------------------------
2025-02-28 16:56:28.985 (   0.019s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 16:56:28.994 (   0.029s) [main thread     ]INFO| CONFIG: successfully installed
2025-02-28 16:56:29.826 (   0.860s) [main thread     ]INFO| atexit
./kind3EventsToFollows.sh: line 14: timestamp: command not found
processing event 100 out of 2147 allKind3EventsStripped.json
./kind3EventsToFollows.sh: line 14: timestamp: command not found
processing event 200 out of 2147 allKind3EventsStripped.json
./kind3EventsToFollows.sh: line 14: timestamp: command not found
processing event 300 out of 2147 allKind3EventsStripped.json
^C^X^C
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano kind3EventsToFollows.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./transfer.sh --recent 86400
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 16:58:16.266 (   0.023s) [main thread     ]INFO| arguments: strfry scan --count {\ \"kinds\":\ [3],\ \"since\":\ 1740675496\ }
2025-02-28 16:58:16.266 (   0.023s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 16:58:16.266 (   0.023s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 16:58:16.266 (   0.023s) [main thread     ]INFO| -----------------------------------
2025-02-28 16:58:16.266 (   0.023s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 16:58:16.275 (   0.032s) [main thread     ]INFO| CONFIG: successfully installed
2148
2025-02-28 16:58:16.276 (   0.033s) [main thread     ]INFO| atexit
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 16:58:16.320 (   0.021s) [main thread     ]INFO| arguments: strfry scan {\ \"kinds\":\ [3],\ \"since\":\ 1740675496\ }
2025-02-28 16:58:16.320 (   0.021s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 16:58:16.320 (   0.021s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 16:58:16.320 (   0.021s) [main thread     ]INFO| -----------------------------------
2025-02-28 16:58:16.320 (   0.021s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 16:58:16.329 (   0.030s) [main thread     ]INFO| CONFIG: successfully installed
2025-02-28 16:58:17.326 (   1.026s) [main thread     ]INFO| atexit
Total events to process: 2148
[2025-02-28T16:58:17.879Z] Processing event 100 out of 2148
[2025-02-28T16:58:18.095Z] Processing event 200 out of 2148
[2025-02-28T16:58:18.282Z] Processing event 300 out of 2148
[2025-02-28T16:58:18.403Z] Processing event 400 out of 2148
[2025-02-28T16:58:18.546Z] Processing event 500 out of 2148
[2025-02-28T16:58:18.721Z] Processing event 600 out of 2148
[2025-02-28T16:58:18.896Z] Processing event 700 out of 2148
[2025-02-28T16:58:19.015Z] Processing event 800 out of 2148
[2025-02-28T16:58:19.157Z] Processing event 900 out of 2148
[2025-02-28T16:58:19.294Z] Processing event 1000 out of 2148
[2025-02-28T16:58:19.378Z] Processing event 1100 out of 2148
[2025-02-28T16:58:19.488Z] Processing event 1200 out of 2148
[2025-02-28T16:58:19.641Z] Processing event 1300 out of 2148
[2025-02-28T16:58:19.761Z] Processing event 1400 out of 2148
[2025-02-28T16:58:19.867Z] Processing event 1500 out of 2148
[2025-02-28T16:58:19.968Z] Processing event 1600 out of 2148
[2025-02-28T16:58:20.062Z] Processing event 1700 out of 2148
[2025-02-28T16:58:20.175Z] Processing event 1800 out of 2148
[2025-02-28T16:58:20.301Z] Processing event 1900 out of 2148
[2025-02-28T16:58:20.428Z] Processing event 2000 out of 2148
[2025-02-28T16:58:20.516Z] Processing event 2100 out of 2148
Processed all 2148 events. Output written to /home/ubuntu/hasenpfeffr/pipeline/batch/followsToAddToNeo4j.json
Processing completed successfully
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo ./transfer.sh --recent 604800
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 17:02:40.413 (   0.016s) [main thread     ]INFO| arguments: strfry scan --count {\ \"kinds\":\ [3],\ \"since\":\ 1740157360\ }
2025-02-28 17:02:40.413 (   0.016s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 17:02:40.413 (   0.016s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 17:02:40.413 (   0.016s) [main thread     ]INFO| -----------------------------------
2025-02-28 17:02:40.413 (   0.017s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 17:02:40.420 (   0.023s) [main thread     ]INFO| CONFIG: successfully installed
10796
2025-02-28 17:02:40.423 (   0.026s) [main thread     ]INFO| atexit
date       time         ( uptime  ) [ thread name/id ]   v| 
2025-02-28 17:02:40.447 (   0.013s) [main thread     ]INFO| arguments: strfry scan {\ \"kinds\":\ [3],\ \"since\":\ 1740157360\ }
2025-02-28 17:02:40.447 (   0.013s) [main thread     ]INFO| Current dir: /home/ubuntu/hasenpfeffr/pipeline/batch
2025-02-28 17:02:40.447 (   0.013s) [main thread     ]INFO| stderr verbosity: 0
2025-02-28 17:02:40.447 (   0.014s) [main thread     ]INFO| -----------------------------------
2025-02-28 17:02:40.447 (   0.014s) [main thread     ]INFO| CONFIG: Loading config from file: /etc/strfry.conf
2025-02-28 17:02:40.453 (   0.019s) [main thread     ]INFO| CONFIG: successfully installed
2025-02-28 17:02:43.689 (   3.255s) [main thread     ]INFO| atexit
Total events to process: 10796
[2025-02-28T17:02:44.877Z] Processing event 100 out of 10796
[2025-02-28T17:02:45.031Z] Processing event 200 out of 10796
[2025-02-28T17:02:45.143Z] Processing event 300 out of 10796
[2025-02-28T17:02:45.234Z] Processing event 400 out of 10796
[2025-02-28T17:02:45.414Z] Processing event 500 out of 10796
[2025-02-28T17:02:45.552Z] Processing event 600 out of 10796
[2025-02-28T17:02:45.731Z] Processing event 700 out of 10796
[2025-02-28T17:02:45.861Z] Processing event 800 out of 10796
[2025-02-28T17:02:46.004Z] Processing event 900 out of 10796
[2025-02-28T17:02:46.187Z] Processing event 1000 out of 10796
[2025-02-28T17:02:46.321Z] Processing event 1100 out of 10796
[2025-02-28T17:02:46.421Z] Processing event 1200 out of 10796
[2025-02-28T17:02:46.545Z] Processing event 1300 out of 10796
[2025-02-28T17:02:46.711Z] Processing event 1400 out of 10796
[2025-02-28T17:02:46.821Z] Processing event 1500 out of 10796
[2025-02-28T17:02:46.941Z] Processing event 1600 out of 10796
[2025-02-28T17:02:47.036Z] Processing event 1700 out of 10796
[2025-02-28T17:02:47.139Z] Processing event 1800 out of 10796
[2025-02-28T17:02:47.239Z] Processing event 1900 out of 10796
[2025-02-28T17:02:47.327Z] Processing event 2000 out of 10796
[2025-02-28T17:02:47.383Z] Processing event 2100 out of 10796
[2025-02-28T17:02:47.467Z] Processing event 2200 out of 10796
[2025-02-28T17:02:47.587Z] Processing event 2300 out of 10796
[2025-02-28T17:02:47.730Z] Processing event 2400 out of 10796
[2025-02-28T17:02:47.889Z] Processing event 2500 out of 10796
[2025-02-28T17:02:48.037Z] Processing event 2600 out of 10796
[2025-02-28T17:02:48.166Z] Processing event 2700 out of 10796
[2025-02-28T17:02:48.244Z] Processing event 2800 out of 10796
[2025-02-28T17:02:48.318Z] Processing event 2900 out of 10796
[2025-02-28T17:02:48.434Z] Processing event 3000 out of 10796
[2025-02-28T17:02:48.584Z] Processing event 3100 out of 10796
[2025-02-28T17:02:48.712Z] Processing event 3200 out of 10796
[2025-02-28T17:02:48.861Z] Processing event 3300 out of 10796
[2025-02-28T17:02:48.954Z] Processing event 3400 out of 10796
[2025-02-28T17:02:49.076Z] Processing event 3500 out of 10796
[2025-02-28T17:02:49.149Z] Processing event 3600 out of 10796
[2025-02-28T17:02:49.207Z] Processing event 3700 out of 10796
[2025-02-28T17:02:49.279Z] Processing event 3800 out of 10796
[2025-02-28T17:02:49.340Z] Processing event 3900 out of 10796
[2025-02-28T17:02:49.414Z] Processing event 4000 out of 10796
[2025-02-28T17:02:49.535Z] Processing event 4100 out of 10796
[2025-02-28T17:02:49.677Z] Processing event 4200 out of 10796
[2025-02-28T17:02:49.853Z] Processing event 4300 out of 10796
[2025-02-28T17:02:50.018Z] Processing event 4400 out of 10796
[2025-02-28T17:02:50.099Z] Processing event 4500 out of 10796
[2025-02-28T17:02:50.172Z] Processing event 4600 out of 10796
[2025-02-28T17:02:50.264Z] Processing event 4700 out of 10796
[2025-02-28T17:02:50.380Z] Processing event 4800 out of 10796
[2025-02-28T17:02:50.506Z] Processing event 4900 out of 10796
[2025-02-28T17:02:50.625Z] Processing event 5000 out of 10796
[2025-02-28T17:02:50.717Z] Processing event 5100 out of 10796
[2025-02-28T17:02:50.791Z] Processing event 5200 out of 10796
[2025-02-28T17:02:50.860Z] Processing event 5300 out of 10796
[2025-02-28T17:02:50.909Z] Processing event 5400 out of 10796
[2025-02-28T17:02:50.939Z] Processing event 5500 out of 10796
[2025-02-28T17:02:50.993Z] Processing event 5600 out of 10796
[2025-02-28T17:02:51.038Z] Processing event 5700 out of 10796
[2025-02-28T17:02:51.110Z] Processing event 5800 out of 10796
[2025-02-28T17:02:51.181Z] Processing event 5900 out of 10796
[2025-02-28T17:02:51.262Z] Processing event 6000 out of 10796
[2025-02-28T17:02:51.349Z] Processing event 6100 out of 10796
[2025-02-28T17:02:51.481Z] Processing event 6200 out of 10796
[2025-02-28T17:02:51.602Z] Processing event 6300 out of 10796
[2025-02-28T17:02:51.703Z] Processing event 6400 out of 10796
[2025-02-28T17:02:51.804Z] Processing event 6500 out of 10796
[2025-02-28T17:02:51.890Z] Processing event 6600 out of 10796
[2025-02-28T17:02:51.981Z] Processing event 6700 out of 10796
[2025-02-28T17:02:52.048Z] Processing event 6800 out of 10796
[2025-02-28T17:02:52.095Z] Processing event 6900 out of 10796
[2025-02-28T17:02:52.150Z] Processing event 7000 out of 10796
[2025-02-28T17:02:52.214Z] Processing event 7100 out of 10796
[2025-02-28T17:02:52.280Z] Processing event 7200 out of 10796
[2025-02-28T17:02:52.351Z] Processing event 7300 out of 10796
[2025-02-28T17:02:52.465Z] Processing event 7400 out of 10796
[2025-02-28T17:02:52.597Z] Processing event 7500 out of 10796
[2025-02-28T17:02:52.695Z] Processing event 7600 out of 10796
[2025-02-28T17:02:52.763Z] Processing event 7700 out of 10796
[2025-02-28T17:02:52.843Z] Processing event 7800 out of 10796
[2025-02-28T17:02:52.910Z] Processing event 7900 out of 10796
[2025-02-28T17:02:52.988Z] Processing event 8000 out of 10796
[2025-02-28T17:02:53.023Z] Processing event 8100 out of 10796
[2025-02-28T17:02:53.061Z] Processing event 8200 out of 10796
[2025-02-28T17:02:53.101Z] Processing event 8300 out of 10796
[2025-02-28T17:02:53.154Z] Processing event 8400 out of 10796
[2025-02-28T17:02:53.209Z] Processing event 8500 out of 10796
[2025-02-28T17:02:53.262Z] Processing event 8600 out of 10796
[2025-02-28T17:02:53.311Z] Processing event 8700 out of 10796
[2025-02-28T17:02:53.418Z] Processing event 8800 out of 10796
[2025-02-28T17:02:53.515Z] Processing event 8900 out of 10796
[2025-02-28T17:02:53.607Z] Processing event 9000 out of 10796
[2025-02-28T17:02:53.692Z] Processing event 9100 out of 10796
[2025-02-28T17:02:53.780Z] Processing event 9200 out of 10796
[2025-02-28T17:02:53.869Z] Processing event 9300 out of 10796
[2025-02-28T17:02:53.947Z] Processing event 9400 out of 10796
[2025-02-28T17:02:54.011Z] Processing event 9500 out of 10796
[2025-02-28T17:02:54.081Z] Processing event 9600 out of 10796
[2025-02-28T17:02:54.124Z] Processing event 9700 out of 10796
[2025-02-28T17:02:54.168Z] Processing event 9800 out of 10796
[2025-02-28T17:02:54.238Z] Processing event 9900 out of 10796
[2025-02-28T17:02:54.363Z] Processing event 10000 out of 10796
[2025-02-28T17:02:54.438Z] Processing event 10100 out of 10796
[2025-02-28T17:02:54.554Z] Processing event 10200 out of 10796
[2025-02-28T17:02:54.634Z] Processing event 10300 out of 10796
[2025-02-28T17:02:54.697Z] Processing event 10400 out of 10796
[2025-02-28T17:02:54.750Z] Processing event 10500 out of 10796
[2025-02-28T17:02:54.792Z] Processing event 10600 out of 10796
[2025-02-28T17:02:54.841Z] Processing event 10700 out of 10796
Processed all 10796 events. Output written to /home/ubuntu/hasenpfeffr/pipeline/batch/followsToAddToNeo4j.json
Processing completed successfully
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 36
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 17:02 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rwxrwxr-x 1 ubuntu ubuntu 1121 Feb 28 16:57 kind3EventsToFollows.sh
-rwxr-xr-x 1 root   root   2492 Feb 28 16:55 optimized_kind3EventsToFollows.js
-rwxr-xr-x 1 root   root    456 Feb 28 16:56 optimized_kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu  418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu 1124 Feb 28 16:58 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano optimized_kind3EventsToFollows.js
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo mv kind3EventsToFollows.sh kind3EventsToFollows_deprecated.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo mv optimized_kind3EventsToFollows.sh kind3EventsToFollows.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 36
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 17:07 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rwxr-xr-x 1 root   root    456 Feb 28 16:56 kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu 1121 Feb 28 16:57 kind3EventsToFollows_deprecated.sh
-rwxr-xr-x 1 root   root   2494 Feb 28 17:04 optimized_kind3EventsToFollows.js
-rwxrwxr-x 1 ubuntu ubuntu  418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu 1262 Feb 28 17:07 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo mv optimized_kind3EventsToFollows.js kind3EventsToFollows.js
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ ls -la
total 36
drwxrwxr-x 2 ubuntu ubuntu 4096 Feb 28 17:08 .
drwxrwxr-x 4 ubuntu ubuntu 4096 Feb 28 01:53 ..
-rw-rw-r-- 1 ubuntu ubuntu  327 Feb 28 15:51 apocCypherCommand1
-rw-rw-r-- 1 ubuntu ubuntu  306 Feb 28 01:53 apocCypherCommand2
-rwxr-xr-x 1 root   root   2494 Feb 28 17:04 kind3EventsToFollows.js
-rwxr-xr-x 1 root   root    456 Feb 28 16:56 kind3EventsToFollows.sh
-rwxrwxr-x 1 ubuntu ubuntu 1121 Feb 28 16:57 kind3EventsToFollows_deprecated.sh
-rwxrwxr-x 1 ubuntu ubuntu  418 Feb 28 01:53 strfryToKind3Events.sh
-rwxrwxr-x 1 ubuntu ubuntu 1262 Feb 28 17:07 transfer.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano kind3EventsToFollows.sh
ubuntu@ip-172-31-24-99:~/hasenpfeffr/pipeline/batch$ sudo nano kind3EventsToFollows.js

  GNU nano 7.2                                                                   kind3EventsToFollows.js                                                                             
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Path configuration
const inputPath = path.join(__dirname, 'allKind3EventsStripped.json');
const outputPath = path.join(__dirname, 'followsToAddToNeo4j.json');

// Clear the output file first
fs.writeFileSync(outputPath, '');

// Count total lines for progress reporting
async function countLines() {
  return new Promise((resolve) => {
    let lineCount = 0;
    const lineReader = readline.createInterface({
      input: fs.createReadStream(inputPath),
      crlfDelay: Infinity
    });
    
    lineReader.on('line', () => {
      lineCount++;
    });
    
    lineReader.on('close', () => {
      resolve(lineCount);
    });
  });
}

async function processFile() {
  const totalLines = await countLines();
  console.log(`Total events to process: ${totalLines}`);
  
  let eventCounter = 0;
  
  // Create readline interface for reading the input file line by line
  const rl = readline.createInterface({
    input: fs.createReadStream(inputPath),
    crlfDelay: Infinity
  });
  
  // Process each line
  rl.on('line', (line) => {
    eventCounter++;
    
    // Log progress every 1000 events
    if (eventCounter % 1000 === 0) {
      const date = new Date();
      console.log(`[${date.toISOString()}] Processing event ${eventCounter} out of ${totalLines}`);
    }
    
    try {
      const oEvent = JSON.parse(line);
      const pk_follower = oEvent.pubkey;
      const aTags = oEvent.tags;
      
      for (let x = 0; x < aTags.length; x++) {
        const tag = aTags[x];
        if (tag[0] === 'p') {
          const pk_followee = tag[1];
          const nextLine = {
            pk_follower,
            pk_followee
          };
          // Append to the file synchronously to ensure it's written
          fs.appendFileSync(outputPath, JSON.stringify(nextLine) + '\n');
        }
      }
    } catch (e) {
      console.error(`Error processing line: ${e.message}`);
    }
  });
  
  // Return a promise that resolves when processing is complete
  return new Promise((resolve) => {
    rl.on('close', () => {
      console.log(`Processed all ${eventCounter} events. Output written to ${outputPath}`);
      resolve();
    });
  });
}
// Run the process and handle any errors
processFile()
  .then(() => {
    console.log('Processing completed successfully');
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  });

