// Software download data — FOR PRIVATE DEBUGGING / LEARNING PURPOSES ONLY
// All real CDN links are stored as-is below. Modify `code` and `key` fields to update links.
//
// Link format:
//   baidu:  https://pan.baidu.com/s/{code}?pwd={key}
//   quark:  https://pan.quark.cn/s/{code}
//   123:    https://www.123912.com/s/{code}
//   unknown: treated as baidu with pwd=0000
//
// Each software entry has:
//   - name: software version name
//   - links[]: array of cloud drive links (pan, code, key)
//   - shixiao: set to "true" to mark as expired (hidden from display)
//
// To change a link: find the software name, then edit the `code` (extraction code)
// and `key` (password for Baidu Pan) fields inside the links array.

export interface PanLink {
  pan: "baidu" | "quark" | "123" | "unknown";
  code: string;
  key?: string; // Cloud drive extraction code (pwd parameter)
}

export interface SoftwareVersion {
  name: string;
  links?: PanLink[];
  shixiao?: string; // "true" if expired
}

export interface SoftwareCategory {
  name: string;
  description?: string;
  icon?: string;
  versions: SoftwareVersion[];
}

export interface PanelData {
  panelId: string;
  panelName: string;
  categories: SoftwareCategory[];
}

const PANEL_DATA: PanelData[] = [
  {
    panelId: "down-10",
    panelName: "常用软件",
    categories: [
      {
        name: "WPS Office",
        description: "（国产办公软件套装）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "WPS2019 专业版（教育部教育考试专用）",
            links: [
              { pan: "123", code: "V1n7Vv-fsiK3" }
            ]
          },
          {
            name: "WPS2019 专业版（温州大学）",
            links: [
              { pan: "123", code: "V1n7Vv-asiK3" }
            ]
          },
          {
            name: "WPS2019 专业版（大庆市党政机关）",
            links: [
              { pan: "123", code: "V1n7Vv-BsiK3" }
            ]
          },
          {
            name: "WPS2019 专业版（惠州市直机关单位）",
            links: [
              { pan: "123", code: "V1n7Vv-JsiK3" }
            ]
          },
          {
            name: "WPS2019 专业版（潮州市党政机关单位）",
            links: [
              { pan: "123", code: "V1n7Vv-IsiK3" }
            ]
          },
        ]
      },
      {
        name: "Microsoft Office",
        description: "（全球广泛使用的办公软件套装）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "★★office激活工具",
            links: [
              { pan: "baidu", code: "1g39VSXubXSIpjjWHvgUWoQ", key: "6666" },
              { pan: "quark", code: "98091837ea24" }
            ]
          },
          {
            name: "office2021 专业增强版",
            links: [
              { pan: "baidu", code: "1iCtGbnG3ngIre_YMLWQrIg", key: "6666" },
              { pan: "quark", code: "012b84bac1cf" }
            ]
          },
          {
            name: "office2019 专业增强版",
            links: [
              { pan: "baidu", code: "1IC_l4tgnV4m9lsFG9EJ-2w", key: "6666" },
              { pan: "quark", code: "d475a557e2e9" }
            ]
          },
          {
            name: "office2016 专业增强版",
            links: [
              { pan: "baidu", code: "1Ayy4uuNDVLV2Mtj5Y2k1Yg", key: "6666" },
              { pan: "quark", code: "90f0a5da777e" }
            ]
          },
          {
            name: "office2013 专业增强版",
            links: [
              { pan: "baidu", code: "1_ZMr8wT1T7U9E71zGOATqQ", key: "6666" },
              { pan: "quark", code: "72629ea0482b" }
            ]
          },
          {
            name: "office2010 专业增强版",
            links: [
              { pan: "baidu", code: "1aewRlzOV234JphcimODoeg", key: "6666" },
              { pan: "quark", code: "d942ad52ca56" }
            ]
          },
          {
            name: "office2007 专业增强版",
            links: [
              { pan: "baidu", code: "1fa9MHzw7EY3b6Eff0h1Kow", key: "6666" },
              { pan: "quark", code: "4f48e1ef5f3f" }
            ]
          },
          {
            name: "office2003 标准版",
            links: [
              { pan: "baidu", code: "1e4oTLaLmw0W7kYjN_BscCQ", key: "6666" },
              { pan: "quark", code: "8c0ce228addc" }
            ]
          },
        ]
      },
    ]
  },
  {
    panelId: "down-11",
    panelName: "Adobe",
    categories: [
      {
        name: "Acrobat",
        description: "（专业PDF文档处理软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Acrobat DC 2022",
            links: [
              { pan: "baidu", code: "13XbHOupHurAEb0MEwmYybg", key: "6666" },
              { pan: "quark", code: "ef0c9dc82f0f" }
            ]
          },
          {
            name: "Acrobat DC 2021",
            links: [
              { pan: "baidu", code: "1TDSb4tqiCQ26qzjXWRyxtQ", key: "6666" },
              { pan: "quark", code: "b1b8ee7785e8" }
            ]
          },
          {
            name: "Acrobat DC 2020",
            links: [
              { pan: "baidu", code: "1f65tbI9CSWMiIP59EFCM9w", key: "6666" },
              { pan: "quark", code: "f9ec236ccf04" }
            ]
          },
          {
            name: "Acrobat XI 11.0.23",
            links: [
              { pan: "baidu", code: "1hq_9zXPGWffa5jtuX8Lu6A", key: "6666" },
              { pan: "quark", code: "a42cd7431344" }
            ]
          },
        ]
      },
      {
        name: "After Effects",
        description: "（视频特效和动态图形设计软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "After Effects 2023",
            links: [
              { pan: "baidu", code: "1G5MaoJDgw_EeNFPG9putfw", key: "6666" },
              { pan: "quark", code: "e8c9abab4985" }
            ]
          },
          {
            name: "After Effects 2022",
            links: [
              { pan: "baidu", code: "1mvIxogcMAEE-CjCElZzGxw", key: "6666" },
              { pan: "quark", code: "a1b3fa2b3212" }
            ]
          },
          {
            name: "After Effects 2021",
            links: [
              { pan: "baidu", code: "1jVjPAvS8otw2VFr0qdz4gQ", key: "6666" },
              { pan: "quark", code: "a2c98d9c6f64" }
            ]
          },
          {
            name: "After Effects 2020",
            links: [
              { pan: "baidu", code: "1E2WO5t3LtuDRxFQfnGCfCA", key: "6666" },
              { pan: "quark", code: "275230f2f941" }
            ]
          },
          {
            name: "After Effects 2019",
            links: [
              { pan: "baidu", code: "1XMn9PGJdNnb5PeJtGCtrLg", key: "6666" },
              { pan: "quark", code: "a30f07984d6e" }
            ]
          },
          {
            name: "After Effects 2018",
            links: [
              { pan: "baidu", code: "1_VJfLT0hgtlrZL09rd2pLA", key: "6666" },
              { pan: "quark", code: "8a1e996563ea" }
            ]
          },
          {
            name: "After Effects 2017",
            links: [
              { pan: "baidu", code: "1RxkMArlNxV6WH9aBP9lBNg", key: "6666" },
              { pan: "quark", code: "8a3ceffed4a5" }
            ]
          },
        ]
      },
      {
        name: "Animate",
        description: "（专业动画制作软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Animate 2023",
            links: [
              { pan: "baidu", code: "1z7XR8hdpYUTsMjeaWxrnIw", key: "6666" },
              { pan: "quark", code: "72cd129f6345" }
            ]
          },
          {
            name: "Animate 2022",
            links: [
              { pan: "baidu", code: "1ugVgocpPxrGYxabCRWHEtQ", key: "6666" },
              { pan: "quark", code: "76f6d835fce4" }
            ]
          },
          {
            name: "Animate 2021",
            links: [
              { pan: "baidu", code: "1Pvs2mINBi4NBPLwzp3XFWg", key: "6666" },
              { pan: "quark", code: "519fe3f14a05" }
            ]
          },
          {
            name: "Animate 2020",
            links: [
              { pan: "baidu", code: "186XndmWh1vzmCJYaNAwayw", key: "6666" },
              { pan: "quark", code: "8fda556858b7" }
            ]
          },
          {
            name: "Animate 2019",
            links: [
              { pan: "baidu", code: "1iP5Wv37tYPFxaeUqUjbreA", key: "6666" },
              { pan: "quark", code: "8e330a70a2d1" }
            ]
          },
          {
            name: "Animate 2018",
            links: [
              { pan: "baidu", code: "1579ICsKfDr6Iwx--LpUiPQ", key: "6666" },
              { pan: "quark", code: "188d1669e370" }
            ]
          },
          {
            name: "Animate 2017",
            links: [
              { pan: "baidu", code: "1bLkaSlNqXgUpJgxmijFQ8Q", key: "6666" },
              { pan: "quark", code: "002e2babb8b2" }
            ]
          },
        ]
      },
      {
        name: "Audition",
        description: "（专业音频编辑与混合软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Audition 2023",
            links: [
              { pan: "baidu", code: "1UEbmKdE81LTLuabSDLRggQ", key: "6666" },
              { pan: "quark", code: "d5d46ea66ee3" }
            ]
          },
          {
            name: "Audition 2022",
            links: [
              { pan: "baidu", code: "1b0RDMF2Rj88eGKlrgwtoIA", key: "6666" },
              { pan: "quark", code: "501c685cdca0" }
            ]
          },
          {
            name: "Audition 2021",
            links: [
              { pan: "baidu", code: "1YwFRfCfN8Curdt_mcV2y-Q", key: "6666" },
              { pan: "quark", code: "c7e5d740d5aa" }
            ]
          },
          {
            name: "Audition 2020",
            links: [
              { pan: "baidu", code: "1IMHxYEQS-22qkIGIktGY4g", key: "6666" },
              { pan: "quark", code: "2b15ea88dd07" }
            ]
          },
          {
            name: "Audition 2019",
            links: [
              { pan: "baidu", code: "1E1HEHTSTXiWC_uszJPASoQ", key: "6666" },
              { pan: "quark", code: "1794f5242820" }
            ]
          },
          {
            name: "Audition CC 2018",
            links: [
              { pan: "baidu", code: "1PuRLvXfcF9qWnt7WNvtJvw", key: "6666" },
              { pan: "quark", code: "213804995efc" }
            ]
          },
          {
            name: "Audition CC 2017",
            links: [
              { pan: "baidu", code: "1TwB9mVbZ6_5w0byu0ewYmw", key: "6666" },
              { pan: "quark", code: "2f320c3d03fc" }
            ]
          },
        ]
      },
      {
        name: "Bridge",
        description: "（文件管理与预览工具）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Bridge 2023",
            links: [
              { pan: "baidu", code: "1hWVNsr-vXKQPo1xilEvP5g", key: "6666" },
              { pan: "quark", code: "e0655dcb6ef3" }
            ]
          },
          {
            name: "Bridge 2022",
            links: [
              { pan: "baidu", code: "16gVOf2vmPR0medFGALpGpA", key: "6666" },
              { pan: "quark", code: "5323e5de3c7e" }
            ]
          },
          {
            name: "Bridge 2021",
            links: [
              { pan: "baidu", code: "1zKOeD4Rmu4UcixiovbwZfQ", key: "6666" },
              { pan: "quark", code: "2cd3653dfa7d" }
            ]
          },
          {
            name: "Bridge 2020",
            links: [
              { pan: "baidu", code: "153MjKZuZxGGhFArwGxSOFA", key: "6666" },
              { pan: "quark", code: "7352bd334a34" }
            ]
          },
          {
            name: "Bridge 2019",
            links: [
              { pan: "baidu", code: "1h2WOKDWHbGUUoRYVAkt4sw", key: "6666" },
              { pan: "quark", code: "8197d39ac260" }
            ]
          },
          {
            name: "Bridge 2018",
            links: [
              { pan: "baidu", code: "1Y2tDYDjM8XD199tcZUev9g", key: "6666" },
              { pan: "quark", code: "2ed3563affae" }
            ]
          },
          {
            name: "Bridge 2017",
            links: [
              { pan: "baidu", code: "1pmgj91CaUEhERESagSSraw", key: "6666" },
              { pan: "quark", code: "bdb37d870e6e" }
            ]
          },
        ]
      },
      {
        name: "Character Animator",
        description: "（实时动作捕捉与2D角色动画制作软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Character Animator 2023",
            links: [
              { pan: "baidu", code: "16pGB6XiWqHp7LL5hKzbstA", key: "6666" },
              { pan: "quark", code: "16e705297139" }
            ]
          },
          {
            name: "Character Animator 2022",
            links: [
              { pan: "baidu", code: "1inKEY1oAiT2EVQuqyE2i1w", key: "6666" },
              { pan: "quark", code: "fccde0c871d8" }
            ]
          },
          {
            name: "Character Animator 2021",
            links: [
              { pan: "baidu", code: "1j56fjoXB2Vb8TKgfHFr6vg", key: "6666" },
              { pan: "quark", code: "9dab70efe88a" }
            ]
          },
          {
            name: "Character Animator 2020",
            links: [
              { pan: "baidu", code: "17VCZiGE9KF8mTxFVKzsHsw", key: "6666" },
              { pan: "quark", code: "bfb0cc079b9b" }
            ]
          },
          {
            name: "Character Animator 2019",
            links: [
              { pan: "baidu", code: "1SxwbxcL0M9jSj0OkGyyUsA", key: "6666" },
              { pan: "quark", code: "18a8c13c1e57" }
            ]
          },
          {
            name: "Character Animator 2018",
            links: [
              { pan: "baidu", code: "1VIeIdknMHxMYg2tQuQLAsw", key: "6666" },
              { pan: "quark", code: "6b5cf3df0fb9" }
            ]
          },
        ]
      },
      {
        name: "Dimension",
        description: "（专业3D设计与渲染软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Dimension 3.4.4",
            links: [
              { pan: "baidu", code: "11BGlR38yibyfqpAAKhQrJA", key: "6666" },
              { pan: "quark", code: "52433d5e0aa3" }
            ]
          },
          {
            name: "Dimension 2.3.1",
            links: [
              { pan: "baidu", code: "1eh2RN644ZkcKrbi5JcVZVw", key: "6666" },
              { pan: "quark", code: "fb4c16c9855e" }
            ]
          },
        ]
      },
      {
        name: "Dreamweaver",
        description: "（网页设计与开发工具）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Dreamweaver 2021",
            links: [
              { pan: "baidu", code: "1jLu8LWL7YyjeV30w0HDmKw", key: "6666" },
              { pan: "quark", code: "1ce8abb16089" }
            ]
          },
          {
            name: "Dreamweaver 2020",
            links: [
              { pan: "baidu", code: "12cGJSsPCzxRIj5iKJLYgsA", key: "6666" },
              { pan: "quark", code: "43a215fc5acb" }
            ]
          },
          {
            name: "Dreamweaver 2019",
            links: [
              { pan: "baidu", code: "15eaoRfAgdpC9StZTtDLHbw", key: "6666" },
              { pan: "quark", code: "a4d5083d3dce" }
            ]
          },
          {
            name: "Dreamweaver 2018",
            links: [
              { pan: "baidu", code: "1GQlbQJuOhSjW-GRcMJlkrA", key: "6666" },
              { pan: "quark", code: "14110e3cd9a1" }
            ]
          },
          {
            name: "Dreamweaver 2017",
            links: [
              { pan: "baidu", code: "1_6GxqyiUHoGAISmdNxubpg", key: "6666" },
              { pan: "quark", code: "03d85cfffafc" }
            ]
          },
        ]
      },
      {
        name: "illustrator",
        description: "（专业矢量图形设计软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Illustrator 2023",
            links: [
              { pan: "baidu", code: "19lT9BMClOCe2CpQzs41z4Q", key: "6666" },
              { pan: "quark", code: "ff50799f912a" }
            ]
          },
          {
            name: "Illustrator 2022",
            links: [
              { pan: "baidu", code: "1ScnJw-vui0TTkCKiRy5jMA", key: "6666" },
              { pan: "quark", code: "5c7204f440dd" }
            ]
          },
          {
            name: "Illustrator 2021",
            links: [
              { pan: "baidu", code: "1l0BcZ_7WfiTMFuAAAENjBg", key: "6666" },
              { pan: "quark", code: "f9ee1b5064e0" }
            ]
          },
          {
            name: "Illustrator 2020",
            links: [
              { pan: "baidu", code: "1IJDFSj8bsmhY8v-TkB1gkA", key: "6666" },
              { pan: "quark", code: "cb0142499408" }
            ]
          },
          {
            name: "Illustrator 2019",
            links: [
              { pan: "baidu", code: "1pOFrwnUDd9h7DAHWSEZg3Q", key: "6666" },
              { pan: "quark", code: "1c941dbdec84" }
            ]
          },
          {
            name: "Illustrator 2018",
            links: [
              { pan: "baidu", code: "1SWAqzeZKRBrYW1tgizsPNg", key: "6666" },
              { pan: "quark", code: "2884535b668a" }
            ]
          },
          {
            name: "Illustrator 2017",
            links: [
              { pan: "baidu", code: "1mK9UnLS6vAgYNJUFHlkz4w", key: "6666" },
              { pan: "quark", code: "c2b7d63d7a30" }
            ]
          },
        ]
      },
      {
        name: "InCopy",
        description: "（专业文字处理与协作软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "InCopy 2023",
            links: [
              { pan: "baidu", code: "1Opy3Ch7l4YEzsmUy6RNX_A", key: "6666" },
              { pan: "quark", code: "8309e172d4c7" }
            ]
          },
          {
            name: "InCopy 2022",
            links: [
              { pan: "baidu", code: "1tFl-dI8hK2ftfRx7w0ktwQ", key: "6666" },
              { pan: "quark", code: "6202601a625a" }
            ]
          },
          {
            name: "InCopy 2021",
            links: [
              { pan: "baidu", code: "1FPeqnxb_F9SaXkj0gs8vcQ", key: "6666" },
              { pan: "quark", code: "1732d4728260" }
            ]
          },
          {
            name: "InCopy 2020",
            links: [
              { pan: "baidu", code: "1S8QqqhQ-267zWLRQfARX9w", key: "6666" },
              { pan: "quark", code: "313ab288ebd5" }
            ]
          },
          {
            name: "InCopy 2019",
            links: [
              { pan: "baidu", code: "1HhNpYdnP6UjxjSbdYYr6wg", key: "6666" },
              { pan: "quark", code: "449f10bf7208" }
            ]
          },
          {
            name: "InCopy 2018",
            links: [
              { pan: "baidu", code: "1z0UYNwUnqV_or_83E65NvA", key: "6666" },
              { pan: "quark", code: "e05101ee78bc" }
            ]
          },
          {
            name: "InCopy 2017",
            links: [
              { pan: "baidu", code: "1h3Ve0Hk5S0b3dUUo2BniGQ", key: "6666" },
              { pan: "quark", code: "af8b89edfb70" }
            ]
          },
        ]
      },
      {
        name: "InDesign",
        description: "（专业排版设计软件，适用于印刷与数字出版）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "InDesign 2023",
            links: [
              { pan: "baidu", code: "1pOF7_PeZHpkhglIrOSX8Ug", key: "6666" },
              { pan: "quark", code: "1c922263140e" }
            ]
          },
          {
            name: "InDesign 2022",
            links: [
              { pan: "baidu", code: "1xKp_6QRFw6lb-L25_BkSCQ", key: "6666" },
              { pan: "quark", code: "c852f9d1a846" }
            ]
          },
          {
            name: "InDesign 2021",
            links: [
              { pan: "baidu", code: "12g5N6587j8swRXH4d_w66Q", key: "6666" },
              { pan: "quark", code: "9a5a1df20a65" }
            ]
          },
          {
            name: "InDesign 2020",
            links: [
              { pan: "baidu", code: "1w6kOIGYRNuPUj9CnEImQUQ", key: "6666" },
              { pan: "quark", code: "5538d9265b51" }
            ]
          },
          {
            name: "InDesign 2019",
            links: [
              { pan: "baidu", code: "1lEQb95dRoafk1pVOaMBzeA", key: "6666" },
              { pan: "quark", code: "0b3ad04fd520" }
            ]
          },
          {
            name: "InDesign 2018",
            links: [
              { pan: "baidu", code: "1BUWPIgU1HdH_jSMHlAny7A", key: "6666" },
              { pan: "quark", code: "ababa6cb04ae" }
            ]
          },
          {
            name: "InDesign 2017",
            links: [
              { pan: "baidu", code: "1PGwQ8M5gtmM09zw-K4EbZA", key: "6666" },
              { pan: "quark", code: "0d50006a7a34" }
            ]
          },
        ]
      },
      {
        name: "Lightroom",
        description: "（专业照片编辑与管理软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Lightroom Classic 12.3",
            links: [
              { pan: "baidu", code: "1YEATiQa0ENIRYI5sNHy4aw", key: "6666" },
              { pan: "quark", code: "1de831ef2311" }
            ]
          },
          {
            name: "Lightroom Classic 11.5",
            links: [
              { pan: "baidu", code: "1pO8Rf46Pi3jB5jwSo8zJfQ", key: "6666" },
              { pan: "quark", code: "e9db2e4d452b" }
            ]
          },
          {
            name: "Lightroom Classic 10.4",
            links: [
              { pan: "baidu", code: "1LtTuNxQJwAOrSj_fp0DyVw", key: "6666" },
              { pan: "quark", code: "d53d8f3ac880" }
            ]
          },
          {
            name: "Lightroom Classic 8.4.1",
            links: [
              { pan: "baidu", code: "15UwZG3lKBLF7YAAJXs-KlQ", key: "6666" },
              { pan: "quark", code: "fe2af76ed90c" }
            ]
          },
          {
            name: "Lightroom Classic 7.5",
            links: [
              { pan: "baidu", code: "1WltIJPVGM6fVrPJB2H1dNA", key: "6666" },
              { pan: "quark", code: "b7d88f25de4e" }
            ]
          },
        ]
      },
      {
        name: "Midea Encoder",
        description: "（视频压缩与格式转换工具）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Media Encoder 2023",
            links: [
              { pan: "baidu", code: "10FZ_HZSEe_8L_cXQi8sZuQ", key: "6666" },
              { pan: "quark", code: "180723136864" }
            ]
          },
          {
            name: "Media Encoder 2022",
            links: [
              { pan: "baidu", code: "1U37QVQT7ucsLQsAT0fFG5g", key: "6666" },
              { pan: "quark", code: "b1a10c897ede" }
            ]
          },
          {
            name: "Media Encoder 2021",
            links: [
              { pan: "baidu", code: "14IqWr54oNxWcEg4JVzAwBQ", key: "6666" },
              { pan: "quark", code: "e86e539dbc0f" }
            ]
          },
          {
            name: "Media Encoder 2020",
            links: [
              { pan: "baidu", code: "1Yq1Pkcs6d1Hvq60HZgU8TQ", key: "6666" },
              { pan: "quark", code: "b5253c117185" }
            ]
          },
          {
            name: "Media Encoder 2019",
            links: [
              { pan: "baidu", code: "1lr0Ny10hbcgFujfcRh8oeg", key: "6666" },
              { pan: "quark", code: "e4723c56d140" }
            ]
          },
          {
            name: "Media Encoder 2018",
            links: [
              { pan: "baidu", code: "1HWIovLYsUcjHvhSynOD07w", key: "6666" },
              { pan: "quark", code: "3c22e89f8180" }
            ]
          },
          {
            name: "Media Encoder 2017",
            links: [
              { pan: "baidu", code: "1p7jyW4N-kCDR9d_yuNDPTA", key: "6666" },
              { pan: "quark", code: "955488f235d0" }
            ]
          },
        ]
      },
      {
        name: "Photoshop",
        description: "（专业图像编辑与创意设计软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Photoshop 2024",
            links: [
              { pan: "baidu", code: "1LWFchVnPzTIAjnL6jv--_A", key: "6666" },
              { pan: "quark", code: "bbf6cdc55187" }
            ]
          },
          {
            name: "Photoshop 2023",
            links: [
              { pan: "baidu", code: "1XuvokSL7ng8IBddM0Mtq0Q", key: "6666" },
              { pan: "quark", code: "61ec901b60a2" }
            ]
          },
          {
            name: "Photoshop 2022",
            links: [
              { pan: "baidu", code: "1qDI2PDo3x7BEGaxsf2SJJQ", key: "6666" },
              { pan: "quark", code: "6c5fb317477d" }
            ]
          },
          {
            name: "Photoshop 2021",
            links: [
              { pan: "baidu", code: "1QLsNQCN03NdDnXCuaGfnTQ", key: "6666" },
              { pan: "quark", code: "2f9a901c294e" }
            ]
          },
          {
            name: "Photoshop 2020",
            links: [
              { pan: "baidu", code: "1YlBUhem5GA4-B57c3AkwoA", key: "6666" },
              { pan: "quark", code: "9f36fa81e846" }
            ]
          },
          {
            name: "Photoshop 2019",
            links: [
              { pan: "baidu", code: "1jyj98HkhtwVaIE7edF5v7g", key: "6666" },
              { pan: "quark", code: "f539acd7163c" }
            ]
          },
          {
            name: "Photoshop 2018",
            links: [
              { pan: "baidu", code: "1XeHgfAlSd14AdjUZ9BR8AA", key: "6666" },
              { pan: "quark", code: "42a8ac0e8477" }
            ]
          },
          {
            name: "Photoshop 2017",
            links: [
              { pan: "baidu", code: "1E1xkzr87ztgnHtRqF_1R4g", key: "6666" },
              { pan: "quark", code: "e9e2cffc2d76" }
            ]
          },
          {
            name: "Photoshop CS",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Photoshop Elements",
        description: "（适合初学者的图像编辑软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "PS Elements2024",
            shixiao: "true",
            links: []
          },
          {
            name: "PS Elements2023",
            links: [
              { pan: "baidu", code: "1I7oRhauwEqcXkXkgv9NKSQ", key: "6666" },
              { pan: "quark", code: "53dc8c344d44" }
            ]
          },
          {
            name: "Ps Elements 2022",
            links: [
              { pan: "baidu", code: "10ElhlD0VWFfDNUa2pBXfPg", key: "6666" },
              { pan: "quark", code: "e1ba53d32e8f" }
            ]
          },
          {
            name: "Ps Elements 2021",
            links: [
              { pan: "baidu", code: "16d8zuFyjO-HSA9UvpyMROA", key: "6666" },
              { pan: "quark", code: "ac2790dbdf82" }
            ]
          },
          {
            name: "Ps Elements 2020",
            links: [
              { pan: "baidu", code: "170jB6X8O-MfXFvKVsBYJmQ", key: "6666" },
              { pan: "quark", code: "bc716129f1b7" }
            ]
          },
        ]
      },
      {
        name: "Prelude",
        description: "（视频素材管理与初步剪辑工具）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Prelude 2022",
            links: [
              { pan: "baidu", code: "1kYUxXFLxSlw1YsfnmMpk7g", key: "6666" },
              { pan: "quark", code: "a5220c46d3a2" }
            ]
          },
          {
            name: "Prelude 2021",
            links: [
              { pan: "baidu", code: "12sfrgKyuxehWubHYIGZRXA", key: "6666" },
              { pan: "quark", code: "680552ee7777" }
            ]
          },
          {
            name: "Prelude 2020",
            links: [
              { pan: "baidu", code: "1qrs4UGs5utWXA_mng0Y-5A", key: "6666" },
              { pan: "quark", code: "6a1d44e499bf" }
            ]
          },
          {
            name: "Prelude 2019",
            links: [
              { pan: "baidu", code: "1wkys6EyVr3y3vnwemrpkPA", key: "6666" },
              { pan: "quark", code: "e980cf9b96a3" }
            ]
          },
          {
            name: "Prelude 2018",
            links: [
              { pan: "baidu", code: "16DJGtMP_TCFqd1VxUxOgFA", key: "6666" },
              { pan: "quark", code: "e993ec92cfd5" }
            ]
          },
          {
            name: "Prelude 2017",
            links: [
              { pan: "baidu", code: "1IjRRvw8h0y1_s8lNyEtsjg", key: "6666" },
              { pan: "quark", code: "18285e701bcd" }
            ]
          },
        ]
      },
      {
        name: "Premiere",
        description: "（专业视频编辑软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Premiere Pro 2024",
            links: [
              { pan: "baidu", code: "1Pk-QEtU25R8dMjvnR6r__g", key: "6666" },
              { pan: "quark", code: "43f98f028995" }
            ]
          },
          {
            name: "Premiere Pro 2023",
            links: [
              { pan: "baidu", code: "1pqwGsMiypR7dXwyElYWwhw", key: "6666" },
              { pan: "quark", code: "380147c97840" }
            ]
          },
          {
            name: "Premiere Pro 2022",
            links: [
              { pan: "baidu", code: "1oLjnM_Y-3OJDwp64aU0-Rw", key: "6666" },
              { pan: "quark", code: "ed995b7cbeb9" }
            ]
          },
          {
            name: "Premiere Pro 2021",
            links: [
              { pan: "baidu", code: "1zolxrP0waC_Ed-6Q8abc7w", key: "6666" },
              { pan: "quark", code: "9b919dd096c7" }
            ]
          },
          {
            name: "Premiere Pro 2020",
            links: [
              { pan: "baidu", code: "1lqsThKSpbCYA5xrWU0H9jQ", key: "6666" },
              { pan: "quark", code: "c516f7d049e3" }
            ]
          },
          {
            name: "Premiere Pro 2019",
            links: [
              { pan: "baidu", code: "1dA9vz84r07tGvN3Zw6YW-A", key: "6666" },
              { pan: "quark", code: "713afe2391d2" }
            ]
          },
          {
            name: "Premiere Pro 2018",
            links: [
              { pan: "baidu", code: "1tqfgwwSylTl48B2-npXQ5Q", key: "6666" },
              { pan: "quark", code: "f5a2cb364f42" }
            ]
          },
          {
            name: "Premiere Pro 2017",
            links: [
              { pan: "baidu", code: "1Ao3vjWAqxjHUaVbBbHdYsA", key: "6666" },
              { pan: "quark", code: "2ba1cf3732b2" }
            ]
          },
        ]
      },
      {
        name: "Premiere Elements",
        description: "（面向普通用户的视频编辑软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Pr Elements2024",
            shixiao: "true",
            links: []
          },
          {
            name: "Pr Elements2023",
            links: [
              { pan: "baidu", code: "1rfupoNM7I-0QxH2GQh3xYg", key: "6666" },
              { pan: "quark", code: "b587cc4b54a8" }
            ]
          },
          {
            name: "Pr Elements 2022",
            links: [
              { pan: "baidu", code: "1o5Hm_o5Ohwz-JL2szSunSQ", key: "6666" },
              { pan: "quark", code: "d0a28e578a21" }
            ]
          },
          {
            name: "Pr Elements 2021",
            links: [
              { pan: "baidu", code: "1LjszIRGD65T2ee_sextUbw", key: "6666" },
              { pan: "quark", code: "2a2e673d3606" }
            ]
          },
          {
            name: "Pr Elements 2020",
            links: [
              { pan: "baidu", code: "1KG4llHXLONBFC1d5akLHCg", key: "6666" },
              { pan: "quark", code: "97d58ee8328a" }
            ]
          },
        ]
      },
    ]
  },
  {
    panelId: "down-12",
    panelName: "AutoCAD",
    categories: [
      {
        name: "CAD",
        description: "（通用计算机辅助设计软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "CAD2026",
            links: [
              { pan: "baidu", code: "1hf1MW6Y18um8EdQGvpuxvQ", key: "6666" },
              { pan: "quark", code: "151cd94bd85c" },
              { pan: "unknown", code: "44" }
            ]
          },
          {
            name: "CAD2025",
            links: [
              { pan: "baidu", code: "1W-CHQBI7UNaygzq4kDFqzw", key: "6666" },
              { pan: "quark", code: "59d04174c434" },
              { pan: "unknown", code: "43" }
            ]
          },
          {
            name: "CAD2024",
            links: [
              { pan: "baidu", code: "1xHECVArClHMaRqdwmJ_RKQ", key: "6666" },
              { pan: "quark", code: "1f9808b37ae0" },
              { pan: "unknown", code: "42" }
            ]
          },
          {
            name: "CAD2023",
            links: [
              { pan: "baidu", code: "1ECFmPd-bdqPVEroTmSLLng", key: "6666" },
              { pan: "quark", code: "9ded5cb5182e" },
              { pan: "unknown", code: "41" }
            ]
          },
          {
            name: "CAD2022",
            links: [
              { pan: "baidu", code: "19BLwwofBHtOMqgDlTS8EHw", key: "6666" },
              { pan: "quark", code: "2c02ef1c4043" },
              { pan: "unknown", code: "40" }
            ]
          },
          {
            name: "CAD2021",
            links: [
              { pan: "baidu", code: "1NZV9wF3RNPsc7o8gVhbqaA", key: "6666" },
              { pan: "quark", code: "757b3dec655a" },
              { pan: "unknown", code: "39" }
            ]
          },
          {
            name: "CAD2020",
            links: [
              { pan: "baidu", code: "11hliXEsv_3tu0QhE2kCSfw", key: "6666" },
              { pan: "quark", code: "7c53de39004c" },
              { pan: "unknown", code: "38" }
            ]
          },
          {
            name: "CAD2019",
            links: [
              { pan: "baidu", code: "10nYVXqhzE6KYi_OChD3yLQ", key: "6666" },
              { pan: "quark", code: "cb0b3d69cd95" },
              { pan: "unknown", code: "37" }
            ]
          },
          {
            name: "CAD2018",
            links: [
              { pan: "baidu", code: "1qKdqsKzj9A5WKFUqRnen9g", key: "6666" },
              { pan: "quark", code: "55f819bdf015" },
              { pan: "unknown", code: "36" }
            ]
          },
          {
            name: "CAD2017",
            links: [
              { pan: "baidu", code: "1IQGV_C_E8a9E5w9C4CMX-A", key: "6666" },
              { pan: "quark", code: "5496d3bd0e31" },
              { pan: "unknown", code: "35" }
            ]
          },
          {
            name: "CAD2016",
            links: [
              { pan: "baidu", code: "1-Arb9YM6qoWgony6yXHvIA", key: "6666" },
              { pan: "quark", code: "c02b6bbf472a" },
              { pan: "unknown", code: "34" }
            ]
          },
          {
            name: "CAD2015",
            links: [
              { pan: "baidu", code: "10QCYbrDcFwmQjFv4uqP0DQ", key: "6666" },
              { pan: "quark", code: "bfb4b7341ec7" },
              { pan: "unknown", code: "33" }
            ]
          },
          {
            name: "CAD2014",
            links: [
              { pan: "baidu", code: "1UJ3bUTFWf5tzGgjDpNN1bg", key: "6666" },
              { pan: "quark", code: "d74643b853f6" },
              { pan: "unknown", code: "32" }
            ]
          },
          {
            name: "CAD2013",
            links: [
              { pan: "baidu", code: "1sDxdU448F84k3VVsXqWNsw", key: "6666" },
              { pan: "quark", code: "e51bd5ed9233" },
              { pan: "unknown", code: "31" }
            ]
          },
          {
            name: "CAD2012",
            links: [
              { pan: "baidu", code: "1ieGrb48AdIwhDq8aNIQiVQ", key: "6666" },
              { pan: "quark", code: "e5fdc49cc5e3" },
              { pan: "unknown", code: "30" }
            ]
          },
          {
            name: "CAD2011",
            links: [
              { pan: "baidu", code: "1HHVbSVAqBHDcDjMnootkLw", key: "6666" },
              { pan: "quark", code: "11ee4e1b1772" },
              { pan: "unknown", code: "29" }
            ]
          },
          {
            name: "CAD2010",
            links: [
              { pan: "baidu", code: "1mcMGIDQUFqyLPpzdueozSA", key: "6666" },
              { pan: "quark", code: "9f1c19bed365" },
              { pan: "unknown", code: "28" }
            ]
          },
          {
            name: "CAD2009",
            links: [
              { pan: "baidu", code: "1ZcPtUY1p-TIT_BUDlFpZHQ", key: "6666" },
              { pan: "quark", code: "027ff4a37aad" },
              { pan: "unknown", code: "27" }
            ]
          },
          {
            name: "CAD2008",
            links: [
              { pan: "baidu", code: "1ROzVDBV2Pvr9c-KlVLQrNw", key: "6666" },
              { pan: "quark", code: "4bc83127cc30" },
              { pan: "unknown", code: "26" }
            ]
          },
          {
            name: "CAD2007",
            links: [
              { pan: "baidu", code: "1zQ6oQOv1gc2rm41HlZDOsw", key: "6666" },
              { pan: "quark", code: "9843016c250d" },
              { pan: "unknown", code: "25" }
            ]
          },
          {
            name: "CAD2006",
            links: [
              { pan: "baidu", code: "1T--o3lJ9QHD3GlQgSQ7Cfg", key: "6666" },
              { pan: "quark", code: "2725eaa4a1ab" },
              { pan: "unknown", code: "24" }
            ]
          },
          {
            name: "CAD2005",
            links: [
              { pan: "baidu", code: "1XNN7ZoKIyQvf6pKbHWWHQg", key: "6666" },
              { pan: "quark", code: "935406cf1d3c" },
              { pan: "unknown", code: "23" }
            ]
          },
          {
            name: "CAD2004",
            links: [
              { pan: "baidu", code: "1xyWt-TAwii3NWy7GL4_K7g", key: "6666" },
              { pan: "quark", code: "405d390cae64" },
              { pan: "unknown", code: "22" }
            ]
          },
          {
            name: "CAD2003",
            shixiao: "true",
            links: []
          },
          {
            name: "CAD2002",
            links: [
              { pan: "baidu", code: "1Ujb66EDMi1t4Y5cJfMd9cw", key: "6666" },
              { pan: "quark", code: "7a1a4dc0b7ea" },
              { pan: "unknown", code: "20" }
            ]
          },
          {
            name: "CAD2001",
            shixiao: "true",
            links: []
          },
          {
            name: "CAD2000",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "CAD Plant 3D",
        description: "（专注于工厂设计的三维CAD软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "CAD Plant 3D 2024",
            links: [
              { pan: "baidu", code: "1Xx-ZFQq5HHUw5JA0fYDSrA", key: "6666" },
              { pan: "quark", code: "0e335c45a6f9" },
              { pan: "unknown", code: "46" }
            ]
          },
          {
            name: "CAD Plant 3D 2023",
            links: [
              { pan: "baidu", code: "1A8IOlLbKaiQjVbYT986adQ", key: "6666" },
              { pan: "quark", code: "3e7e81217b43" },
              { pan: "unknown", code: "45" }
            ]
          },
        ]
      },
      {
        name: "CAD MEP",
        description: "（用于机电工程设计的CAD软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "CAD MEP 2024",
            links: [
              { pan: "baidu", code: "1rRKEQb9xzTHMpw4nwd7Jdw", key: "6666" },
              { pan: "quark", code: "0a63e12a4523" },
              { pan: "unknown", code: "47" }
            ]
          },
          {
            name: "CAD MEP 2023",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "CAD MAP 3D",
        description: "（支持地理信息的CAD软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "CAD MAP 3D 2023",
            links: [
              { pan: "baidu", code: "1nLjnx53oS5ebBnkh2IK7Mw", key: "6666" },
              { pan: "quark", code: "2698861c49df" },
              { pan: "unknown", code: "49" }
            ]
          },
        ]
      },
      {
        name: "CAD精简版",
        description: "（功能精简的CAD软件，适合初学者）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "CAD精简版2025",
            links: [
              { pan: "baidu", code: "1-Kmel5NyjKsrYJXDQ1U2Uw", key: "6666" },
              { pan: "quark", code: "fee3edab1d28" },
              { pan: "unknown", code: "63" }
            ]
          },
          {
            name: "CAD精简版2024",
            links: [
              { pan: "baidu", code: "1pLdMy-0MlYG9JzvYnitFLg", key: "6666" },
              { pan: "quark", code: "10ac00e350f2" },
              { pan: "unknown", code: "62" }
            ]
          },
          {
            name: "CAD精简版2023",
            links: [
              { pan: "baidu", code: "1hSA7N9p7n0Z1QXjUUg0EvA", key: "6666" },
              { pan: "quark", code: "c98d1442b1f5" },
              { pan: "unknown", code: "61" }
            ]
          },
          {
            name: "CAD精简版2022",
            links: [
              { pan: "baidu", code: "1derKQwmAP0kyg3gPtMUwMQ", key: "6666" },
              { pan: "quark", code: "8eab4ff7f3d8" },
              { pan: "unknown", code: "60" }
            ]
          },
          {
            name: "CAD精简版2021",
            links: [
              { pan: "baidu", code: "1WkK_ZPO2zfGioxzYtPkMRQ", key: "6666" },
              { pan: "quark", code: "66d79a5f1758" },
              { pan: "unknown", code: "59" }
            ]
          },
          {
            name: "CAD精简版2020",
            links: [
              { pan: "baidu", code: "1Iqo18JlLHoTCzf7bBmNNFQ", key: "6666" },
              { pan: "quark", code: "fa4d96b3e1bd" },
              { pan: "unknown", code: "58" }
            ]
          },
          {
            name: "CAD精简版2019",
            links: [
              { pan: "baidu", code: "1FCtlW7acl_PnWD7d0Oh1-Q", key: "6666" },
              { pan: "quark", code: "db19f520086c" },
              { pan: "unknown", code: "57" }
            ]
          },
          {
            name: "CAD精简版2018",
            links: [
              { pan: "baidu", code: "1gJvLNilLQ-Bu8WsnfjOJWA", key: "6666" },
              { pan: "quark", code: "ebcee6b919e9" },
              { pan: "unknown", code: "56" }
            ]
          },
          {
            name: "CAD精简版2017",
            shixiao: "true",
            links: []
          },
          {
            name: "CAD精简版2016",
            links: [
              { pan: "baidu", code: "1kT4hGmT8V6BGHsaDbG9V1w", key: "6666" },
              { pan: "quark", code: "fb333770d23c" },
              { pan: "unknown", code: "55" }
            ]
          },
          {
            name: "CAD精简版2015",
            shixiao: "true",
            links: []
          },
          {
            name: "CAD精简版2014",
            links: [
              { pan: "baidu", code: "1MMbSiDfhviam6GT4Ors0qQ", key: "6666" },
              { pan: "quark", code: "fe1621dc8094" },
              { pan: "unknown", code: "54" }
            ]
          },
          {
            name: "CAD精简版2013",
            shixiao: "true",
            links: []
          },
          {
            name: "CAD精简版2012",
            shixiao: "true",
            links: []
          },
          {
            name: "CAD精简版2011",
            shixiao: "true",
            links: []
          },
          {
            name: "CAD精简版2010",
            links: [
              { pan: "baidu", code: "1CvaqM_km82O6dxs-Spq15w", key: "6666" },
              { pan: "quark", code: "6e8ecbb4ef22" },
              { pan: "unknown", code: "53" }
            ]
          },
          {
            name: "CAD精简版2009",
            shixiao: "true",
            links: []
          },
          {
            name: "CAD精简版2008",
            shixiao: "true",
            links: []
          },
          {
            name: "CAD精简版2007",
            links: [
              { pan: "baidu", code: "1GOCCbhgpS8jWdABqR8L0zQ", key: "6666" },
              { pan: "quark", code: "cc9b6d300c8e" },
              { pan: "unknown", code: "50" }
            ]
          },
        ]
      },
      {
        name: "CAD建筑版",
        description: "（专为建筑设计优化的CAD软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "CAD建筑版2025",
            links: [
              { pan: "baidu", code: "1bEocL8uTrzoP6wlKqkkI0w", key: "6666" },
              { pan: "quark", code: "096ba5428dec" }
            ]
          },
          {
            name: "CAD建筑版2024",
            links: [
              { pan: "baidu", code: "1knubwGgK_sxHf6aSFaYROQ", key: "6666" },
              { pan: "quark", code: "abb9d1de8129" }
            ]
          },
          {
            name: "CAD建筑版2023",
            links: [
              { pan: "baidu", code: "1EHYj0erOIcv0dSkpHUa_LA", key: "6666" },
              { pan: "quark", code: "f232fb779958" }
            ]
          },
          {
            name: "CAD建筑版2022",
            links: [
              { pan: "baidu", code: "1-A7Fxjcn0E5unZFV1EDK4Q", key: "6666" },
              { pan: "quark", code: "767979dfd9b4" }
            ]
          },
          {
            name: "CAD建筑版2021",
            links: [
              { pan: "baidu", code: "1a7M5HiicaXw2YvrMcDvzKQ", key: "6666" },
              { pan: "quark", code: "e98adab3dd65" }
            ]
          },
          {
            name: "CAD建筑版2020",
            links: [
              { pan: "baidu", code: "154It6q5fc0_SRhp0wRASfw", key: "6666" },
              { pan: "quark", code: "4b501f0712a7" }
            ]
          },
          {
            name: "CAD建筑版2019",
            shixiao: "true",
            links: []
          },
          {
            name: "CAD建筑版2018",
            links: [
              { pan: "baidu", code: "1xkjTUq1pceK0-rK4JVuh4A", key: "6666" },
              { pan: "quark", code: "50113fa3e865" }
            ]
          },
          {
            name: "CAD建筑版2017",
            shixiao: "true",
            links: []
          },
          {
            name: "CAD建筑版2016",
            links: [
              { pan: "baidu", code: "1i7tNo8mkEsLrzHCJyWR20A", key: "6666" },
              { pan: "quark", code: "43a30d7282dd" }
            ]
          },
          {
            name: "CAD建筑版2015",
            shixiao: "true",
            links: []
          },
          {
            name: "CAD建筑版2014",
            links: [
              { pan: "baidu", code: "14xtvARXyCOVLNIjCGKNqHw", key: "6666" },
              { pan: "quark", code: "6f68abe1a8a4" }
            ]
          },
        ]
      },
      {
        name: "CAD机械版",
        description: "（针对机械设计的CAD软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "CAD机械版2025",
            links: [
              { pan: "baidu", code: "1PtVC6yqNQc7nJkmzYtfOzw", key: "6666" },
              { pan: "quark", code: "754b9389f36f" }
            ]
          },
          {
            name: "CAD机械版2024",
            links: [
              { pan: "baidu", code: "1KgG1c1iDcEWIrLnJLMiBmg", key: "6666" },
              { pan: "quark", code: "2deefb73ef82" }
            ]
          },
          {
            name: "CAD机械版2023",
            links: [
              { pan: "baidu", code: "1VqnyAbqKy79LGXxFsP50Vg", key: "6666" },
              { pan: "quark", code: "8ea6a0d4eb15" }
            ]
          },
          {
            name: "CAD机械版2022",
            links: [
              { pan: "baidu", code: "16Kc3mONw0Jxuv3-K97zxXw", key: "6666" },
              { pan: "quark", code: "5034ddd1c14a" }
            ]
          },
          {
            name: "CAD机械版2021",
            links: [
              { pan: "baidu", code: "1jHTB6M6qVxVo66AoFxFwfA", key: "6666" },
              { pan: "quark", code: "28ef618f4714" }
            ]
          },
          {
            name: "CAD机械版2020",
            shixiao: "true",
            links: []
          },
          {
            name: "CAD机械版2019",
            links: [
              { pan: "baidu", code: "1Rs7xYYukMi_VEOj5kozE7w", key: "6666" },
              { pan: "quark", code: "bf20b5244967" }
            ]
          },
          {
            name: "CAD机械版2018",
            links: [
              { pan: "baidu", code: "1QUH30UKJfSAkGxGAeaLl3A", key: "6666" },
              { pan: "quark", code: "55108dda9793" }
            ]
          },
          {
            name: "CAD机械版2017",
            shixiao: "true",
            links: []
          },
          {
            name: "CAD机械版2016",
            links: [
              { pan: "baidu", code: "141GfBRDAkG3UE0DTY_QHxg", key: "6666" },
              { pan: "quark", code: "0f1fec271390" }
            ]
          },
          {
            name: "CAD机械版2015",
            links: [
              { pan: "baidu", code: "1fnF5p6rfAGDKf6MLOnesmw", key: "6666" },
              { pan: "quark", code: "da253fefe28d" }
            ]
          },
        ]
      },
      {
        name: "CAD电气版",
        description: "（专门用于电气设计的CAD软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "CAD电气版2026",
            shixiao: "true",
            links: []
          },
          {
            name: "CAD电气版2025",
            links: [
              { pan: "baidu", code: "1WuZOw3UNZZ9BQIeOhHlLRw", key: "6666" },
              { pan: "quark", code: "c998d0937ae9" },
              { pan: "unknown", code: "16" }
            ]
          },
          {
            name: "CAD电气版2024",
            links: [
              { pan: "baidu", code: "1g_GJ0am4_Q7FdUOI8AkkRw", key: "6666" },
              { pan: "quark", code: "db29c53fc415" },
              { pan: "unknown", code: "15" }
            ]
          },
          {
            name: "CAD电气版2023",
            links: [
              { pan: "baidu", code: "1DNpchgJNljJ9ET7MeDWEpg", key: "6666" },
              { pan: "quark", code: "91f636b3f0e4" },
              { pan: "unknown", code: "14" }
            ]
          },
          {
            name: "CAD电气版2022",
            links: [
              { pan: "baidu", code: "1spy7cMGA6EhstrpGi4YLgw", key: "6666" },
              { pan: "quark", code: "affaf729e30a" },
              { pan: "unknown", code: "13" }
            ]
          },
          {
            name: "CAD电气版2021",
            links: [
              { pan: "baidu", code: "1__3thylOaVbNNA-j3BoQpg", key: "6666" },
              { pan: "quark", code: "1584f58645f3" },
              { pan: "unknown", code: "12" }
            ]
          },
          {
            name: "CAD电气版2020",
            links: [
              { pan: "baidu", code: "18LPsbSKQDdFqDXfK4Pux-A", key: "6666" },
              { pan: "quark", code: "7c08cb8c2daf" },
              { pan: "unknown", code: "11" }
            ]
          },
          {
            name: "CAD电气版2019",
            links: [
              { pan: "baidu", code: "1aku3gBEEnCd7WUEQ0SK-0A", key: "6666" },
              { pan: "quark", code: "7f00b1a1d95b" },
              { pan: "unknown", code: "10" }
            ]
          },
          {
            name: "CAD电气版2018",
            links: [
              { pan: "baidu", code: "167PvOVfgCEiNmVZpUbLMIA", key: "6666" },
              { pan: "quark", code: "814ab66d0133" },
              { pan: "unknown", code: "9" }
            ]
          },
          {
            name: "CAD电气版2017",
            links: [
              { pan: "baidu", code: "1ZVMlf0LP3PLHSobRMC5xIg", key: "6666" },
              { pan: "quark", code: "f7dcc9f64428" },
              { pan: "unknown", code: "8" }
            ]
          },
          {
            name: "CAD电气版2016",
            links: [
              { pan: "baidu", code: "1FO5IJBey5c-D3ihJLEAecw", key: "6666" },
              { pan: "quark", code: "ea21460b8aff" },
              { pan: "unknown", code: "7" }
            ]
          },
          {
            name: "CAD电气版2015",
            links: [
              { pan: "baidu", code: "1oU_pbeaw4IDNHn9o-Jh9EA", key: "6666" },
              { pan: "quark", code: "41b390874288" },
              { pan: "unknown", code: "6" }
            ]
          },
        ]
      },
      {
        name: "CAD迷你系列",
        description: "（简化版CAD软件，适合轻量级设计）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "CAD迷你看图 2021R10",
            links: [
              { pan: "baidu", code: "1cvWHJ-L-iyKxqecywuzosQ", key: "6666" },
              { pan: "quark", code: "7e4640bfaaac" },
              { pan: "123", code: "V1n7Vv-MsiK3" }
            ]
          },
          {
            name: "CAD迷你画图 2022R2",
            links: [
              { pan: "baidu", code: "1R5UVeGfIwP20CD4_NRQu4Q", key: "6666" },
              { pan: "quark", code: "3c5709ea33c2" },
              { pan: "123", code: "V1n7Vv-wsiK3" }
            ]
          },
        ]
      },
    ]
  },
  {
    panelId: "down-13",
    panelName: "平面设计",
    categories: [
      {
        name: "ACDSee",
        description: "（集图片管理、编辑与视频剪辑于一体的软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "ACDSee 2024",
            links: [
              { pan: "baidu", code: "1f6BoXDHnORr9YBuoJEDi9A", key: "6666" },
              { pan: "quark", code: "e505229f9940" },
              { pan: "unknown", code: "92" }
            ]
          },
          {
            name: "ACDSee 2023",
            links: [
              { pan: "baidu", code: "1S9dzUgQrW0Z0OQlJTkDXrQ", key: "6666" },
              { pan: "quark", code: "0a1945f66870" },
              { pan: "unknown", code: "91" }
            ]
          },
          {
            name: "ACDSee 2022",
            links: [
              { pan: "baidu", code: "1d0fqoy-XR09heRNCRskNrA", key: "6666" },
              { pan: "quark", code: "9a91bc5e67dd" },
              { pan: "unknown", code: "90" }
            ]
          },
          {
            name: "ACDSee 2021",
            links: [
              { pan: "baidu", code: "1VmrfxKplK-rvjTqhSuIT1Q", key: "6666" },
              { pan: "quark", code: "ca5d6b026367" },
              { pan: "unknown", code: "89" }
            ]
          },
          {
            name: "ACDSee 2020",
            links: [
              { pan: "baidu", code: "1E2ZWQP9pyG5oJR523Iwsvg", key: "6666" },
              { pan: "quark", code: "ffbff6126190" },
              { pan: "unknown", code: "88" }
            ]
          },
          {
            name: "ACDSee 20",
            links: [
              { pan: "baidu", code: "1xrMhSYQmor77OOME8T0V6g", key: "6666" },
              { pan: "quark", code: "5cce8b156462" },
              { pan: "unknown", code: "87" }
            ]
          },
          {
            name: "ACDSee 10.0",
            links: [
              { pan: "baidu", code: "1ftntzRDVM2SgZQ7Q1XVXSA", key: "6666" },
              { pan: "quark", code: "c6ab6d800cfe" },
              { pan: "unknown", code: "86" }
            ]
          },
          {
            name: "ACDSee 9.0",
            links: [
              { pan: "baidu", code: "1ZARpBO4ic0O1XoJwtW14UA", key: "6666" },
              { pan: "quark", code: "a61843d315b8" },
              { pan: "unknown", code: "85" }
            ]
          },
        ]
      },
      {
        name: "Capture One",
        description: "（专业摄影后期处理软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Capture One 23",
            links: [
              { pan: "baidu", code: "1atuBKW6Q2-h7FhiJcrzksA", key: "6666" },
              { pan: "quark", code: "bb2fbb8be9e7" },
              { pan: "unknown", code: "96" }
            ]
          },
          {
            name: "Capture One 22",
            links: [
              { pan: "baidu", code: "10vS6NnjTg89m3X_-yx0MRw", key: "6666" },
              { pan: "quark", code: "c7a758d69185" },
              { pan: "unknown", code: "95" }
            ]
          },
          {
            name: "Capture One 21",
            links: [
              { pan: "baidu", code: "1cPe5TquFOsMNPso6FcvpqQ", key: "6666" },
              { pan: "quark", code: "68c7ebd61ff5" },
              { pan: "unknown", code: "94" }
            ]
          },
          {
            name: "Capture One 12",
            links: [
              { pan: "baidu", code: "16g4oTk0nXuL6U1Sf12Tm7g", key: "6666" },
              { pan: "quark", code: "a8bbbb8e67e4" },
              { pan: "unknown", code: "93" }
            ]
          },
        ]
      },
      {
        name: "Corel Painter",
        description: "（专业数码绘画软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Corel Painter 2023",
            links: [
              { pan: "baidu", code: "1anAZFf8GUdmXJE4l-0SfpA", key: "6666" },
              { pan: "quark", code: "1699b99986c3" },
              { pan: "unknown", code: "101" }
            ]
          },
          {
            name: "Corel Painter 2022",
            links: [
              { pan: "baidu", code: "1_SVRw-YUytvKAsjnBo_jHg", key: "6666" },
              { pan: "quark", code: "8ff401d52327" },
              { pan: "unknown", code: "100" }
            ]
          },
          {
            name: "Corel Painter 2021",
            links: [
              { pan: "baidu", code: "1rLVJ-mxqcbpYBV-oC3JmPA", key: "6666" },
              { pan: "quark", code: "1c5e82e391a2" },
              { pan: "unknown", code: "99" }
            ]
          },
          {
            name: "Corel Painter 2020",
            links: [
              { pan: "baidu", code: "127vmTSf-tXeol3AHINokog", key: "6666" },
              { pan: "quark", code: "73e495defe07" },
              { pan: "unknown", code: "98" }
            ]
          },
          {
            name: "Corel Painter 2019",
            links: [
              { pan: "baidu", code: "1aNcQNAgQdApoi73WhGQ8hA", key: "6666" },
              { pan: "quark", code: "32508135f881" },
              { pan: "unknown", code: "97" }
            ]
          },
        ]
      },
      {
        name: "Easy Paint Tool SAI",
        description: "（轻量级高效专业绘图软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "SAI2-2024",
            links: [
              { pan: "baidu", code: "1QJHkTChQhlHwgH349u8v_Q", key: "6666" },
              { pan: "quark", code: "725d17441a04" },
              { pan: "unknown", code: "107" }
            ]
          },
          {
            name: "SAI2-2023",
            links: [
              { pan: "baidu", code: "1ar27bQnnkcgCQlpokuCTWA", key: "6666" },
              { pan: "quark", code: "1a24d5de2c82" },
              { pan: "unknown", code: "106" }
            ]
          },
          {
            name: "SAI 2022",
            links: [
              { pan: "baidu", code: "1wOq0jdAawh4WeFzTxA6c7A", key: "6666" },
              { pan: "quark", code: "8fa286f16d28" },
              { pan: "unknown", code: "105" }
            ]
          },
          {
            name: "SAI 2019",
            links: [
              { pan: "baidu", code: "1TIoQOHYhVa39A5mk8N32tQ", key: "6666" },
              { pan: "quark", code: "c0d799c7aa60" },
              { pan: "unknown", code: "104" }
            ]
          },
          {
            name: "SAI 2.0",
            links: [
              { pan: "baidu", code: "1FMastiYQdj2XtFReH2p0AQ", key: "6666" },
              { pan: "quark", code: "97f4fc221d8f" },
              { pan: "unknown", code: "103" }
            ]
          },
          {
            name: "SAI 1.0",
            links: [
              { pan: "baidu", code: "1t-njeA6A_hAdiHACPUDzRg", key: "6666" },
              { pan: "quark", code: "fcc6fb2e7aa0" },
              { pan: "unknown", code: "102" }
            ]
          },
        ]
      },
      {
        name: "SketchBook",
        description: "（专业级数字绘画与绘图软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "SketchBook 2022",
            links: [
              { pan: "baidu", code: "1rCJi_sp0qntb1cy-VjWwfQ", key: "6666" },
              { pan: "quark", code: "6cda53352e69" },
              { pan: "unknown", code: "115" }
            ]
          },
          {
            name: "SketchBook 2021",
            links: [
              { pan: "baidu", code: "1JnZjqgvpHXBol0w7e0Sjpg", key: "6666" },
              { pan: "quark", code: "d94ef5835573" },
              { pan: "unknown", code: "114" }
            ]
          },
          {
            name: "SketchBook 2020",
            shixiao: "true",
            links: []
          },
          {
            name: "SketchBook 2019",
            links: [
              { pan: "baidu", code: "1RHqcFAP6rGNhJYy8DfWbuw", key: "6666" },
              { pan: "quark", code: "5f392b50097a" },
              { pan: "unknown", code: "112" }
            ]
          },
          {
            name: "SketchBook 2018",
            links: [
              { pan: "baidu", code: "18wsBOV33FYXiLTfuSNQyig", key: "6666" },
              { pan: "quark", code: "e6fca8c55c9b" },
              { pan: "unknown", code: "111" }
            ]
          },
          {
            name: "SketchBook 2016",
            links: [
              { pan: "baidu", code: "1Gc4bnsCsUtSwhX1W1rEzDQ", key: "6666" },
              { pan: "quark", code: "df1b5bf03fbf" },
              { pan: "unknown", code: "110" }
            ]
          },
          {
            name: "SketchBook 2015",
            links: [
              { pan: "baidu", code: "1Bnwx0G1lCbqMvlJyNgNjQA", key: "6666" },
              { pan: "quark", code: "6551f8a91620" },
              { pan: "unknown", code: "109" }
            ]
          },
          {
            name: "SketchBook 2014",
            links: [
              { pan: "baidu", code: "14kfqY9jcjbflD9Lgu-mLgw", key: "6666" },
              { pan: "quark", code: "d9172cdda360" },
              { pan: "unknown", code: "108" }
            ]
          },
        ]
      },
    ]
  },
  {
    panelId: "down-14",
    panelName: "三维设计",
    categories: [
      {
        name: "3ds Max",
        description: "（专业三维建模、动画和渲染软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "3ds Max2025",
            links: [
              { pan: "baidu", code: "1t_vSiz0i1dEdH0V_z-xAcA", key: "6666" },
              { pan: "quark", code: "b8424156db4c" }
            ]
          },
          {
            name: "3ds Max2024",
            links: [
              { pan: "baidu", code: "1UxxjRRuSsgW6Qe_NTBOG1Q", key: "6666" },
              { pan: "quark", code: "df71a68c8a5e" },
              { pan: "unknown", code: "131" }
            ]
          },
          {
            name: "3ds Max2023",
            links: [
              { pan: "baidu", code: "1I1fTX1kXpIE8vtR_s1ateQ", key: "6666" },
              { pan: "quark", code: "d6bd63b40e20" },
              { pan: "unknown", code: "130" }
            ]
          },
          {
            name: "3ds Max2022",
            links: [
              { pan: "baidu", code: "1m3WZmeI3hXrPUyBPWrBu0A", key: "6666" },
              { pan: "quark", code: "86eca429dd9e" },
              { pan: "unknown", code: "129" }
            ]
          },
          {
            name: "3ds Max2021",
            links: [
              { pan: "baidu", code: "1Mvxk78a-eTDJdD0ddlp5zQ", key: "6666" },
              { pan: "quark", code: "9bfe5824d751" },
              { pan: "unknown", code: "128" }
            ]
          },
          {
            name: "3ds Max2020",
            links: [
              { pan: "baidu", code: "1wp1a1MFK0E20Q8rYNxw6AQ", key: "6666" },
              { pan: "quark", code: "ca4238b48552" },
              { pan: "unknown", code: "127" }
            ]
          },
          {
            name: "3ds Max2019",
            links: [
              { pan: "baidu", code: "18Mb2LSK2y7GDZfp5bG92pA", key: "6666" },
              { pan: "quark", code: "ede4ba53acf0" },
              { pan: "unknown", code: "126" }
            ]
          },
          {
            name: "3ds Max2018",
            links: [
              { pan: "baidu", code: "1rreHbX5gfZCmrFG3Y77Qlg", key: "6666" },
              { pan: "quark", code: "9f8857efa706" },
              { pan: "unknown", code: "125" }
            ]
          },
          {
            name: "3ds Max2017",
            links: [
              { pan: "baidu", code: "1ZiVElWUhrDHiH9WUjdWdzA", key: "6666" },
              { pan: "quark", code: "289ec72c6a4e" },
              { pan: "unknown", code: "124" }
            ]
          },
          {
            name: "3ds Max2016",
            links: [
              { pan: "baidu", code: "1ayd8Z29vEVNqgb8d8r8vBw", key: "6666" },
              { pan: "quark", code: "83173066593a" },
              { pan: "unknown", code: "123" }
            ]
          },
          {
            name: "3ds Max2015",
            links: [
              { pan: "baidu", code: "10CwFaX401OkzP-HkXGcV1Q", key: "6666" },
              { pan: "quark", code: "f6401ac1c39d" },
              { pan: "unknown", code: "122" }
            ]
          },
          {
            name: "3ds Max2014",
            links: [
              { pan: "baidu", code: "1xNLqivwHVCnzmq6C0mqYUw", key: "6666" },
              { pan: "quark", code: "160419c4e468" },
              { pan: "unknown", code: "121" }
            ]
          },
          {
            name: "3ds Max2013",
            links: [
              { pan: "baidu", code: "11izGDAJOibXzdbRRWhAipA", key: "6666" },
              { pan: "quark", code: "c93e870a1d9f" },
              { pan: "unknown", code: "120" }
            ]
          },
          {
            name: "3ds Max2012",
            links: [
              { pan: "baidu", code: "1CHSszYF56goopylI7N3Icg", key: "6666" },
              { pan: "quark", code: "182cc36186a7" },
              { pan: "unknown", code: "119" }
            ]
          },
          {
            name: "3ds Max2011",
            links: [
              { pan: "baidu", code: "1xd50T3G3v1cAqdcOp8MGYQ", key: "6666" },
              { pan: "quark", code: "94ea4d027e96" },
              { pan: "unknown", code: "118" }
            ]
          },
          {
            name: "3ds Max2010",
            links: [
              { pan: "baidu", code: "1Fq1W8j76x3sEaXYI69FVEw", key: "6666" },
              { pan: "quark", code: "14c3a294f1b5" },
              { pan: "unknown", code: "117" }
            ]
          },
          {
            name: "3ds Max2009",
            links: [
              { pan: "baidu", code: "1rpgdQtx8kXTlhnDXg2cGww", key: "6666" },
              { pan: "quark", code: "669d379e1c9b" },
              { pan: "unknown", code: "116" }
            ]
          },
        ]
      },
      {
        name: "Artlantis",
        description: "（专业建筑渲染软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Artlantis 2021",
            links: [
              { pan: "baidu", code: "1ohEpx2qHVhSI0KsZq5554Q", key: "6666" },
              { pan: "quark", code: "d85e11fe22fb" },
              { pan: "unknown", code: "134" }
            ]
          },
          {
            name: "Artlantis 2020",
            links: [
              { pan: "baidu", code: "1TgXrpUcetNaemYYmmBycgQ", key: "6666" },
              { pan: "quark", code: "a614e353d9aa" },
              { pan: "unknown", code: "133" }
            ]
          },
          {
            name: "Artlantis 2019",
            links: [
              { pan: "baidu", code: "1rg_AZpR6cc0-1-qSNCIACg", key: "6666" },
              { pan: "quark", code: "25f00fbe2a03" },
              { pan: "unknown", code: "132" }
            ]
          },
        ]
      },
      {
        name: "blender",
        description: "（开源三维建模、动画、渲染和视频编辑软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Blender4.0.1",
            links: [
              { pan: "baidu", code: "1WcrL4ob2GPEOowlQdi4Lyw", key: "6666" },
              { pan: "quark", code: "d80c17868fd1" },
              { pan: "unknown", code: "139" }
            ]
          },
          {
            name: "Blender3.5",
            links: [
              { pan: "baidu", code: "1tyiWh3BaW_ZmiSaAlz2RFw", key: "6666" },
              { pan: "quark", code: "72670afc3cba" },
              { pan: "unknown", code: "138" }
            ]
          },
          {
            name: "blender3.3",
            links: [
              { pan: "baidu", code: "1NoG3JfnEDOLaBbN-kuIo7w", key: "6666" },
              { pan: "quark", code: "b4f58a29a22d" },
              { pan: "unknown", code: "137" }
            ]
          },
          {
            name: "blender3.0.0",
            links: [
              { pan: "baidu", code: "1pi3URt-qZtwH4v0I89Qs2g", key: "6666" },
              { pan: "quark", code: "add5a573f3d8" },
              { pan: "unknown", code: "136" }
            ]
          },
          {
            name: "blender2.83",
            links: [
              { pan: "baidu", code: "15O9xkxjdtnr971ZTcDdMfw", key: "6666" },
              { pan: "quark", code: "3f7f5111592e" },
              { pan: "unknown", code: "135" }
            ]
          },
        ]
      },
      {
        name: "CorelCAD",
        description: "（专业级二维和三维设计软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "CorelCAD 2023",
            links: [
              { pan: "baidu", code: "1wXHiKIX8E9E-XuMc4J2czQ", key: "6666" },
              { pan: "quark", code: "47e44317ccbf" },
              { pan: "unknown", code: "145" }
            ]
          },
          {
            name: "CorelCAD 2022",
            shixiao: "true",
            links: []
          },
          {
            name: "CorelCAD 2021",
            links: [
              { pan: "baidu", code: "1-u7va2-AOsAbGVqly_bXYA", key: "6666" },
              { pan: "quark", code: "35aafe9bcedd" },
              { pan: "unknown", code: "144" }
            ]
          },
          {
            name: "CorelCAD 2020",
            links: [
              { pan: "baidu", code: "1KtD_ofWSts6yiMpbHylEDg", key: "6666" },
              { pan: "quark", code: "8bbc9ac1f7eb" },
              { pan: "unknown", code: "143" }
            ]
          },
          {
            name: "CorelCAD 2019",
            links: [
              { pan: "baidu", code: "1Agm39Rb1YlE36xw1rG-ddw", key: "6666" },
              { pan: "quark", code: "b2d8e4ef3f41" },
              { pan: "unknown", code: "142" }
            ]
          },
          {
            name: "CorelCAD 2018",
            links: [
              { pan: "baidu", code: "1_iIrolHc8Dw7Kcihrg5wkA", key: "6666" },
              { pan: "quark", code: "fe98caa973c4" },
              { pan: "unknown", code: "141" }
            ]
          },
          {
            name: "CorelCAD 2017",
            links: [
              { pan: "baidu", code: "1HnHpZvV8NaxaCuMJd04x2A", key: "6666" },
              { pan: "quark", code: "d6590a9cdf8e" },
              { pan: "unknown", code: "140" }
            ]
          },
        ]
      },
      {
        name: "Lumion",
        description: "（专业的实时3D可视化渲染软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Lumion2023",
            links: [
              { pan: "baidu", code: "1-gpSncZ-A2ArYCmavwFa4A", key: "6666" },
              { pan: "quark", code: "f59f97336de4" },
              { pan: "unknown", code: "155" }
            ]
          },
          {
            name: "Lumion12.5",
            links: [
              { pan: "baidu", code: "1W9oKjxDf4zKErLPgaMiLEw", key: "6666" },
              { pan: "quark", code: "2b0fa301d1bd" },
              { pan: "unknown", code: "154" }
            ]
          },
          {
            name: "Lumion12.0",
            links: [
              { pan: "baidu", code: "1kAe6XR4q8I_yFnBb1keXsQ", key: "6666" },
              { pan: "quark", code: "49c1c649d577" },
              { pan: "unknown", code: "153" }
            ]
          },
          {
            name: "Lumion11",
            links: [
              { pan: "baidu", code: "1AgBMoKtR2esJbYR-1roaPg", key: "6666" },
              { pan: "quark", code: "ab20a158cef1" },
              { pan: "unknown", code: "152" }
            ]
          },
          {
            name: "Lumion10.0.0",
            links: [
              { pan: "baidu", code: "1KUsqE8mq6zurP2ysHUG-jg", key: "6666" },
              { pan: "quark", code: "f925576f979c" },
              { pan: "unknown", code: "151" }
            ]
          },
          {
            name: "Lumion9.0.2",
            links: [
              { pan: "baidu", code: "14znOwOZLqHBz5wGv8zqzMw", key: "6666" },
              { pan: "quark", code: "421c44ce09dd" },
              { pan: "unknown", code: "150" }
            ]
          },
          {
            name: "Lumion8.5",
            links: [
              { pan: "baidu", code: "11zSZDs9L39x8quxr_Q6XKQ", key: "6666" },
              { pan: "quark", code: "873bcd062226" },
              { pan: "unknown", code: "149" }
            ]
          },
          {
            name: "Lumion6.0",
            links: [
              { pan: "baidu", code: "12BfJbkQGjhOjwxtdWG3xJg", key: "6666" },
              { pan: "quark", code: "80f6873aa6ed" },
              { pan: "unknown", code: "148" }
            ]
          },
          {
            name: "Lumion5.0",
            links: [
              { pan: "baidu", code: "1lmhHAdpxinrOzt4EfmGDxQ", key: "6666" },
              { pan: "quark", code: "8d3052282c11" },
              { pan: "unknown", code: "147" }
            ]
          },
          {
            name: "Lumion4.5",
            links: [
              { pan: "baidu", code: "12tEGgOA40hSDK54JuwYtYg", key: "6666" },
              { pan: "quark", code: "1ed3bd99b67b" },
              { pan: "unknown", code: "146" }
            ]
          },
        ]
      },
      {
        name: "SketchUp Pro",
        description: "（专业三维建模软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "SketchUpPro 2024",
            links: [
              { pan: "baidu", code: "1F9BFT3Rhy_4xSuW_1NOlMA", key: "6666" },
              { pan: "quark", code: "3302d77c879d" },
              { pan: "unknown", code: "165" }
            ]
          },
          {
            name: "SketchUpPro 2023",
            links: [
              { pan: "baidu", code: "1ZsqUBDC5-Ds7BahulOBrMA", key: "6666" },
              { pan: "quark", code: "ea22b0c2ab3f" },
              { pan: "unknown", code: "164" }
            ]
          },
          {
            name: "SketchUpPro 2022",
            links: [
              { pan: "baidu", code: "1Uno50vUqro0er0_B8ZUPfg", key: "6666" },
              { pan: "quark", code: "f8a722475571" },
              { pan: "unknown", code: "163" }
            ]
          },
          {
            name: "SketchUpPro 2021",
            links: [
              { pan: "baidu", code: "1RlrmRibBUpO7yVRnJVODDA", key: "6666" },
              { pan: "quark", code: "89b546d70025" },
              { pan: "unknown", code: "162" }
            ]
          },
          {
            name: "SketchUpPro 2020",
            links: [
              { pan: "baidu", code: "1U3XNv1k2BWnPoUTRa2n_9Q", key: "6666" },
              { pan: "quark", code: "849a7df1f479" },
              { pan: "unknown", code: "161" }
            ]
          },
          {
            name: "SketchUpPro 2019",
            links: [
              { pan: "baidu", code: "1YVAFnUI2LXFCWKVzLubG4Q", key: "6666" },
              { pan: "quark", code: "2126a9b9f450" },
              { pan: "unknown", code: "160" }
            ]
          },
          {
            name: "SketchUpPro 2018",
            links: [
              { pan: "baidu", code: "1b-DzJFtMW6WFHejVEyUZaw", key: "6666" },
              { pan: "quark", code: "a9b30aabea4c" },
              { pan: "unknown", code: "159" }
            ]
          },
          {
            name: "SketchUpPro 2017",
            links: [
              { pan: "baidu", code: "15mcbZyavaU8c8MTSfV7hdg", key: "6666" },
              { pan: "quark", code: "a32da3a48c3d" },
              { pan: "unknown", code: "158" }
            ]
          },
          {
            name: "SketchUpPro 2016",
            links: [
              { pan: "baidu", code: "1B3rgXUQGUdUjJHFr-POsyA", key: "6666" },
              { pan: "quark", code: "9ae160f8e889" },
              { pan: "unknown", code: "157" }
            ]
          },
          {
            name: "SketchUpPro 2015",
            links: [
              { pan: "baidu", code: "1OatbpmoGQoPLqhM-gXdgLQ", key: "6666" },
              { pan: "quark", code: "3e0ad850cd65" },
              { pan: "unknown", code: "156" }
            ]
          },
        ]
      },
      {
        name: "V-Ray for 3dsMax",
        description: "（针对3dsMax的专业3D渲染插件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "V-Ray 6.2 for 3dsMax2019- 2024",
            links: [
              { pan: "baidu", code: "1VpNbuhVvXFxRKGRYcHwDWw", key: "6666" },
              { pan: "quark", code: "4bc3c93b7159" },
              { pan: "unknown", code: "173" }
            ]
          },
          {
            name: "V-Ray 6.1 for 3dsMax2019- 2024",
            links: [
              { pan: "baidu", code: "1RkmQOqi6Djd_yuZPVJH6Hg", key: "6666" },
              { pan: "quark", code: "3a8fa0a46266" },
              { pan: "unknown", code: "172" }
            ]
          },
          {
            name: "V-Ray 6.0 for 3dsMax2018- 2023",
            links: [
              { pan: "baidu", code: "1aGThyruZDZKG8iSxUipAbA", key: "6666" },
              { pan: "quark", code: "918cd17417d6" },
              { pan: "unknown", code: "171" }
            ]
          },
          {
            name: "V-Ray 5.2 for 3dsMax2019- 2022",
            links: [
              { pan: "baidu", code: "1pXzTd3uhTJFsholCGd7t4A", key: "6666" },
              { pan: "quark", code: "6e8ab46a8f74" },
              { pan: "unknown", code: "170" }
            ]
          },
          {
            name: "V-Ray 5.1 for 3dsMax2016- 2022",
            links: [
              { pan: "baidu", code: "1Yd7_eBsNSqmMitV9W2ExAA", key: "6666" },
              { pan: "quark", code: "8a5e3ef794ca" },
              { pan: "unknown", code: "169" }
            ]
          },
          {
            name: "V-Ray 5.05 for 3dsMax2018- 2021",
            links: [
              { pan: "baidu", code: "1ouhqoDCfUWCKUTCyLbveyg", key: "6666" },
              { pan: "quark", code: "c4cca0ab9acd" },
              { pan: "unknown", code: "168" }
            ]
          },
          {
            name: "V-Ray 4.3 for 3dsMax2020",
            links: [
              { pan: "baidu", code: "1B6Pgc9gciI8h7JRn8pVt0g", key: "6666" },
              { pan: "quark", code: "86313febe887" },
              { pan: "unknown", code: "167" }
            ]
          },
          {
            name: "V-Ray 4.1 for 3dMax2013-2019",
            links: [
              { pan: "baidu", code: "1GjPU_TYhfPrTO_mZ8sCJnA", key: "6666" },
              { pan: "quark", code: "e794dafcfb40" },
              { pan: "unknown", code: "166" }
            ]
          },
        ]
      },
      {
        name: "V-Ray for Rhino",
        description: "（针对Rhino的专业3D渲染插件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "V-ray 6.0 for Rhino6-8",
            links: [
              { pan: "baidu", code: "16B-rcI5yfCyc6hlk94hGYg", key: "6666" },
              { pan: "quark", code: "c084b60dd652" },
              { pan: "unknown", code: "178" }
            ]
          },
          {
            name: "V-Ray 5.2 for Rhino6-8",
            links: [
              { pan: "baidu", code: "1T-UVO7U9rjqLO41Csz2fQQ", key: "6666" },
              { pan: "quark", code: "9bb2af8327e0" },
              { pan: "unknown", code: "177" }
            ]
          },
          {
            name: "V-Ray 5.1 for Rhino6-7",
            links: [
              { pan: "baidu", code: "1wCbUfBFgt5BZtdmoWGJ2Nw", key: "6666" },
              { pan: "quark", code: "21184f839540" },
              { pan: "unknown", code: "176" }
            ]
          },
          {
            name: "V-Ray 4.2 for Rhino5-7",
            links: [
              { pan: "baidu", code: "1uFvhS-5BsSE2JOKHEqEMkw", key: "6666" },
              { pan: "quark", code: "df3927cb122a" },
              { pan: "unknown", code: "175" }
            ]
          },
          {
            name: "V-Ray 4.1 for Rhino5-6",
            links: [
              { pan: "baidu", code: "1Frd5KA3tlkuSrD-C5V0cHQ", key: "6666" },
              { pan: "quark", code: "8638c12c5c6d" },
              { pan: "unknown", code: "174" }
            ]
          },
        ]
      },
      {
        name: "V-Ray for SketchUp",
        description: "（针对SketchUp的专业渲染插件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "V-Ray 6.1 for SketchUp2019-2023",
            links: [
              { pan: "baidu", code: "1qi_Gor9dLQyuTZCIpTs7Ag", key: "6666" },
              { pan: "quark", code: "6fabe1a5cb84" },
              { pan: "unknown", code: "184" }
            ]
          },
          {
            name: "V-Ray 6.0 for SketchUp2019-2022",
            links: [
              { pan: "baidu", code: "17kIFuGXKqYJ9ngnvFIaHPw", key: "6666" },
              { pan: "quark", code: "d8b45f9408dd" },
              { pan: "unknown", code: "183" }
            ]
          },
          {
            name: "V-Ray 5.2 for SketchUp2019-2022",
            links: [
              { pan: "baidu", code: "1EzgvnC0q694D-pDciMeTQg", key: "6666" },
              { pan: "quark", code: "1a16a7a3f14a" },
              { pan: "unknown", code: "182" }
            ]
          },
          {
            name: "V-Ray 5.1 for SketchUp2017-2021",
            links: [
              { pan: "baidu", code: "1BvM0OcpWLteutHf5XLi_3A", key: "6666" },
              { pan: "quark", code: "da63c7b6c998" },
              { pan: "unknown", code: "181" }
            ]
          },
          {
            name: "V-Ray 4.2 for SketchUp2016-2020",
            links: [
              { pan: "baidu", code: "1OHWxcdkLM6IdKfAXHoFoyw", key: "6666" },
              { pan: "quark", code: "2a47c1ca31cd" },
              { pan: "unknown", code: "180" }
            ]
          },
          {
            name: "V-Ray 4.1 for SketchUp2016-2019",
            links: [
              { pan: "baidu", code: "1IXWz_8wr2UsPU-9pFmyaBg", key: "6666" },
              { pan: "quark", code: "ae3eaa68da8f" },
              { pan: "unknown", code: "179" }
            ]
          },
        ]
      },
    ]
  },
  {
    panelId: "down-15",
    panelName: "影视动画",
    categories: [
      {
        name: "Maya",
        description: "（专业的三维建模、动画、渲染和特效软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Maya 2025",
            links: [
              { pan: "baidu", code: "1foFd16X2aGbMB9VyJzsQkA", key: "6666" },
              { pan: "quark", code: "402a137bbfad" },
              { pan: "unknown", code: "194" }
            ]
          },
          {
            name: "Maya 2024",
            links: [
              { pan: "baidu", code: "11GrcXyrPTA4gMlGoHRUT5g", key: "6666" },
              { pan: "quark", code: "5768fe64a9ec" },
              { pan: "unknown", code: "193" }
            ]
          },
          {
            name: "Maya 2023",
            links: [
              { pan: "baidu", code: "19GVWHutGukBRmCtYp6se6w", key: "6666" },
              { pan: "quark", code: "35fbc027a9c7" },
              { pan: "unknown", code: "192" }
            ]
          },
          {
            name: "Maya 2022",
            links: [
              { pan: "baidu", code: "1_1hSm9szhkv2kdVUPpHdBg", key: "6666" },
              { pan: "quark", code: "bce89f8f136d" },
              { pan: "unknown", code: "191" }
            ]
          },
          {
            name: "Maya 2020",
            links: [
              { pan: "baidu", code: "1b01fqasnw7XpF7bp8H3QqQ", key: "6666" },
              { pan: "quark", code: "5fcc426b5d00" },
              { pan: "unknown", code: "190" }
            ]
          },
          {
            name: "Maya 2019",
            links: [
              { pan: "baidu", code: "1SlfkDCJHs1jGFfUDkBcUzQ", key: "6666" },
              { pan: "quark", code: "cc1cafdc5862" },
              { pan: "unknown", code: "189" }
            ]
          },
          {
            name: "Maya 2018",
            links: [
              { pan: "baidu", code: "1cSG11ZbggjFNT-rFlHgddA", key: "6666" },
              { pan: "quark", code: "781c6fb50ec5" },
              { pan: "unknown", code: "188" }
            ]
          },
          {
            name: "Maya 2017",
            links: [
              { pan: "baidu", code: "1JQXLT0tLWwubMuEsSZiEqA", key: "6666" },
              { pan: "quark", code: "500623b1d892" },
              { pan: "unknown", code: "187" }
            ]
          },
          {
            name: "Maya 2016",
            links: [
              { pan: "baidu", code: "1fG1qIxUY43gVi9YbI94H6A", key: "6666" },
              { pan: "quark", code: "236987ccca62" },
              { pan: "unknown", code: "186" }
            ]
          },
          {
            name: "Maya 2015",
            links: [
              { pan: "baidu", code: "1dCHPmyr_aJmbnPKydq9oHA", key: "6666" },
              { pan: "quark", code: "abdb32c43324" },
              { pan: "unknown", code: "185" }
            ]
          },
        ]
      },
      {
        name: "CINEMA 4D",
        description: "（专业的三维建模、动画和渲染软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "CINEMA 4D 2024",
            links: [
              { pan: "baidu", code: "1VBwgYR56jzRHs3elcEXt_g", key: "6666" },
              { pan: "quark", code: "e1a27670ed3b" },
              { pan: "unknown", code: "205" }
            ]
          },
          {
            name: "CINEMA 4D 2023",
            links: [
              { pan: "baidu", code: "1xXiKv7TiTJFx142BTFg-XQ", key: "6666" },
              { pan: "quark", code: "2a00d91de58b" },
              { pan: "unknown", code: "204" }
            ]
          },
          {
            name: "CINEMA 4D S26",
            links: [
              { pan: "baidu", code: "1-DYREMsXGZdrRwngE5TXTA", key: "6666" },
              { pan: "quark", code: "fc7fc719a447" },
              { pan: "unknown", code: "203" }
            ]
          },
          {
            name: "CINEMA 4D S24",
            links: [
              { pan: "baidu", code: "1Bsi2bwM94gdaZFSvbx5o-A", key: "6666" },
              { pan: "quark", code: "ec468c663853" },
              { pan: "unknown", code: "202" }
            ]
          },
          {
            name: "CINEMA 4D S22",
            links: [
              { pan: "baidu", code: "1JLwuLyAVO6m5dDiIMMkURw", key: "6666" },
              { pan: "quark", code: "cd1bc34affde" },
              { pan: "unknown", code: "201" }
            ]
          },
          {
            name: "CINEMA 4D R25",
            links: [
              { pan: "baidu", code: "1NxqKySnu_0xAkqLzBysRJQ", key: "6666" },
              { pan: "quark", code: "e9039ce23871" },
              { pan: "unknown", code: "200" }
            ]
          },
          {
            name: "CINEMA 4D R23",
            links: [
              { pan: "baidu", code: "1Hc3zAcVEdVungFMLKEIgiw", key: "6666" },
              { pan: "quark", code: "a9e8b8937457" },
              { pan: "unknown", code: "199" }
            ]
          },
          {
            name: "CINEMA 4D R21",
            links: [
              { pan: "baidu", code: "124Ugz5YhCiX8L95FgJauiQ", key: "6666" },
              { pan: "quark", code: "3d56357444f4" },
              { pan: "unknown", code: "198" }
            ]
          },
          {
            name: "CINEMA 4D R20",
            links: [
              { pan: "baidu", code: "18k8pxPzw1urusL1G_VL5_Q", key: "6666" },
              { pan: "quark", code: "9eecce54ce83" },
              { pan: "unknown", code: "197" }
            ]
          },
          {
            name: "CINEMA 4D R19",
            links: [
              { pan: "baidu", code: "1E7-ABq0IRg_bEMFREiLBhw", key: "6666" },
              { pan: "quark", code: "20205b4e66f9" },
              { pan: "unknown", code: "196" }
            ]
          },
          {
            name: "CINEMA 4D R18",
            links: [
              { pan: "baidu", code: "1sz5U-cNzGkupSxbAG3i78Q", key: "6666" },
              { pan: "quark", code: "4e80c33d3c6e" },
              { pan: "unknown", code: "195" }
            ]
          },
        ]
      },
      {
        name: "Cubase",
        description: "（专业数字音频工作站）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Cubase 13.0",
            links: [
              { pan: "baidu", code: "1aehDaU1ImiLcFe9xJNakCA", key: "6666" },
              { pan: "quark", code: "2b3c685a37b9" },
              { pan: "unknown", code: "209" }
            ]
          },
          {
            name: "Cubase 12.0",
            links: [
              { pan: "baidu", code: "1NhsOLx35A4evrnDZO9olww", key: "6666" },
              { pan: "quark", code: "1f3442287b63" },
              { pan: "unknown", code: "208" }
            ]
          },
          {
            name: "Cubase 11.0",
            links: [
              { pan: "baidu", code: "174D7y8GWqUd7VeV9IEMPDg", key: "6666" },
              { pan: "quark", code: "58b77376aba3" },
              { pan: "unknown", code: "207" }
            ]
          },
          {
            name: "Cubase 8.0",
            links: [
              { pan: "baidu", code: "1c-2dhsG3HfJPAUMpT6au4Q", key: "6666" },
              { pan: "quark", code: "6bef90c798bd" },
              { pan: "unknown", code: "206" }
            ]
          },
        ]
      },
      {
        name: "达芬奇",
        description: "（专业视频编辑、调色、视觉特效、动态图形和音频后期制作软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "达芬奇v18.5",
            links: [
              { pan: "baidu", code: "1rotzONW9O7p1MNzgZvpBgQ", key: "6666" },
              { pan: "quark", code: "f5b27d9223ff" },
              { pan: "unknown", code: "217" }
            ]
          },
          {
            name: "达芬奇v18.0",
            links: [
              { pan: "baidu", code: "1bH-PIypwTfutrWFIrqMqXQ", key: "6666" },
              { pan: "quark", code: "bda20fc8fb1e" },
              { pan: "unknown", code: "216" }
            ]
          },
          {
            name: "达芬奇v17.4",
            links: [
              { pan: "baidu", code: "1i7st8soELndppxImx_xsmQ", key: "6666" },
              { pan: "quark", code: "d634c1c5206a" },
              { pan: "unknown", code: "215" }
            ]
          },
          {
            name: "达芬奇v17.2",
            links: [
              { pan: "baidu", code: "1WCuIrYKvqisSto8ZF3Wpng", key: "6666" },
              { pan: "quark", code: "2a273f2e654b" },
              { pan: "unknown", code: "214" }
            ]
          },
          {
            name: "达芬奇v17.0",
            links: [
              { pan: "baidu", code: "1WsTydX2_CDgcjxIy1-Qtww", key: "6666" },
              { pan: "quark", code: "1331fbb30f7e" },
              { pan: "unknown", code: "213" }
            ]
          },
          {
            name: "达芬奇v16.2",
            links: [
              { pan: "baidu", code: "1XVJQI4g_TRpJiG3C_jWkHQ", key: "6666" },
              { pan: "quark", code: "3a263ac2fac0" },
              { pan: "unknown", code: "212" }
            ]
          },
          {
            name: "达芬奇v15.3",
            links: [
              { pan: "baidu", code: "10KFJT3Mu3IkTwIpeHYjQfA", key: "6666" },
              { pan: "quark", code: "a4acc3149f17" },
              { pan: "unknown", code: "211" }
            ]
          },
          {
            name: "达芬奇v14.3",
            links: [
              { pan: "baidu", code: "1jzQJME8iqjtfHR850ApZUg", key: "6666" },
              { pan: "quark", code: "da43d196d61e" },
              { pan: "unknown", code: "210" }
            ]
          },
        ]
      },
      {
        name: "EDIUS Pro",
        description: "（专业的非线性视频编辑软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "EDIUS 9.0",
            links: [
              { pan: "baidu", code: "1qZx5g13WkMDPBUo6Ki-btA", key: "6666" },
              { pan: "quark", code: "ace5be2592f0" },
              { pan: "unknown", code: "220" }
            ]
          },
          {
            name: "EDIUS Pro v8",
            links: [
              { pan: "baidu", code: "1G8nkziyFqvAZxzISFNKhGg", key: "6666" },
              { pan: "quark", code: "efd3c5d30cb4" },
              { pan: "unknown", code: "219" }
            ]
          },
          {
            name: "EDIUS Pro v6",
            links: [
              { pan: "baidu", code: "1prDz-YRHM7bIJJrREB5Qqg", key: "6666" },
              { pan: "quark", code: "3d57612280d0" },
              { pan: "unknown", code: "218" }
            ]
          },
        ]
      },
      {
        name: "Nuendo",
        description: "（专业音频后期制作软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Nuendo 10",
            links: [
              { pan: "baidu", code: "15loCNmkNBPCs-bUkgCnFlA", key: "6666" },
              { pan: "quark", code: "ee2e645ca23d" },
              { pan: "unknown", code: "222" }
            ]
          },
          {
            name: "Nuendo 7",
            links: [
              { pan: "baidu", code: "1t0gaR8mGP2CngZIqLulciQ", key: "6666" },
              { pan: "quark", code: "d866727fb467" },
              { pan: "unknown", code: "221" }
            ]
          },
        ]
      },
    ]
  },
  {
    panelId: "down-16",
    panelName: "建筑设计",
    categories: [
      {
        name: "Civil 3D",
        description: "（专业土木工程设计软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Civil3D 2024",
            links: [
              { pan: "baidu", code: "16P6-0MWVCUReLT4IkMmUdg", key: "6666" },
              { pan: "quark", code: "2e8f8f8adc2f" },
              { pan: "unknown", code: "230" }
            ]
          },
          {
            name: "Civil3D 2023",
            links: [
              { pan: "baidu", code: "1KfgLvPQYGF4aXuMXsr62jQ", key: "6666" },
              { pan: "quark", code: "4d5da49a2a4d" },
              { pan: "unknown", code: "229" }
            ]
          },
          {
            name: "Civil3D 2022",
            links: [
              { pan: "baidu", code: "113y7eqdA93f5KDBVTlSVaA", key: "6666" },
              { pan: "quark", code: "dae3519cf82a" },
              { pan: "unknown", code: "228" }
            ]
          },
          {
            name: "Civil3D 2021",
            links: [
              { pan: "baidu", code: "1OCgPiNJ8yEyaeTrww5y_Ow", key: "6666" },
              { pan: "quark", code: "5ad7ac82cb1b" },
              { pan: "unknown", code: "227" }
            ]
          },
          {
            name: "Civil3D 2020",
            links: [
              { pan: "baidu", code: "1nN-Tb5ANA9se6w3TRWx59w", key: "6666" },
              { pan: "quark", code: "3f498d0f98dc" },
              { pan: "unknown", code: "226" }
            ]
          },
        ]
      },
      {
        name: "Fuzor",
        description: "（BIM协同与可视化软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Fuzor2020",
            links: [
              { pan: "baidu", code: "1_GaPo7aa_7--JC8JTFLdEw", key: "6666" },
              { pan: "quark", code: "0069275e231b" },
              { pan: "unknown", code: "234" }
            ]
          },
          {
            name: "Fuzor2019",
            links: [
              { pan: "baidu", code: "1hgfdUptSsGyflcTkY8CNfg", key: "6666" },
              { pan: "quark", code: "28598f1b28b6" },
              { pan: "unknown", code: "233" }
            ]
          },
          {
            name: "Fuzor2018",
            links: [
              { pan: "baidu", code: "1tXfiE9MoSMFv46dG-aj_tg", key: "6666" },
              { pan: "quark", code: "4ac0860ae4a3" },
              { pan: "unknown", code: "232" }
            ]
          },
          {
            name: "Fuzor2017",
            links: [
              { pan: "baidu", code: "18x1F0d8CdYq3x9hqfAS_vQ", key: "6666" },
              { pan: "quark", code: "ac4db2573b60" },
              { pan: "unknown", code: "231" }
            ]
          },
        ]
      },
      {
        name: "Navisworks",
        description: "（BIM协同与冲突检测工具）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Navisworks2024",
            links: [
              { pan: "baidu", code: "1dDMC-NBNKj5TsqxmYQtn0Q", key: "6666" },
              { pan: "quark", code: "5c0ae760c3ff" },
              { pan: "unknown", code: "242" }
            ]
          },
          {
            name: "Navisworks2023",
            links: [
              { pan: "baidu", code: "1Ne8id4yebj0mTVQYs8LUwQ", key: "6666" },
              { pan: "quark", code: "1990202614a0" },
              { pan: "unknown", code: "241" }
            ]
          },
          {
            name: "Navisworks2022",
            links: [
              { pan: "baidu", code: "1Gl-F9Rqp6qBiBcHEhQgfXQ", key: "6666" },
              { pan: "quark", code: "af2f082951b9" },
              { pan: "unknown", code: "240" }
            ]
          },
          {
            name: "Navisworks2021",
            links: [
              { pan: "baidu", code: "11U3cx0KTxg5lveRTUaf_QA", key: "6666" },
              { pan: "quark", code: "7781cba9be64" },
              { pan: "unknown", code: "239" }
            ]
          },
          {
            name: "Navisworks2020",
            links: [
              { pan: "baidu", code: "1TJImOXUClK3eST31R5dFsg", key: "6666" },
              { pan: "quark", code: "cb1eb3877d2e" },
              { pan: "unknown", code: "238" }
            ]
          },
          {
            name: "Navisworks2019",
            links: [
              { pan: "baidu", code: "1aPyAClbKZvSuclnXy81Flg", key: "6666" },
              { pan: "quark", code: "34ae5b5489a6" },
              { pan: "unknown", code: "237" }
            ]
          },
          {
            name: "Navisworks2018",
            links: [
              { pan: "baidu", code: "1nbvXk1UPpPzYXiqvFoy6_w", key: "6666" },
              { pan: "quark", code: "21eaed8d8053" },
              { pan: "unknown", code: "236" }
            ]
          },
          {
            name: "Navisworks2014",
            links: [
              { pan: "baidu", code: "19lnChvotu8hmfq08sADv6g", key: "6666" },
              { pan: "quark", code: "8be363ceb58a" },
              { pan: "unknown", code: "235" }
            ]
          },
        ]
      },
      {
        name: "Revit",
        description: "（专业BIM设计与协同软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Revit2025",
            links: [
              { pan: "baidu", code: "1njufv2_En0wF4aCj5b5KDQ", key: "6666" },
              { pan: "quark", code: "28d91f46f746" },
              { pan: "unknown", code: "255" }
            ]
          },
          {
            name: "Revit2024",
            links: [
              { pan: "baidu", code: "1RhbMzlY7FRd5arFj9hfLjw", key: "6666" },
              { pan: "quark", code: "7390d523ced6" },
              { pan: "unknown", code: "254" }
            ]
          },
          {
            name: "Revit2023",
            links: [
              { pan: "baidu", code: "19psOyyPHKTuBTmTeyX-uRw", key: "6666" },
              { pan: "quark", code: "863499cac80b" },
              { pan: "unknown", code: "253" }
            ]
          },
          {
            name: "Revit2022",
            links: [
              { pan: "baidu", code: "17YaqrNDTbZeqM77yXAcrLg", key: "6666" },
              { pan: "quark", code: "90b5b1ffd701" },
              { pan: "unknown", code: "252" }
            ]
          },
          {
            name: "Revit2021",
            links: [
              { pan: "baidu", code: "1MTLm2EuxPovWPsb6j06gVQ", key: "6666" },
              { pan: "quark", code: "910077720973" },
              { pan: "unknown", code: "251" }
            ]
          },
          {
            name: "Revit2020",
            links: [
              { pan: "baidu", code: "1YUnOn7L4LtJwwk-8Ttfr_w", key: "6666" },
              { pan: "quark", code: "56caf1ccbb96" },
              { pan: "unknown", code: "250" }
            ]
          },
          {
            name: "Revit2019",
            links: [
              { pan: "baidu", code: "1OcSK3_OHS-naxn4GbwcfSg", key: "6666" },
              { pan: "quark", code: "84b21e9e4652" },
              { pan: "unknown", code: "249" }
            ]
          },
          {
            name: "Revit2018",
            links: [
              { pan: "baidu", code: "1YyJWiIKgIZlu2BCg593HtA", key: "6666" },
              { pan: "quark", code: "b1b8e4b1c7b5" },
              { pan: "unknown", code: "248" }
            ]
          },
          {
            name: "Revit2017",
            links: [
              { pan: "baidu", code: "1dEJ2eeP-l9kpRqOqw1SU6g", key: "6666" },
              { pan: "quark", code: "c38e17f008ef" },
              { pan: "unknown", code: "247" }
            ]
          },
          {
            name: "Revit2016",
            links: [
              { pan: "baidu", code: "1W1En1cVb2huV70HQ0SWD8g", key: "6666" },
              { pan: "quark", code: "c353e9ecf730" },
              { pan: "unknown", code: "246" }
            ]
          },
          {
            name: "Revit2015",
            links: [
              { pan: "baidu", code: "1xbGErZTK6TXRwyH4rVb8fg", key: "6666" },
              { pan: "quark", code: "cc68eaa90c90" },
              { pan: "unknown", code: "245" }
            ]
          },
          {
            name: "Revit2014",
            links: [
              { pan: "baidu", code: "1MIQPnCAiQS39F-346AHkOQ", key: "6666" },
              { pan: "quark", code: "13794f8dbc36" },
              { pan: "unknown", code: "244" }
            ]
          },
          {
            name: "Revit2013",
            links: [
              { pan: "baidu", code: "1ODr2p0ptpzl7iS2zEqN0pA", key: "6666" },
              { pan: "quark", code: "0bec083c5150" },
              { pan: "unknown", code: "243" }
            ]
          },
        ]
      },
      {
        name: "Tekla Structures",
        description: "（专业钢结构设计与施工软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Tekla Structures 2024",
            links: [
              { pan: "baidu", code: "1IyebQjxACdeRMll-GTQgtw", key: "6666" },
              { pan: "quark", code: "adb503649d2a" },
              { pan: "unknown", code: "264" }
            ]
          },
          {
            name: "Tekla Structures 2023",
            links: [
              { pan: "baidu", code: "1ngx_97DieI0yu4NaAB3Exw", key: "6666" },
              { pan: "quark", code: "d7939a85fcec" },
              { pan: "unknown", code: "263" }
            ]
          },
          {
            name: "Tekla Structures 2022",
            links: [
              { pan: "baidu", code: "15f3I5uelJOuc0K0_13Lm9g", key: "6666" },
              { pan: "quark", code: "659d85ddd905" },
              { pan: "unknown", code: "262" }
            ]
          },
          {
            name: "Tekla Structures 2021",
            links: [
              { pan: "baidu", code: "1hUpA8K1MlE2dKb64pAKjbA", key: "6666" },
              { pan: "quark", code: "0cbfe197b9ec" },
              { pan: "unknown", code: "261" }
            ]
          },
          {
            name: "Tekla Structures 2020",
            links: [
              { pan: "baidu", code: "1RP07xVDc8N6fii4QtLMH2g", key: "6666" },
              { pan: "quark", code: "a19641bed254" },
              { pan: "unknown", code: "260" }
            ]
          },
          {
            name: "Tekla Structures 2019",
            shixiao: "true",
            links: []
          },
          {
            name: "Tekla Structures 2018",
            links: [
              { pan: "baidu", code: "1-CmmZmnEG7MdU_sOmKg0Mw", key: "6666" },
              { pan: "quark", code: "14b40e49cb02" },
              { pan: "unknown", code: "259" }
            ]
          },
          {
            name: "Tekla Structures 2017",
            links: [
              { pan: "baidu", code: "1wg_rrkRkPZ06f9fWb0T-Xg", key: "6666" },
              { pan: "quark", code: "94aaa4d4849d" },
              { pan: "unknown", code: "258" }
            ]
          },
          {
            name: "Tekla Structures 2016",
            links: [
              { pan: "baidu", code: "1ZYjAO5LsLDr9GHhg19Fmkg", key: "6666" },
              { pan: "quark", code: "0207d6d22292" },
              { pan: "unknown", code: "257" }
            ]
          },
          {
            name: "Tekla Structures 21.0",
            links: [
              { pan: "baidu", code: "12GNqHzXUE5fQgYh8Un2Lpg", key: "6666" },
              { pan: "quark", code: "02aa8d4efe04" },
              { pan: "unknown", code: "256" }
            ]
          },
        ]
      },
      {
        name: "Vectorworks",
        description: "（专业二维/三维设计与BIM软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Vectorworks2023",
            links: [
              { pan: "baidu", code: "1gll8sbyXZIKkKBuh4S2e6g", key: "6666" },
              { pan: "quark", code: "c2b05f10ec09" },
              { pan: "unknown", code: "270" }
            ]
          },
          {
            name: "Vectorworks2022",
            links: [
              { pan: "baidu", code: "1NFD5V03dtFpvuhhjXPUsJw", key: "6666" },
              { pan: "quark", code: "1ab70032521a" },
              { pan: "unknown", code: "269" }
            ]
          },
          {
            name: "Vectorworks2021",
            links: [
              { pan: "baidu", code: "1j5A1L5l9tD3nCfLVWJiv0w", key: "6666" },
              { pan: "quark", code: "56e6cd5a4a51" },
              { pan: "unknown", code: "268" }
            ]
          },
          {
            name: "Vectorworks2020",
            links: [
              { pan: "baidu", code: "1ntSG_yy3Vbl9najeuWUXMA", key: "6666" },
              { pan: "quark", code: "b862926e609e" },
              { pan: "unknown", code: "267" }
            ]
          },
          {
            name: "Vectorworks2019",
            links: [
              { pan: "baidu", code: "12Gk03YzPq3ar5EO4S8Am2A", key: "6666" },
              { pan: "quark", code: "bb96f76fb196" },
              { pan: "unknown", code: "266" }
            ]
          },
          {
            name: "Vectorworks2014",
            links: [
              { pan: "baidu", code: "1_iyIO0L9HwY52DBacL8fvg", key: "6666" },
              { pan: "quark", code: "38c3903346a4" },
              { pan: "unknown", code: "265" }
            ]
          },
        ]
      },
    ]
  },
  {
    panelId: "down-17",
    panelName: "机械设计",
    categories: [
      {
        name: "CATIA Composer",
        description: "（技术文档与可视化工具）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "CATIA Composer R2024",
            shixiao: "true",
            links: []
          },
          {
            name: "CATIA Composer R2023",
            shixiao: "true",
            links: []
          },
          {
            name: "CATIA Composer R2022",
            shixiao: "true",
            links: []
          },
          {
            name: "CATIA Composer R2021",
            shixiao: "true",
            links: []
          },
          {
            name: "CATIA Composer R2020",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Catia",
        description: "（高端三维设计与工程软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Catia P3 V5-6R2020",
            shixiao: "true",
            links: []
          },
          {
            name: "Catia P3 V5-6R2019",
            shixiao: "true",
            links: []
          },
          {
            name: "Catia P3 V5-6R2017",
            shixiao: "true",
            links: []
          },
          {
            name: "Catia P3 V5-6R2016",
            shixiao: "true",
            links: []
          },
          {
            name: "Catia P3 V5-6R2015",
            shixiao: "true",
            links: []
          },
          {
            name: "Catia V5-R20",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Creo Parametric",
        description: "（专业3D CAD/CAM/CAE一体化设计软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Creo 10.0",
            shixiao: "true",
            links: []
          },
          {
            name: "Creo 9.0",
            shixiao: "true",
            links: []
          },
          {
            name: "Creo 8.0",
            shixiao: "true",
            links: []
          },
          {
            name: "Creo 7.0",
            shixiao: "true",
            links: []
          },
          {
            name: "Creo 6.0",
            shixiao: "true",
            links: []
          },
          {
            name: "Creo 5.0",
            shixiao: "true",
            links: []
          },
          {
            name: "Creo 4.0",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Inventor",
        description: "（专业3D、CAD设计与工程软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Inventor2025",
            shixiao: "true",
            links: []
          },
          {
            name: "Inventor2024",
            shixiao: "true",
            links: []
          },
          {
            name: "Inventor2023",
            shixiao: "true",
            links: []
          },
          {
            name: "Inventor2022",
            shixiao: "true",
            links: []
          },
          {
            name: "Inventor2021",
            shixiao: "true",
            links: []
          },
          {
            name: "Inventor2020",
            shixiao: "true",
            links: []
          },
          {
            name: "Inventor2019",
            shixiao: "true",
            links: []
          },
          {
            name: "Inventor2018",
            shixiao: "true",
            links: []
          },
          {
            name: "Inventor2015",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Mastercam",
        description: "（数控编程与加工软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Mastercam2025",
            shixiao: "true",
            links: []
          },
          {
            name: "Mastercam2024",
            shixiao: "true",
            links: []
          },
          {
            name: "Mastercam2023",
            shixiao: "true",
            links: []
          },
          {
            name: "Mastercam2022",
            shixiao: "true",
            links: []
          },
          {
            name: "Mastercam2021",
            shixiao: "true",
            links: []
          },
          {
            name: "Mastercam2020",
            shixiao: "true",
            links: []
          },
          {
            name: "Mastercam2019",
            shixiao: "true",
            links: []
          },
          {
            name: "Mastercam2018",
            shixiao: "true",
            links: []
          },
          {
            name: "Mastercam2017",
            shixiao: "true",
            links: []
          },
          {
            name: "MastercamX9",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Powermill",
        description: "（高效数控加工软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Powermill2024",
            shixiao: "true",
            links: []
          },
          {
            name: "Powermill2023",
            shixiao: "true",
            links: []
          },
          {
            name: "Powermill2022",
            shixiao: "true",
            links: []
          },
          {
            name: "Powermill2021",
            shixiao: "true",
            links: []
          },
          {
            name: "Powermill2020",
            shixiao: "true",
            links: []
          },
          {
            name: "Powermill2019",
            shixiao: "true",
            links: []
          },
          {
            name: "Powermill2018",
            shixiao: "true",
            links: []
          },
          {
            name: "Powermill2017",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Pro Engineer",
        description: "（集成化CAD/CAM/CAE软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Proe5.0M280",
            shixiao: "true",
            links: []
          },
          {
            name: "Proe5.0",
            shixiao: "true",
            links: []
          },
          {
            name: "Proe4.0",
            shixiao: "true",
            links: []
          },
          {
            name: "Proe3.0",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Rhinoceros",
        description: "（自由曲面建模与设计软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Rhinoceros 8.5",
            shixiao: "true",
            links: []
          },
          {
            name: "Rhinoceros 8.1",
            shixiao: "true",
            links: []
          },
          {
            name: "Rhinoceros 7.4",
            shixiao: "true",
            links: []
          },
          {
            name: "Rhinoceros 7.33",
            shixiao: "true",
            links: []
          },
          {
            name: "Rhinoceros 7.0",
            shixiao: "true",
            links: []
          },
          {
            name: "Rhinoceros 6.25",
            shixiao: "true",
            links: []
          },
          {
            name: "Rhinoceros 6.23",
            shixiao: "true",
            links: []
          },
          {
            name: "Rhinoceros 6.21",
            shixiao: "true",
            links: []
          },
          {
            name: "Rhinoceros 6.9",
            shixiao: "true",
            links: []
          },
          {
            name: "Rhinoceros 5.14",
            shixiao: "true",
            links: []
          },
          {
            name: "Rhinoceros 5.0",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Solid Edge",
        description: "（3D、CAD设计与数据管理软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Solid Edge2024",
            shixiao: "true",
            links: []
          },
          {
            name: "Solid Edge2023",
            shixiao: "true",
            links: []
          },
          {
            name: "Solid Edge2022",
            shixiao: "true",
            links: []
          },
          {
            name: "Solid Edge2020",
            shixiao: "true",
            links: []
          },
          {
            name: "Solid Edge2019",
            shixiao: "true",
            links: []
          },
          {
            name: "Solid EdgeST10",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "SolidWorks",
        description: "（3D、CAD设计软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "SolidWorks2024",
            shixiao: "true",
            links: []
          },
          {
            name: "SolidWorks2023",
            shixiao: "true",
            links: []
          },
          {
            name: "SolidWorks2022",
            shixiao: "true",
            links: []
          },
          {
            name: "SolidWorks2021",
            shixiao: "true",
            links: []
          },
          {
            name: "SolidWorks2020",
            shixiao: "true",
            links: []
          },
          {
            name: "SolidWorks2019",
            shixiao: "true",
            links: []
          },
          {
            name: "SolidWorks2018",
            shixiao: "true",
            links: []
          },
          {
            name: "SolidWorks2017",
            shixiao: "true",
            links: []
          },
          {
            name: "SolidWorks2016",
            shixiao: "true",
            links: []
          },
          {
            name: "SolidWorks2015",
            shixiao: "true",
            links: []
          },
          {
            name: "SolidWorks2014",
            shixiao: "true",
            links: []
          },
          {
            name: "SolidWorks2013",
            shixiao: "true",
            links: []
          },
          {
            name: "SolidWorks2012",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Unigraphics NX",
        description: "（高端CAD/CAM/CAE一体化平台）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "UG NX2312",
            shixiao: "true",
            links: []
          },
          {
            name: "UG NX2212",
            shixiao: "true",
            links: []
          },
          {
            name: "UG NX2206",
            shixiao: "true",
            links: []
          },
          {
            name: "UG NX2023",
            shixiao: "true",
            links: []
          },
          {
            name: "UG NX2000",
            shixiao: "true",
            links: []
          },
          {
            name: "UG NX1980",
            shixiao: "true",
            links: []
          },
          {
            name: "UG NX1953",
            shixiao: "true",
            links: []
          },
          {
            name: "UG NX1899",
            shixiao: "true",
            links: []
          },
          {
            name: "UG NX12.0",
            shixiao: "true",
            links: []
          },
          {
            name: "UG NX11.0",
            shixiao: "true",
            links: []
          },
          {
            name: "UG NX10.0",
            shixiao: "true",
            links: []
          },
          {
            name: "UG NX9.0",
            shixiao: "true",
            links: []
          },
        ]
      },
    ]
  },
  {
    panelId: "down-18",
    panelName: "电子电路",
    categories: [
      {
        name: "Altium Designer",
        description: "（专业PCB设计与电子设计自动化软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Altium Designer 24",
            links: [
              { pan: "baidu", code: "1vW324NwHOj8kHp80TAgmNw", key: "6666" },
              { pan: "quark", code: "c47a3d1fa4d7" },
              { pan: "unknown", code: "368" }
            ]
          },
          {
            name: "Altium Designer 23",
            links: [
              { pan: "baidu", code: "1jc3hJKT6RStWSdrHFxspVQ", key: "6666" },
              { pan: "quark", code: "da0cdbd88d6d" },
              { pan: "unknown", code: "367" }
            ]
          },
          {
            name: "Altium Designer 22",
            links: [
              { pan: "baidu", code: "1AT3EeElpp1ruRFGvK8pG_g", key: "6666" },
              { pan: "quark", code: "c4d000e25826" },
              { pan: "unknown", code: "366" }
            ]
          },
          {
            name: "Altium Designer 21",
            links: [
              { pan: "baidu", code: "1wn-pevmYxSfD_pkQFfZlbg", key: "6666" },
              { pan: "quark", code: "273be9809247" },
              { pan: "unknown", code: "365" }
            ]
          },
          {
            name: "Altium Designer 20",
            links: [
              { pan: "baidu", code: "1YAE_XykVYdoWFim1wf8_ww", key: "6666" },
              { pan: "quark", code: "e90dab323251" },
              { pan: "unknown", code: "364" }
            ]
          },
          {
            name: "Altium Designer 19",
            links: [
              { pan: "baidu", code: "1YRjTNmw3AF1T0eCfGpK3IA", key: "6666" },
              { pan: "quark", code: "12e56ac7baff" },
              { pan: "unknown", code: "363" }
            ]
          },
          {
            name: "Altium Designer 18",
            links: [
              { pan: "baidu", code: "1C1ojjhMiJlQaUXYXJoGdsQ", key: "6666" },
              { pan: "quark", code: "9fa028e88152" },
              { pan: "unknown", code: "362" }
            ]
          },
          {
            name: "Altium Designer 17",
            links: [
              { pan: "baidu", code: "1VOIveLSEGYP-Jwz0r50HWQ", key: "6666" },
              { pan: "quark", code: "ed3f375cb39a" },
              { pan: "unknown", code: "361" }
            ]
          },
          {
            name: "Altium Designer 16",
            links: [
              { pan: "baidu", code: "1LWskeDuOOU3UFhXIihEeXw", key: "6666" },
              { pan: "quark", code: "233f4e88503b" },
              { pan: "unknown", code: "360" }
            ]
          },
          {
            name: "Altium Designer 15",
            links: [
              { pan: "baidu", code: "1XdFVkUAQv5HGav12T--Kpg", key: "6666" },
              { pan: "quark", code: "757b95a484df" },
              { pan: "unknown", code: "359" }
            ]
          },
        ]
      },
      {
        name: "EPLAN Electric P8",
        description: "（电气工程与电气原理图设计软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "EPLAN Electric 2024",
            links: [
              { pan: "baidu", code: "1gi3XE8g7I8xLodhqwfB-FQ", key: "6666" },
              { pan: "quark", code: "bfa3f493fa8e" },
              { pan: "unknown", code: "375" }
            ]
          },
          {
            name: "EPLAN Electric 2023",
            links: [
              { pan: "baidu", code: "139snyeEZ0N3hCPVVoKmkxg", key: "6666" },
              { pan: "quark", code: "fc20aac4c13f" },
              { pan: "unknown", code: "374" }
            ]
          },
          {
            name: "EPLAN Electric 2022",
            links: [
              { pan: "baidu", code: "1tLwulIhqIx2R6DcWRxiDrg", key: "6666" },
              { pan: "quark", code: "6d02d58593d6" },
              { pan: "unknown", code: "373" }
            ]
          },
          {
            name: "eplan2.9",
            links: [
              { pan: "baidu", code: "1eTI8Oz2XzCKpKymtmZ5XEg", key: "6666" },
              { pan: "quark", code: "f43569fcb7fc" },
              { pan: "unknown", code: "372" }
            ]
          },
          {
            name: "eplan2.7",
            links: [
              { pan: "baidu", code: "11Xyn5jMEbAvP-L_EKnH_tw", key: "6666" },
              { pan: "quark", code: "a0979c301af2" },
              { pan: "unknown", code: "371" }
            ]
          },
          {
            name: "eplan2.6",
            links: [
              { pan: "baidu", code: "1-XlMldkfQP2rZpzb8Oi0uw", key: "6666" },
              { pan: "quark", code: "b3f59462fe45" },
              { pan: "unknown", code: "370" }
            ]
          },
          {
            name: "eplan2.5",
            links: [
              { pan: "baidu", code: "17Z7xIUPIrleUnr-rjkAsVQ", key: "6666" },
              { pan: "quark", code: "7bd988f16032" },
              { pan: "unknown", code: "369" }
            ]
          },
        ]
      },
      {
        name: "Multisim",
        description: "（电子电路设计与仿真软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Multisim14.3",
            links: [
              { pan: "baidu", code: "1nRINpGXonS8aIkoxsK67Lw", key: "6666" },
              { pan: "quark", code: "1f922a65e55a" },
              { pan: "unknown", code: "379" }
            ]
          },
          {
            name: "Multisim14.0",
            links: [
              { pan: "baidu", code: "1H7ObOXGsbMQVyvOdEYtRPQ", key: "6666" },
              { pan: "quark", code: "83ef4d514c2c" },
              { pan: "unknown", code: "378" }
            ]
          },
          {
            name: "Multisim13.0",
            links: [
              { pan: "baidu", code: "1mlVQRMZkBBSLgtxU8Rp3lQ", key: "6666" },
              { pan: "quark", code: "00a619305185" },
              { pan: "unknown", code: "377" }
            ]
          },
          {
            name: "Multisim12.0",
            links: [
              { pan: "baidu", code: "1luzmCoTxvXZsN9CzSgbdlg", key: "6666" },
              { pan: "quark", code: "16ecb7526fbc" },
              { pan: "unknown", code: "376" }
            ]
          },
        ]
      },
      {
        name: "Proteus",
        description: "（电路仿真与PCB设计一体化工具）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Proteus 8.9",
            links: [
              { pan: "baidu", code: "1P6IZNuO8pIwpLYjITo5mQQ", key: "6666" },
              { pan: "quark", code: "21bbf6599006" },
              { pan: "unknown", code: "382" }
            ]
          },
          {
            name: "Proteus 8.6",
            links: [
              { pan: "baidu", code: "1TAneSv34JqKhFyfE7zH-4w", key: "6666" },
              { pan: "quark", code: "3f648cae7ead" },
              { pan: "unknown", code: "381" }
            ]
          },
          {
            name: "Proteus 8.17",
            links: [
              { pan: "baidu", code: "1WHyJ3C6pps0gvUfvqoyalg", key: "6666" },
              { pan: "quark", code: "6cc0f361a9b1" },
              { pan: "unknown", code: "385" }
            ]
          },
          {
            name: "Proteus 8.15",
            links: [
              { pan: "baidu", code: "1LIlEsOyB4IYudwop3-IIuQ", key: "6666" },
              { pan: "quark", code: "10bf4817dfda" },
              { pan: "unknown", code: "384" }
            ]
          },
          {
            name: "Proteus 8.13",
            links: [
              { pan: "baidu", code: "13ok6kMVtZ1itGKyNIUNbNQ", key: "6666" },
              { pan: "quark", code: "68e86ab8707a" },
              { pan: "unknown", code: "383" }
            ]
          },
          {
            name: "Proteus 7.8",
            links: [
              { pan: "baidu", code: "1v_eE-rBe3HSzkIegFU9M7g", key: "6666" },
              { pan: "quark", code: "d67da4956eb0" },
              { pan: "unknown", code: "380" }
            ]
          },
        ]
      },
    ]
  },
  {
    panelId: "down-19",
    panelName: "数据分析",
    categories: [
      {
        name: "MatLab",
        description: "（数值计算与工程仿真软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "MATLAB 2024a",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2023a",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2023b",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2022a",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2022b",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2021a",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2021b",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2020a",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2020b",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2019a",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2019b",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2018a",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2018b",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2017a",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2017b",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2016a",
            shixiao: "true",
            links: []
          },
          {
            name: "MATLAB R2016b",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Origin",
        description: "（科学绘图与数据分析软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Origin 2022",
            shixiao: "true",
            links: []
          },
          {
            name: "Origin 2021",
            shixiao: "true",
            links: []
          },
          {
            name: "Origin 2019",
            shixiao: "true",
            links: []
          },
          {
            name: "Origin 2018",
            shixiao: "true",
            links: []
          },
          {
            name: "Origin 2017",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "SPSS",
        description: "（统计分析与数据挖掘软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "SPSS 27",
            shixiao: "true",
            links: []
          },
          {
            name: "SPSS 26",
            shixiao: "true",
            links: []
          },
          {
            name: "SPSS 25",
            shixiao: "true",
            links: []
          },
          {
            name: "SPSS 24",
            shixiao: "true",
            links: []
          },
          {
            name: "SPSS 23",
            shixiao: "true",
            links: []
          },
          {
            name: "SPSS 22",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Stata",
        description: "（统计分析与数据管理软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Stata18",
            shixiao: "true",
            links: []
          },
          {
            name: "Stata17",
            shixiao: "true",
            links: []
          },
          {
            name: "Stata16",
            shixiao: "true",
            links: []
          },
          {
            name: "Stata14",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Mathematica",
        description: "（符号计算与科学计算软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Mathematica 14",
            shixiao: "true",
            links: []
          },
          {
            name: "Mathematica 13",
            shixiao: "true",
            links: []
          },
          {
            name: "Mathematica 12",
            shixiao: "true",
            links: []
          },
          {
            name: "Mathematica 11.3",
            shixiao: "true",
            links: []
          },
          {
            name: "Mathematica 10.3",
            shixiao: "true",
            links: []
          },
          {
            name: "Mathematica 9.0",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Tableau",
        description: "（数据可视化与商业智能软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Tableau2023",
            shixiao: "true",
            links: []
          },
          {
            name: "Tableau2021",
            shixiao: "true",
            links: []
          },
          {
            name: "Tableau2020",
            shixiao: "true",
            links: []
          },
          {
            name: "Tableau2019",
            shixiao: "true",
            links: []
          },
          {
            name: "Tableau2018",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Amos",
        description: "（结构方程模型分析软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Amos28",
            shixiao: "true",
            links: []
          },
          {
            name: "Amos26",
            shixiao: "true",
            links: []
          },
          {
            name: "Amos24",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Mplus",
        description: "（统计建模与数据分析软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Mplus8.7",
            shixiao: "true",
            links: []
          },
          {
            name: "Mplus7.4",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Minitab",
        description: "（统计分析与质量改进软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Minitab 22",
            shixiao: "true",
            links: []
          },
          {
            name: "Minitab 21",
            shixiao: "true",
            links: []
          },
          {
            name: "Minitab 20",
            shixiao: "true",
            links: []
          },
          {
            name: "Minitab19",
            shixiao: "true",
            links: []
          },
          {
            name: "Minitab18",
            shixiao: "true",
            links: []
          },
          {
            name: "Minitab17",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Lingo",
        description: "（运筹学与优化建模软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Lingo 18",
            shixiao: "true",
            links: []
          },
          {
            name: "Lingo 17",
            shixiao: "true",
            links: []
          },
          {
            name: "Lingo 12",
            shixiao: "true",
            links: []
          },
          {
            name: "Lingo 11",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Maple",
        description: "（符号计算与数学建模软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Maple 2024",
            shixiao: "true",
            links: []
          },
          {
            name: "Maple 2023",
            shixiao: "true",
            links: []
          },
          {
            name: "Maple 2022",
            shixiao: "true",
            links: []
          },
          {
            name: "Maple 2021",
            shixiao: "true",
            links: []
          },
          {
            name: "Maple 2020",
            shixiao: "true",
            links: []
          },
          {
            name: "Maple 2019",
            shixiao: "true",
            links: []
          },
          {
            name: "Maple 2018",
            shixiao: "true",
            links: []
          },
          {
            name: "Maple 2017",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Cytoscape",
        description: "（生物分子网络可视化与分析工具）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "Cytoscape3.10",
            shixiao: "true",
            links: []
          },
          {
            name: "Cytoscape3.7.1",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "Eviews",
        description: "（计量经济学与时间序列分析软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "EViews 13.0",
            shixiao: "true",
            links: []
          },
          {
            name: "EViews 12.0",
            shixiao: "true",
            links: []
          },
          {
            name: "EViews 11.0",
            shixiao: "true",
            links: []
          },
          {
            name: "EViews 10.0",
            shixiao: "true",
            links: []
          },
          {
            name: "EViews 9.0",
            shixiao: "true",
            links: []
          },
          {
            name: "EViews 8.0",
            shixiao: "true",
            links: []
          },
        ]
      },
      {
        name: "NCSS",
        description: "（统计分析与图形绘制软件）",
        icon: "/assets/img/ruan.png",
        versions: [
          {
            name: "NCSS2023",
            shixiao: "true",
            links: []
          },
          {
            name: "NCSS2021",
            shixiao: "true",
            links: []
          },
        ]
      },
    ]
  },
];

export default PANEL_DATA;
