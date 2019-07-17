class TeamSerializer < ActiveModel::Serializer
  attributes :id,:name,:private,:users,:collection
end
