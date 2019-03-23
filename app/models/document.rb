class Document < ApplicationRecord
  has_rich_text :content
  serialize :value, JSON
end
