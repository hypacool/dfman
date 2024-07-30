export default {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "object",
    "properties": {
      "codeblocks": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "identifier": {
              "type": "string"
            },
            "item": {
              "type": "object",
              "properties": {
                "material": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "deprecatedNote": {
                  "type": "array",
                  "items": {}
                },
                "description": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "example": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "worksWith": {
                  "type": "array",
                  "items": {}
                },
                "additionalInfo": {
                  "type": "array",
                  "items": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                },
                "requiredRank": {
                  "type": "string"
                },
                "requireTokens": {
                  "type": "boolean"
                },
                "requireRankAndTokens": {
                  "type": "boolean"
                },
                "advanced": {
                  "type": "boolean"
                },
                "loadedItem": {
                  "type": "string"
                }
              },
              "required": [
                "material",
                "name",
                "deprecatedNote",
                "description",
                "example",
                "worksWith",
                "additionalInfo",
                "requiredRank",
                "requireTokens",
                "requireRankAndTokens",
                "advanced",
                "loadedItem"
              ]
            }
          },
          "required": [
            "name",
            "identifier",
            "item"
          ]
        }
      },
      "actions": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "codeblockName": {
              "type": "string"
            },
            "tags": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  },
                  "options": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string"
                        },
                        "icon": {
                          "type": "object",
                          "properties": {
                            "material": {
                              "type": "string"
                            },
                            "name": {
                              "type": "string"
                            },
                            "deprecatedNote": {
                              "type": "array",
                              "items": {}
                            },
                            "description": {
                              "type": "array",
                              "items": {
                                "type": "string"
                              }
                            },
                            "example": {
                              "type": "array",
                              "items": {}
                            },
                            "worksWith": {
                              "type": "array",
                              "items": {}
                            },
                            "additionalInfo": {
                              "type": "array",
                              "items": {
                                "type": "array",
                                "items": {
                                  "type": "string"
                                }
                              }
                            },
                            "requiredRank": {
                              "type": "string"
                            },
                            "requireTokens": {
                              "type": "boolean"
                            },
                            "requireRankAndTokens": {
                              "type": "boolean"
                            },
                            "advanced": {
                              "type": "boolean"
                            },
                            "loadedItem": {
                              "type": "string"
                            },
                            "head": {
                              "type": "string"
                            },
                            "color": {
                              "type": "object",
                              "properties": {
                                "red": {
                                  "type": "number"
                                },
                                "green": {
                                  "type": "number"
                                },
                                "blue": {
                                  "type": "number"
                                }
                              },
                              "required": [
                                "red",
                                "green",
                                "blue"
                              ]
                            }
                          },
                          "required": [
                            "material",
                            "name",
                            "deprecatedNote",
                            "description",
                            "example",
                            "worksWith",
                            "additionalInfo",
                            "requiredRank",
                            "requireTokens",
                            "requireRankAndTokens",
                            "advanced",
                            "loadedItem"
                          ]
                        },
                        "aliases": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        }
                      },
                      "required": [
                        "name",
                        "icon",
                        "aliases"
                      ]
                    }
                  },
                  "defaultOption": {
                    "type": "string"
                  },
                  "slot": {
                    "type": "number"
                  }
                },
                "required": [
                  "name",
                  "options",
                  "defaultOption",
                  "slot"
                ]
              }
            },
            "aliases": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "icon": {
              "type": "object",
              "properties": {
                "material": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "deprecatedNote": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "description": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "example": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "worksWith": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "additionalInfo": {
                  "type": "array",
                  "items": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                },
                "requiredRank": {
                  "type": "string"
                },
                "requireTokens": {
                  "type": "boolean"
                },
                "requireRankAndTokens": {
                  "type": "boolean"
                },
                "advanced": {
                  "type": "boolean"
                },
                "loadedItem": {
                  "type": "string"
                },
                "tags": {
                  "type": "number"
                },
                "arguments": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "string"
                      },
                      "plural": {
                        "type": "boolean"
                      },
                      "optional": {
                        "type": "boolean"
                      },
                      "description": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "notes": {
                        "type": "array",
                        "items": {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        }
                      },
                      "text": {
                        "type": "string"
                      }
                    },
                    "required": []
                  }
                },
                "returnValues": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "string"
                      },
                      "description": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "text": {
                        "type": "string"
                      }
                    },
                    "required": []
                  }
                },
                "head": {
                  "type": "string"
                },
                "color": {
                  "type": "object",
                  "properties": {
                    "red": {
                      "type": "number"
                    },
                    "green": {
                      "type": "number"
                    },
                    "blue": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "red",
                    "green",
                    "blue"
                  ]
                },
                "cancellable": {
                  "type": "boolean"
                },
                "cancelledAutomatically": {
                  "type": "boolean"
                }
              },
              "required": [
                "material",
                "name",
                "deprecatedNote",
                "description",
                "example",
                "worksWith",
                "additionalInfo",
                "requiredRank",
                "requireTokens",
                "requireRankAndTokens",
                "advanced",
                "loadedItem"
              ]
            },
            "subActionBlocks": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "name",
            "codeblockName",
            "tags",
            "aliases",
            "icon"
          ]
        }
      },
      "gameValueCategories": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "identifier": {
              "type": "string"
            },
            "guiSlot": {
              "type": "number"
            },
            "icon": {
              "type": "object",
              "properties": {
                "material": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "deprecatedNote": {
                  "type": "array",
                  "items": {}
                },
                "description": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "example": {
                  "type": "array",
                  "items": {}
                },
                "worksWith": {
                  "type": "array",
                  "items": {}
                },
                "additionalInfo": {
                  "type": "array",
                  "items": {}
                },
                "requiredRank": {
                  "type": "string"
                },
                "requireTokens": {
                  "type": "boolean"
                },
                "requireRankAndTokens": {
                  "type": "boolean"
                },
                "advanced": {
                  "type": "boolean"
                },
                "loadedItem": {
                  "type": "string"
                }
              },
              "required": [
                "material",
                "name",
                "deprecatedNote",
                "description",
                "example",
                "worksWith",
                "additionalInfo",
                "requiredRank",
                "requireTokens",
                "requireRankAndTokens",
                "advanced",
                "loadedItem"
              ]
            }
          },
          "required": [
            "identifier",
            "guiSlot",
            "icon"
          ]
        }
      },
      "gameValues": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "aliases": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "category": {
              "type": "string"
            },
            "icon": {
              "type": "object",
              "properties": {
                "material": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "deprecatedNote": {
                  "type": "array",
                  "items": {}
                },
                "description": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "example": {
                  "type": "array",
                  "items": {}
                },
                "worksWith": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "additionalInfo": {
                  "type": "array",
                  "items": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                },
                "requiredRank": {
                  "type": "string"
                },
                "requireTokens": {
                  "type": "boolean"
                },
                "requireRankAndTokens": {
                  "type": "boolean"
                },
                "advanced": {
                  "type": "boolean"
                },
                "loadedItem": {
                  "type": "string"
                },
                "returnType": {
                  "type": "string"
                },
                "returnDescription": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "color": {
                  "type": "object",
                  "properties": {
                    "red": {
                      "type": "number"
                    },
                    "green": {
                      "type": "number"
                    },
                    "blue": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "red",
                    "green",
                    "blue"
                  ]
                },
                "head": {
                  "type": "string"
                }
              },
              "required": [
                "material",
                "name",
                "deprecatedNote",
                "description",
                "example",
                "worksWith",
                "additionalInfo",
                "requiredRank",
                "requireTokens",
                "requireRankAndTokens",
                "advanced",
                "loadedItem",
                "returnType",
                "returnDescription"
              ]
            }
          },
          "required": [
            "aliases",
            "category",
            "icon"
          ]
        }
      },
      "particleCategories": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "particle": {
              "type": "string"
            },
            "icon": {
              "type": "object",
              "properties": {
                "material": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "color": {
                  "type": "object",
                  "properties": {
                    "red": {
                      "type": "number"
                    },
                    "green": {
                      "type": "number"
                    },
                    "blue": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "red",
                    "green",
                    "blue"
                  ]
                },
                "deprecatedNote": {
                  "type": "array",
                  "items": {}
                },
                "description": {
                  "type": "array",
                  "items": {}
                },
                "example": {
                  "type": "array",
                  "items": {}
                },
                "worksWith": {
                  "type": "array",
                  "items": {}
                },
                "additionalInfo": {
                  "type": "array",
                  "items": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                },
                "requiredRank": {
                  "type": "string"
                },
                "requireTokens": {
                  "type": "boolean"
                },
                "requireRankAndTokens": {
                  "type": "boolean"
                },
                "advanced": {
                  "type": "boolean"
                },
                "loadedItem": {
                  "type": "string"
                },
                "head": {
                  "type": "string"
                }
              },
              "required": [
                "material",
                "name",
                "deprecatedNote",
                "description",
                "example",
                "worksWith",
                "additionalInfo",
                "requiredRank",
                "requireTokens",
                "requireRankAndTokens",
                "advanced",
                "loadedItem"
              ]
            },
            "category": {
              "type": "string"
            },
            "fields": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "particle",
            "icon",
            "fields"
          ]
        }
      },
      "particles": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "particle": {
              "type": "string"
            },
            "icon": {
              "type": "object",
              "properties": {
                "material": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "color": {
                  "type": "object",
                  "properties": {
                    "red": {
                      "type": "number"
                    },
                    "green": {
                      "type": "number"
                    },
                    "blue": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "red",
                    "green",
                    "blue"
                  ]
                },
                "deprecatedNote": {
                  "type": "array",
                  "items": {}
                },
                "description": {
                  "type": "array",
                  "items": {}
                },
                "example": {
                  "type": "array",
                  "items": {}
                },
                "worksWith": {
                  "type": "array",
                  "items": {}
                },
                "additionalInfo": {
                  "type": "array",
                  "items": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                },
                "requiredRank": {
                  "type": "string"
                },
                "requireTokens": {
                  "type": "boolean"
                },
                "requireRankAndTokens": {
                  "type": "boolean"
                },
                "advanced": {
                  "type": "boolean"
                },
                "loadedItem": {
                  "type": "string"
                },
                "head": {
                  "type": "string"
                }
              },
              "required": [
                "material",
                "name",
                "deprecatedNote",
                "description",
                "example",
                "worksWith",
                "additionalInfo",
                "requiredRank",
                "requireTokens",
                "requireRankAndTokens",
                "advanced",
                "loadedItem"
              ]
            },
            "category": {
              "type": "string"
            },
            "fields": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "particle",
            "icon",
            "fields"
          ]
        }
      },
      "soundCategories": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "identifier": {
              "type": "string"
            },
            "icon": {
              "type": "object",
              "properties": {
                "material": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "head": {
                  "type": "string"
                },
                "deprecatedNote": {
                  "type": "array",
                  "items": {}
                },
                "description": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "example": {
                  "type": "array",
                  "items": {}
                },
                "worksWith": {
                  "type": "array",
                  "items": {}
                },
                "additionalInfo": {
                  "type": "array",
                  "items": {}
                },
                "requiredRank": {
                  "type": "string"
                },
                "requireTokens": {
                  "type": "boolean"
                },
                "requireRankAndTokens": {
                  "type": "boolean"
                },
                "advanced": {
                  "type": "boolean"
                },
                "loadedItem": {
                  "type": "string"
                }
              },
              "required": [
                "material",
                "name",
                "deprecatedNote",
                "description",
                "example",
                "worksWith",
                "additionalInfo",
                "requiredRank",
                "requireTokens",
                "requireRankAndTokens",
                "advanced",
                "loadedItem"
              ]
            },
            "hasSubCategories": {
              "type": "boolean"
            }
          },
          "required": [
            "identifier",
            "icon",
            "hasSubCategories"
          ]
        }
      },
      "sounds": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "sound": {
              "type": "string"
            },
            "icon": {
              "type": "object",
              "properties": {
                "material": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "deprecatedNote": {
                  "type": "array",
                  "items": {}
                },
                "description": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "example": {
                  "type": "array",
                  "items": {}
                },
                "worksWith": {
                  "type": "array",
                  "items": {}
                },
                "additionalInfo": {
                  "type": "array",
                  "items": {}
                },
                "requiredRank": {
                  "type": "string"
                },
                "requireTokens": {
                  "type": "boolean"
                },
                "requireRankAndTokens": {
                  "type": "boolean"
                },
                "advanced": {
                  "type": "boolean"
                },
                "loadedItem": {
                  "type": "string"
                },
                "head": {
                  "type": "string"
                },
                "color": {
                  "type": "object",
                  "properties": {
                    "red": {
                      "type": "number"
                    },
                    "green": {
                      "type": "number"
                    },
                    "blue": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "red",
                    "green",
                    "blue"
                  ]
                }
              },
              "required": [
                "material",
                "name",
                "deprecatedNote",
                "description",
                "example",
                "worksWith",
                "additionalInfo",
                "requiredRank",
                "requireTokens",
                "requireRankAndTokens",
                "advanced",
                "loadedItem"
              ]
            }
          },
          "required": [
            "sound",
            "icon"
          ]
        }
      },
      "potions": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "potion": {
              "type": "string"
            },
            "icon": {
              "type": "object",
              "properties": {
                "material": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "color": {
                  "type": "object",
                  "properties": {
                    "red": {
                      "type": "number"
                    },
                    "green": {
                      "type": "number"
                    },
                    "blue": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "red",
                    "green",
                    "blue"
                  ]
                },
                "deprecatedNote": {
                  "type": "array",
                  "items": {}
                },
                "description": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "example": {
                  "type": "array",
                  "items": {}
                },
                "worksWith": {
                  "type": "array",
                  "items": {}
                },
                "additionalInfo": {
                  "type": "array",
                  "items": {}
                },
                "requiredRank": {
                  "type": "string"
                },
                "requireTokens": {
                  "type": "boolean"
                },
                "requireRankAndTokens": {
                  "type": "boolean"
                },
                "advanced": {
                  "type": "boolean"
                },
                "loadedItem": {
                  "type": "string"
                }
              },
              "required": [
                "material",
                "name",
                "color",
                "deprecatedNote",
                "description",
                "example",
                "worksWith",
                "additionalInfo",
                "requiredRank",
                "requireTokens",
                "requireRankAndTokens",
                "advanced",
                "loadedItem"
              ]
            }
          },
          "required": [
            "potion",
            "icon"
          ]
        }
      },
      "cosmetics": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "icon": {
              "type": "object",
              "properties": {
                "material": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "head": {
                  "type": "string"
                },
                "deprecatedNote": {
                  "type": "array",
                  "items": {}
                },
                "description": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "example": {
                  "type": "array",
                  "items": {}
                },
                "worksWith": {
                  "type": "array",
                  "items": {}
                },
                "additionalInfo": {
                  "type": "array",
                  "items": {}
                },
                "requiredRank": {
                  "type": "string"
                },
                "requireTokens": {
                  "type": "boolean"
                },
                "requireRankAndTokens": {
                  "type": "boolean"
                },
                "advanced": {
                  "type": "boolean"
                },
                "loadedItem": {
                  "type": "string"
                }
              },
              "required": [
                "material",
                "name",
                "deprecatedNote",
                "description",
                "example",
                "worksWith",
                "additionalInfo",
                "requiredRank",
                "requireTokens",
                "requireRankAndTokens",
                "advanced",
                "loadedItem"
              ]
            },
            "name": {
              "type": "string"
            },
            "category": {
              "type": "object",
              "properties": {},
              "required": []
            }
          },
          "required": [
            "id",
            "icon",
            "name",
            "category"
          ]
        }
      },
      "shops": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "slot": {
              "type": "number"
            },
            "name": {
              "type": "string"
            },
            "icon": {
              "type": "object",
              "properties": {
                "material": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "deprecatedNote": {
                  "type": "array",
                  "items": {}
                },
                "description": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "example": {
                  "type": "array",
                  "items": {}
                },
                "worksWith": {
                  "type": "array",
                  "items": {}
                },
                "additionalInfo": {
                  "type": "array",
                  "items": {}
                },
                "requiredRank": {
                  "type": "string"
                },
                "requireTokens": {
                  "type": "boolean"
                },
                "requireRankAndTokens": {
                  "type": "boolean"
                },
                "advanced": {
                  "type": "boolean"
                },
                "loadedItem": {
                  "type": "string"
                }
              },
              "required": [
                "material",
                "name",
                "deprecatedNote",
                "description",
                "example",
                "worksWith",
                "additionalInfo",
                "requiredRank",
                "requireTokens",
                "requireRankAndTokens",
                "advanced",
                "loadedItem"
              ]
            },
            "purchasables": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "item": {
                    "type": "object",
                    "properties": {
                      "material": {
                        "type": "string"
                      },
                      "name": {
                        "type": "string"
                      },
                      "head": {
                        "type": "string"
                      },
                      "deprecatedNote": {
                        "type": "array",
                        "items": {}
                      },
                      "description": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "example": {
                        "type": "array",
                        "items": {}
                      },
                      "worksWith": {
                        "type": "array",
                        "items": {}
                      },
                      "additionalInfo": {
                        "type": "array",
                        "items": {}
                      },
                      "requiredRank": {
                        "type": "string"
                      },
                      "requireTokens": {
                        "type": "boolean"
                      },
                      "requireRankAndTokens": {
                        "type": "boolean"
                      },
                      "advanced": {
                        "type": "boolean"
                      },
                      "loadedItem": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "material",
                      "name",
                      "deprecatedNote",
                      "description",
                      "example",
                      "worksWith",
                      "additionalInfo",
                      "requiredRank",
                      "requireTokens",
                      "requireRankAndTokens",
                      "advanced",
                      "loadedItem"
                    ]
                  },
                  "id": {
                    "type": "string"
                  },
                  "price": {
                    "type": "number"
                  },
                  "currencyType": {
                    "type": "string"
                  },
                  "oneTimePurchase": {
                    "type": "boolean"
                  }
                },
                "required": [
                  "item"
                ]
              }
            }
          },
          "required": [
            "id",
            "purchasables"
          ]
        }
      }
    },
    "required": [
      "codeblocks",
      "actions",
      "gameValueCategories",
      "gameValues",
      "particleCategories",
      "particles",
      "soundCategories",
      "sounds",
      "potions",
      "cosmetics",
      "shops"
    ]
  } as const